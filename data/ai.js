// PediCode — data/ai.js
// Tab IA: asistente clínico predictivo via Groq (Cloudflare Worker proxy)
// Añadir al index.html y app.js según instrucciones

// ── CONFIGURACIÓN ──────────────────────────────────────────────────────
// Cambia esta URL por la de tu Cloudflare Worker después de desplegarlo
export const AI_WORKER_URL = 'https://pedicodeapp.pedicode-app.workers.dev';

// ── RENDER DEL TAB ─────────────────────────────────────────────────────
export function renderAITab(lang, weight) {
  const container = document.getElementById('tab-ai');
  if (!container) return;

  const labels = {
    es: {
      title: 'Asistente IA',
      subtitle: 'Análisis clínico predictivo · Basado en guías AHA/SEUP',
      placeholder: 'Describe el caso clínico: edad, motivo de consulta, signos vitales, estado general, hallazgos relevantes...\n\nEj: Lactante 8 meses, fiebre 39.5°C, taquicardia 180lpm, tiraje intercostal, SpO₂ 91%, mal estado general, no consolable.',
      weightLabel: 'Peso global',
      weightNA: 'No introducido',
      analyze: 'Analizar caso',
      analyzing: 'Analizando...',
      clear: 'Limpiar',
      disclaimer: '⚠️ Herramienta de apoyo clínico. No sustituye el juicio del profesional ni el protocolo del centro.',
      riskLabel: 'Riesgo estimado',
      tepLabel: 'TEP implícito',
      sugLabel: 'Sugerencias',
      drugsLabel: 'Fármacos a considerar',
      protosLabel: 'Protocolos relevantes',
      tepA: 'Apariencia', tepB: 'Respiración', tepC: 'Circulación',
      normal: 'Normal', altered: 'Alterada',
      errorMsg: 'Error al conectar con el asistente. Verifica tu conexión.',
      charCount: 'caracteres',
    },
    pt: {
      title: 'Assistente IA',
      subtitle: 'Análise clínica preditiva · Baseado em guias AHA/SEUP',
      placeholder: 'Descreve o caso clínico: idade, motivo de consulta, sinais vitais, estado geral, achados relevantes...\n\nEx: Lactente 8 meses, febre 39.5°C, taquicardia 180bpm, tiragem intercostal, SpO₂ 91%, mau estado geral, não consolável.',
      weightLabel: 'Peso global',
      weightNA: 'Não introduzido',
      analyze: 'Analisar caso',
      analyzing: 'A analisar...',
      clear: 'Limpar',
      disclaimer: '⚠️ Ferramenta de apoio clínico. Não substitui o julgamento do profissional nem o protocolo do centro.',
      riskLabel: 'Risco estimado',
      tepLabel: 'TAP implícito',
      sugLabel: 'Sugestões',
      drugsLabel: 'Fármacos a considerar',
      protosLabel: 'Protocolos relevantes',
      tepA: 'Aparência', tepB: 'Respiração', tepC: 'Circulação',
      normal: 'Normal', altered: 'Alterada',
      errorMsg: 'Erro ao ligar ao assistente. Verifica a tua ligação.',
      charCount: 'caracteres',
    },
    en: {
      title: 'AI Assistant',
      subtitle: 'Predictive clinical analysis · Based on AHA/SEUP guidelines',
      placeholder: 'Describe the clinical case: age, presenting complaint, vital signs, general condition, relevant findings...\n\nEx: 8-month infant, fever 39.5°C, HR 180bpm, intercostal retractions, SpO₂ 91%, poor general condition, inconsolable.',
      weightLabel: 'Global weight',
      weightNA: 'Not entered',
      analyze: 'Analyse case',
      analyzing: 'Analysing...',
      clear: 'Clear',
      disclaimer: '⚠️ Clinical support tool. Does not replace professional judgement or local protocols.',
      riskLabel: 'Estimated risk',
      tepLabel: 'Implicit PAT',
      sugLabel: 'Suggestions',
      drugsLabel: 'Drugs to consider',
      protosLabel: 'Relevant protocols',
      tepA: 'Appearance', tepB: 'Breathing', tepC: 'Circulation',
      normal: 'Normal', altered: 'Altered',
      errorMsg: 'Error connecting to assistant. Check your connection.',
      charCount: 'characters',
    }
  };

  const L = labels[lang] || labels.es;
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
      maxlength="1000"
      oninput="aiUpdateCount()"
    ></textarea>
    <div class="ai-char-count"><span id="ai-char-count">0</span> / 1000 ${L.charCount}</div>
  </div>

  <div class="ai-actions">
    <button class="hbtn ai-btn-analyze" id="ai-btn-analyze" onclick="aiAnalyze()">
      🔍 ${L.analyze}
    </button>
    <button class="hbtn" onclick="aiClear()">
      ↺ ${L.clear}
    </button>
  </div>

  <div class="ai-disclaimer">${L.disclaimer}</div>

  <div id="ai-result" class="ai-result" style="display:none"></div>
</div>`;
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
  if (input) input.value = '';
  if (result) { result.style.display = 'none'; result.innerHTML = ''; }
  aiUpdateCount();
}

export async function aiAnalyze() {
  const input = document.getElementById('ai-input');
  const result = document.getElementById('ai-result');
  const btn = document.getElementById('ai-btn-analyze');
  const lang = window._currentLang || 'es';

  const labels = {
    es: { analyzing: 'Analizando...', errorMsg: 'Error al conectar con el asistente.', riskLabel: 'Riesgo estimado', tepLabel: 'TEP implícito', sugLabel: 'Sugerencias', drugsLabel: 'Fármacos a considerar', protosLabel: 'Protocolos relevantes', tepA: 'Apariencia', tepB: 'Respiración', tepC: 'Circulación', normal: 'Normal', altered: 'Alterada' },
    pt: { analyzing: 'A analisar...', errorMsg: 'Erro ao ligar ao assistente.', riskLabel: 'Risco estimado', tepLabel: 'TAP implícito', sugLabel: 'Sugestões', drugsLabel: 'Fármacos a considerar', protosLabel: 'Protocolos relevantes', tepA: 'Aparência', tepB: 'Respiração', tepC: 'Circulação', normal: 'Normal', altered: 'Alterada' },
    en: { analyzing: 'Analysing...', errorMsg: 'Error connecting to assistant.', riskLabel: 'Estimated risk', tepLabel: 'Implicit PAT', sugLabel: 'Suggestions', drugsLabel: 'Drugs to consider', protosLabel: 'Relevant protocols', tepA: 'Appearance', tepB: 'Breathing', tepC: 'Circulation', normal: 'Normal', altered: 'Altered' },
  };
  const L = labels[lang] || labels.es;

  if (!input || input.value.trim().length < 10) return;

  // Loading state
  btn.disabled = true;
  btn.textContent = `⏳ ${L.analyzing}`;
  result.style.display = 'block';
  result.innerHTML = `<div class="ai-loading"><div class="ai-spinner"></div></div>`;

  try {
    const weight = parseFloat(document.getElementById('global-weight')?.value) || null;

    const response = await fetch(AI_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mensaje: input.value.trim(),
        peso: weight,
        idioma: lang,
      }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    if (data.error) throw new Error(data.error);

    // Render result
    const riskColor = {
      'CRÍTICO': '#f87171', 'CRÍTICO': '#f87171',
      'ALTO': '#fb923c',
      'MODERADO': '#fbbf24',
      'BAJO': '#34d399',
      'CRITICAL': '#f87171',
      'HIGH': '#fb923c',
      'MODERATE': '#fbbf24',
      'LOW': '#34d399',
    }[data.riesgo?.nivel?.toUpperCase()] || '#94a3b8';

    const tepIcon = v => v === 'NORMAL' ? '✅' : '⚠️';
    const tepCls  = v => v === 'NORMAL' ? 'ai-tep-ok' : 'ai-tep-warn';

    const drugsHTML = data.farmacos?.length
      ? `<div class="ai-section-title">💊 ${L.drugsLabel}</div>
         <div class="ai-pills">${data.farmacos.map(f => `<span class="ai-pill">${f}</span>`).join('')}</div>`
      : '';

    const protosHTML = data.protocolos?.length
      ? `<div class="ai-section-title">📜 ${L.protosLabel}</div>
         <div class="ai-pills">${data.protocolos.map(p => `<span class="ai-pill ai-pill-proto">${p}</span>`).join('')}</div>`
      : '';

    result.innerHTML = `
<div class="ai-card">
  <div class="ai-impression">${data.impresion || ''}</div>

  <div class="ai-risk-row">
    <div class="ai-section-title">🎯 ${L.riskLabel}</div>
    <div class="ai-risk-badge" style="background:${riskColor}22;border:1px solid ${riskColor};color:${riskColor}">
      ${data.riesgo?.nivel || '—'} · ${data.riesgo?.probabilidad || '—'}
    </div>
    <div class="ai-risk-just">${data.riesgo?.justificacion || ''}</div>
  </div>

  <div class="ai-tep-row">
    <div class="ai-section-title">🔺 ${L.tepLabel}</div>
    <div class="ai-tep-grid">
      <div class="ai-tep-item ${tepCls(data.tep?.apariencia)}">
        ${tepIcon(data.tep?.apariencia)} ${L.tepA}<br>
        <span class="ai-tep-val">${data.tep?.apariencia === 'NORMAL' ? L.normal : L.altered}</span>
      </div>
      <div class="ai-tep-item ${tepCls(data.tep?.respiracion)}">
        ${tepIcon(data.tep?.respiracion)} ${L.tepB}<br>
        <span class="ai-tep-val">${data.tep?.respiracion === 'NORMAL' ? L.normal : L.altered}</span>
      </div>
      <div class="ai-tep-item ${tepCls(data.tep?.circulacion)}">
        ${tepIcon(data.tep?.circulacion)} ${L.tepC}<br>
        <span class="ai-tep-val">${data.tep?.circulacion === 'NORMAL' ? L.normal : L.altered}</span>
      </div>
    </div>
  </div>

  <div class="ai-section-title">💡 ${L.sugLabel}</div>
  <ul class="ai-suggestions">
    ${(data.sugerencias || []).map(s => `<li>${s}</li>`).join('')}
  </ul>

  ${drugsHTML}
  ${protosHTML}

  <div class="ai-aviso">${data.aviso || ''}</div>
</div>`;

  } catch (err) {
    result.innerHTML = `<div class="ai-error">⚠️ ${L.errorMsg}<br><small>${err.message}</small></div>`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = `🔍 ${lang === 'pt' ? 'Analisar caso' : lang === 'en' ? 'Analyse case' : 'Analizar caso'}`;
  }
}
