// Auto-generated ES module — PediCode modular migration
// Step 1: Data extraction

export const PROTO = {
  es: {
    legend: [
      {color:'var(--red)',   shadow:'rgba(248,113,113,0.18)', label:'Crítico — acción inmediata, riesgo vital'},
      {color:'var(--orange)',   shadow:'rgba(251,146,60,0.18)', label:'Atención — decisión clínica importante'},
      {color:'var(--yellow)',   shadow:'rgba(251,191,36,0.18)', label:'Enfermería — rol específico de enfermería'},
      {color:'var(--border2)',   shadow:'transparent', label:'Estándar — acción de protocolo'},
    ],
    cards: [
      {
        id:'pc-hipotermia', cls:'p-hypothermia', progKey:'hipotermia',
        name:'Hipotermia Terapéutica — EHI Neonatal', src:'proto_src_spn', badge:'proto_badge_neonatal',
        sourceNote:'📄 Consenso Hipotermia Terapéutica SPN 2022 — Sociedade Portuguesa de Neonatologia. Válido hasta oct/2028.',
        phases:[
          {tagCls:'t0', tag:'Criterios A+B', title:'Selección & Referenciación (Hospital de Origen)',
           items:[
            {cls:'critical', text:'<strong>Criterio A — Asfixia:</strong> Apgar ≤5 a los 10min, reanimación mantenida a los 10min, pH&lt;7.0 en los 1ºs 60min, o déficit de bases ≥16mmol/L'},
            {cls:'critical', text:'<strong>Criterio B — Encefalopatía:</strong> Thompson &gt;7 y/o convulsiones clínicas'},
            {cls:'', text:'Evaluar criterios de exclusión relativos (EG&lt;36sem, CIR, cirugía prevista, malformaciones, PCR postnatal) y discutir con el centro de tratamiento'},
            {cls:'critical', text:'<strong>Contactar centro de tratamiento</strong> y activar TIP de la región tras confirmación de criterios'},
          ]},
          {tagCls:'t1', tag:'Origen', title:'Soporte Vital & Control Térmico',
           items:[
            {cls:'', text:'<strong>Ventilación:</strong> Mantener PaCO₂ 35–45mmHg; evitar hipocapnia; SpO₂ 94–99%'},
            {cls:'', text:'<strong>Aporte hídrico:</strong> 40–60mL/kg/día; bolo SF 10mL/kg si hipotensión'},
            {cls:'critical', text:'<strong>Sedación:</strong> Morfina 50mcg/kg IV lento + perfusión 5–10mcg/kg/h'},
            {cls:'', text:'<strong>Convulsiones:</strong> Fenobarbital 20mg/kg IV (30min) → dosis adicionales 10mg/kg; máx acumulado 40mg/kg'},
            {cls:'warn', text:'<strong>Control térmico:</strong> Apagar fuentes de calor; monitorizar T rectal continua; objetivo 33–34°C'},
            {cls:'', text:'<strong>Accesos:</strong> Catéter umbilical venoso (doble luz) + arterial + acceso venoso periférico'},
            {cls:'nursing', text:'Enviar placenta para estudio anatomopatológico; completar registro de parámetros (Anexo 2)'},
            {cls:'nursing', text:'Instruir ambulancia: incubadora apagada, puertas abiertas, T ambiente ≈21°C'},
          ]},
          {tagCls:'t2', tag:'Admisión', title:'Llegada al Centro de Tratamiento',
           items:[
            {cls:'critical', text:'<strong>Activar sistema de hipotermia</strong> (CritiCool® u equivalente) a 33,5°C antes de la llegada'},
            {cls:'nursing', text:'Colocar RN sobre traje de hipotermia en incubadora abierta; verificar ajuste correcto del traje'},
            {cls:'nursing', text:'Aplicar <strong>Escala de Thompson</strong> (Anexo 1); registrar T de admisión y somatometría'},
            {cls:'nursing', text:'Colocar sonda rectal a ≈6cm; fijar y marcar posición'},
            {cls:'critical', text:'<strong>Monitorización cerebral:</strong> aEEG ≥2 canales + NIRS; ecografía transfontanelar; mantener hasta 6h (si dudas: 12h)'},
            {cls:'', text:'Monitorización cardiorrespiratoria (PA invasiva, ECG, SpO₂, etCO₂); analítica protocolizada'},
            {cls:'', text:'Iniciar hipotermia inducida: cerrar traje, confirmar objetivo 33,5°C; marcar minuto cero'},
            {cls:'', text:'<strong>Antibioterapia empírica:</strong> Ampicilina 50mg/kg/dosis 12h + Gentamicina 5mg/kg 48h'},
          ]},
          {tagCls:'t3', tag:'72h Tratamiento', title:'Monitorización durante Hipotermia',
           items:[
            {cls:'nursing', text:'Monitorizar T rectal continua; FC, PA invasiva, SpO₂, diuresis horaria, glucemia cada 4–6h'},
            {cls:'warn', text:'Hipotensión → Dopamina hasta 10mcg/kg/min IV; si refractario → Adrenalina 0,05–0,1mcg/kg/min'},
            {cls:'', text:'Glucemia objetivo: 3,5–8mmol/L (60–144mg/dL); nutrición parenteral si precisa'},
            {cls:'warn', text:'Convulsiones: tratar activamente; LEV 20mg/kg IV si no responde a fenobarbital'},
            {cls:'nursing', text:'Registro horario de constantes, balance hídrico, Thompson y signos neurológicos en Anexo 2'},
          ]},
          {tagCls:'t4', tag:'Recalentamiento', title:'Recalentamiento Progresivo (inicio a las 72h)',
           items:[
            {cls:'critical', text:'<strong>Iniciar a las 72h</strong> a 0,1–0,4°C/h hasta 36,5–37,0°C rectal (programar en sistema de hipotermia)'},
            {cls:'warn', text:'Si convulsiones durante el recalentamiento → suspender, tratar, esperar ≥2h sin crisis para reanudar'},
            {cls:'warn', text:'Si hipotensión durante el recalentamiento → suspender y reevaluar con ecocardiografía funcional'},
            {cls:'nursing', text:'Conectar calefacción de incubadora ≈1h antes de terminar el recalentamiento'},
            {cls:'', text:'RM cerebral precoz tras recalentamiento; EEG convencional antes del alta; rastreo auditivo (PEATC)'},
          ]},
        ]
      },
      {
        id:'pc-convulsivo', cls:'p-convulsivo', progKey:'convulsivo',
        name:'Mal Convulsivo / Estatus Epiléptico', src:'proto_src_seup', badge:'proto_badge_urgencia',
        sourceNote:'📄 Guía SEUP 2022 (Sociedad Española de Urgencias Pediátricas) + ERC Paediatric Life Support Guidelines 2021. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'0 – 5 min', title:'Estabilización & 1ª Línea — Benzodiacepinas',
           items:[
            {cls:'critical', text:'<strong>ABC + Monitorización:</strong> SpO₂, ECG, glucemia capilar (tratar si &lt;60mg/dL: Glucosa 10% 2mL/kg IV)'},
            {cls:'critical', text:'<strong>SIN acceso IV — vía no parenteral (1ª elección fuera de hospital):</strong> Midazolam bucal 0,3mg/kg (máx 10mg) | Midazolam nasal 0,2mg/kg | Diazepam rectal 0,5mg/kg (máx 10mg)'},
            {cls:'critical', text:'<strong>CON acceso IV/IO:</strong> Midazolam IV 0,1mg/kg (máx 10mg) O Diazepam IV 0,3mg/kg (máx 10mg) · lento, en 2 min'},
            {cls:'nursing', text:'Acceso IV/IO + gasimetría + LAB urgente (glucosa, electrolitos, calcio, niveles FAE si procede) + hemocultivo si fiebre'},
          ]},
          {tagCls:'t1', tag:'5 – 20 min', title:'Reevaluación & 2ª Dosis de Benzodiacepina',
           items:[
            {cls:'', text:'Reevaluar ABC y constantes vitales; mantener vía aérea permeable'},
            {cls:'warn', text:'Considerar causas tratables: hiponatremia, hipocalcemia, hipoglucemia, encefalitis herpética (Aciclovir), emergencia hipertensiva, intoxicación, déficit de piridoxina'},
            {cls:'critical', text:'<strong>2ª dosis BZD</strong> (si persiste crisis): misma dosis/vía que la primera dosis'},
          ]},
          {tagCls:'t2', tag:'20 – 40 min', title:'2ª Línea — Antiepiléptico IV (elegir uno)',
           items:[
            {cls:'critical', text:'<strong>Levetiracetam IV</strong> (1ª opción): 40–60mg/kg (máx 3.000mg) diluido 1:1 en SF · infundir en 5–15min · mejor perfil de seguridad'},
            {cls:'critical', text:'<strong>Fenitoína IV</strong>: 20mg/kg (máx 1.000mg) en SF exclusivamente · velocidad máx 1mg/kg/min · monitorizar ECG y PA'},
            {cls:'warn', text:'<strong>Valproato IV</strong> (alternativa): 30–40mg/kg (máx 2.500mg) en 10–15min · <strong>CI absoluta</strong> si &lt;2 años con error metabólico no descartado'},
            {cls:'warn', text:'<strong>Fenobarbital IV</strong>: 20mg/kg (máx 1.000mg) en 20–30min · vigilar depresión respiratoria · especialmente indicado en &lt;1 año'},
            {cls:'critical', text:'<strong>Contactar UCIP/Neuropediatría</strong> si no cede con 2ª línea'},
          ]},
          {tagCls:'t3', tag:'> 40 min', title:'Estatus Epiléptico Refractario — 3ª Línea',
           items:[
            {cls:'critical', text:'<strong>Asegurar vía aérea:</strong> IOT si GCS ≤8, apnea o hipoventilación significativa · SRI: Midazolam 0,1mg/kg + Rocuronio 1,2mg/kg'},
            {cls:'critical', text:'<strong>Midazolam IV perfusión</strong> (1ª opción coma anestésico): bolo 0,2mg/kg → perfusión 0,05–2mg/kg/h · titular por EEG (objetivo: supresión de brotes)'},
            {cls:'warn', text:'<strong>Propofol IV</strong> (solo &gt;16 años): bolo 1–2mg/kg → perfusión 1,5–10mg/kg/h · <strong>CI en &lt;16 años</strong>'},
            {cls:'warn', text:'Discutir con Neuropediatría: Topiramato SNG, Ketamina IV, Piridoxina IV (si déficit sospechado), Lacosamida IV'},
            {cls:'nursing', text:'Monitorización continua aEEG o EEG convencional durante terapéutica anestésica · registrar duración total del estatus'},
          ]},
        ]
      },
      {
        id:'pc-htic', cls:'p-htic', progKey:'htic',
        name:'Hipertensión Intracraneal (HTIC)', src:'proto_src_pnccs', badge:'proto_badge_urgencia',
        sourceNote:'📄 Pediatric Neurocritical Care Society Guidelines 2021 + SEUP Protocolo HTIC. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Reconocer', title:'Signos & Criterios de HTIC',
           items:[
            {cls:'warn', text:'Cefalea intensa progresiva + vómitos en proyectil'},
            {cls:'warn', text:'Alteración del nivel de consciencia (GCS &lt;14) o deterioro neurológico agudo'},
            {cls:'critical', text:'<strong>Tríada de Cushing:</strong> HTA + bradicardia + bradipnea (signo tardío de herniación inminente)'},
            {cls:'critical', text:'<strong>Signos de herniación:</strong> anisocoria, postura de decorticación/descerebración, hemiplegia súbita'},
            {cls:'', text:'Papiledema (signo tardío, puede estar ausente en HTIC aguda)'},
          ]},
          {tagCls:'t1', tag:'Posición & VA', title:'Medidas Generales Urgentes (Tier 1)',
           items:[
            {cls:'critical', text:'<strong>Cabeza en posición neutra, elevada 30°;</strong> evitar compresión yugular (collar cervical solo si trauma indicado)'},
            {cls:'nursing', text:'ABC + Monitorización completa: SpO₂, ECG, PA, EtCO₂, glucemia, T; 2 accesos IV + analítica urgente'},
            {cls:'critical', text:'<strong>Objetivos ventilatorios:</strong> SpO₂ 94–99% · EtCO₂ 35–40mmHg (normoventilación) · Evitar hipercapnia'},
            {cls:'warn', text:'<strong>Indicaciones de IOT:</strong> GCS ≤8, hipoxia refractaria, herniación aguda, pérdida de reflejos protectores de VA'},
            {cls:'', text:'<strong>SRI (normotenso/hipertenso):</strong> Fentanilo 1–3mcg/kg IV + Rocuronio 1,2mg/kg · Lidocaína 1,5mg/kg IV 3min antes (atenúa respuesta presora)'},
            {cls:'', text:'<strong>SRI (hipotenso):</strong> Ketamina 1–1,5mg/kg IV + Rocuronio 1,2mg/kg'},
            {cls:'critical', text:'<strong>Normoglucemia</strong> (5–10mmol/L) · <strong>Normotermia</strong> (tratar fiebre agresivamente) · Evitar hipovolemia'},
          ]},
          {tagCls:'t2', tag:'Osmoterapia', title:'Terapéutica Hiperosmolar (Tier 2)',
           items:[
            {cls:'critical', text:'<strong>SSH 3% (1ª opción en Pediatría):</strong> 2–6mL/kg IV en 10–20min · puede repetir cada hora hasta Na sérico 145–160mEq/L'},
            {cls:'warn', text:'<strong>Manitol 20%</strong> (alternativa): 0,25–1g/kg IV en 15–30min · reponer volumen perdido por diuresis osmótica'},
            {cls:'critical', text:'<strong>Sedo-analgesia:</strong> Midazolam 1–5mcg/kg/min IV + Morfina 10–40mcg/kg/h · Rocuronio si necesario'},
            {cls:'warn', text:'Si hipotensión → Noradrenalina; objetivo PAM &gt;60–80mmHg (PAM = 1,5 × edad años + 55)'},
            {cls:'', text:'Evitar soluciones hipotónicas y glucosadas; mantener euvolemia'},
          ]},
          {tagCls:'t3', tag:'Imagen & Etiología', title:'TAC Urgente & Tratamiento Dirigido (Tier 3)',
           items:[
            {cls:'critical', text:'<strong>TAC urgente</strong> (una vez estabilizado hemodinámicamente) + contactar Neurocirugía'},
            {cls:'', text:'TCE grave: manitol o SSH 3% + PIC invasiva (si GCS &lt;9 + lesión en TAC) · no dexametasona en TCE'},
            {cls:'', text:'Tumor cerebral / edema vasogénico: Dexametasona 0,25mg/kg/6h IV'},
            {cls:'', text:'Hidrocefalia obstructiva aguda: derivación ventricular urgente (Neurocirugía)'},
            {cls:'warn', text:'Hiperventilación moderada (EtCO₂ 30–35mmHg) solo como medida de rescate temporal en herniación inminente'},
            {cls:'critical', text:'Pentobarbital IV (coma barbitúrico) o hipotermia moderada: solo en UCIP, HTIC refractaria a Tier 1-2'},
          ]},
        ]
      },
      {
        id:'pc-sepsis', cls:'p-sepsis', progKey:'sepsis',
        name:'Sepsis Grave / Shock Séptico', src:'proto_src_ssc', badge:'proto_badge_urgencia',
        sourceNote:'📄 Surviving Sepsis Campaign: Pediatric Guidelines 2020 (PCCM). Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Reconocer', title:'Identificación Precoz del Paciente de Riesgo',
           items:[
            {cls:'', text:'Fiebre (&gt;38°C) o hipotermia (&lt;36°C) con sospecha de infección'},
            {cls:'warn', text:'<strong>Signos de disfunción orgánica:</strong> alteración de consciencia, taquicardia inapropiada, taquipnea, mala perfusión periférica (TRC &gt;2s, pulsos débiles, extremidades frías)'},
            {cls:'critical', text:'<strong>Shock séptico:</strong> hipotensión O mala perfusión persistente tras 20–40mL/kg de fluidos · mortalidad aumenta 7% por cada hora de retraso en ATB'},
            {cls:'', text:'Factores de riesgo: inmunosupresión, enfermedad crónica, catéter central, cirugía reciente, prematuro'},
          ]},
          {tagCls:'t1', tag:'0 – 15 min', title:'Medidas Inmediatas — Hora de Oro',
           items:[
            {cls:'critical', text:'<strong>O₂ a alto flujo</strong> (15L/min mascarilla reservorio) · monitorización completa'},
            {cls:'critical', text:'<strong>2 accesos vasculares periféricos calibrosos</strong> (o IO tras 2–3 intentos fallidos)'},
            {cls:'nursing', text:'<strong>Cultivos ANTES de ATB si no retrasa &gt;45min:</strong> hemocultivo ×2 (periférico + si catéter central), urocultivo, LCR si indicado'},
            {cls:'critical', text:'<strong>ANTIBIÓTICO en la 1ª hora:</strong> Cefotaxima 200mg/kg/día (c/6–8h) O Ceftriaxona 100mg/kg/día (c/12–24h) · añadir Vancomicina 60mg/kg/día si sospecha S.aureus o catéter'},
            {cls:'critical', text:'<strong>1er bolo de fluidos:</strong> SF 0,9% o Ringer Lactato <strong>10–20mL/kg en 5–10min</strong> · (SSC 2020: no superar 40–60mL/kg sin reevaluación continua)'},
            {cls:'', text:'LAB urgente: hemograma, PCR, PCT, lactato, función renal/hepática, coagulación, gases, glucemia'},
          ]},
          {tagCls:'t2', tag:'15 – 60 min', title:'Reevaluación Continua & Fluidos Adicionales',
           items:[
            {cls:'critical', text:'Reevaluar tras cada bolo: FC, PA, TRC, nivel de consciencia, SatO₂, diuresis'},
            {cls:'warn', text:'<strong>Signos de sobrecarga hídrica</strong> (hepatomegalia, crepitantes, SpO₂↓): DETENER fluidos · iniciar soporte vasoactivo'},
            {cls:'warn', text:'2º bolo 10–20mL/kg si persiste mala perfusión sin signos de sobrecarga; reevaluar tras cada bolo'},
            {cls:'', text:'Corregir hipoglucemia, hipocalcemia, anemia (Hb &lt;7g/dL → transfundir)'},
            {cls:'critical', text:'<strong>Contactar UCIP</strong> si shock refractario a 40mL/kg o necesidad de vasoactivos'},
          ]},
          {tagCls:'t3', tag:'Vasoactivos', title:'Shock Refractario a Fluidos',
           items:[
            {cls:'critical', text:'<strong>SHOCK FRÍO</strong> (vasoconstricción, TRC &gt;3s, extremidades frías, pulsos filiformes): <strong>Adrenalina</strong> 0,05–0,3mcg/kg/min IV · titular hasta perfusión adecuada'},
            {cls:'critical', text:'<strong>SHOCK CALIENTE</strong> (vasodilatación, TRC &lt;1s, pulsos saltones, hipotensión): <strong>Noradrenalina</strong> 0,05–0,5mcg/kg/min IV (SSC 2020: 1ª línea en shock vasodilatador)'},
            {cls:'warn', text:'Acceso central urgente (si no disponible, vasoactivos por periférico o IO hasta canalización central)'},
            {cls:'', text:'Considerar Dobutamina 5–15mcg/kg/min si disfunción miocárdica (SSC 2020: añadir a noradrenalina)'},
            {cls:'warn', text:'<strong>Corticoide en shock refractario a catecolaminas:</strong> Hidrocortisona 1–2mg/kg/día perfusión continua (SSC 2020: considerar si no responde a vasoactivos)'},
            {cls:'', text:'Considerar ventilación mecánica si trabajo respiratorio excesivo o GCS ≤8'},
          ]},
          {tagCls:'t4', tag:'Monitorizar', title:'Reasessment Continuo & Objetivos',
           items:[
            {cls:'nursing', text:'FC, PA invasiva, TRC, SpO₂, diuresis horaria (objetivo &gt;1mL/kg/h), lactato seriado (objetivo &lt;2mmol/L)'},
            {cls:'nursing', text:'Gasimetría + lactato cada 30–60min en las primeras horas · índice de SvcO₂ si catéter central'},
            {cls:'warn', text:'Revisar ATB a las 48–72h según cultivos · desescalada precoz si es posible'},
            {cls:'', text:'Ecocardiografía funcional para evaluar función miocárdica y guiar vasoactivos'},
            {cls:'critical', text:'Transferencia UCIP si: shock refractario, necesidad de vasoactivos, ventilación mecánica, disfunción multiorgánica'},
          ]},
        ]
      },
      {
        id:'pc-pcr', cls:'p-pcr', progKey:'pcr',
        name:'PCR Pediátrica — RCP Avanzada', src:'proto_src_erc', badge:'proto_badge_urgencia',
        sourceNote:'📄 ERC Paediatric Life Support Guidelines 2021 (Resuscitation 2021;161:327–387). Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Identificar PCR', title:'Reconocimiento e Inicio de RCP',
           items:[
            {cls:'critical', text:'<strong>Inconsciente + no respira con normalidad</strong> (o apnea, gasping) → ACTIVAR EMERGENCIAS (112) + DESFIBRILADOR'},
            {cls:'critical', text:'<strong>Iniciar RCP inmediatamente:</strong> 15 compresiones torácicas + 2 ventilaciones (ratio 15:2 con 2 reanimadores) · Solo reanimador: 30:2'},
            {cls:'critical', text:'<strong>Compresiones:</strong> 1/3 del diámetro AP del tórax · frecuencia 100–120/min · mínimas interrupciones · permitir reexpansión completa'},
            {cls:'warn', text:'<strong>Ventilación:</strong> mascarilla + bolsa autoinflable · O₂ al 100% · volumen visible elevación del tórax · relación Ti:Te 1:2'},
            {cls:'nursing', text:'Tiempo desde inicio de PCR, causas reversibles (4H 4T), peso estimado para cálculo de dosis'},
          ]},
          {tagCls:'t1', tag:'Ritmo', title:'Análisis del Ritmo — Desfibrilable vs No Desfibrilable',
           items:[
            {cls:'critical', text:'<strong>RITMO DESFIBRILABLE</strong> (FV/TVSP): Descarga <strong>4J/kg</strong> (máx 360J monofásico · bifásico según fabricante) · reanuda RCP 2min SIN parar a comprobar pulso'},
            {cls:'critical', text:'Tras 3ª descarga: <strong>Adrenalina IV/IO 0,01mg/kg</strong> (máx 1mg) + <strong>Amiodarona 5mg/kg</strong> (máx 300mg) en bolo IV rápido · repetir adrenalina cada 3–5min'},
            {cls:'critical', text:'Tras 5ª descarga: 2ª dosis <strong>Amiodarona 5mg/kg</strong> (máx 150mg) · alternativa Lidocaína 1mg/kg'},
            {cls:'critical', text:'<strong>RITMO NO DESFIBRILABLE</strong> (Asistolia/AESP): <strong>Adrenalina IV/IO 0,01mg/kg</strong> inmediatamente (no esperar 3 ciclos) · repetir cada 3–5min'},
            {cls:'', text:'Identificar y tratar causas reversibles durante RCP'},
          ]},
          {tagCls:'t2', tag:'4H 4T', title:'Causas Reversibles — Tratar Simultáneamente',
           items:[
            {cls:'warn', text:'<strong>4H:</strong> Hipoxia → ventilación con O₂ 100% · Hipovolemia → bolo SF 10mL/kg rápido · Hipo/Hiperpotasemia → gasimetría urgente · Hipotermia → recalentamiento'},
            {cls:'warn', text:'<strong>4T:</strong> Neumotórax a Tensión → punción descompresiva · Taponamiento → pericardiocentesis · Tóxicos → antídoto · TEP Masivo → fibrinólisis'},
            {cls:'nursing', text:'Acceso IO si no hay IV en &lt;1min: localización preferida tibia proximal anteromedial · confirmar posición'},
            {cls:'', text:'Glucemia: si &lt;60mg/dL → Glucosa 10% 2mL/kg IV/IO'},
          ]},
          {tagCls:'t3', tag:'ROSC', title:'Cuidados Post-PCR — Tras Recuperación de Circulación',
           items:[
            {cls:'critical', text:'<strong>Evitar hiperoxia:</strong> ajustar FiO₂ para SpO₂ 94–98%; <strong>Evitar hipercapnia:</strong> EtCO₂ 35–40mmHg'},
            {cls:'critical', text:'<strong>PA objetivo:</strong> PAM ≥ percentil 5 para edad · si hipotensión: bolo SF 10mL/kg + Adrenalina 0,05mcg/kg/min → titular'},
            {cls:'critical', text:'<strong>Temperatura objetivo:</strong> 32–36°C durante ≥24h (no hipotermia activa si &lt;1 mes salvo EHI) · tratar fiebre agresivamente'},
            {cls:'', text:'Glucemia: 5–10mmol/L (90–180mg/dL) · evitar hipoglucemia'},
            {cls:'warn', text:'ECG 12 derivaciones urgente · ecocardiografía funcional · considerar coronariografía si causa isquémica'},
            {cls:'nursing', text:'Traslado UCIP · monitorización continua · EEG si sospecha de convulsiones subclínicas'},
          ]},
        ]
      },
      {
        id:'pc-anafilaxia', cls:'p-anafilaxia', progKey:'anafilaxia',
        name:'Anafilaxia', src:'proto_src_seup', badge:'proto_badge_urgencia',
        sourceNote:'📄 SEUP Protocolo Anafilaxia 2021 + WAO/EAACI Guidelines 2020. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnóstico', title:'Criterios Diagnósticos de Anafilaxia',
           items:[
            {cls:'critical', text:'<strong>Criterio 1:</strong> Inicio agudo con afectación cutánea/mucosa + ≥1 de: compromiso respiratorio, hipotensión, disfunción orgánica'},
            {cls:'critical', text:'<strong>Criterio 2:</strong> Exposición a alérgeno conocido + ≥2 de: afectación cutánea, compromiso respiratorio, hipotensión, síntomas GI persistentes'},
            {cls:'warn', text:'<strong>Signos de gravedad:</strong> estridor, broncoespasmo grave, hipotensión, alteración de consciencia, disfagia/disfonía severas'},
            {cls:'', text:'Diagnóstico diferencial: asma, angioedema hereditario, reacción vasovagal, crisis de pánico, APLASIA'},
          ]},
          {tagCls:'t1', tag:'ADRENALINA', title:'1ª Línea — Adrenalina IM (SIEMPRE PRIMERO)',
           items:[
            {cls:'critical', text:'<strong>ADRENALINA IM 0,01mg/kg</strong> (máx 0,5mg) · cara anterolateral del muslo · puede repetir cada 5–15min si no mejora'},
            {cls:'critical', text:'<strong>POSICIÓN:</strong> decúbito supino + piernas elevadas (si hipotensión) · sentado si distrés respiratorio · NO poner en pie'},
            {cls:'critical', text:'O₂ a alto flujo (15L/min mascarilla reservorio); monitorizar SpO₂, FC, PA'},
            {cls:'warn', text:'Acceso IV/IO; bolo SF 10–20mL/kg si hipotensión (hasta 40mL/kg con reevaluación continua)'},
            {cls:'nursing', text:'Retirar el alérgeno si es posible (picadura: extraer aguijón sin apretar) · registrar hora de inicio y de administración de adrenalina'},
          ]},
          {tagCls:'t2', tag:'2ª Línea', title:'Fármacos Complementarios (NUNCA antes de adrenalina)',
           items:[
            {cls:'warn', text:'<strong>Corticoide:</strong> Metilprednisolona 1–2mg/kg IV (máx 125mg) O Hidrocortisona 5mg/kg IV · útil para prevenir reacción bifásica'},
            {cls:'warn', text:'<strong>Antihistamínico H1:</strong> Dexclorfeniramina 0,15–0,2mg/kg IV (máx 5mg) · solo síntomas cutáneos · no previene compromiso hemodinámico'},
            {cls:'', text:'Broncoespasmo persistente: Salbutamol nebulizado 2,5–5mg cada 20min (no sustituye adrenalina)'},
            {cls:'', text:'Glucagón 20–30mcg/kg IV (máx 1mg): si el paciente toma β-bloqueantes y no responde a adrenalina'},
          ]},
          {tagCls:'t3', tag:'Refractaria', title:'Anafilaxia Refractaria a Adrenalina IM',
           items:[
            {cls:'critical', text:'<strong>Adrenalina IV:</strong> bolo 0,01mg/kg IV muy lento (10min) · SOLO si colapso circulatorio con acceso IV · monitorización continua ECG'},
            {cls:'critical', text:'<strong>Perfusión de adrenalina:</strong> 0,05–0,5mcg/kg/min IV · titular según respuesta'},
            {cls:'warn', text:'Noradrenalina IV si hipotensión refractaria a adrenalina: 0,05–0,5mcg/kg/min · considerar vasopresina'},
            {cls:'critical', text:'<strong>Contactar UCIP;</strong> preparar para IOT si deterioro de VA (estridor, angioedema progresivo)'},
            {cls:'nursing', text:'Monitorización durante mínimo 4–8h (anafilaxia leve) a 24h (grave) por riesgo de reacción bifásica'},
          ]},
        ]
      },
      {
        id:'pc-asma', cls:'p-asma', progKey:'asma',
        name:'Crisis Asmática', src:'proto_src_gema', badge:'proto_badge_urgencia',
        sourceNote:'📄 GEMA 5.3 (Guía Española para el Manejo del Asma 2023) + SEUP Protocolo Asma 2022. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Clasificar', title:'Valoración de la Gravedad — Score de Pulmonary Index o Wood-Downes',
           items:[
            {cls:'', text:'<strong>Leve:</strong> SpO₂ &gt;95%, habla frases completas, sin uso músculos accesorios, sibilancias leves, FC &lt;100 (lactante &lt;160)'},
            {cls:'warn', text:'<strong>Moderada:</strong> SpO₂ 91–95%, frases cortas, uso músculos accesorios, sibilancias generalizadas, FC 100–120 (lactante 160–180)'},
            {cls:'critical', text:'<strong>Grave:</strong> SpO₂ &lt;91%, monosílabos o sin habla, tiraje intenso, sibilancias ±ausentes (tórax silente = GRAVE), FC &gt;120 (lactante &gt;180)'},
            {cls:'critical', text:'<strong>Casi fatal:</strong> cianosis, alteración de consciencia, bradicardia, silencio auscultatorio → IOT inminente'},
          ]},
          {tagCls:'t1', tag:'1ª Línea', title:'Tratamiento Inicial (Toda Gravedad)',
           items:[
            {cls:'critical', text:'<strong>O₂</strong> para SpO₂ &gt;94%; monitorización continua SpO₂, FC, FR'},
            {cls:'critical', text:'<strong>Salbutamol nebulizado dosis alta:</strong> 0,15mg/kg (mín 2,5mg · máx 5mg) cada 20min las primeras 3 dosis · en crisis grave: continuo o cada 20min sin límite'},
            {cls:'critical', text:'<strong>Ipratropio nebulizado</strong> (añadir en moderada-grave): 0,25mg (&lt;20kg) ó 0,5mg (≥20kg) · junto con salbutamol · 3 dosis, luego suspender'},
            {cls:'critical', text:'<strong>Corticoide sistémico precoz</strong> (&lt;1h del inicio): Metilprednisolona 1–2mg/kg/6h IV (máx 60mg/dosis) · O Prednisolona VO 1–2mg/kg/día (máx 40mg) si leve-moderada'},
          ]},
          {tagCls:'t2', tag:'2ª Línea', title:'Crisis Moderada-Grave Sin Respuesta a 1ª Línea',
           items:[
            {cls:'critical', text:'<strong>Sulfato de Magnesio IV</strong> (GEMA 2022 — 1ª elección 2ª línea): 40–50mg/kg (máx 2g) en SF, infundir en 20–30min · monitorizar PA y reflejos'},
            {cls:'warn', text:'<strong>Heliox</strong> (Helio 70%/O₂ 30%): reducción del trabajo respiratorio · alternativa si SpO₂ aceptable con alto flujo O₂ · no disponible en todos los centros'},
            {cls:'warn', text:'<strong>VNI (CPAP/BiPAP):</strong> considerar en moderada-grave con insuficiencia respiratoria · titular IPAP/EPAP'},
            {cls:'', text:'Aminofilina IV (3ª línea): carga 5mg/kg en 20–30min + perfusión 0,9mg/kg/h · solo si no disponibles otras opciones · monitorizar niveles'},
          ]},
          {tagCls:'t3', tag:'Crisis Grave', title:'Crisis Grave — Sin Respuesta o Deterioro',
           items:[
            {cls:'critical', text:'<strong>Salbutamol IV:</strong> carga 5–15mcg/kg en 10–20min + perfusión 1–5mcg/kg/min · solo en crisis grave sin respuesta a nebulización · UCIP'},
            {cls:'critical', text:'<strong>Contactar UCIP;</strong> preparar intubación si: parada respiratoria inminente, GCS &lt;14, PCO₂ &gt;65mmHg, SpO₂ &lt;90% a pesar de O₂ alto flujo'},
            {cls:'warn', text:'<strong>IOT en asma grave:</strong> SRI con Ketamina 1,5mg/kg + Rocuronio 1,2mg/kg · evitar propofol (broncoespasmo) · volumen tidal 6mL/kg · tiempo inspiratorio corto, FR baja (6–12rpm)'},
            {cls:'nursing', text:'Gasimetría cada 30–60min en crisis grave · SpO₂ continua · balance hídrico (riesgo SIADH con salbutamol IV)'},
          ]},
        ]
      },
      {
        id:'pc-cad', cls:'p-cad', progKey:'cad',
        name:'Cetoacidosis Diabética (CAD)', src:'proto_src_ispad', badge:'proto_badge_urgencia',
        sourceNote:'📄 ISPAD Clinical Practice Consensus Guidelines 2022 — Diabetic Ketoacidosis. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnóstico', title:'Criterios Diagnósticos & Clasificación de Gravedad',
           items:[
            {cls:'critical', text:'<strong>Diagnóstico CAD:</strong> Glucemia &gt;200mg/dL + pH &lt;7,30 O HCO₃ &lt;15mEq/L + cetonemia &gt;3mmol/L (o cetonuria &gt;2+)'},
            {cls:'', text:'<strong>Leve:</strong> pH 7,20–7,30 · HCO₃ 10–15 · Moderada: pH 7,10–7,20 · HCO₃ 5–10 · <strong>Grave: pH &lt;7,10 · HCO₃ &lt;5</strong>'},
            {cls:'warn', text:'Calcular déficit de fluidos estimado: Leve 5% · Moderada 7% · Grave 10% del peso (máx 8% en &gt;5 años por riesgo edema cerebral)'},
            {cls:'critical', text:'LAB urgente: glucemia, gasimetría, electrolitos (K⁺ CRÍTICO), función renal, hemograma, cetonemia; ECG si K⁺ anormal'},
          ]},
          {tagCls:'t1', tag:'Fluidos', title:'Reanimación con Fluidos (ISPAD 2022)',
           items:[
            {cls:'critical', text:'<strong>Si shock:</strong> SF 0,9% 10mL/kg en 30–60min · repetir si persiste shock · EVITAR &gt;20mL/kg total (riesgo edema cerebral)'},
            {cls:'critical', text:'<strong>Rehidratación:</strong> SF 0,9% → déficit estimado + necesidades de mantenimiento · distribuir uniformemente en <strong>48h</strong> (no 24h) (ISPAD 2022)'},
            {cls:'warn', text:'<strong>Cambiar a SF 0,45% + Glucosa 5% cuando glucemia &lt;250mg/dL</strong> (para evitar hipoglucemia mientras persiste cetonemia)'},
            {cls:'critical', text:'<strong>Potasio SIEMPRE:</strong> si K⁺ &lt;5,5mEq/L y diuresis establecida → añadir 40mEq/L al suero · si K⁺ &lt;3,5 → iniciar reposición antes de insulina'},
            {cls:'nursing', text:'Control de glucemia horario; control de electrolitos cada 2–4h; balance hídrico estricto; diuresis horaria'},
          ]},
          {tagCls:'t2', tag:'Insulina', title:'Insulinoterapia IV',
           items:[
            {cls:'critical', text:'<strong>Iniciar insulina 1–2h DESPUÉS de iniciar fluidos</strong> (esperar que K⁺ &gt;3,5mEq/L)'},
            {cls:'critical', text:'<strong>Dosis:</strong> Insulina rápida IV 0,05–0,1 U/kg/h · <strong>NO bolo de insulina</strong> (ISPAD 2022 — aumenta riesgo de edema cerebral)'},
            {cls:'warn', text:'Objetivo: descenso de glucemia 2–5mmol/L/h (36–90mg/dL/h); NO bajar más de 5mmol/L/h'},
            {cls:'warn', text:'Mantener insulina hasta resolución de cetoacidosis (pH&gt;7,30 + HCO₃&gt;15 + cetonemia &lt;0,5mmol/L) incluso si glucemia normal'},
            {cls:'', text:'Transición a insulina subcutánea: cuando tolera vía oral + glucemia estable · solapar 1–2h con bomba IV'},
          ]},
          {tagCls:'t3', tag:'Complicaciones', title:'Edema Cerebral — Complicación Más Grave',
           items:[
            {cls:'critical', text:'<strong>SOSPECHAR EDEMA CEREBRAL:</strong> cefalea intensa durante tratamiento, deterioro neurológico, alteración de consciencia, convulsiones, anisocoria'},
            {cls:'critical', text:'<strong>TRATAMIENTO URGENTE:</strong> Manitol 0,5–1g/kg IV en 15–30min O SSH 3% 2,5–5mL/kg IV en 15–30min · ambos igualmente eficaces (ISPAD 2022)'},
            {cls:'critical', text:'Reducir velocidad de infusión de fluidos al 50% · elevar cabecera 30° · contactar UCIP y Neurocirugía'},
            {cls:'warn', text:'TC craneal solo si: sospecha de otra causa (hemorragia, trombosis) · no retrasar tratamiento para realizar TC'},
            {cls:'nursing', text:'Escala de Glasgow horaria · control neurológico estricto · registrar diuresis, osmolalidad · avisar inmediatamente ante cualquier cambio neurológico'},
          ]},
        ]
      },
      {
        id:'pc-iot', cls:'p-iot', progKey:'iot',
        name:'Intubación Orotraqueal — Secuencia Rápida (SRI)', src:'proto_src_secip', badge:'proto_badge_urgencia',
        sourceNote:'📄 SECIP — Protocolo SRI 2023 (Sociedad Española de Cuidados Intensivos Pediátricos). Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Preparación', title:'Preparación: Mnemotécnico MSMAIDS',
           items:[
            {cls:'nursing', text:'<strong>M — Monitorización:</strong> ECG, SpO₂, TA, ETCO₂ conectados y en funcionamiento antes de iniciar'},
            {cls:'nursing', text:'<strong>S — Succión:</strong> aspirador conectado y verificado; sonda del tamaño adecuado'},
            {cls:'critical', text:'<strong>M — Material vía aérea:</strong> TOT adecuado (sin balón + 0,5 reserva), fiador, laringoscopio verificado, mascarilla facial + ambú con reservorio O₂'},
            {cls:'', text:'<strong>A — Acceso IV/IO:</strong> verificar permeabilidad; IO preparado si acceso difícil'},
            {cls:'critical', text:'<strong>I — Inducción:</strong> calcular y preparar dosis según peso (ver pestaña RCP)'},
            {cls:'nursing', text:'<strong>D — Decúbito:</strong> posición de olfateo (lactante: sin almohada; >2a: almohada bajo occipucio)'},
            {cls:'', text:'<strong>S — SpO₂ + preoxigenación:</strong> O₂ alto flujo 3–5 min (mascarilla reservorio 15L/min) · objetivo SpO₂ ≥95%'},
          ]},
          {tagCls:'t1', tag:'Premedicación', title:'Premedicación (2–3 min antes)',
           items:[
            {cls:'warn', text:'<strong>Atropina 0,02mg/kg IV</strong> (mín 0,1mg / máx 0,5mg): &lt;1 año, bradicardia previa, uso de succinilcolina'},
            {cls:'', text:'<strong>Fentanilo 1–3 mcg/kg IV lento</strong> (2–3min): analgesia + atenuación respuesta hemodinámica; omitir si inestabilidad hemodinámica'},
            {cls:'warn', text:'Lidocaína 1,5mg/kg solo en HTEC/PIC elevada — evidencia controvertida; no uso rutinario'},
          ]},
          {tagCls:'t2', tag:'Inducción + Relajación', title:'Secuencia Farmacológica',
           items:[
            {cls:'critical', text:'<strong>Inductor (elegir según situación clínica):</strong>'},
            {cls:'', text:'· <strong>Ketamina</strong> 1–2mg/kg IV: elección en shock, asma, broncoespasmo · mantiene reflejos · ↑ secreciones (+ atropina)'},
            {cls:'', text:'· <strong>Propofol</strong> 1–4mg/kg IV: perfil neurológico favorable, anticonvulsivante · contraindicado en inestabilidad hemodinámica o &lt;1 mes'},
            {cls:'', text:'· <strong>Midazolam</strong> 0,1–0,3mg/kg IV: sedación más lenta · segunda línea'},
            {cls:'critical', text:'<strong>Relajante muscular — INMEDIATAMENTE después del inductor:</strong>'},
            {cls:'critical', text:'· <strong>Rocuronio 1,2mg/kg IV</strong> (ISR): elección actual · inicio ~60 seg · reversión con Sugamadex 16mg/kg'},
            {cls:'warn', text:'· Succinilcolina 1–2mg/kg IV: inicio 30–45 seg · contraindicado en hipercaliemia, quemados >48h, distrofia muscular'},
          ]},
          {tagCls:'t3', tag:'Laringoscopia', title:'Técnica de Intubación',
           items:[
            {cls:'critical', text:'<strong>Pala laringoscopio:</strong> neonato/lactante → Miller nº 0–1 · preescolar/escolar → Miller o Macintosh nº 2 · adolescente → Macintosh nº 3'},
            {cls:'', text:'Maniobra BURP si exposición difícil: Backward-Upward-Rightward Pressure sobre cartílago tiroides · pedir a asistente'},
            {cls:'critical', text:'Intento máximo <strong>30 seg</strong> · si falla: ventilar con mascarilla y reintentar · máx 3 intentos → protocolo vía aérea difícil'},
            {cls:'nursing', text:'Confirmar posición: expansión torácica simétrica + capnografía (ETCO₂ &gt;35) + auscultación bilateral + Rx tórax'},
            {cls:'', text:'Distancia TOT a comisura labial según peso (ver panel RCP) · fijar con esparadrapo o dispositivo de fijación'},
          ]},
          {tagCls:'t4', tag:'Post-IOT', title:'Cuidados Post-Intubación',
           items:[
            {cls:'critical', text:'Programar VM: Vt 6–8mL/kg · PEEP 4–5cmH₂O · FR según edad · FiO₂ inicial 1,0 · objetivo SpO₂ 94–98%'},
            {cls:'critical', text:'Sedoanalgesia de mantenimiento: Midazolam 0,05–0,2mg/kg/h + Morfina 10–40mcg/kg/h o Fentanilo 1–4mcg/kg/h'},
            {cls:'warn', text:'Hipotensión post-IOT: bolo SF 10–20mL/kg + evaluar inicio de vasopresores (Noradrenalina o Adrenalina)'},
            {cls:'nursing', text:'Registrar: hora, operador, nº intentos, nº TOT, distancia a comisura, ETCO₂ de confirmación, presión neumotaponador'},
            {cls:'nursing', text:'Gasimetría 30 min post-IOT · Rx tórax urgente · valorar SNG para descompresión gástrica'},
          ]},
        ]
      },
      {
        id:'pc-mist', cls:'p-mist', progKey:'mist',
        name:'Surfactante MIST/LISA — SDR Neonatal', src:'proto_src_escrc', badge:'proto_badge_neonatal',
        sourceNote:'📄 European Consensus Guidelines on RDS Management 2023 (Vyas Dhar et al.) · Recomendações SPN 2022. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Indicación', title:'Criterios de Administración de Surfactante',
           items:[
            {cls:'critical', text:'<strong>Indicación profiláctica:</strong> RNPT ≤28 SG — administración en los primeros 30 min de vida'},
            {cls:'critical', text:'<strong>Indicación terapéutica:</strong> RNPT con SDR clínico + necesidad de FiO₂ ≥0,3 en CPAP/HFNC para SpO₂ 90–95% + Rx/Eco compatible'},
            {cls:'warn', text:'<strong>CPAP nasal</strong> (PEEP 5–6 cmH₂O) o HFNC como soporte antes y durante el procedimiento'},
            {cls:'', text:'Corticoterapia antenatal: verificar si se administró (reduce necesidad de surfactante y mejora respuesta)'},
            {cls:'', text:'<strong>Preparación:</strong> surfactante templado a temperatura corporal · jeringa precargada · catéter fino (SNG nº6 o sonda vascular Lyomark)'},
          ]},
          {tagCls:'t1', tag:'Preparar', title:'Material & Dosis',
           items:[
            {cls:'critical', text:'<strong>Dosis:</strong> Poractant alfa (Curosurf®) <strong>200 mg/kg</strong> 1.ª dosis · dosis repetida 100 mg/kg si persisten criterios (máx 3 dosis/24h)'},
            {cls:'nursing', text:'Calcular volumen: Curosurf® 80 mg/mL → 200 mg/kg ÷ 80 = <strong>2,5 mL/kg</strong> · 100 mg/kg = 1,25 mL/kg'},
            {cls:'nursing', text:'Material necesario: laringoscopio + pala recta (neonatal) + Magill (LISA) · catéter fino 40–45 cm · jeringa 5 mL · monitorización (SpO₂ + FC continua)'},
            {cls:'', text:'Monitorización continua: SpO₂ y FC. Tener disponible ventilación con presión positiva (VPP) y personal adicional'},
            {cls:'warn', text:'<strong>Sedación/analgesia:</strong> Sacarosa 25% 0,5–1 mL oral 2 min antes · discutir premedicación adicional según protocolo local (no sedantes sistémicos de rutina en MIST)'},
          ]},
          {tagCls:'t2', tag:'Técnica', title:'Procedimiento MIST (Hobart / Dargaville)',
           items:[
            {cls:'critical', text:'<strong>Posición:</strong> RN en posición de olfateo (sniffing position) · CPAP activo durante todo el procedimiento'},
            {cls:'critical', text:'<strong>Laringoscopia directa:</strong> visualizar cuerdas vocales · introducir catéter fino 1–1,5 cm por debajo de las cuerdas sin intubar'},
            {cls:'nursing', text:'Confirmar posición: pequeña cantidad de aire antes del surfactante (observar ligero movimiento torácico simétrico)'},
            {cls:'critical', text:'<strong>Instilación:</strong> surfactante lento en 1–2 min (0,5–1 mL cada 15–30 s) · NO retirar CPAP · si desaturación o FC&lt;100 → pausar y VPP'},
            {cls:'', text:'Si reflujo de surfactante: pausar, aspirar suavemente con la sonda, y completar dosis tras estabilización'},
            {cls:'nursing', text:'Retirar catéter lentamente al terminar · mantener CPAP (PEEP 6–7 cmH₂O) · registrar hora, dosis, operador y número de intentos'},
          ]},
          {tagCls:'t3', tag:'Post-MIST', title:'Monitorización & Seguimiento',
           items:[
            {cls:'critical', text:'<strong>CPAP post-procedimiento:</strong> mantener PEEP 5–7 cmH₂O · FiO₂ según SpO₂ objetivo (90–95%) · reducir FiO₂ progresivamente'},
            {cls:'warn', text:'<strong>Fracaso MIST:</strong> necesidad de intubación si BSA ≥6 o FiO₂ &gt;60% mantenida o apneas frecuentes → cambiar a INSURE o VMI'},
            {cls:'', text:'Gasimetría capilar 30–60 min post-procedimiento; Rx tórax en 4h o antes si deterioro'},
            {cls:'', text:'<strong>Cafeína:</strong> iniciar dosis de ataque 20 mg/kg IV → mantenimiento 5 mg/kg/24h lo antes posible (reduce apnea y necesidad de VMI)'},
            {cls:'nursing', text:'Repetir surfactante (100 mg/kg) si FiO₂ ≥0,3 en CPAP a las 6–12h (máx 3 dosis/24h) · documentar en historia clínica'},
          ]},
        ]
      },
      {
        id:'pc-bronquiolitis', cls:'p-bronquiolitis', progKey:'bronquiolitis',
        name:'Bronquiolitis Aguda', src:'proto_src_bronq', badge:'proto_badge_urgencia',
        sourceNote:'📄 Consenso Bronquiolitis Aguda AEP/SEUP 2023 · AAP Clinical Practice Guideline 2014. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Evaluación', title:'Clasificación de Gravedad',
           items:[
            {cls:'critical', text:'<strong>Criterios de gravedad (requieren hospitalización):</strong> FR >70 rpm (lactante) o >50 (niño), SpO₂ &lt;94% en aire, trabajo respiratorio grave (retracciones marcadas, aleteo nasal, quejido), apneas, dificultad para alimentarse (<50% de la toma habitual)'},
            {cls:'warn', text:'<strong>Escala clínica recomendada:</strong> PRIB o Wood-Downes-Ferres simplificada. Puntuación basal + respuesta a broncodilatador (si se usa)'},
            {cls:'', text:'Factores de riesgo para gravedad: edad &lt;6 semanas, prematuridad, cardiopatía congénita, inmunodeficiencia, displasia broncopulmonar'},
            {cls:'nursing', text:'Monitorización: SpO₂ continua si hospitalizado · FR y trabajo respiratorio cada 2–4h · Temperatura · Tolerancia oral'},
          ]},
          {tagCls:'t1', tag:'Tratamiento', title:'Medidas Terapéuticas',
           items:[
            {cls:'critical', text:'<strong>Pilar 1 — Soporte respiratorio:</strong> O₂ para SpO₂ ≥94% · HFNC si SpO₂ &lt;94% con GN/MV o trabajo resp. moderado-grave · CPAP si fracasa HFNC'},
            {cls:'critical', text:'<strong>Pilar 2 — Hidratación:</strong> ≥50% toma → continuar vía oral con tomas más frecuentes y menores. &lt;50% → SNG. Incapaz de mantener → IV a necesidades basales'},
            {cls:'warn', text:'<strong>Aspiración de secreciones nasales:</strong> previa a cada toma y cada 4–6h · irrigación nasal con SF previamente · no aspiración profunda rutinaria'},
            {cls:'warn', text:'<strong>Adrenalina nebulizada:</strong> considerar en hospitalizado con SpO₂ borde o trabajo resp. moderado — solo si respuesta positiva en 20 min. Dosis: 0,1 mL/kg solución 1:1000, máx 3 mL (diluir a 4 mL SF)'},
            {cls:'', text:'<strong>NO indicados de rutina:</strong> salbutamol, corticoides sistémicos o inhalados, antibióticos (salvo coinfección bacteriana), fisioterapia respiratoria'},
          ]},
          {tagCls:'t2', tag:'Ingreso/UCI', title:'Criterios de Ingreso y Escalada',
           items:[
            {cls:'critical', text:'<strong>Criterios UCI pediátrica:</strong> apnea recurrente, SpO₂ &lt;92% con HFNC FiO₂ ≥50%, trabajo respiratorio grave progresivo, FR &gt;80 rpm sostenida, signos de fallo respiratorio inminente'},
            {cls:'warn', text:'<strong>HFNC (Cánulas Nasales de Alto Flujo):</strong> 1.ª línea soporte respiratorio en bronquiolitis moderada-grave · flujo 1–3 L/kg/min (máx 2 L/kg/min &lt;1 año, máx 40 L/min en mayores) · FiO₂ según necesidad'},
            {cls:'nursing', text:'Escala de cuidados de enfermería cada 4h: signos de dificultad respiratoria, tolerancia oral, FR/SpO₂, necesidad de aspiración'},
            {cls:'', text:'CPAP nasal: PEEP 5–7 cmH₂O · considerar en fracaso HFNC · intubación si no mejora con CPAP'},
          ]},
          {tagCls:'t3', tag:'Alta', title:'Criterios de Alta y Seguimiento',
           items:[
            {cls:'', text:'SpO₂ ≥94% en aire ambiental durante 4h (incluyendo sueño y alimentación) · FR dentro de parámetros normales para la edad · tolerancia oral &gt;50% de la ingesta habitual · sin apneas en &gt;8h'},
            {cls:'nursing', text:'Educación parental: signos de alarma (apnea, cianosis, dificultad para respirar, no se alimenta), limpieza nasal con SF, posición (30º con cuello neutro), evitar tabaquismo pasivo'},
            {cls:'warn', text:'Seguimiento: pediatra de atención primaria en 24–48h si alta precoz · urgencias si SpO₂ &lt;95% o empeoramiento'},
          ]},
        ]
      },
      {
        id:'pc-meningitis', cls:'p-meningitis', progKey:'meningitis',
        name:'Meningitis Bacteriana Aguda', src:'proto_src_mening', badge:'proto_badge_urgencia',
        sourceNote:'📄 SEUP 2022 · ESCMID Bacterial Meningitis Guidelines 2016 · ECDC Surveillance 2023. Actualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Sospecha', title:'Diagnóstico & Inicio Urgente',
           items:[
            {cls:'critical', text:'<strong>Signos de alarma (iniciar protocolo inmediatamente):</strong> rigidez de nuca, Kernig/Brudzinski positivos, petequias/púrpura no blanqueable, alteración del nivel de conciencia, fotofobia, vómitos en proyectil + cefalea intensa'},
            {cls:'critical', text:'<strong>Petequias + fiebre = meningocococia hasta demostrar lo contrario.</strong> No retrasar ATB para realizar PL si: hernia cerebral inminente, estado circulatorio inestable, trombocitopenia &lt;100.000, coagulopatía, infección cutánea en zona PL'},
            {cls:'warn', text:'<strong>Punción lumbar urgente</strong> si no hay contraindicación: presión apertura, citoquímica, Gram, cultivo, látex/PCR multiplex (FilmArray Meningitis/Encephalitis)'},
            {cls:'nursing', text:'Monitorización neurológica horaria: GCS/AVPU, pupilas, FC, TA, FR, SpO₂ · Acceso venoso periférico × 2 · Analítica urgente: hemograma, PCR, PCT, coagulación, hemocultivo × 2, glucemia'},
          ]},
          {tagCls:'t1', tag:'ATB Empírico', title:'Antibioterapia Empírica Urgente',
           items:[
            {cls:'critical', text:'<strong>ATB empírico ANTES de PL</strong> si está contraindicada o retraso &gt;30 min. Objetivo: ATB &lt;60 min desde sospecha clínica'},
            {cls:'critical', text:'<strong>&lt;3 meses:</strong> Ampicilina 200 mg/kg/día IV (c/6h) + Cefotaxima 200 mg/kg/día IV (c/6h). ⚠️ Cubrir Listeria y SGB'},
            {cls:'critical', text:'<strong>3 meses – 18 años:</strong> Ceftriaxona 80–100 mg/kg/día IV (c/12h · máx 4 g/día). Alternativa: Cefotaxima 200 mg/kg/día (c/6h · máx 12 g/día)'},
            {cls:'warn', text:'<strong>Dexametasona:</strong> 0,15 mg/kg/6h IV (máx 10 mg/dosis) × 4 días. Iniciar 15–30 min ANTES o simultáneamente con ATB — reduce secuelas neurológicas (sordera) en meningitis H. influenzae y neumocócica'},
            {cls:'warn', text:'<strong>SAMR o alergia β-lactámicos:</strong> Vancomicina 15 mg/kg IV c/6h + Meropenem 120 mg/kg/día c/8h · discutir con infectología/intensivista'},
          ]},
          {tagCls:'t2', tag:'Complicaciones', title:'Monitorización & Complicaciones',
           items:[
            {cls:'critical', text:'<strong>HTIC:</strong> elevar cabecero 30° · manejo guiado por monitorización PIC si disponible · manitol 0,5–1 g/kg IV o NaCl 3% 2–5 mL/kg en 10–20 min si HIC grave · no fluidos hipotónicos'},
            {cls:'critical', text:'<strong>Choque séptico (meningocococia):</strong> SF 10–20 mL/kg IV rápido · repetir si precisa · inicio vasopresores precoz (noradrenalina 0,05–1 mcg/kg/min) si choque refractario a volumen'},
            {cls:'warn', text:'<strong>Crisis convulsivas:</strong> Diazepam IV 0,3 mg/kg o Midazolam IN 0,3 mg/kg de inicio · Levetiracetam 20–40 mg/kg carga si persiste · descartar SIADH e hipoglucemia'},
            {cls:'', text:'<strong>SIADH:</strong> restricción hídrica 50–60 mL/kg/día si Na⁺ &lt;130 mEq/L · NaCl 3% si Na⁺ &lt;120 mEq/L o síntomas neurológicos · corrección máx 0,5 mEq/L/h'},
            {cls:'nursing', text:'Aislamiento respiratorio (gotículas) × 24h tras inicio ATB efectivo · Quimioprofilaxis contactos meningococo: rifampicina 4 dosis o ciprofloxacino dosis única VO · notificación epidemiológica urgente'},
          ]},
          {tagCls:'t3', tag:'Seguimiento', title:'Ajuste ATB & Secuelas',
           items:[
            {cls:'', text:'<strong>Ajuste ATB según agente identificado:</strong> neumococo sensible → penicilina G 250.000 UI/kg/día · meningococo → penicilina G · H. influenzae → ampicilina si sensible · duración: neumococo 10–14d, meningococo 5–7d, H. influenzae 7–10d'},
            {cls:'warn', text:'<strong>Audimetría antes del alta</strong> o en 4–6 semanas: la hipoacusia es la secuela más frecuente (10–30% neumococo). Valoración neurológica y del desarrollo a los 3 y 6 meses'},
            {cls:'nursing', text:'Evaluación de enfermería alta: educación sobre signos neurológicos tardíos, seguimiento audiológico y de desarrollo, información a familia sobre meningitis y vacunación'},
          ]},
        ]
      },
    ]
  },
  pt: {
    legend: [
      {color:'var(--red)',   shadow:'rgba(248,113,113,0.18)', label:'Crítico — ação imediata, risco vital'},
      {color:'var(--orange)',   shadow:'rgba(251,146,60,0.18)', label:'Atenção — decisão clínica importante'},
      {color:'var(--yellow)',   shadow:'rgba(251,191,36,0.18)', label:'Enfermagem — papel específico de enfermagem'},
      {color:'var(--border2)',   shadow:'transparent', label:'Padrão — ação de protocolo'},
    ],
    cards: [
      {
        id:'pc-hipotermia', cls:'p-hypothermia', progKey:'hipotermia',
        name:'Hipotermia Terapêutica — EHI Neonatal', src:'proto_src_spn', badge:'proto_badge_neonatal',
        sourceNote:'📄 Consenso Hipotermia Terapêutica SPN 2022 — Sociedade Portuguesa de Neonatologia. Válido até out/2028.',
        phases:[
          {tagCls:'t0', tag:'Critérios A+B', title:'Seleção & Referenciação (Hospital de Origem)',
           items:[
            {cls:'critical', text:'<strong>Critério A — Asfixia:</strong> Apgar ≤5 aos 10min, reanimação mantida aos 10min, pH&lt;7.0 nos 1ºs 60min, ou défice de bases ≥16mmol/L'},
            {cls:'critical', text:'<strong>Critério B — Encefalopatia:</strong> Thompson &gt;7 e/ou convulsões clínicas'},
            {cls:'', text:'Avaliar critérios de exclusão relativos (IG&lt;36sem, CIR, cirurgia prevista, malformações, PCR pós-natal) e discutir com o centro de tratamento'},
            {cls:'critical', text:'<strong>Contactar centro de tratamento</strong> e ativar TIP da região após confirmação dos critérios'},
          ]},
          {tagCls:'t1', tag:'Origem', title:'Suporte Vital & Controlo Térmico',
           items:[
            {cls:'', text:'<strong>Ventilação:</strong> Manter PaCO₂ 35–45mmHg; evitar hipocápnia; SpO₂ 94–99%'},
            {cls:'', text:'<strong>Aporte hídrico:</strong> 40–60mL/kg/dia; bólus SF 10mL/kg se hipotensão'},
            {cls:'critical', text:'<strong>Sedação:</strong> Morfina 50mcg/kg IV lento + perfusão 5–10mcg/kg/h'},
            {cls:'', text:'<strong>Convulsões:</strong> Fenobarbital 20mg/kg IV (30min) → doses adicionais 10mg/kg; máx acumulado 40mg/kg'},
            {cls:'warn', text:'<strong>Controlo térmico:</strong> Desligar fontes de calor; monitorizar T retal contínua; objetivo 33–34°C'},
            {cls:'nursing', text:'Enviar placenta para estudo anatomopatológico; completar registo de parâmetros (Anexo 2)'},
          ]},
          {tagCls:'t2', tag:'Admissão', title:'Chegada ao Centro de Tratamento',
           items:[
            {cls:'critical', text:'<strong>Ativar sistema de hipotermia</strong> (CritiCool® ou equivalente) a 33,5°C antes da chegada'},
            {cls:'nursing', text:'Colocar RN sobre fato de hipotermia em incubadora aberta; verificar ajuste correto'},
            {cls:'nursing', text:'Aplicar <strong>Escala de Thompson</strong>; registar T de admissão e somatometria'},
            {cls:'critical', text:'<strong>Monitorização cerebral:</strong> aEEG ≥2 canais + NIRS; ecografia transfontanelar'},
            {cls:'', text:'<strong>Antibioterapia empírica:</strong> Ampicilina 50mg/kg/dose 12h + Gentamicina 5mg/kg 48h'},
          ]},
          {tagCls:'t3', tag:'72h Tratamento', title:'Monitorização durante Hipotermia',
           items:[
            {cls:'nursing', text:'Monitorizar T retal contínua; FC, PA invasiva, SpO₂, diurese horária, glicemia cada 4–6h'},
            {cls:'warn', text:'Hipotensão → Dopamina até 10mcg/kg/min IV; se refratário → Adrenalina 0,05–0,1mcg/kg/min'},
            {cls:'nursing', text:'Registo horário de constantes, balanço hídrico, Thompson e sinais neurológicos no Anexo 2'},
          ]},
          {tagCls:'t4', tag:'Reaquecimento', title:'Reaquecimento Progressivo (início às 72h)',
           items:[
            {cls:'critical', text:'<strong>Iniciar às 72h</strong> a 0,1–0,4°C/h até 36,5–37,0°C retal'},
            {cls:'warn', text:'Se convulsões durante o reaquecimento → suspender, tratar, aguardar ≥2h sem crises para retomar'},
            {cls:'nursing', text:'Ligar aquecimento da incubadora ≈1h antes de terminar o reaquecimento'},
            {cls:'', text:'RM cerebral precoce após reaquecimento; EEG convencional antes da alta'},
          ]},
        ]
      },
      {
        id:'pc-convulsivo', cls:'p-convulsivo', progKey:'convulsivo',
        name:'Estado Epiléptico', src:'proto_src_seup', badge:'proto_badge_urgencia',
        sourceNote:'📄 Guia SEUP 2022 (Sociedad Española de Urgencias Pediátricas) + ERC Paediatric Life Support 2021. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'0 – 5 min', title:'Estabilização & 1ª Linha — Benzodiazepinas',
           items:[
            {cls:'critical', text:'<strong>ABC + Monitorização:</strong> SpO₂, ECG, glicemia capilar (tratar se &lt;60mg/dL)'},
            {cls:'critical', text:'<strong>SEM acesso IV:</strong> Midazolam bucal 0,3mg/kg (máx 10mg) | Midazolam nasal 0,2mg/kg | Diazepam retal 0,5mg/kg (máx 10mg)'},
            {cls:'critical', text:'<strong>COM acesso IV/IO:</strong> Midazolam IV 0,1mg/kg (máx 10mg) ou Diazepam IV 0,3mg/kg (máx 10mg) · lento, em 2 min'},
            {cls:'nursing', text:'Acesso IV/IO + gasimetria + LAB urgente (glicose, eletrólitos, cálcio, níveis FAE se indicado)'},
          ]},
          {tagCls:'t1', tag:'5 – 20 min', title:'Reavaliação & 2ª Dose de Benzodiazepina',
           items:[
            {cls:'warn', text:'Considerar causas tratáveis: hiponatremia, hipocalcemia, encefalite herpética (Aciclovir), emergência hipertensiva, intoxicação'},
            {cls:'critical', text:'<strong>2ª dose BZD</strong> (se persiste): mesma dose/via que a primeira'},
          ]},
          {tagCls:'t2', tag:'20 – 40 min', title:'2ª Linha — Antiepiléptico IV',
           items:[
            {cls:'critical', text:'<strong>Levetiracetam IV</strong> (1ª opção): 40–60mg/kg (máx 3.000mg) diluído 1:1 em SF · infundir em 5–15min'},
            {cls:'critical', text:'<strong>Fenitoína IV</strong>: 20mg/kg (máx 1.000mg) em SF exclusivamente · velocidade máx 1mg/kg/min'},
            {cls:'warn', text:'<strong>Valproato IV</strong>: 30–40mg/kg (máx 2.500mg) em 10–15min · <strong>CI absoluta</strong> se &lt;2 anos com erro metabólico não excluído'},
            {cls:'warn', text:'<strong>Fenobarbital IV</strong>: 20mg/kg (máx 1.000mg) em 20–30min · especialmente indicado em &lt;1 ano'},
            {cls:'critical', text:'<strong>Contactar UCIP/Neuropediatria</strong>'},
          ]},
          {tagCls:'t3', tag:'> 40 min', title:'Estado Epiléptico Refratário — 3ª Linha',
           items:[
            {cls:'critical', text:'<strong>Assegurar via aérea:</strong> IOT se GCS ≤8 · SRI: Midazolam 0,1mg/kg + Rocurônio 1,2mg/kg'},
            {cls:'critical', text:'<strong>Midazolam IV perfusão:</strong> bólus 0,2mg/kg → perfusão 0,05–2mg/kg/h · titular por EEG'},
            {cls:'nursing', text:'Monitorização contínua aEEG ou EEG convencional durante terapêutica anestésica'},
          ]},
        ]
      },
      {
        id:'pc-htic', cls:'p-htic', progKey:'htic',
        name:'Hipertensão Intracraniana (HTIC)', src:'proto_src_pnccs', badge:'proto_badge_urgencia',
        sourceNote:'📄 Pediatric Neurocritical Care Society Guidelines 2021 + Protocolo HTIC SEUP. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Reconhecer', title:'Sinais & Critérios de HTIC',
           items:[
            {cls:'warn', text:'Cefaleias intensas progressivas + vómitos em jato'},
            {cls:'critical', text:'<strong>Tríade de Cushing:</strong> HTA + bradicardia + bradipneia (sinal tardio de herniação iminente)'},
            {cls:'critical', text:'<strong>Sinais de herniação:</strong> anisocoria, postura de decorticação/descerebração, hemiplegia súbita'},
          ]},
          {tagCls:'t1', tag:'Posição & VA', title:'Medidas Gerais Urgentes (Tier 1)',
           items:[
            {cls:'critical', text:'<strong>Cabeça em posição neutra, elevada 30°;</strong> evitar compressão jugular'},
            {cls:'nursing', text:'ABC + Monitorização completa: SpO₂, ECG, PA, EtCO₂, glicemia; 2 acessos IV + analítica urgente'},
            {cls:'critical', text:'<strong>Objetivos ventilatórios:</strong> SpO₂ 94–99% · EtCO₂ 35–40mmHg · Evitar hipercápnia'},
            {cls:'critical', text:'<strong>Normoglicemia · Normotermia · Euvolemia</strong>'},
          ]},
          {tagCls:'t2', tag:'Osmoterapia', title:'Terapêutica Hiperosmolar (Tier 2)',
           items:[
            {cls:'critical', text:'<strong>SSH 3% (1ª opção em Pediatria):</strong> 2–6mL/kg IV em 10–20min · repetir se necessário até Na 145–160mEq/L'},
            {cls:'warn', text:'<strong>Manitol 20%</strong> (alternativa): 0,25–1g/kg IV em 15–30min'},
            {cls:'critical', text:'<strong>Sedo-analgesia:</strong> Midazolam 1–5mcg/kg/min IV + Morfina 10–40mcg/kg/h'},
          ]},
          {tagCls:'t3', tag:'Imagem & Etiologia', title:'TC Urgente & Tratamento Dirigido',
           items:[
            {cls:'critical', text:'<strong>TC urgente</strong> (após estabilização hemodinâmica) + contactar Neurocirurgia'},
            {cls:'', text:'TCE grave: manitol ou SSH 3% + PIC invasiva (se GCS &lt;9 + lesão na TC)'},
            {cls:'', text:'Tumor cerebral / edema vasogénico: Dexametasona 0,25mg/kg/6h IV'},
            {cls:'warn', text:'Hiperventilação moderada (EtCO₂ 30–35mmHg) apenas como medida de resgate temporária'},
          ]},
        ]
      },
      {
        id:'pc-sepsis', cls:'p-sepsis', progKey:'sepsis',
        name:'Sepsis Grave / Choque Séptico', src:'proto_src_ssc', badge:'proto_badge_urgencia',
        sourceNote:'📄 Surviving Sepsis Campaign: Pediatric Guidelines 2020 (PCCM). Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Reconhecer', title:'Identificação Precoce do Doente de Risco',
           items:[
            {cls:'warn', text:'<strong>Sinais de disfunção orgânica:</strong> alteração da consciência, taquicardia inapropriada, taquipneia, má perfusão periférica (TRC &gt;2s, pulsos fracos, extremidades frias)'},
            {cls:'critical', text:'<strong>Choque séptico:</strong> hipotensão OU má perfusão persistente após 20–40mL/kg de fluidos'},
          ]},
          {tagCls:'t1', tag:'0 – 15 min', title:'Medidas Imediatas — Hora de Ouro',
           items:[
            {cls:'critical', text:'<strong>O₂ alto fluxo · 2 acessos vasculares</strong> (ou IO após 2–3 tentativas falhadas)'},
            {cls:'nursing', text:'<strong>Hemoculturas ANTES do ATB</strong> (se não atrasa &gt;45min): 2×, urinocultura, LCR se indicado'},
            {cls:'critical', text:'<strong>ANTIBIÓTICO na 1ª hora:</strong> Cefotaxima 200mg/kg/dia (c/6–8h) OU Ceftriaxona 100mg/kg/dia'},
            {cls:'critical', text:'<strong>1º bólus de fluidos:</strong> SF 0,9% ou Ringer Lactato 10–20mL/kg em 5–10min'},
          ]},
          {tagCls:'t2', tag:'15 – 60 min', title:'Reavaliação Contínua & Fluidos Adicionais',
           items:[
            {cls:'critical', text:'Reavaliar após cada bólus: FC, PA, TRC, consciência, SpO₂, diurese'},
            {cls:'warn', text:'<strong>Sinais de sobrecarga hídrica</strong> (hepatomegalia, crepitações, SpO₂↓): PARAR fluidos'},
            {cls:'critical', text:'<strong>Contactar UCIP</strong> se choque refratário a 40mL/kg'},
          ]},
          {tagCls:'t3', tag:'Vasopressores', title:'Choque Refratário a Fluidos',
           items:[
            {cls:'critical', text:'<strong>CHOQUE FRIO</strong> (vasoconstrição, TRC &gt;3s, extremidades frias): <strong>Adrenalina</strong> 0,05–0,3mcg/kg/min IV'},
            {cls:'critical', text:'<strong>CHOQUE QUENTE</strong> (vasodilatação, TRC &lt;1s, pulsos saltitantes): <strong>Noradrenalina</strong> 0,05–0,5mcg/kg/min IV (SSC 2020: 1ª linha)'},
            {cls:'warn', text:'<strong>Corticoide no choque refratário:</strong> Hidrocortisona 1–2mg/kg/dia em perfusão contínua'},
          ]},
          {tagCls:'t4', tag:'Monitorizar', title:'Reavaliação Contínua & Objetivos',
           items:[
            {cls:'nursing', text:'FC, PA invasiva, TRC, SpO₂, diurese horária (objetivo &gt;1mL/kg/h), lactato seriado'},
            {cls:'warn', text:'Rever ATB às 48–72h conforme culturas · desescalada precoce se possível'},
            {cls:'critical', text:'Transferência UCIP se choque refratário, necessidade de vasopressores ou ventilação mecânica'},
          ]},
        ]
      },
      {
        id:'pc-pcr', cls:'p-pcr', progKey:'pcr',
        name:'PCR Pediátrica — SAV Pediátrico', src:'proto_src_erc', badge:'proto_badge_urgencia',
        sourceNote:'📄 ERC Paediatric Life Support Guidelines 2021 (Resuscitation 2021;161:327–387). Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Identificar PCR', title:'Reconhecimento e Início de RCP',
           items:[
            {cls:'critical', text:'<strong>Inconsciente + não respira normalmente</strong> → ATIVAR EMERGÊNCIA (112) + DESFIBRILADOR'},
            {cls:'critical', text:'<strong>Iniciar RCP imediatamente:</strong> 15 compressões + 2 ventilações (rácio 15:2) · Só reanimador: 30:2'},
            {cls:'critical', text:'<strong>Compressões:</strong> 1/3 do diâmetro AP do tórax · frequência 100–120/min · mínimas interrupções'},
            {cls:'nursing', text:'Tempo desde início de PCR, causas reversíveis (4H 4T), peso estimado para cálculo de doses'},
          ]},
          {tagCls:'t1', tag:'Ritmo', title:'Análise do Ritmo — Desfibrilhável vs Não Desfibrilhável',
           items:[
            {cls:'critical', text:'<strong>RITMO DESFIBRILHÁVEL</strong> (FV/TVSP): Choque <strong>4J/kg</strong> (máx 360J monofásico) · retomar RCP 2min imediatamente'},
            {cls:'critical', text:'Após 3º choque: <strong>Adrenalina IV/IO 0,01mg/kg</strong> + <strong>Amiodarona 5mg/kg</strong> (máx 300mg) · repetir adrenalina cada 3–5min'},
            {cls:'critical', text:'Após 5º choque: 2ª dose <strong>Amiodarona 5mg/kg</strong> (máx 150mg)'},
            {cls:'critical', text:'<strong>RITMO NÃO DESFIBRILHÁVEL</strong> (Assistolia/AESP): <strong>Adrenalina IV/IO 0,01mg/kg</strong> imediatamente · repetir cada 3–5min'},
          ]},
          {tagCls:'t2', tag:'4H 4T', title:'Causas Reversíveis — Tratar Simultaneamente',
           items:[
            {cls:'warn', text:'<strong>4H:</strong> Hipóxia → ventilação c/ O₂ 100% · Hipovolemia → bólus SF 10mL/kg · Hipo/Hipercaliemia · Hipotermia'},
            {cls:'warn', text:'<strong>4T:</strong> Pneumotórax Hipertensivo → punção descompressiva · Tamponamento · Tóxicos · TEP Maciço'},
            {cls:'nursing', text:'Acesso IO se não IV em &lt;1min: localização preferida tíbia proximal anteromedial'},
          ]},
          {tagCls:'t3', tag:'ROSC', title:'Cuidados Pós-PCR',
           items:[
            {cls:'critical', text:'<strong>Evitar hiperoxia:</strong> SpO₂ 94–98% · <strong>Normocápnia:</strong> EtCO₂ 35–40mmHg'},
            {cls:'critical', text:'<strong>Temperatura objetivo:</strong> 32–36°C durante ≥24h · tratar febre agressivamente'},
            {cls:'nursing', text:'Transferência UCIP · monitorização contínua · EEG se suspeita de convulsões subclínicas'},
          ]},
        ]
      },
      {
        id:'pc-anafilaxia', cls:'p-anafilaxia', progKey:'anafilaxia',
        name:'Anafilaxia', src:'proto_src_seup', badge:'proto_badge_urgencia',
        sourceNote:'📄 Protocolo SEUP Anafilaxia 2021 + WAO/EAACI Guidelines 2020. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnóstico', title:'Critérios Diagnósticos de Anafilaxia',
           items:[
            {cls:'critical', text:'<strong>Critério 1:</strong> Início agudo com envolvimento cutâneo/mucoso + ≥1 de: compromisso respiratório, hipotensão, disfunção orgânica'},
            {cls:'warn', text:'<strong>Sinais de gravidade:</strong> estridor, broncospasmo grave, hipotensão, alteração da consciência'},
          ]},
          {tagCls:'t1', tag:'ADRENALINA', title:'1ª Linha — Adrenalina IM (SEMPRE PRIMEIRO)',
           items:[
            {cls:'critical', text:'<strong>ADRENALINA IM 0,01mg/kg</strong> (máx 0,5mg) · face anterolateral da coxa · pode repetir cada 5–15min'},
            {cls:'critical', text:'<strong>POSIÇÃO:</strong> decúbito dorsal + pernas elevadas (se hipotensão) · sentado se dificuldade respiratória'},
            {cls:'critical', text:'O₂ alto fluxo · monitorização SpO₂, FC, PA'},
            {cls:'warn', text:'Acesso IV/IO; bólus SF 10–20mL/kg se hipotensão'},
            {cls:'nursing', text:'Retirar alergénio se possível · registar hora de início e da adrenalina'},
          ]},
          {tagCls:'t2', tag:'2ª Linha', title:'Fármacos Complementares (NUNCA antes da adrenalina)',
           items:[
            {cls:'warn', text:'<strong>Corticoide:</strong> Metilprednisolona 1–2mg/kg IV (máx 125mg) · para prevenir reação bifásica'},
            {cls:'warn', text:'<strong>Anti-histamínico H1:</strong> Dexclorfeniramina 0,15–0,2mg/kg IV · apenas sintomas cutâneos'},
            {cls:'', text:'Broncospasmo: Salbutamol nebulizado 2,5–5mg a cada 20min'},
          ]},
          {tagCls:'t3', tag:'Refratária', title:'Anafilaxia Refratária à Adrenalina IM',
           items:[
            {cls:'critical', text:'<strong>Adrenalina IV:</strong> bólus 0,01mg/kg IV muito lento (10min) · monitorização ECG contínua'},
            {cls:'critical', text:'<strong>Perfusão de adrenalina:</strong> 0,05–0,5mcg/kg/min IV · titular'},
            {cls:'critical', text:'<strong>Contactar UCIP;</strong> preparar para IOT se deterioro da VA'},
            {cls:'nursing', text:'Monitorização mínimo 4–8h (leve) a 24h (grave) por risco de reação bifásica'},
          ]},
        ]
      },
      {
        id:'pc-asma', cls:'p-asma', progKey:'asma',
        name:'Crise de Asma', src:'proto_src_gema', badge:'proto_badge_urgencia',
        sourceNote:'📄 GEMA 5.3 2023 + Protocolo SEUP Asma 2022. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Classificar', title:'Avaliação da Gravidade',
           items:[
            {cls:'', text:'<strong>Ligeira:</strong> SpO₂ &gt;95%, frases completas, sem uso músculos acessórios'},
            {cls:'warn', text:'<strong>Moderada:</strong> SpO₂ 91–95%, frases curtas, uso músculos acessórios, sibilâncias generalizadas'},
            {cls:'critical', text:'<strong>Grave:</strong> SpO₂ &lt;91%, monossílabos, tiragem intensa, sibilâncias ±ausentes (tórax silencioso = GRAVE)'},
            {cls:'critical', text:'<strong>Quase fatal:</strong> cianose, alteração da consciência, bradicardia → IOT iminente'},
          ]},
          {tagCls:'t1', tag:'1ª Linha', title:'Tratamento Inicial',
           items:[
            {cls:'critical', text:'<strong>O₂</strong> para SpO₂ &gt;94%'},
            {cls:'critical', text:'<strong>Salbutamol nebulizado:</strong> 0,15mg/kg (mín 2,5mg · máx 5mg) a cada 20min (3 doses)'},
            {cls:'critical', text:'<strong>Ipratrópio nebulizado</strong> (moderada-grave): 0,25mg (&lt;20kg) ou 0,5mg (≥20kg) · 3 doses'},
            {cls:'critical', text:'<strong>Corticoide sistémico precoce:</strong> Metilprednisolona 1–2mg/kg/6h IV (máx 60mg/dose)'},
          ]},
          {tagCls:'t2', tag:'2ª Linha', title:'Crise Moderada-Grave Sem Resposta à 1ª Linha',
           items:[
            {cls:'critical', text:'<strong>Sulfato de Magnésio IV:</strong> 40–50mg/kg (máx 2g) em SF em 20–30min'},
            {cls:'warn', text:'<strong>VNI (CPAP/BiPAP):</strong> considerar em moderada-grave com insuficiência respiratória'},
          ]},
          {tagCls:'t3', tag:'Crise Grave', title:'Crise Grave — Sem Resposta ou Deterioração',
           items:[
            {cls:'critical', text:'<strong>Salbutamol IV:</strong> carga 5–15mcg/kg em 10–20min + perfusão 1–5mcg/kg/min'},
            {cls:'critical', text:'<strong>Contactar UCIP;</strong> preparar entubação se: PCO₂ &gt;65mmHg, SpO₂ &lt;90% com O₂ alto fluxo'},
            {cls:'warn', text:'<strong>IOT:</strong> SRI com Cetamina 1,5mg/kg + Rocurônio 1,2mg/kg · evitar propofol'},
            {cls:'nursing', text:'Gasimetria cada 30–60min · SpO₂ contínua · balanço hídrico (risco SIADH com salbutamol IV)'},
          ]},
        ]
      },
      {
        id:'pc-cad', cls:'p-cad', progKey:'cad',
        name:'Cetoacidose Diabética (CAD)', src:'proto_src_ispad', badge:'proto_badge_urgencia',
        sourceNote:'📄 ISPAD Clinical Practice Consensus Guidelines 2022 — Cetoacidose Diabética. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnóstico', title:'Critérios & Classificação de Gravidade',
           items:[
            {cls:'critical', text:'<strong>Diagnóstico CAD:</strong> Glicemia &gt;200mg/dL + pH &lt;7,30 ou HCO₃ &lt;15mEq/L + cetonemia &gt;3mmol/L'},
            {cls:'warn', text:'<strong>Leve:</strong> pH 7,20–7,30 · <strong>Moderada:</strong> pH 7,10–7,20 · <strong>Grave:</strong> pH &lt;7,10'},
            {cls:'critical', text:'LAB urgente: glicemia, gasimetria, eletrólitos (K⁺ CRÍTICO), função renal, cetonemia'},
          ]},
          {tagCls:'t1', tag:'Fluidos', title:'Ressuscitação com Fluidos (ISPAD 2022)',
           items:[
            {cls:'critical', text:'<strong>Se choque:</strong> SF 0,9% 10mL/kg em 30–60min · EVITAR &gt;20mL/kg total'},
            {cls:'critical', text:'<strong>Reidratação:</strong> défice estimado + manutenção · distribuir em <strong>48h</strong>'},
            {cls:'critical', text:'<strong>Potássio SEMPRE:</strong> se K⁺ &lt;5,5mEq/L e diurese estabelecida → adicionar 40mEq/L'},
            {cls:'nursing', text:'Controlo de glicemia horário; eletrólitos cada 2–4h; balanço hídrico estrito'},
          ]},
          {tagCls:'t2', tag:'Insulina', title:'Insulinoterapia IV',
           items:[
            {cls:'critical', text:'<strong>Iniciar insulina 1–2h DEPOIS de iniciar fluidos</strong> (aguardar K⁺ &gt;3,5mEq/L)'},
            {cls:'critical', text:'<strong>Dose:</strong> Insulina rápida IV 0,05–0,1 U/kg/h · <strong>NÃO bólus de insulina</strong>'},
            {cls:'warn', text:'Objetivo: descida de glicemia 2–5mmol/L/h · não descer mais de 5mmol/L/h'},
            {cls:'warn', text:'Manter insulina até resolução da cetoacidose (pH&gt;7,30 + HCO₃&gt;15 + cetonemia &lt;0,5mmol/L)'},
          ]},
          {tagCls:'t3', tag:'Complicações', title:'Edema Cerebral — Complicação Mais Grave',
           items:[
            {cls:'critical', text:'<strong>SUSPEITAR EDEMA CEREBRAL:</strong> cefaleias intensas, deterioração neurológica, convulsões, anisocoria'},
            {cls:'critical', text:'<strong>TRATAMENTO URGENTE:</strong> Manitol 0,5–1g/kg IV em 15–30min OU SSH 3% 2,5–5mL/kg IV'},
            {cls:'critical', text:'Reduzir velocidade de infusão de fluidos 50% · elevar cabeceira 30° · contactar UCIP'},
            {cls:'nursing', text:'Escala de Glasgow horária · avisar imediatamente perante qualquer alteração neurológica'},
          ]},
        ]
      },
      {
        id:'pc-iot', cls:'p-iot', progKey:'iot',
        name:'Intubação Orotraqueal — Sequência Rápida (SRI)', src:'proto_src_secip', badge:'proto_badge_urgencia',
        sourceNote:'📄 SECIP — Protocolo SRI 2023 (Sociedad Española de Cuidados Intensivos Pediátricos). Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Preparação', title:'Preparação: Mnemónico MSMAIDS',
           items:[
            {cls:'nursing', text:'<strong>M — Monitorização:</strong> ECG, SpO₂, TA, ETCO₂ ligados e a funcionar antes de iniciar'},
            {cls:'nursing', text:'<strong>S — Sucção:</strong> aspirador ligado e verificado; sonda de tamanho adequado'},
            {cls:'critical', text:'<strong>M — Material via aérea:</strong> TOT adequado (sem balão + 0,5 reserva), mandril, laringoscópio verificado, máscara facial + insuflador com reservatório O₂'},
            {cls:'', text:'<strong>A — Acesso IV/IO:</strong> verificar permeabilidade; IO preparado se acesso difícil'},
            {cls:'critical', text:'<strong>I — Indução:</strong> calcular e preparar doses por peso (ver separador RCP)'},
            {cls:'nursing', text:'<strong>D — Decúbito:</strong> posição de cheiro (lactente: sem almofada; >2a: almofada sob occipúcio)'},
            {cls:'', text:'<strong>S — SpO₂ + pré-oxigenação:</strong> O₂ alto fluxo 3–5 min (máscara reservatório 15L/min) · objetivo SpO₂ ≥95%'},
          ]},
          {tagCls:'t1', tag:'Pré-medicação', title:'Pré-medicação (2–3 min antes)',
           items:[
            {cls:'warn', text:'<strong>Atropina 0,02mg/kg IV</strong> (mín 0,1mg / máx 0,5mg): &lt;1 ano, bradicardia prévia, uso de succinilcolina'},
            {cls:'', text:'<strong>Fentanilo 1–3 mcg/kg IV lento</strong> (2–3min): analgesia + atenuação da resposta hemodinâmica; omitir se instabilidade'},
            {cls:'warn', text:'Lidocaína 1,5mg/kg apenas em HTEC/PIC elevada — evidência controversa; não uso rotineiro'},
          ]},
          {tagCls:'t2', tag:'Indução + Relaxamento', title:'Sequência Farmacológica',
           items:[
            {cls:'critical', text:'<strong>Indutor (escolher por situação clínica):</strong>'},
            {cls:'', text:'· <strong>Cetamina</strong> 1–2mg/kg IV: escolha no choque, asma, broncospasmo · mantém reflexos · ↑ secreções (+ atropina)'},
            {cls:'', text:'· <strong>Propofol</strong> 1–4mg/kg IV: perfil neurológico favorável · contraindicado na instabilidade hemodinâmica ou &lt;1 mês'},
            {cls:'', text:'· <strong>Midazolam</strong> 0,1–0,3mg/kg IV: sedação mais lenta · segunda linha'},
            {cls:'critical', text:'<strong>Relaxante muscular — IMEDIATAMENTE após o indutor:</strong>'},
            {cls:'critical', text:'· <strong>Rocurônio 1,2mg/kg IV</strong> (ISR): escolha atual · início ~60 seg · reversão com Sugamadex 16mg/kg'},
            {cls:'warn', text:'· Succinilcolina 1–2mg/kg IV: início 30–45 seg · contraindicada em hipercaliemia, queimados >48h, distrofia muscular'},
          ]},
          {tagCls:'t3', tag:'Laringoscopia', title:'Técnica de Intubação',
           items:[
            {cls:'critical', text:'<strong>Lâmina laringoscópio:</strong> neonato/lactente → Miller nº 0–1 · pré-escolar/escolar → Miller ou Macintosh nº 2 · adolescente → Macintosh nº 3'},
            {cls:'', text:'Manobra BURP se exposição difícil: Backward-Upward-Rightward Pressure sobre cartilagem tiróide · pedir ao assistente'},
            {cls:'critical', text:'Tentativa máx. <strong>30 seg</strong> · se falha: ventilar com máscara e reintentar · máx. 3 tentativas → protocolo via aérea difícil'},
            {cls:'nursing', text:'Confirmar posição: expansão torácica simétrica + capnografia (ETCO₂ &gt;35) + auscultação bilateral + Rx tórax'},
            {cls:'', text:'Distância TOT à comissura labial por peso (ver painel RCP) · fixar com adesivo ou dispositivo de fixação'},
          ]},
          {tagCls:'t4', tag:'Pós-IOT', title:'Cuidados Pós-Intubação',
           items:[
            {cls:'critical', text:'Programar VM: Vt 6–8mL/kg · PEEP 4–5cmH₂O · FR por idade · FiO₂ inicial 1,0 · objetivo SpO₂ 94–98%'},
            {cls:'critical', text:'Sedoanalgesia de manutenção: Midazolam 0,05–0,2mg/kg/h + Morfina 10–40mcg/kg/h ou Fentanilo 1–4mcg/kg/h'},
            {cls:'warn', text:'Hipotensão pós-IOT: bolo SF 10–20mL/kg + avaliar início de vasopressores (Noradrenalina ou Adrenalina)'},
            {cls:'nursing', text:'Registar: hora, operador, nº tentativas, nº TOT, distância comissura, ETCO₂ de confirmação, pressão do balão'},
            {cls:'nursing', text:'Gasometria 30 min pós-IOT · Rx tórax urgente · considerar SNG para descompressão gástrica'},
          ]},
        ]
      },
      {
        id:'pc-mist', cls:'p-mist', progKey:'mist',
        name:'Surfactante MIST/LISA — SDR Neonatal', src:'proto_src_escrc', badge:'proto_badge_neonatal',
        sourceNote:'📄 European Consensus Guidelines on RDS Management 2023 (Vyas Dhar et al.) · Recomendações SPN 2022. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Indicação', title:'Critérios de Administração de Surfactante',
           items:[
            {cls:'critical', text:'<strong>Indicação profilática:</strong> RNPT ≤28 SG — administração nos primeiros 30 min de vida'},
            {cls:'critical', text:'<strong>Indicação terapêutica:</strong> RNPT com SDR clínico + necessidade de FiO₂ ≥0,3 em CPAP/HFNC para SpO₂ 90–95% + Rx/Eco compatível'},
            {cls:'warn', text:'<strong>CPAP nasal</strong> (PEEP 5–6 cmH₂O) ou HFNC como suporte antes e durante o procedimento'},
            {cls:'', text:'Corticoterapia antenatal: verificar se foi administrada (reduz necessidade de surfactante e melhora resposta)'},
            {cls:'', text:'<strong>Preparação:</strong> surfactante temperado à temperatura corporal · seringa pré-carregada · catéter fino (SNG nº6 ou sonda vascular Lyomark)'},
          ]},
          {tagCls:'t1', tag:'Preparar', title:'Material & Dose',
           items:[
            {cls:'critical', text:'<strong>Dose:</strong> Poractant alfa (Curosurf®) <strong>200 mg/kg</strong> 1.ª dose · dose repetida 100 mg/kg se persistirem critérios (máx 3 doses/24h)'},
            {cls:'nursing', text:'Calcular volume: Curosurf® 80 mg/mL → 200 mg/kg ÷ 80 = <strong>2,5 mL/kg</strong> · 100 mg/kg = 1,25 mL/kg'},
            {cls:'nursing', text:'Material necessário: laringoscópio + pá reta (neonatal) + Magill (LISA) · catéter fino 40–45 cm · seringa 5 mL · monitorização (SpO₂ + FC contínua)'},
            {cls:'', text:'Monitorização contínua: SpO₂ e FC. Ter disponível ventilação com pressão positiva (VPP) e pessoal adicional'},
            {cls:'warn', text:'<strong>Sedação/analgesia:</strong> Sacarose 25% 0,5–1 mL oral 2 min antes · discutir pré-medicação adicional segundo protocolo local (sem sedativos sistémicos de rotina no MIST)'},
          ]},
          {tagCls:'t2', tag:'Técnica', title:'Procedimento MIST (Hobart / Dargaville)',
           items:[
            {cls:'critical', text:'<strong>Posição:</strong> RN em posição de sniffing · CPAP ativo durante todo o procedimento'},
            {cls:'critical', text:'<strong>Laringoscopia direta:</strong> visualizar cordas vocais · introduzir catéter fino 1–1,5 cm abaixo das cordas sem intubar'},
            {cls:'nursing', text:'Confirmar posição: pequena quantidade de ar antes do surfactante (observar ligeiro movimento torácico simétrico)'},
            {cls:'critical', text:'<strong>Instilação:</strong> surfactante lento em 1–2 min (0,5–1 mL cada 15–30 s) · NÃO retirar CPAP · se dessaturação ou FC&lt;100 → pausar e VPP'},
            {cls:'', text:'Se refluxo de surfactante: pausar, aspirar suavemente com a sonda, e completar dose após estabilização'},
            {cls:'nursing', text:'Retirar catéter lentamente ao terminar · manter CPAP (PEEP 6–7 cmH₂O) · registar hora, dose, operador e número de tentativas'},
          ]},
          {tagCls:'t3', tag:'Pós-MIST', title:'Monitorização & Seguimento',
           items:[
            {cls:'critical', text:'<strong>CPAP pós-procedimento:</strong> manter PEEP 5–7 cmH₂O · FiO₂ segundo SpO₂ alvo (90–95%) · reduzir FiO₂ progressivamente'},
            {cls:'warn', text:'<strong>Falha MIST:</strong> necessidade de intubação se BSA ≥6 ou FiO₂ &gt;60% mantida ou apneias frequentes → mudar para INSURE ou VMI'},
            {cls:'', text:'Gasimetria capilar 30–60 min após procedimento; Rx tórax às 4h ou antes se deterioração'},
            {cls:'', text:'<strong>Cafeína:</strong> iniciar dose de ataque 20 mg/kg IV → manutenção 5 mg/kg/24h o mais cedo possível (reduz apneia e necessidade de VMI)'},
            {cls:'nursing', text:'Repetir surfactante (100 mg/kg) se FiO₂ ≥0,3 em CPAP às 6–12h (máx 3 doses/24h) · documentar no processo clínico'},
          ]},
        ]
      },
      {
        id:'pc-bronquiolitis', cls:'p-bronquiolitis', progKey:'bronquiolitis',
        name:'Bronquiolite Aguda', src:'proto_src_bronq', badge:'proto_badge_urgencia',
        sourceNote:'📄 Consenso Bronquiolite Aguda AEP/SEUP 2023 · AAP Clinical Practice Guideline 2014. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Avaliação', title:'Classificação da Gravidade',
           items:[
            {cls:'critical', text:'<strong>Critérios de gravidade (requerem hospitalização):</strong> FR >70 rpm (lactente) ou >50 (criança), SpO₂ &lt;94% em ar ambiente, trabalho respiratório grave (retração marcada, adejo nasal, gemido), apneias, dificuldade para se alimentar (&lt;50% da mamada habitual)'},
            {cls:'warn', text:'<strong>Escala clínica recomendada:</strong> PRIB ou Wood-Downes-Ferres simplificada. Pontuação basal + resposta ao broncodilatador (se utilizado)'},
            {cls:'', text:'Fatores de risco para gravidade: idade &lt;6 semanas, prematuridade, cardiopatia congénita, imunodeficiência, displasia broncopulmonar'},
            {cls:'nursing', text:'Monitorização: SpO₂ contínua se hospitalizado · FR e trabalho respiratório cada 2–4h · Temperatura · Tolerância oral'},
          ]},
          {tagCls:'t1', tag:'Tratamento', title:'Medidas Terapêuticas',
           items:[
            {cls:'critical', text:'<strong>Pilar 1 — Suporte respiratório:</strong> O₂ para SpO₂ ≥94% · HFNC se SpO₂ &lt;94% com CN/MV ou trabalho resp. moderado-grave · CPAP se falha HFNC'},
            {cls:'critical', text:'<strong>Pilar 2 — Hidratação:</strong> ≥50% mamada → continuar via oral com mama mais frequentes e menores. &lt;50% → SNG. Incapaz de manter → IV a necessidades basais'},
            {cls:'warn', text:'<strong>Aspiração de secreções nasais:</strong> antes de cada mamada e cada 4–6h · lavagem nasal com SF previamente · sem aspiração profunda de rotina'},
            {cls:'warn', text:'<strong>Adrenalina nebulizada:</strong> considerar em hospitalizado com SpO₂ limítrofe ou trabalho resp. moderado — só se resposta positiva em 20 min. Dose: 0,1 mL/kg solução 1:1000, máx 3 mL (diluir a 4 mL SF)'},
            {cls:'', text:'<strong>NÃO indicados de rotina:</strong> salbutamol, corticoides sistémicos ou inalados, antibióticos (salvo coinfeção bacteriana), fisioterapia respiratória'},
          ]},
          {tagCls:'t2', tag:'Internamento/UCI', title:'Critérios de Internamento e Escalada',
           items:[
            {cls:'critical', text:'<strong>Critérios UCI pediátrica:</strong> apneia recorrente, SpO₂ &lt;92% com HFNC FiO₂ ≥50%, trabalho respiratório grave progressivo, FR &gt;80 rpm sustentada, sinais de falência respiratória iminente'},
            {cls:'warn', text:'<strong>HFNC (Cânulas Nasais de Alto Fluxo):</strong> 1.ª linha suporte respiratório em bronquiolite moderada-grave · fluxo 1–3 L/kg/min (máx 2 L/kg/min &lt;1 ano, máx 40 L/min nos maiores) · FiO₂ conforme necessidade'},
            {cls:'nursing', text:'Escala de cuidados de enfermagem cada 4h: sinais de dificuldade respiratória, tolerância oral, FR/SpO₂, necessidade de aspiração'},
            {cls:'', text:'CPAP nasal: PEEP 5–7 cmH₂O · considerar em falha HFNC · intubação se não melhora com CPAP'},
          ]},
          {tagCls:'t3', tag:'Alta', title:'Critérios de Alta e Seguimento',
           items:[
            {cls:'', text:'SpO₂ ≥94% em ar ambiente durante 4h (incluindo sono e alimentação) · FR dentro dos parâmetros normais para a idade · tolerância oral &gt;50% da ingesta habitual · sem apneias em &gt;8h'},
            {cls:'nursing', text:'Educação parental: sinais de alarme (apneia, cianose, dificuldade em respirar, recusa alimentar), limpeza nasal com SF, posição (30º com pescoço neutro), evitar tabagismo passivo'},
            {cls:'warn', text:'Seguimento: pediatra de cuidados de saúde primários em 24–48h se alta precoce · urgência se SpO₂ &lt;95% ou agravamento'},
          ]},
        ]
      },
      {
        id:'pc-meningitis', cls:'p-meningitis', progKey:'meningitis',
        name:'Meningite Bacteriana Aguda', src:'proto_src_mening', badge:'proto_badge_urgencia',
        sourceNote:'📄 SEUP 2022 · ESCMID Bacterial Meningitis Guidelines 2016 · ECDC Surveillance 2023. Atualizado mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Suspeita', title:'Diagnóstico & Início Urgente',
           items:[
            {cls:'critical', text:'<strong>Sinais de alarme (iniciar protocolo imediatamente):</strong> rigidez da nuca, Kernig/Brudzinski positivos, petéquias/púrpura não branqueável, alteração do nível de consciência, fotofobia, vómitos em jato + cefaleia intensa'},
            {cls:'critical', text:'<strong>Petéquias + febre = meningococcemia até prova em contrário.</strong> Não atrasar ATB para realizar PL se: herniação cerebral iminente, estado circulatório instável, trombocitopenia &lt;100.000, coagulopatia, infeção cutânea na zona de PL'},
            {cls:'warn', text:'<strong>Punção lombar urgente</strong> se não há contraindicação: pressão abertura, citoquímica, Gram, cultura, látex/PCR multiplex (FilmArray Meningitis/Encephalitis)'},
            {cls:'nursing', text:'Monitorização neurológica horária: GCS/AVPU, pupilas, FC, TA, FR, SpO₂ · Acesso venoso periférico × 2 · Analítica urgente: hemograma, PCR, PCT, coagulação, hemocultura × 2, glicemia'},
          ]},
          {tagCls:'t1', tag:'ATB Empírico', title:'Antibioterapia Empírica Urgente',
           items:[
            {cls:'critical', text:'<strong>ATB empírico ANTES da PL</strong> se contraindicada ou atraso &gt;30 min. Objetivo: ATB &lt;60 min desde suspeita clínica'},
            {cls:'critical', text:'<strong>&lt;3 meses:</strong> Ampicilina 200 mg/kg/dia IV (c/6h) + Cefotaxima 200 mg/kg/dia IV (c/6h). ⚠️ Cobrir Listeria e SGB'},
            {cls:'critical', text:'<strong>3 meses – 18 anos:</strong> Ceftriaxona 80–100 mg/kg/dia IV (c/12h · máx 4 g/dia). Alternativa: Cefotaxima 200 mg/kg/dia (c/6h · máx 12 g/dia)'},
            {cls:'warn', text:'<strong>Dexametasona:</strong> 0,15 mg/kg/6h IV (máx 10 mg/dose) × 4 dias. Iniciar 15–30 min ANTES ou simultaneamente com ATB — reduz sequelas neurológicas (surdez) em meningite H. influenzae e pneumocócica'},
            {cls:'warn', text:'<strong>MRSA ou alergia β-lactâmicos:</strong> Vancomicina 15 mg/kg IV c/6h + Meropenem 120 mg/kg/dia c/8h · discutir com infecciologia/intensivista'},
          ]},
          {tagCls:'t2', tag:'Complicações', title:'Monitorização & Complicações',
           items:[
            {cls:'critical', text:'<strong>HTIC:</strong> elevar cabeceira 30° · manejo guiado por monitorização PIC se disponível · manitol 0,5–1 g/kg IV ou NaCl 3% 2–5 mL/kg em 10–20 min se HIC grave · sem fluidos hipotónicos'},
            {cls:'critical', text:'<strong>Choque séptico (meningococcemia):</strong> SF 10–20 mL/kg IV rápido · repetir se necessário · início precoce de vasopressores (noradrenalina 0,05–1 mcg/kg/min) se choque refratário ao volume'},
            {cls:'warn', text:'<strong>Convulsões:</strong> Diazepam IV 0,3 mg/kg ou Midazolam IN 0,3 mg/kg de início · Levetiracetam 20–40 mg/kg carga se persiste · excluir SIADH e hipoglicemia'},
            {cls:'', text:'<strong>SIADH:</strong> restrição hídrica 50–60 mL/kg/dia se Na⁺ &lt;130 mEq/L · NaCl 3% se Na⁺ &lt;120 mEq/L ou sintomas neurológicos · correção máx 0,5 mEq/L/h'},
            {cls:'nursing', text:'Isolamento respiratório (gotículas) × 24h após início de ATB eficaz · Quimioprofilaxia contactos meningococo: rifampicina 4 doses ou ciprofloxacina dose única VO · notificação epidemiológica urgente'},
          ]},
          {tagCls:'t3', tag:'Seguimento', title:'Ajuste ATB & Sequelas',
           items:[
            {cls:'', text:'<strong>Ajuste ATB conforme agente identificado:</strong> pneumococo sensível → penicilina G 250.000 UI/kg/dia · meningococo → penicilina G · H. influenzae → ampicilina se sensível · duração: pneumococo 10–14d, meningococo 5–7d, H. influenzae 7–10d'},
            {cls:'warn', text:'<strong>Audiometria antes da alta</strong> ou em 4–6 semanas: a hipoacusia é a sequela mais frequente (10–30% pneumococo). Avaliação neurológica e do desenvolvimento aos 3 e 6 meses'},
            {cls:'nursing', text:'Avaliação de enfermagem na alta: educação sobre sinais neurológicos tardios, seguimento audiológico e do desenvolvimento, informação à família sobre meningite e vacinação'},
          ]},
        ]
      },
    ]
  },
  en: {
    legend: [
      {color:'var(--red)',   shadow:'rgba(248,113,113,0.18)', label:'Critical — immediate action required, life-threatening'},
      {color:'var(--orange)',   shadow:'rgba(251,146,60,0.18)', label:'Caution — important clinical decision'},
      {color:'var(--yellow)',   shadow:'rgba(251,191,36,0.18)', label:'Nursing — specific nursing role'},
      {color:'var(--border2)',   shadow:'transparent', label:'Standard — protocol action'},
    ],
    cards: [
      {
        id:'pc-hipotermia', cls:'p-hypothermia', progKey:'hipotermia',
        name:'Therapeutic Hypothermia — Neonatal HIE', src:'proto_src_spn', badge:'proto_badge_neonatal',
        sourceNote:'📄 Therapeutic Hypothermia Consensus SPN 2022 — Portuguese Neonatology Society. Valid until Oct/2028.',
        phases:[
          {tagCls:'t0', tag:'Criteria A+B', title:'Selection & Referral (Origin Hospital)',
           items:[
            {cls:'critical', text:'<strong>Criterion A — Asphyxia:</strong> Apgar ≤5 at 10min, ongoing resuscitation at 10min, pH&lt;7.0 in first 60min, or base deficit ≥16mmol/L'},
            {cls:'critical', text:'<strong>Criterion B — Encephalopathy:</strong> Thompson &gt;7 and/or clinical seizures'},
            {cls:'', text:'Assess relative exclusion criteria (GA&lt;36wks, IUGR, planned surgery, malformations, postnatal cardiac arrest) and discuss with treatment centre'},
            {cls:'critical', text:'<strong>Contact treatment centre</strong> and activate regional transport team after criteria confirmed'},
          ]},
          {tagCls:'t1', tag:'Origin', title:'Vital Support & Thermal Control',
           items:[
            {cls:'', text:'<strong>Ventilation:</strong> Maintain PaCO₂ 35–45mmHg; avoid hypocapnia; SpO₂ 94–99%'},
            {cls:'critical', text:'<strong>Sedation:</strong> Morphine 50mcg/kg IV slow + infusion 5–10mcg/kg/h'},
            {cls:'', text:'<strong>Seizures:</strong> Phenobarbital 20mg/kg IV (30min) → additional doses 10mg/kg; max cumulative 40mg/kg'},
            {cls:'warn', text:'<strong>Thermal control:</strong> Turn off heat sources; continuous rectal T monitoring; target 33–34°C'},
            {cls:'nursing', text:'Send placenta for pathology; complete parameter record sheet'},
          ]},
          {tagCls:'t2', tag:'Admission', title:'Arrival at Treatment Centre',
           items:[
            {cls:'critical', text:'<strong>Activate cooling system</strong> at 33.5°C before arrival'},
            {cls:'nursing', text:'Place neonate on cooling garment in open incubator; verify correct fit'},
            {cls:'critical', text:'<strong>Brain monitoring:</strong> aEEG ≥2 channels + NIRS; cranial ultrasound'},
            {cls:'', text:'<strong>Empiric antibiotics:</strong> Ampicillin 50mg/kg/dose 12h + Gentamicin 5mg/kg 48h'},
          ]},
          {tagCls:'t3', tag:'72h Treatment', title:'Monitoring during Hypothermia',
           items:[
            {cls:'nursing', text:'Monitor continuous rectal T; HR, invasive BP, SpO₂, hourly urine output, blood glucose every 4–6h'},
            {cls:'warn', text:'Hypotension → Dopamine up to 10mcg/kg/min IV; if refractory → Adrenaline 0.05–0.1mcg/kg/min'},
          ]},
          {tagCls:'t4', tag:'Rewarming', title:'Progressive Rewarming (start at 72h)',
           items:[
            {cls:'critical', text:'<strong>Start at 72h</strong> at 0.1–0.4°C/h to 36.5–37.0°C rectal'},
            {cls:'warn', text:'If seizures during rewarming → pause, treat, wait ≥2h seizure-free before resuming'},
            {cls:'', text:'Early brain MRI after rewarming; conventional EEG before discharge'},
          ]},
        ]
      },
      {
        id:'pc-convulsivo', cls:'p-convulsivo', progKey:'convulsivo',
        name:'Status Epilepticus', src:'proto_src_erc', badge:'proto_badge_urgencia',
        sourceNote:'📄 ERC Paediatric Life Support Guidelines 2021 + SEUP 2022. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'0 – 5 min', title:'Stabilisation & 1st Line — Benzodiazepines',
           items:[
            {cls:'critical', text:'<strong>ABC + Monitoring:</strong> SpO₂, ECG, blood glucose (treat if &lt;60mg/dL)'},
            {cls:'critical', text:'<strong>WITHOUT IV access:</strong> Buccal midazolam 0.3mg/kg (max 10mg) | Nasal midazolam 0.2mg/kg | Rectal diazepam 0.5mg/kg (max 10mg)'},
            {cls:'critical', text:'<strong>WITH IV/IO access:</strong> Midazolam IV 0.1mg/kg (max 10mg) OR Diazepam IV 0.3mg/kg (max 10mg) · slow over 2 min'},
            {cls:'nursing', text:'IV/IO access + blood gas + urgent labs (glucose, electrolytes, calcium, AED levels if applicable)'},
          ]},
          {tagCls:'t1', tag:'5 – 20 min', title:'Reassessment & 2nd Benzodiazepine Dose',
           items:[
            {cls:'warn', text:'Consider treatable causes: hyponatraemia, hypocalcaemia, herpes encephalitis (Aciclovir), hypertensive emergency, toxins, pyridoxine deficiency'},
            {cls:'critical', text:'<strong>2nd BZD dose</strong> if seizure persists: same dose/route as first dose'},
          ]},
          {tagCls:'t2', tag:'20 – 40 min', title:'2nd Line — IV Antiepileptic Drug',
           items:[
            {cls:'critical', text:'<strong>Levetiracetam IV</strong> (preferred): 40–60mg/kg (max 3,000mg) diluted 1:1 in NS · infuse over 5–15min'},
            {cls:'critical', text:'<strong>Phenytoin IV</strong>: 20mg/kg (max 1,000mg) in NS only · max rate 1mg/kg/min · ECG and BP monitoring'},
            {cls:'warn', text:'<strong>Valproate IV</strong>: 30–40mg/kg (max 2,500mg) over 10–15min · <strong>absolute CI</strong> if &lt;2y with unexcluded metabolic disorder'},
            {cls:'warn', text:'<strong>Phenobarbital IV</strong>: 20mg/kg (max 1,000mg) over 20–30min · especially indicated &lt;1 year'},
            {cls:'critical', text:'<strong>Contact PICU/Paediatric Neurology</strong>'},
          ]},
          {tagCls:'t3', tag:'> 40 min', title:'Refractory Status Epilepticus — 3rd Line',
           items:[
            {cls:'critical', text:'<strong>Secure airway:</strong> intubate if GCS ≤8 · RSI: Midazolam 0.1mg/kg + Rocuronium 1.2mg/kg'},
            {cls:'critical', text:'<strong>Midazolam IV infusion:</strong> bolus 0.2mg/kg → infusion 0.05–2mg/kg/h · titrate by EEG (target: burst suppression)'},
            {cls:'nursing', text:'Continuous aEEG or conventional EEG monitoring throughout anaesthetic treatment · record total seizure duration'},
          ]},
        ]
      },
      {
        id:'pc-htic', cls:'p-htic', progKey:'htic',
        name:'Raised Intracranial Pressure (RICP)', src:'proto_src_pnccs', badge:'proto_badge_urgencia',
        sourceNote:'📄 Pediatric Neurocritical Care Society Guidelines 2021. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Recognise', title:'Signs & Criteria of RICP',
           items:[
            {cls:'warn', text:'Progressive severe headache + projectile vomiting'},
            {cls:'critical', text:'<strong>Cushings triad:</strong> hypertension + bradycardia + bradypnoea (late sign of impending herniation)'},
            {cls:'critical', text:'<strong>Herniation signs:</strong> anisocoria, decorticate/decerebrate posturing, sudden hemiplegia'},
          ]},
          {tagCls:'t1', tag:'Position & Airway', title:'Urgent General Measures (Tier 1)',
           items:[
            {cls:'critical', text:'<strong>Head neutral, elevated 30°;</strong> avoid jugular compression'},
            {cls:'critical', text:'<strong>Ventilation targets:</strong> SpO₂ 94–99% · EtCO₂ 35–40mmHg · Avoid hypercapnia'},
            {cls:'critical', text:'<strong>Normoglycaemia · Normothermia · Euvolaemia</strong>'},
          ]},
          {tagCls:'t2', tag:'Osmotherapy', title:'Hyperosmolar Therapy (Tier 2)',
           items:[
            {cls:'critical', text:'<strong>3% NaCl (preferred in children):</strong> 2–6mL/kg IV over 10–20min · repeat as needed to Na 145–160mEq/L'},
            {cls:'warn', text:'<strong>Mannitol 20%</strong> (alternative): 0.25–1g/kg IV over 15–30min'},
            {cls:'critical', text:'<strong>Sedoanalgesia:</strong> Midazolam 1–5mcg/kg/min IV + Morphine 10–40mcg/kg/h'},
          ]},
          {tagCls:'t3', tag:'Imaging & Aetiology', title:'Urgent CT & Targeted Treatment',
           items:[
            {cls:'critical', text:'<strong>Urgent CT</strong> (once haemodynamically stable) + contact Neurosurgery'},
            {cls:'', text:'Severe TBI: mannitol or 3% NaCl + invasive ICP monitoring (if GCS &lt;9 + CT lesion)'},
            {cls:'warn', text:'Moderate hyperventilation (EtCO₂ 30–35mmHg) only as temporary rescue measure for impending herniation'},
          ]},
        ]
      },
      {
        id:'pc-sepsis', cls:'p-sepsis', progKey:'sepsis',
        name:'Severe Sepsis / Septic Shock', src:'proto_src_ssc', badge:'proto_badge_urgencia',
        sourceNote:'📄 Surviving Sepsis Campaign: International Guidelines for Management of Septic Shock in Children 2020 (PCCM). Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Recognise', title:'Early Identification of High-Risk Patient',
           items:[
            {cls:'warn', text:'<strong>Signs of organ dysfunction:</strong> altered consciousness, inappropriate tachycardia, tachypnoea, poor peripheral perfusion (CRT &gt;2s, weak pulses, cold extremities)'},
            {cls:'critical', text:'<strong>Septic shock:</strong> hypotension OR persistent poor perfusion after 20–40mL/kg fluids'},
          ]},
          {tagCls:'t1', tag:'0 – 15 min', title:'Immediate Measures — Golden Hour',
           items:[
            {cls:'critical', text:'<strong>High-flow O₂ · 2 IV accesses</strong> (or IO after 2–3 failed attempts)'},
            {cls:'nursing', text:'<strong>Blood cultures BEFORE antibiotics</strong> (if does not delay &gt;45min): ×2 peripheral, urine, CSF if indicated'},
            {cls:'critical', text:'<strong>ANTIBIOTICS within 1 hour:</strong> Cefotaxime 200mg/kg/day (q6–8h) OR Ceftriaxone 100mg/kg/day'},
            {cls:'critical', text:'<strong>1st fluid bolus:</strong> 0.9% NaCl or Ringer Lactate 10–20mL/kg over 5–10min · reassess after each bolus'},
          ]},
          {tagCls:'t2', tag:'15 – 60 min', title:'Continuous Reassessment & Additional Fluids',
           items:[
            {cls:'warn', text:'<strong>Signs of fluid overload</strong> (hepatomegaly, crackles, SpO₂↓): STOP fluids · start vasopressors'},
            {cls:'critical', text:'<strong>Contact PICU</strong> if fluid-refractory shock'},
          ]},
          {tagCls:'t3', tag:'Vasopressors', title:'Fluid-Refractory Shock',
           items:[
            {cls:'critical', text:'<strong>COLD SHOCK</strong> (vasoconstriction, CRT &gt;3s, cold extremities, thready pulses): <strong>Adrenaline</strong> 0.05–0.3mcg/kg/min IV'},
            {cls:'critical', text:'<strong>WARM SHOCK</strong> (vasodilation, CRT &lt;1s, bounding pulses, hypotension): <strong>Noradrenaline</strong> 0.05–0.5mcg/kg/min IV (SSC 2020: 1st line)'},
            {cls:'warn', text:'<strong>Corticosteroid in catecholamine-refractory shock:</strong> Hydrocortisone 1–2mg/kg/day continuous infusion'},
          ]},
          {tagCls:'t4', tag:'Monitor', title:'Continuous Reassessment & Targets',
           items:[
            {cls:'nursing', text:'HR, invasive BP, CRT, SpO₂, hourly urine output (target &gt;1mL/kg/h), serial lactate (target &lt;2mmol/L)'},
            {cls:'warn', text:'Review antibiotics at 48–72h per cultures · early de-escalation when possible'},
          ]},
        ]
      },
      {
        id:'pc-pcr', cls:'p-pcr', progKey:'pcr',
        name:'Paediatric Cardiac Arrest — ALS', src:'proto_src_erc', badge:'proto_badge_urgencia',
        sourceNote:'📄 ERC Paediatric Life Support Guidelines 2021 (Resuscitation 2021;161:327–387). Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Identify CA', title:'Recognition & Start of CPR',
           items:[
            {cls:'critical', text:'<strong>Unresponsive + not breathing normally</strong> → CALL EMERGENCY SERVICES + GET AED'},
            {cls:'critical', text:'<strong>Start CPR immediately:</strong> 15 compressions + 2 breaths (15:2 ratio with 2 rescuers) · Solo rescuer: 30:2'},
            {cls:'critical', text:'<strong>Compressions:</strong> 1/3 AP diameter of chest · rate 100–120/min · minimal interruptions · full recoil'},
          ]},
          {tagCls:'t1', tag:'Rhythm', title:'Rhythm Analysis — Shockable vs Non-Shockable',
           items:[
            {cls:'critical', text:'<strong>SHOCKABLE RHYTHM</strong> (VF/pVT): Shock <strong>4J/kg</strong> (max 360J monophasic) · resume CPR 2min immediately'},
            {cls:'critical', text:'After 3rd shock: <strong>Adrenaline IV/IO 0.01mg/kg</strong> + <strong>Amiodarone 5mg/kg</strong> (max 300mg) · repeat adrenaline every 3–5min'},
            {cls:'critical', text:'After 5th shock: 2nd dose <strong>Amiodarone 5mg/kg</strong> (max 150mg) · alternative Lidocaine 1mg/kg'},
            {cls:'critical', text:'<strong>NON-SHOCKABLE</strong> (Asystole/PEA): <strong>Adrenaline IV/IO 0.01mg/kg</strong> immediately · repeat every 3–5min'},
          ]},
          {tagCls:'t2', tag:'4H 4T', title:'Reversible Causes — Treat Simultaneously',
           items:[
            {cls:'warn', text:'<strong>4H:</strong> Hypoxia → ventilate with 100% O₂ · Hypovolaemia → SF bolus 10mL/kg · Hypo/Hyperkalaemia · Hypothermia'},
            {cls:'warn', text:'<strong>4T:</strong> Tension Pneumothorax → needle decompression · Tamponade → pericardiocentesis · Toxins · Massive PE'},
            {cls:'nursing', text:'IO access if no IV in &lt;1min: preferred site proximal anteromedial tibia'},
          ]},
          {tagCls:'t3', tag:'ROSC', title:'Post-Cardiac Arrest Care',
           items:[
            {cls:'critical', text:'<strong>Avoid hyperoxia:</strong> SpO₂ 94–98% · <strong>Normocapnia:</strong> EtCO₂ 35–40mmHg'},
            {cls:'critical', text:'<strong>Target temperature:</strong> 32–36°C for ≥24h · aggressively treat fever'},
            {cls:'nursing', text:'Transfer to PICU · continuous monitoring · EEG if subclinical seizures suspected'},
          ]},
        ]
      },
      {
        id:'pc-anafilaxia', cls:'p-anafilaxia', progKey:'anafilaxia',
        name:'Anaphylaxis', src:'proto_src_wao', badge:'proto_badge_urgencia',
        sourceNote:'📄 WAO/EAACI Anaphylaxis Guidelines 2020 + SEUP 2021. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnosis', title:'Diagnostic Criteria for Anaphylaxis',
           items:[
            {cls:'critical', text:'<strong>Criterion 1:</strong> Acute onset with skin/mucosal involvement + ≥1 of: respiratory compromise, hypotension, organ dysfunction'},
            {cls:'warn', text:'<strong>Severity signs:</strong> stridor, severe bronchospasm, hypotension, altered consciousness, severe dysphagia/dysphonia'},
          ]},
          {tagCls:'t1', tag:'ADRENALINE', title:'1st Line — IM Adrenaline (ALWAYS FIRST)',
           items:[
            {cls:'critical', text:'<strong>ADRENALINE IM 0.01mg/kg</strong> (max 0.5mg) · anterolateral thigh · may repeat every 5–15min if no improvement'},
            {cls:'critical', text:'<strong>POSITION:</strong> supine + legs elevated (if hypotension) · sitting if respiratory distress · do NOT stand up'},
            {cls:'critical', text:'High-flow O₂ · monitor SpO₂, HR, BP'},
            {cls:'warn', text:'IV/IO access; NS bolus 10–20mL/kg if hypotension (up to 40mL/kg with continuous reassessment)'},
          ]},
          {tagCls:'t2', tag:'2nd Line', title:'Adjunct Medications (NEVER before adrenaline)',
           items:[
            {cls:'warn', text:'<strong>Corticosteroid:</strong> Methylprednisolone 1–2mg/kg IV (max 125mg) · useful to prevent biphasic reaction'},
            {cls:'warn', text:'<strong>H1 antihistamine:</strong> useful for cutaneous symptoms only · does NOT prevent haemodynamic compromise'},
            {cls:'', text:'Persistent bronchospasm: nebulised salbutamol 2.5–5mg every 20min · does not replace adrenaline'},
          ]},
          {tagCls:'t3', tag:'Refractory', title:'Adrenaline-Refractory Anaphylaxis',
           items:[
            {cls:'critical', text:'<strong>IV adrenaline:</strong> 0.01mg/kg IV very slowly (10min) · ONLY in circulatory collapse with IV access · continuous ECG monitoring'},
            {cls:'critical', text:'<strong>Adrenaline infusion:</strong> 0.05–0.5mcg/kg/min IV · titrate to response'},
            {cls:'critical', text:'<strong>Contact PICU;</strong> prepare for intubation if airway deteriorates'},
            {cls:'nursing', text:'Monitor minimum 4–8h (mild) to 24h (severe) due to risk of biphasic reaction'},
          ]},
        ]
      },
      {
        id:'pc-asma', cls:'p-asma', progKey:'asma',
        name:'Acute Asthma Attack', src:'proto_src_gema', badge:'proto_badge_urgencia',
        sourceNote:'📄 GEMA 5.3 2023 (Spanish Asthma Management Guide) + SEUP Asthma Protocol 2022. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Classify', title:'Severity Assessment',
           items:[
            {cls:'', text:'<strong>Mild:</strong> SpO₂ &gt;95%, full sentences, no accessory muscle use'},
            {cls:'warn', text:'<strong>Moderate:</strong> SpO₂ 91–95%, short phrases, accessory muscle use, widespread wheeze'},
            {cls:'critical', text:'<strong>Severe:</strong> SpO₂ &lt;91%, single words, severe retractions, wheeze ±absent (silent chest = SEVERE)'},
            {cls:'critical', text:'<strong>Near-fatal:</strong> cyanosis, altered consciousness, bradycardia → imminent intubation'},
          ]},
          {tagCls:'t1', tag:'1st Line', title:'Initial Treatment (All Severity)',
           items:[
            {cls:'critical', text:'<strong>O₂</strong> to target SpO₂ &gt;94%'},
            {cls:'critical', text:'<strong>High-dose nebulised salbutamol:</strong> 0.15mg/kg (min 2.5mg · max 5mg) every 20min × 3'},
            {cls:'critical', text:'<strong>Nebulised ipratropium</strong> (moderate-severe): 0.25mg (&lt;20kg) or 0.5mg (≥20kg) · with salbutamol · 3 doses'},
            {cls:'critical', text:'<strong>Early systemic corticosteroid (&lt;1h):</strong> Methylprednisolone 1–2mg/kg/6h IV (max 60mg/dose)'},
          ]},
          {tagCls:'t2', tag:'2nd Line', title:'Moderate-Severe — No Response to 1st Line',
           items:[
            {cls:'critical', text:'<strong>Magnesium Sulphate IV</strong> (GEMA 2022 — 1st choice 2nd line): 40–50mg/kg (max 2g) over 20–30min'},
            {cls:'warn', text:'<strong>NIV (CPAP/BiPAP):</strong> consider in moderate-severe with respiratory failure'},
          ]},
          {tagCls:'t3', tag:'Severe Crisis', title:'Severe Crisis — No Response or Deterioration',
           items:[
            {cls:'critical', text:'<strong>IV salbutamol:</strong> loading 5–15mcg/kg over 10–20min + infusion 1–5mcg/kg/min'},
            {cls:'critical', text:'<strong>Contact PICU;</strong> prepare intubation if: PCO₂ &gt;65mmHg, SpO₂ &lt;90% despite high-flow O₂'},
            {cls:'warn', text:'<strong>RSI in severe asthma:</strong> Ketamine 1.5mg/kg + Rocuronium 1.2mg/kg · avoid propofol'},
            {cls:'nursing', text:'Blood gas every 30–60min · continuous SpO₂ · fluid balance (SIADH risk with IV salbutamol)'},
          ]},
        ]
      },
      {
        id:'pc-cad', cls:'p-cad', progKey:'cad',
        name:'Diabetic Ketoacidosis (DKA)', src:'proto_src_ispad', badge:'proto_badge_urgencia',
        sourceNote:'📄 ISPAD Clinical Practice Consensus Guidelines 2022 — Diabetic Ketoacidosis. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Diagnosis', title:'Diagnostic Criteria & Severity Classification',
           items:[
            {cls:'critical', text:'<strong>DKA diagnosis:</strong> Blood glucose &gt;200mg/dL + pH &lt;7.30 OR HCO₃ &lt;15mEq/L + ketonaemia &gt;3mmol/L'},
            {cls:'warn', text:'<strong>Mild:</strong> pH 7.20–7.30 · <strong>Moderate:</strong> pH 7.10–7.20 · <strong>Severe:</strong> pH &lt;7.10'},
            {cls:'critical', text:'Urgent labs: blood glucose, blood gas, electrolytes (K⁺ CRITICAL), renal function, ketonaemia; ECG if K⁺ abnormal'},
          ]},
          {tagCls:'t1', tag:'Fluids', title:'Fluid Resuscitation (ISPAD 2022)',
           items:[
            {cls:'critical', text:'<strong>If shock:</strong> 0.9% NaCl 10mL/kg over 30–60min · AVOID &gt;20mL/kg total (cerebral oedema risk)'},
            {cls:'critical', text:'<strong>Rehydration:</strong> estimated deficit + maintenance · distribute evenly over <strong>48h</strong> (ISPAD 2022)'},
            {cls:'critical', text:'<strong>Potassium ALWAYS:</strong> if K⁺ &lt;5.5mEq/L and diuresis established → add 40mEq/L · if K⁺ &lt;3.5 → replete before insulin'},
            {cls:'nursing', text:'Hourly blood glucose; electrolytes every 2–4h; strict fluid balance; hourly urine output'},
          ]},
          {tagCls:'t2', tag:'Insulin', title:'IV Insulin Therapy',
           items:[
            {cls:'critical', text:'<strong>Start insulin 1–2h AFTER starting fluids</strong> (wait for K⁺ &gt;3.5mEq/L)'},
            {cls:'critical', text:'<strong>Dose:</strong> Regular insulin IV 0.05–0.1 U/kg/h · <strong>NO insulin bolus</strong> (ISPAD 2022 — increases cerebral oedema risk)'},
            {cls:'warn', text:'Target: blood glucose reduction 2–5mmol/L/h; do NOT lower more than 5mmol/L/h'},
          ]},
          {tagCls:'t3', tag:'Complications', title:'Cerebral Oedema — Most Serious Complication',
           items:[
            {cls:'critical', text:'<strong>SUSPECT CEREBRAL OEDEMA:</strong> severe headache during treatment, neurological deterioration, seizures, anisocoria'},
            {cls:'critical', text:'<strong>URGENT TREATMENT:</strong> Mannitol 0.5–1g/kg IV over 15–30min OR 3% NaCl 2.5–5mL/kg IV'},
            {cls:'critical', text:'Reduce fluid infusion rate by 50% · elevate head 30° · contact PICU'},
            {cls:'nursing', text:'Hourly Glasgow Scale · immediately notify any neurological change'},
          ]},
        ]
      },
      {
        id:'pc-iot', cls:'p-iot', progKey:'iot',
        name:'Endotracheal Intubation — Rapid Sequence (RSI)', src:'proto_src_secip', badge:'proto_badge_urgencia',
        sourceNote:'📄 SECIP — RSI Protocol 2023 (Spanish Society of Paediatric Intensive Care). Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Preparation', title:'Preparation: MSMAIDS Mnemonic',
           items:[
            {cls:'nursing', text:'<strong>M — Monitoring:</strong> ECG, SpO₂, BP, ETCO₂ connected and working before starting'},
            {cls:'nursing', text:'<strong>S — Suction:</strong> suction connected and tested; appropriate size catheter'},
            {cls:'critical', text:'<strong>M — Material:</strong> correct ETT (uncuffed + 0.5 backup), stylet, laryngoscope tested, face mask + bag-valve-mask with O₂ reservoir'},
            {cls:'', text:'<strong>A — Access IV/IO:</strong> verify patency; IO device ready if venous access difficult'},
            {cls:'critical', text:'<strong>I — Induction:</strong> calculate and prepare weight-based doses (see CPR tab)'},
            {cls:'nursing', text:'<strong>D — Decubitus:</strong> sniffing position (infant: no pillow; >2y: pillow under occiput)'},
            {cls:'', text:'<strong>S — SpO₂ + preoxygenation:</strong> high-flow O₂ 3–5 min (non-rebreather mask 15L/min) · target SpO₂ ≥95%'},
          ]},
          {tagCls:'t1', tag:'Premedication', title:'Premedication (2–3 min before)',
           items:[
            {cls:'warn', text:'<strong>Atropine 0.02mg/kg IV</strong> (min 0.1mg / max 0.5mg): &lt;1 year, prior bradycardia, succinylcholine use'},
            {cls:'', text:'<strong>Fentanyl 1–3 mcg/kg slow IV</strong> (2–3min): analgesia + blunts haemodynamic response; omit if haemodynamic instability'},
            {cls:'warn', text:'Lidocaine 1.5mg/kg only in raised ICP — controversial evidence; not routine'},
          ]},
          {tagCls:'t2', tag:'Induction + Relaxation', title:'Drug Sequence',
           items:[
            {cls:'critical', text:'<strong>Induction agent (select by clinical situation):</strong>'},
            {cls:'', text:'· <strong>Ketamine</strong> 1–2mg/kg IV: choice in shock, asthma, bronchospasm · preserves airway reflexes · ↑ secretions (+ atropine)'},
            {cls:'', text:'· <strong>Propofol</strong> 1–4mg/kg IV: favourable neurological profile · contraindicated in haemodynamic instability or &lt;1 month'},
            {cls:'', text:'· <strong>Midazolam</strong> 0.1–0.3mg/kg IV: slower onset · second line'},
            {cls:'critical', text:'<strong>Neuromuscular blocker — IMMEDIATELY after induction agent:</strong>'},
            {cls:'critical', text:'· <strong>Rocuronium 1.2mg/kg IV</strong> (RSI): current choice · onset ~60 sec · reversed with Sugammadex 16mg/kg'},
            {cls:'warn', text:'· Succinylcholine 1–2mg/kg IV: onset 30–45 sec · contraindicated in hyperkalaemia, burns >48h, muscular dystrophy'},
          ]},
          {tagCls:'t3', tag:'Laryngoscopy', title:'Intubation Technique',
           items:[
            {cls:'critical', text:'<strong>Laryngoscope blade:</strong> neonate/infant → Miller 0–1 · preschool/school age → Miller or Macintosh 2 · adolescent → Macintosh 3'},
            {cls:'', text:'BURP manoeuvre if difficult view: Backward-Upward-Rightward Pressure on thyroid cartilage · ask assistant'},
            {cls:'critical', text:'Maximum attempt <strong>30 sec</strong> · if unsuccessful: ventilate with mask and retry · max 3 attempts → difficult airway algorithm'},
            {cls:'nursing', text:'Confirm position: symmetric chest rise + capnography (ETCO₂ &gt;35) + bilateral auscultation + chest X-ray'},
            {cls:'', text:'ETT lip corner distance by weight (see CPR panel) · secure with adhesive tape or commercial fixation device'},
          ]},
          {tagCls:'t4', tag:'Post-RSI', title:'Post-Intubation Care',
           items:[
            {cls:'critical', text:'Set ventilator: Vt 6–8mL/kg · PEEP 4–5cmH₂O · RR by age · initial FiO₂ 1.0 · target SpO₂ 94–98%'},
            {cls:'critical', text:'Maintenance sedoanalgesia: Midazolam 0.05–0.2mg/kg/h + Morphine 10–40mcg/kg/h or Fentanyl 1–4mcg/kg/h'},
            {cls:'warn', text:'Post-RSI hypotension: 10–20mL/kg NS bolus + consider starting vasopressors (Noradrenaline or Adrenaline)'},
            {cls:'nursing', text:'Document: time, operator, number of attempts, ETT size, lip distance, confirming ETCO₂, cuff pressure'},
            {cls:'nursing', text:'Blood gas 30 min post-intubation · urgent chest X-ray · consider NGT for gastric decompression'},
          ]},
        ]
      },
      {
        id:'pc-mist', cls:'p-mist', progKey:'mist',
        name:'Surfactant MIST/LISA — Neonatal RDS', src:'proto_src_escrc', badge:'proto_badge_neonatal',
        sourceNote:'📄 European Consensus Guidelines on RDS Management 2023 (Vyas Dhar et al.) · SPN Recommendations 2022. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Indication', title:'Criteria for Surfactant Administration',
           items:[
            {cls:'critical', text:'<strong>Prophylactic indication:</strong> VLBW/ELBW ≤28 wks GA — administer within first 30 min of life'},
            {cls:'critical', text:'<strong>Rescue indication:</strong> Preterm neonate with clinical RDS + FiO₂ ≥0.3 requirement on CPAP/HFNC for SpO₂ 90–95% + compatible CXR/lung US'},
            {cls:'warn', text:'<strong>Nasal CPAP</strong> (PEEP 5–6 cmH₂O) or HFNC as respiratory support before and throughout the procedure'},
            {cls:'', text:'Antenatal corticosteroids: confirm administration (reduces surfactant requirement and improves response)'},
            {cls:'', text:'<strong>Preparation:</strong> surfactant warmed to body temperature · pre-loaded syringe · thin catheter (NG tube Fr6 or Lyomark vascular catheter)'},
          ]},
          {tagCls:'t1', tag:'Prepare', title:'Equipment & Dose',
           items:[
            {cls:'critical', text:'<strong>Dose:</strong> Poractant alfa (Curosurf®) <strong>200 mg/kg</strong> 1st dose · repeat dose 100 mg/kg if criteria persist (max 3 doses/24h)'},
            {cls:'nursing', text:'Calculate volume: Curosurf® 80 mg/mL → 200 mg/kg ÷ 80 = <strong>2.5 mL/kg</strong> · 100 mg/kg = 1.25 mL/kg'},
            {cls:'nursing', text:'Required equipment: laryngoscope + straight blade (neonatal) + Magill forceps (LISA) · thin catheter 40–45 cm · 5 mL syringe · monitoring (continuous SpO₂ + HR)'},
            {cls:'', text:'Continuous monitoring: SpO₂ and HR. Bag-mask ventilation (PPV) available and additional personnel present'},
            {cls:'warn', text:'<strong>Analgesia:</strong> Sucrose 25% 0.5–1 mL oral 2 min before · discuss additional premedication per local protocol (no routine systemic sedation for MIST)'},
          ]},
          {tagCls:'t2', tag:'Technique', title:'MIST Procedure (Hobart / Dargaville)',
           items:[
            {cls:'critical', text:'<strong>Position:</strong> Neonate in sniffing position · CPAP active throughout the entire procedure'},
            {cls:'critical', text:'<strong>Direct laryngoscopy:</strong> visualise vocal cords · insert thin catheter 1–1.5 cm below the cords without intubating'},
            {cls:'nursing', text:'Confirm position: small air bolus before surfactant (observe slight symmetric chest movement)'},
            {cls:'critical', text:'<strong>Instillation:</strong> slow surfactant delivery over 1–2 min (0.5–1 mL every 15–30 s) · DO NOT remove CPAP · if desaturation or HR&lt;100 → pause and give PPV'},
            {cls:'', text:'If surfactant regurgitation: pause, gently aspirate via catheter, complete dose after stabilisation'},
            {cls:'nursing', text:'Withdraw catheter slowly on completion · maintain CPAP (PEEP 6–7 cmH₂O) · document time, dose, operator and number of attempts'},
          ]},
          {tagCls:'t3', tag:'Post-MIST', title:'Monitoring & Follow-up',
           items:[
            {cls:'critical', text:'<strong>Post-procedure CPAP:</strong> maintain PEEP 5–7 cmH₂O · FiO₂ per SpO₂ target (90–95%) · wean FiO₂ gradually'},
            {cls:'warn', text:'<strong>MIST failure:</strong> intubation if Silverman ≥6 or sustained FiO₂ &gt;60% or frequent apnoeas → transition to INSURE or MV'},
            {cls:'', text:'Capillary blood gas 30–60 min post-procedure; chest X-ray at 4h or earlier if deterioration'},
            {cls:'', text:'<strong>Caffeine:</strong> loading dose 20 mg/kg IV → maintenance 5 mg/kg/24h as early as possible (reduces apnoea and MV need)'},
            {cls:'nursing', text:'Repeat surfactant (100 mg/kg) if FiO₂ ≥0.3 on CPAP at 6–12h (max 3 doses/24h) · document in patient record'},
          ]},
        ]
      },
      {
        id:'pc-bronquiolitis', cls:'p-bronquiolitis', progKey:'bronquiolitis',
        name:'Acute Bronchiolitis', src:'proto_src_bronq', badge:'proto_badge_urgencia',
        sourceNote:'📄 AEP/SEUP Bronchiolitis Consensus 2023 · AAP Clinical Practice Guideline 2014. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Assessment', title:'Severity Classification',
           items:[
            {cls:'critical', text:'<strong>Criteria for hospitalisation:</strong> RR >70 bpm (infant) or >50 (child), SpO₂ &lt;94% in air, severe work of breathing (marked retractions, nasal flaring, grunting), apnoeas, poor feeding (&lt;50% of usual intake)'},
            {cls:'warn', text:'<strong>Recommended clinical score:</strong> PRIB or simplified Wood-Downes-Ferres. Baseline score + bronchodilator response (if used)'},
            {cls:'', text:'Risk factors for severity: age &lt;6 weeks, prematurity, congenital heart disease, immunodeficiency, bronchopulmonary dysplasia'},
            {cls:'nursing', text:'Monitoring: continuous SpO₂ if hospitalised · RR and work of breathing every 2–4h · Temperature · Oral tolerance'},
          ]},
          {tagCls:'t1', tag:'Treatment', title:'Therapeutic Measures',
           items:[
            {cls:'critical', text:'<strong>Pillar 1 — Respiratory support:</strong> O₂ to maintain SpO₂ ≥94% · HFNC if SpO₂ &lt;94% on low-flow O₂ or moderate-severe WOB · CPAP if HFNC fails'},
            {cls:'critical', text:'<strong>Pillar 2 — Hydration:</strong> ≥50% feeds → continue oral with smaller, more frequent feeds. &lt;50% → NG tube. Unable to maintain → IV at maintenance'},
            {cls:'warn', text:'<strong>Nasal secretion clearance:</strong> before each feed and every 4–6h · saline irrigation beforehand · no routine deep suctioning'},
            {cls:'warn', text:'<strong>Nebulised adrenaline:</strong> consider in hospitalised patient with borderline SpO₂ or moderate WOB — only if positive response at 20 min. Dose: 0.1 mL/kg 1:1000 solution, max 3 mL (dilute to 4 mL NS)'},
            {cls:'', text:'<strong>NOT routinely indicated:</strong> salbutamol, systemic or inhaled corticosteroids, antibiotics (unless bacterial co-infection), chest physiotherapy'},
          ]},
          {tagCls:'t2', tag:'Admission/PICU', title:'Admission Criteria & Escalation',
           items:[
            {cls:'critical', text:'<strong>PICU criteria:</strong> recurrent apnoeas, SpO₂ &lt;92% on HFNC FiO₂ ≥50%, progressive severe WOB, RR &gt;80 bpm sustained, signs of impending respiratory failure'},
            {cls:'warn', text:'<strong>HFNC (High-Flow Nasal Cannula):</strong> first-line respiratory support in moderate-severe bronchiolitis · flow 1–3 L/kg/min (max 2 L/kg/min &lt;1yr, max 40 L/min in older) · FiO₂ as needed'},
            {cls:'nursing', text:'Nursing assessment every 4h: signs of respiratory distress, oral tolerance, RR/SpO₂, suctioning needs'},
            {cls:'', text:'CPAP: PEEP 5–7 cmH₂O · consider on HFNC failure · intubation if no improvement with CPAP'},
          ]},
          {tagCls:'t3', tag:'Discharge', title:'Discharge Criteria & Follow-up',
           items:[
            {cls:'', text:'SpO₂ ≥94% in room air for 4h (including sleep and feeds) · RR within normal range for age · oral tolerance &gt;50% of usual intake · no apnoeas for &gt;8h'},
            {cls:'nursing', text:'Parental education: warning signs (apnoea, cyanosis, breathing difficulty, refusing feeds), nasal saline irrigation, positioning (30° with neutral neck), avoid passive smoking'},
            {cls:'warn', text:'Follow-up: primary care paediatrician in 24–48h if early discharge · emergency review if SpO₂ &lt;95% or worsening'},
          ]},
        ]
      },
      {
        id:'pc-meningitis', cls:'p-meningitis', progKey:'meningitis',
        name:'Acute Bacterial Meningitis', src:'proto_src_mening', badge:'proto_badge_urgencia',
        sourceNote:'📄 SEUP 2022 · ESCMID Bacterial Meningitis Guidelines 2016 · ECDC Surveillance 2023. Updated Mar/2026.',
        phases:[
          {tagCls:'t0', tag:'Suspicion', title:'Diagnosis & Urgent Initiation',
           items:[
            {cls:'critical', text:'<strong>Alarm signs (initiate protocol immediately):</strong> neck stiffness, positive Kernig/Brudzinski, non-blanching petechiae/purpura, altered consciousness, photophobia, projectile vomiting + severe headache'},
            {cls:'critical', text:'<strong>Petechiae + fever = meningococcal disease until proven otherwise.</strong> Do NOT delay antibiotics for LP if: impending herniation, haemodynamic instability, platelets &lt;100,000, coagulopathy, skin infection over LP site'},
            {cls:'warn', text:'<strong>Urgent lumbar puncture</strong> if not contraindicated: opening pressure, cytochemistry, Gram, culture, latex/multiplex PCR (FilmArray Meningitis/Encephalitis panel)'},
            {cls:'nursing', text:'Hourly neurological monitoring: GCS/AVPU, pupils, HR, BP, RR, SpO₂ · Peripheral IV access × 2 · Urgent bloods: FBC, CRP, PCT, coagulation, blood cultures × 2, glucose'},
          ]},
          {tagCls:'t1', tag:'Empirical ATB', title:'Urgent Empirical Antibiotics',
           items:[
            {cls:'critical', text:'<strong>Empirical ATB BEFORE LP</strong> if contraindicated or delay &gt;30 min. Target: antibiotics within 60 min of clinical suspicion'},
            {cls:'critical', text:'<strong>&lt;3 months:</strong> Ampicillin 200 mg/kg/day IV (q6h) + Cefotaxime 200 mg/kg/day IV (q6h). ⚠️ Cover Listeria and GBS'},
            {cls:'critical', text:'<strong>3 months – 18 years:</strong> Ceftriaxone 80–100 mg/kg/day IV (q12h · max 4 g/day). Alternative: Cefotaxime 200 mg/kg/day (q6h · max 12 g/day)'},
            {cls:'warn', text:'<strong>Dexamethasone:</strong> 0.15 mg/kg/6h IV (max 10 mg/dose) × 4 days. Start 15–30 min BEFORE or simultaneously with ATB — reduces neurological sequelae (deafness) in H. influenzae and pneumococcal meningitis'},
            {cls:'warn', text:'<strong>MRSA or β-lactam allergy:</strong> Vancomycin 15 mg/kg IV q6h + Meropenem 120 mg/kg/day q8h · discuss with infectious disease/PICU'},
          ]},
          {tagCls:'t2', tag:'Complications', title:'Monitoring & Complications',
           items:[
            {cls:'critical', text:'<strong>Raised ICP:</strong> head of bed 30° · ICP monitoring-guided management if available · mannitol 0.5–1 g/kg IV or 3% NaCl 2–5 mL/kg over 10–20 min for severe ICP · no hypotonic fluids'},
            {cls:'critical', text:'<strong>Septic shock (meningococcal):</strong> NS 10–20 mL/kg IV rapid bolus · repeat as needed · early vasopressors (noradrenaline 0.05–1 mcg/kg/min) if fluid-refractory shock'},
            {cls:'warn', text:'<strong>Seizures:</strong> Diazepam IV 0.3 mg/kg or Midazolam IN 0.3 mg/kg first-line · Levetiracetam 20–40 mg/kg loading if persists · exclude SIADH and hypoglycaemia'},
            {cls:'', text:'<strong>SIADH:</strong> fluid restriction 50–60 mL/kg/day if Na⁺ &lt;130 mEq/L · 3% NaCl if Na⁺ &lt;120 mEq/L or neurological symptoms · max correction 0.5 mEq/L/h'},
            {cls:'nursing', text:'Respiratory isolation (droplets) × 24h after effective ATB · Meningococcal contact prophylaxis: rifampicin 4 doses or single-dose ciprofloxacin PO · urgent public health notification'},
          ]},
          {tagCls:'t3', tag:'Follow-up', title:'ATB Adjustment & Sequelae',
           items:[
            {cls:'', text:'<strong>ATB adjustment by identified pathogen:</strong> susceptible pneumococcus → penicillin G 250,000 IU/kg/day · meningococcus → penicillin G · H. influenzae → ampicillin if sensitive · duration: pneumococcus 10–14d, meningococcus 5–7d, H. influenzae 7–10d'},
            {cls:'warn', text:'<strong>Audiology before discharge</strong> or at 4–6 weeks: hearing loss is the most common sequela (10–30% pneumococcal). Neurodevelopmental assessment at 3 and 6 months'},
            {cls:'nursing', text:'Nursing assessment at discharge: education on late neurological signs, audiological and developmental follow-up, family information on meningitis and vaccination'},
          ]},
        ]
      },
    ]
  }
}; // fin PROTO

export const PROTO_CATS = [
  {id:'urg',   icon:'🚨', color:'#f87171',
   cards:['pc-pcr','pc-anafilaxia','pc-asma','pc-iot'],
   label:{es:'Urgencia / Emergencia',pt:'Urgência / Emergência',en:'Emergency'}},
  {id:'neuro', icon:'🧠', color:'#a78bfa',
   cards:['pc-convulsivo','pc-htic'],
   label:{es:'Neurología',pt:'Neurologia',en:'Neurology'}},
  {id:'infec', icon:'🦠', color:'#34d399',
   cards:['pc-sepsis','pc-bronquiolitis','pc-meningitis'],
   label:{es:'Infección Grave',pt:'Infeção Grave',en:'Severe Infection'}},
  {id:'endoc', icon:'🩸', color:'#fbbf24',
   cards:['pc-cad'],
   label:{es:'Endocrinología',pt:'Endocrinologia',en:'Endocrinology'}},
  {id:'neo',   icon:'👶', color:'#38bdf8',
   cards:['pc-hipotermia','pc-mist'],
   label:{es:'Neonatal',pt:'Neonatal',en:'Neonatal'}},
];

