// PediCode — data/ai.js  v2.0
// Módulo IA: asistente clínico pediátrico mejorado
// Mejoras: calidad clínica · aprendizaje por feedback · integración OpenEvidence

// ── CONFIGURACIÓN ──────────────────────────────────────────────────────
export const AI_WORKER_URL = 'https://pedicodeapp.pedicode-app.workers.dev';

// ── INDEXEDDB: APRENDIZAJE CLÍNICO ─────────────────────────────────────
const DB_NAME = 'pedicode_ai';
const DB_VERSION = 1;
let _db = null;

function openDB() {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('cases')) {
        const store = db.createObjectStore('cases', { keyPath: 'id', autoIncrement: true });
        store.createIndex('timestamp', 'timestamp');
        store.createIndex('rating', 'rating');
        store.createIndex('lang', 'lang');
      }
    };
    req.onsuccess = e => { _db = e.target.result; resolve(_db); };
    req.onerror = () => reject(req.error);
  });
}

async function logCase(query, result, weight, lang) {
  try {
    const db = await openDB();
    const record = {
      timestamp: Date.now(),
      lang,
      weight,
      queryLength: query.length,
      // Contexto clínico anonimizado (sin datos identificativos)
      riesgoNivel: result?.riesgo?.nivel || null,
      tepApariencia: result?.tep?.apariencia || null,
      tepRespiracion: result?.tep?.respiracion || null,
      tepCirculacion: result?.tep?.circulacion || null,
      farmacoCount: result?.farmacos?.length || 0,
      protocoloCount: result?.protocolos?.length || 0,
      rating: null, // se actualiza con feedback
    };
    return new Promise((resolve, reject) => {
      const tx = db.transaction('cases', 'readwrite');
      const req = tx.objectStore('cases').add(record);
      req.onsuccess = () => resolve(req.result); // devuelve el id
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.warn('[PediCode AI] logCase error:', e);
    return null;
  }
}

async function updateRating(caseId, rating) {
  if (!caseId) return;
  try {
    const db = await openDB();
    const tx = db.transaction('cases', 'readwrite');
    const store = tx.objectStore('cases');
    const req = store.get(caseId);
    req.onsuccess = () => {
      const record = req.result;
      if (record) { record.rating = rating; store.put(record); }
    };
  } catch (e) {
    console.warn('[PediCode AI] updateRating error:', e);
  }
}

export async function aiGetStats() {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction('cases', 'readonly');
      const req = tx.objectStore('cases').getAll();
      req.onsuccess = () => {
        const cases = req.result || [];
        const total = cases.length;
        const rated = cases.filter(c => c.rating !== null);
        const positive = rated.filter(c => c.rating === 1).length;
        const critical = cases.filter(c => c.riesgoNivel === 'CRÍTICO' || c.riesgoNivel === 'CRITICAL').length;
        const byLang = cases.reduce((acc, c) => { acc[c.lang] = (acc[c.lang] || 0) + 1; return acc; }, {});
        resolve({ total, rated: rated.length, positive, negative: rated.length - positive, critical, byLang });
      };
      req.onerror = () => resolve({ total: 0, rated: 0, positive: 0, negative: 0, critical: 0, byLang: {} });
    });
  } catch (e) {
    return { total: 0, rated: 0, positive: 0, negative: 0, critical: 0, byLang: {} };
  }
}

// ── EXTRACCIÓN DE CONTEXTO CLÍNICO ─────────────────────────────────────
// Parsea el texto libre del clínico para enriquecer el contexto enviado al Worker
function extractClinicalContext(text) {
  const ctx = {};

  // Edad
  const ageMatch = text.match(/(\d+(?:[,.]\d+)?)\s*(año[s]?|mes(?:es)?|semana[s]?|year[s]?|month[s]?|week[s]?|ano[s]?|m[eê]s(?:es|es)?)/i);
  if (ageMatch) {
    ctx.edad = ageMatch[0];
    ctx.edadNum = parseFloat(ageMatch[1].replace(',', '.'));
    ctx.edadUnidad = ageMatch[2].toLowerCase();
  }

  // SpO2
  const spo2Match = text.match(/spo[2₂]?\s*[:\s]?\s*(\d{2,3})\s*%?/i);
  if (spo2Match) ctx.spo2 = parseInt(spo2Match[1]);

  // FC / HR
  const hrMatch = text.match(/(?:fc|hr|frecuencia cardíaca|heart rate|freq(?:uência)? cardíaca)[:\s]*(\d{2,3})\s*(?:lpm|bpm|rpm)?/i);
  if (hrMatch) ctx.fc = parseInt(hrMatch[1]);

  // FR / RR
  const rrMatch = text.match(/(?:fr|rr|frecuencia respiratoria|resp(?:iratory)? rate)[:\s]*(\d{1,3})\s*(?:rpm|bpm)?/i);
  if (rrMatch) ctx.fr = parseInt(rrMatch[1]);

  // Temperatura
  const tempMatch = text.match(/(?:temp(?:eratura)?|fiebre|febre|fever)[:\s°]*(\d{2}[.,]\d)\s*°?[cC]?/i);
  if (tempMatch) ctx.temp = parseFloat(tempMatch[1].replace(',', '.'));

  // Signos de alarma detectados
  ctx.alertas = [];
  if (/(?:mal estado|poor general|mau estado)/i.test(text)) ctx.alertas.push('mal_estado_general');
  if (/(?:tiraje|retracción|retracci[oó]n|retraction|tiragem)/i.test(text)) ctx.alertas.push('trabajo_respiratorio');
  if (/(?:no consolable|inconsolable|não consolável)/i.test(text)) ctx.alertas.push('irritabilidad');
  if (/(?:cianosis|cianose|cyanosis)/i.test(text)) ctx.alertas.push('cianosis');
  if (/(?:apnea|pausas)/i.test(text)) ctx.alertas.push('apnea');
  if (/(?:convuls|seiz)/i.test(text)) ctx.alertas.push('convulsion');
  if (/(?:shock|hipotens|hypoten)/i.test(text)) ctx.alertas.push('shock');

  return ctx;
}

// ── OPENEVIDENCE DEEP-LINK ─────────────────────────────────────────────
function buildOpenEvidenceQuery(caseText, result) {
  // Construye una query clínica refinada a partir del texto + resultado IA
  const diagnosis = result?.impresion || '';
  const drugs = (result?.farmacos || []).join(', ');
  const protocols = (result?.protocolos || []).join(', ');

  // Extrae las primeras palabras clave del caso
  const keywords = caseText
    .replace(/[^a-zA-ZáéíóúàèìòùãõâêîôûçñÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÇÑ\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 4)
    .slice(0, 5)
    .join(' ');

  const query = [diagnosis, keywords, 'pediatric emergency'].filter(Boolean).join(' ').trim();
  return `https://openevidence.com/?q=${encodeURIComponent(query)}`;
}

// ── LABELS i18n ─────────────────────────────────────────────────────────
const LABELS = {
  es: {
    title: 'Asistente IA',
    subtitle: 'Análisis clínico predictivo · AHA · PALS · SEUP',
    placeholder: 'Describe el caso clínico: edad, motivo de consulta, signos vitales, estado general, hallazgos relevantes...\n\nEj: Lactante 8 meses, fiebre 39.5°C, FC 180lpm, tiraje intercostal, SpO₂ 91%, mal estado general, no consolable.',
    weightLabel: 'Peso global',
    weightNA: 'No introducido',
    analyze: 'Analizar caso',
    analyzing: 'Analizando...',
    clear: 'Limpiar',
    disclaimer: '⚠️ Herramienta de apoyo clínico. No sustituye el juicio del profesional ni el protocolo del centro.',
    riskLabel: 'Riesgo estimado',
    tepLabel: 'TEP implícito',
    sugLabel: 'Sugerencias clínicas',
    drugsLabel: 'Fármacos a considerar',
    protosLabel: 'Protocolos relevantes',
    reasoningLabel: 'Razonamiento clínico',
    tepA: 'Apariencia', tepB: 'Respiración', tepC: 'Circulación',
    normal: 'Normal', altered: 'Alterada',
    errorMsg: 'Error al conectar con el asistente. Verifica tu conexión.',
    charCount: 'caracteres',
    feedbackLabel: '¿Fue útil este análisis?',
    feedbackYes: 'Sí, útil',
    feedbackNo: 'Mejorable',
    feedbackThanks: '¡Gracias por tu feedback!',
    feedbackFollowTitle: '¿Qué falló? (ayúdanos a mejorar)',
    feedbackFollowOptions: [
      { key: 'farmacos',   label: '💊 Fármacos incorrectos o innecesarios' },
      { key: 'riesgo_bajo', label: '⬇️ Riesgo subestimado' },
      { key: 'riesgo_alto', label: '⬆️ Riesgo sobreestimado' },
      { key: 'sugerencias', label: '💡 Sugerencias clínicas inadecuadas' },
      { key: 'tep',         label: '🔺 TEP incorrecto' },
      { key: 'idioma',      label: '🌐 Respuesta en idioma incorrecto' },
      { key: 'otro',        label: '📝 Otro' },
    ],
    feedbackFollowPlaceholder: '¿Qué ocurrió realmente? ¿Cuál fue tu decisión clínica? (opcional)',
    feedbackFollowSend: 'Enviar',
    feedbackFollowSkip: 'Omitir',
    feedbackFollowSent: '✅ Gracias — tu experiencia nos ayuda a mejorar.',
    openEvidence: 'Buscar evidencia',
    statsTitle: 'Estadísticas de uso',
    statsCases: 'Casos analizados',
    statsRated: 'Evaluados',
    statsPositive: 'Útiles',
    statsCritical: 'Críticos',
    contextDetected: 'Contexto detectado',
    showReasoning: 'Ver razonamiento',
    hideReasoning: 'Ocultar',
    confidenceLabel: 'Confianza',
  },
  pt: {
    title: 'Assistente IA',
    subtitle: 'Análise clínica preditiva · AHA · PALS · SEUP',
    placeholder: 'Descreve o caso clínico: idade, motivo de consulta, sinais vitais, estado geral, achados relevantes...\n\nEx: Lactente 8 meses, febre 39.5°C, FC 180bpm, tiragem intercostal, SpO₂ 91%, mau estado geral, não consolável.',
    weightLabel: 'Peso global',
    weightNA: 'Não introduzido',
    analyze: 'Analisar caso',
    analyzing: 'A analisar...',
    clear: 'Limpar',
    disclaimer: '⚠️ Ferramenta de apoio clínico. Não substitui o julgamento do profissional nem o protocolo do centro.',
    riskLabel: 'Risco estimado',
    tepLabel: 'TAP implícito',
    sugLabel: 'Sugestões clínicas',
    drugsLabel: 'Fármacos a considerar',
    protosLabel: 'Protocolos relevantes',
    reasoningLabel: 'Raciocínio clínico',
    tepA: 'Aparência', tepB: 'Respiração', tepC: 'Circulação',
    normal: 'Normal', altered: 'Alterada',
    errorMsg: 'Erro ao ligar ao assistente. Verifica a tua ligação.',
    charCount: 'caracteres',
    feedbackLabel: 'Esta análise foi útil?',
    feedbackYes: 'Sim, útil',
    feedbackNo: 'A melhorar',
    feedbackThanks: 'Obrigado pelo teu feedback!',
    feedbackFollowTitle: 'O que falhou? (ajuda-nos a melhorar)',
    feedbackFollowOptions: [
      { key: 'farmacos',    label: '💊 Fármacos incorretos ou desnecessários' },
      { key: 'riesgo_bajo', label: '⬇️ Risco subestimado' },
      { key: 'riesgo_alto', label: '⬆️ Risco sobreestimado' },
      { key: 'sugerencias', label: '💡 Sugestões clínicas inadequadas' },
      { key: 'tep',         label: '🔺 TAP incorreto' },
      { key: 'idioma',      label: '🌐 Resposta no idioma errado' },
      { key: 'otro',        label: '📝 Outro' },
    ],
    feedbackFollowPlaceholder: 'O que aconteceu na realidade? Qual foi a tua decisão clínica? (opcional)',
    feedbackFollowSend: 'Enviar',
    feedbackFollowSkip: 'Ignorar',
    feedbackFollowSent: '✅ Obrigado — a tua experiência ajuda-nos a melhorar.',
    openEvidence: 'Buscar evidência',
    statsTitle: 'Estatísticas de uso',
    statsCases: 'Casos analisados',
    statsRated: 'Avaliados',
    statsPositive: 'Úteis',
    statsCritical: 'Críticos',
    contextDetected: 'Contexto detetado',
    showReasoning: 'Ver raciocínio',
    hideReasoning: 'Ocultar',
    confidenceLabel: 'Confiança',
  },
  en: {
    title: 'AI Assistant',
    subtitle: 'Predictive clinical analysis · AHA · PALS · SEUP',
    placeholder: 'Describe the clinical case: age, presenting complaint, vital signs, general condition, relevant findings...\n\nEx: 8-month infant, fever 39.5°C, HR 180bpm, intercostal retractions, SpO₂ 91%, poor general condition, inconsolable.',
    weightLabel: 'Global weight',
    weightNA: 'Not entered',
    analyze: 'Analyse case',
    analyzing: 'Analysing...',
    clear: 'Clear',
    disclaimer: '⚠️ Clinical support tool. Does not replace professional judgement or local protocols.',
    riskLabel: 'Estimated risk',
    tepLabel: 'Implicit PAT',
    sugLabel: 'Clinical suggestions',
    drugsLabel: 'Drugs to consider',
    protosLabel: 'Relevant protocols',
    reasoningLabel: 'Clinical reasoning',
    tepA: 'Appearance', tepB: 'Breathing', tepC: 'Circulation',
    normal: 'Normal', altered: 'Altered',
    errorMsg: 'Error connecting to assistant. Check your connection.',
    charCount: 'characters',
    feedbackLabel: 'Was this analysis helpful?',
    feedbackYes: 'Yes, helpful',
    feedbackNo: 'Needs improvement',
    feedbackThanks: 'Thank you for your feedback!',
    feedbackFollowTitle: 'What went wrong? (help us improve)',
    feedbackFollowOptions: [
      { key: 'farmacos',    label: '💊 Incorrect or unnecessary drugs' },
      { key: 'riesgo_bajo', label: '⬇️ Risk underestimated' },
      { key: 'riesgo_alto', label: '⬆️ Risk overestimated' },
      { key: 'sugerencias', label: '💡 Inadequate clinical suggestions' },
      { key: 'tep',         label: '🔺 Incorrect PAT' },
      { key: 'idioma',      label: '🌐 Wrong language in response' },
      { key: 'otro',        label: '📝 Other' },
    ],
    feedbackFollowPlaceholder: 'What actually happened? What was your clinical decision? (optional)',
    feedbackFollowSend: 'Send',
    feedbackFollowSkip: 'Skip',
    feedbackFollowSent: '✅ Thank you — your experience helps us improve.',
    openEvidence: 'Search evidence',
    statsTitle: 'Usage statistics',
    statsCases: 'Cases analysed',
    statsRated: 'Rated',
    statsPositive: 'Helpful',
    statsCritical: 'Critical',
    contextDetected: 'Detected context',
    showReasoning: 'Show reasoning',
    hideReasoning: 'Hide',
    confidenceLabel: 'Confidence',
  },
};

// ── RENDER DEL TAB ─────────────────────────────────────────────────────
export function renderAITab(lang, weight) {
  const container = document.getElementById('tab-ai');
  if (!container) return;

  const L = LABELS[lang] || LABELS.es;
  const w = weight ? `${weight} kg` : L.weightNA;

  container.innerHTML = `
<div class="ai-wrap">
  <div class="ai-header">
    <div class="ai-title">🤖 ${L.title}</div>
    <div class="ai-subtitle">${L.subtitle}</div>
  </div>

  <div class="ai-weight-row">
    <span class="ai-weight-label">⚖️ ${L.weightLabel}:</span>
    <span class="ai-weight-val" id="ai-weight-display">${w}</span>
  </div>

  <div class="ai-input-wrap">
    <textarea
      id="ai-input"
      class="ai-textarea"
      placeholder="${L.placeholder}"
      maxlength="1200"
      oninput="aiUpdateCount()"
    ></textarea>
    <div class="ai-char-count"><span id="ai-char-count">0</span> / 1200 ${L.charCount}</div>
  </div>

  <div id="ai-context-preview" class="ai-context-preview" style="display:none"></div>

  <div class="ai-actions">
    <button class="hbtn ai-btn-analyze" id="ai-btn-analyze" onclick="aiAnalyze()">
      🔍 ${L.analyze}
    </button>
    <button class="hbtn" onclick="aiClear()">
      ↺ ${L.clear}
    </button>
    <button class="hbtn ai-btn-stats" onclick="aiShowStats()">
      📊
    </button>
  </div>

  <div class="ai-disclaimer">${L.disclaimer}</div>

  <div id="ai-result" class="ai-result" style="display:none"></div>
  <div id="ai-stats-panel" class="ai-stats-panel" style="display:none"></div>
</div>`;

  // Preview de contexto mientras escribe
  const textarea = container.querySelector('#ai-input');
  if (textarea) {
    textarea.addEventListener('input', () => {
      aiUpdateCount();
      aiPreviewContext(lang);
    });
  }
}

// ── PREVIEW DE CONTEXTO CLÍNICO ────────────────────────────────────────
function aiPreviewContext(lang) {
  const input = document.getElementById('ai-input');
  const preview = document.getElementById('ai-context-preview');
  if (!input || !preview) return;

  const text = input.value.trim();
  if (text.length < 15) { preview.style.display = 'none'; return; }

  const ctx = extractClinicalContext(text);
  const L = LABELS[lang] || LABELS.es;
  const parts = [];

  if (ctx.edad) parts.push(`👶 ${ctx.edad}`);
  if (ctx.spo2) {
    const color = ctx.spo2 < 90 ? '#f87171' : ctx.spo2 < 95 ? '#fb923c' : '#34d399';
    parts.push(`<span style="color:${color}">💨 SpO₂ ${ctx.spo2}%</span>`);
  }
  if (ctx.fc) parts.push(`❤️ FC ${ctx.fc}bpm`);
  if (ctx.temp) parts.push(`🌡️ ${ctx.temp}°C`);
  if (ctx.alertas?.length) parts.push(`⚠️ ${ctx.alertas.length} alertas`);

  if (parts.length === 0) { preview.style.display = 'none'; return; }

  preview.style.display = 'flex';
  preview.innerHTML = `<span class="ai-ctx-label">📋 ${L.contextDetected}:</span> ${parts.join(' · ')}`;
}

// ── LÓGICA ─────────────────────────────────────────────────────────────
export function aiUpdateCount() {
  const input = document.getElementById('ai-input');
  const counter = document.getElementById('ai-char-count');
  if (input && counter) counter.textContent = input.value.length;
}

export function aiClear() {
  const input = document.getElementById('ai-input');
  const result = document.getElementById('ai-result');
  const preview = document.getElementById('ai-context-preview');
  const stats = document.getElementById('ai-stats-panel');
  if (input) input.value = '';
  if (result) { result.style.display = 'none'; result.innerHTML = ''; }
  if (preview) { preview.style.display = 'none'; }
  if (stats) { stats.style.display = 'none'; }
  aiUpdateCount();
}

export async function aiShowStats() {
  const panel = document.getElementById('ai-stats-panel');
  const result = document.getElementById('ai-result');
  if (!panel) return;

  // Toggle
  if (panel.style.display !== 'none') { panel.style.display = 'none'; return; }

  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;
  const s = await aiGetStats();

  const pct = s.rated > 0 ? Math.round((s.positive / s.rated) * 100) : 0;
  const langFlags = { es: '🇪🇸', pt: '🇵🇹', en: '🇬🇧' };

  panel.style.display = 'block';
  if (result) result.style.display = 'none';

  panel.innerHTML = `
<div class="ai-card ai-stats-card">
  <div class="ai-section-title">📊 ${L.statsTitle}</div>
  <div class="ai-stats-grid">
    <div class="ai-stat-item">
      <div class="ai-stat-num">${s.total}</div>
      <div class="ai-stat-lbl">${L.statsCases}</div>
    </div>
    <div class="ai-stat-item">
      <div class="ai-stat-num">${s.critical}</div>
      <div class="ai-stat-lbl">${L.statsCritical}</div>
    </div>
    <div class="ai-stat-item">
      <div class="ai-stat-num">${s.rated}</div>
      <div class="ai-stat-lbl">${L.statsRated}</div>
    </div>
    <div class="ai-stat-item">
      <div class="ai-stat-num" style="color:#34d399">${pct}%</div>
      <div class="ai-stat-lbl">${L.statsPositive}</div>
    </div>
  </div>
  ${s.total > 0 ? `
  <div class="ai-stats-bar">
    <div class="ai-bar-fill" style="width:${pct}%;background:#34d399"></div>
  </div>
  <div class="ai-stats-langs">
    ${Object.entries(s.byLang).map(([l, n]) => `${langFlags[l] || l} ${n}`).join(' · ')}
  </div>` : '<div class="ai-stat-empty">Sin casos registrados aún</div>'}
</div>`;
}

// ── FEEDBACK ────────────────────────────────────────────────────────────

// Guarda o follow-up no IndexedDB junto ao registo do caso
async function saveFeedbackDetail(caseId, categories, freeText) {
  if (!caseId) return;
  try {
    const db = await openDB();
    const tx = db.transaction('cases', 'readwrite');
    const store = tx.objectStore('cases');
    const req = store.get(caseId);
    req.onsuccess = () => {
      const record = req.result;
      if (record) {
        record.feedbackCategories = categories;  // array de keys seleccionadas
        record.feedbackText = freeText || '';    // texto libre del clínico
        store.put(record);
      }
    };
  } catch (e) {
    console.warn('[PediCode AI] saveFeedbackDetail error:', e);
  }
}

window.aiFeedback = async function(caseId, rating) {
  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;
  await updateRating(caseId, rating);

  const wrap = document.getElementById('ai-feedback-wrap');
  if (!wrap) return;

  if (rating === 1) {
    // Feedback positivo — agradecimento simple
    wrap.innerHTML = `<span class="ai-feedback-thanks">✅ ${L.feedbackThanks}</span>`;
    return;
  }

  // Feedback negativo — mostrar formulário de follow-up
  const optionsHTML = (L.feedbackFollowOptions || []).map(opt => `
    <label class="ai-follow-option">
      <input type="checkbox" name="fb-cat" value="${opt.key}">
      <span>${opt.label}</span>
    </label>`).join('');

  wrap.innerHTML = `
<div class="ai-follow-wrap">
  <div class="ai-follow-title">${L.feedbackFollowTitle}</div>
  <div class="ai-follow-options" id="ai-follow-cats">
    ${optionsHTML}
  </div>
  <textarea
    id="ai-follow-text"
    class="ai-follow-textarea"
    placeholder="${L.feedbackFollowPlaceholder}"
    maxlength="400"
    rows="3"
  ></textarea>
  <div class="ai-follow-actions">
    <button class="hbtn ai-follow-send" onclick="aiFeedbackSubmit(${caseId})">
      📤 ${L.feedbackFollowSend}
    </button>
    <button class="ai-follow-skip" onclick="aiFeedbackSkip()">
      ${L.feedbackFollowSkip}
    </button>
  </div>
</div>`;
};

window.aiFeedbackSubmit = async function(caseId) {
  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;

  const checked = [...document.querySelectorAll('#ai-follow-cats input:checked')]
    .map(el => el.value);
  const freeText = document.getElementById('ai-follow-text')?.value?.trim() || '';

  await saveFeedbackDetail(caseId, checked, freeText);

  const wrap = document.getElementById('ai-feedback-wrap');
  if (wrap) wrap.innerHTML = `<span class="ai-feedback-thanks">${L.feedbackFollowSent}</span>`;
};

window.aiFeedbackSkip = function() {
  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;
  const wrap = document.getElementById('ai-feedback-wrap');
  if (wrap) wrap.innerHTML = `<span class="ai-feedback-thanks">✅ ${L.feedbackThanks}</span>`;
};

// ── ANÁLISIS PRINCIPAL ─────────────────────────────────────────────────
export async function aiAnalyze() {
  const input = document.getElementById('ai-input');
  const result = document.getElementById('ai-result');
  const statsPanel = document.getElementById('ai-stats-panel');
  const btn = document.getElementById('ai-btn-analyze');
  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;

  if (!input || input.value.trim().length < 10) return;

  // Ocultar stats si estaban abiertas
  if (statsPanel) statsPanel.style.display = 'none';

  // Extraer contexto clínico del texto
  const rawText = input.value.trim();
  const ctx = extractClinicalContext(rawText);
  const weight = parseFloat(document.getElementById('global-weight')?.value) || null;

  // Loading state
  btn.disabled = true;
  btn.textContent = `⏳ ${L.analyzing}`;
  result.style.display = 'block';
  result.innerHTML = `<div class="ai-loading"><div class="ai-spinner"></div></div>`;

  let caseId = null;

  try {
    const response = await fetch(AI_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mensaje: rawText,
        peso: weight,
        idioma: lang,
        contexto: ctx, // Contexto clínico pre-extraído
      }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.error) throw new Error(data.error);

    // Registrar en IndexedDB (anonimizado)
    caseId = await logCase(rawText, data, weight, lang);

    // ── Render del resultado ───────────────────────────────────────────
    const riskMap = {
      'CRÍTICO': '#f87171', 'CRITICO': '#f87171', 'CRITICAL': '#f87171',
      'ALTO': '#fb923c', 'HIGH': '#fb923c',
      'MODERADO': '#fbbf24', 'MODERATE': '#fbbf24',
      'BAJO': '#34d399', 'LOW': '#34d399',
    };
    const riskColor = riskMap[data.riesgo?.nivel?.toUpperCase()] || '#94a3b8';

    const tepIcon = v => v === 'NORMAL' ? '✅' : '⚠️';
    const tepCls  = v => v === 'NORMAL' ? 'ai-tep-ok' : 'ai-tep-warn';
    const tepVal  = v => v === 'NORMAL' ? L.normal : L.altered;

    // Confianza (si el Worker la devuelve, si no se omite)
    const confidenceHTML = data.confianza
      ? `<div class="ai-confidence">
           <span class="ai-conf-label">${L.confidenceLabel}:</span>
           <div class="ai-conf-bar"><div class="ai-conf-fill" style="width:${data.confianza}%;background:${riskColor}"></div></div>
           <span class="ai-conf-pct">${data.confianza}%</span>
         </div>`
      : '';

    // Razonamiento clínico expandible
    const reasoningHTML = data.razonamiento
      ? `<div class="ai-reasoning-wrap">
           <button class="ai-reasoning-toggle" onclick="aiToggleReasoning(this)">
             🧠 ${L.showReasoning}
           </button>
           <div class="ai-reasoning-body" style="display:none">
             ${data.razonamiento}
           </div>
         </div>`
      : '';

    // Fármacos
    const drugsHTML = data.farmacos?.length
      ? `<div class="ai-section-title">💊 ${L.drugsLabel}</div>
         <div class="ai-pills">${data.farmacos.map(f => `<span class="ai-pill">${f}</span>`).join('')}</div>`
      : '';

    // Protocolos
    const protosHTML = data.protocolos?.length
      ? `<div class="ai-section-title">📜 ${L.protosLabel}</div>
         <div class="ai-pills">${data.protocolos.map(p => `<span class="ai-pill ai-pill-proto">${p}</span>`).join('')}</div>`
      : '';

    // OpenEvidence deep-link
    const oeURL = buildOpenEvidenceQuery(rawText, data);
    const oeHTML = `
<div class="ai-oe-wrap">
  <a href="${oeURL}" target="_blank" rel="noopener noreferrer" class="ai-oe-btn">
    🔬 ${L.openEvidence} <span class="ai-oe-badge">OpenEvidence</span>
  </a>
</div>`;

    // Feedback
    const feedbackHTML = `
<div class="ai-feedback-row" id="ai-feedback-wrap">
  <span class="ai-feedback-label">${L.feedbackLabel}</span>
  <button class="ai-fb-btn ai-fb-yes" onclick="aiFeedback(${caseId}, 1)">👍 ${L.feedbackYes}</button>
  <button class="ai-fb-btn ai-fb-no"  onclick="aiFeedback(${caseId}, 0)">👎 ${L.feedbackNo}</button>
</div>`;

    result.innerHTML = `
<div class="ai-card">
  <div class="ai-impression">${data.impresion || ''}</div>

  <div class="ai-risk-row">
    <div class="ai-section-title">🎯 ${L.riskLabel}</div>
    <div class="ai-risk-badge" style="background:${riskColor}22;border:1px solid ${riskColor};color:${riskColor}">
      ${data.riesgo?.nivel || '—'} · ${data.riesgo?.probabilidad || '—'}
    </div>
    <div class="ai-risk-just">${data.riesgo?.justificacion || ''}</div>
    ${confidenceHTML}
  </div>

  <div class="ai-tep-row">
    <div class="ai-section-title">🔺 ${L.tepLabel}</div>
    <div class="ai-tep-grid">
      <div class="ai-tep-item ${tepCls(data.tep?.apariencia)}">
        ${tepIcon(data.tep?.apariencia)} ${L.tepA}<br>
        <span class="ai-tep-val">${tepVal(data.tep?.apariencia)}</span>
      </div>
      <div class="ai-tep-item ${tepCls(data.tep?.respiracion)}">
        ${tepIcon(data.tep?.respiracion)} ${L.tepB}<br>
        <span class="ai-tep-val">${tepVal(data.tep?.respiracion)}</span>
      </div>
      <div class="ai-tep-item ${tepCls(data.tep?.circulacion)}">
        ${tepIcon(data.tep?.circulacion)} ${L.tepC}<br>
        <span class="ai-tep-val">${tepVal(data.tep?.circulacion)}</span>
      </div>
    </div>
  </div>

  <div class="ai-section-title">💡 ${L.sugLabel}</div>
  <ul class="ai-suggestions">
    ${(data.sugerencias || []).map(s => `<li>${s}</li>`).join('')}
  </ul>

  ${drugsHTML}
  ${protosHTML}
  ${reasoningHTML}
  ${oeHTML}

  <div class="ai-aviso">${data.aviso || ''}</div>
  ${feedbackHTML}
</div>`;

  } catch (err) {
    result.innerHTML = `<div class="ai-error">⚠️ ${L.errorMsg}<br><small>${err.message}</small></div>`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = `🔍 ${lang === 'pt' ? 'Analisar caso' : lang === 'en' ? 'Analyse case' : 'Analizar caso'}`;
  }
}

// ── TOGGLE RAZONAMIENTO ─────────────────────────────────────────────────
window.aiToggleReasoning = function(btn) {
  const lang = window._currentLang || 'es';
  const L = LABELS[lang] || LABELS.es;
  const body = btn.nextElementSibling;
  if (!body) return;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  btn.textContent = open ? `🧠 ${L.showReasoning}` : `🧠 ${L.hideReasoning}`;
};

// ── EXPORTS GLOBALES (para onclick en HTML) ─────────────────────────────
// Registrar en window para que funcionen los onclick inline
if (typeof window !== 'undefined') {
  window.aiAnalyze    = aiAnalyze;
  window.aiClear      = aiClear;
  window.aiUpdateCount = aiUpdateCount;
  window.aiShowStats  = aiShowStats;
}
