// Auto-generated ES module — PediCode modular migration
// Step 1: Data extraction

export const DOSE_DRUGS = [
  {name:"Adrenalina",cat:"RCP",color:"#f87171",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"Sin contraindicaciones absolutas en riesgo vital. Verificar dilución antes de administrar.",doses:[
    {label:"PCR — IV/IO",range:"0,01 mg/kg",note:"máx 1 mg · repetir c/3–5 min · dilución 1:10 000",factor:0.01,unit:"mg",maxDose:1},
    {label:"PCR — Endotraqueal",range:"0,1 mg/kg",note:"máx 2,5 mg · dilución 1:1000 · lavar con 2,5–5 mL SF",factor:0.1,unit:"mg",maxDose:2.5},
    {label:"PCR — Neonato IV/IO",range:"0,01–0,03 mg/kg",note:"dilución 1:10 000",factor:0.015,unit:"mg",neonatal:true},
    {label:"Anafilaxia — IM",range:"0,01 mg/kg",note:"máx 0,5 mg · cara anterolateral muslo · c/5–15 min",factor:0.01,unit:"mg",maxDose:0.5},
    {label:"Perfusión vasopresor/inotrópico",range:"0,1–1 mcg/kg/min",note:">0,3 mcg/kg/min → efecto vasopresora predominante",factor:0.3,unit:"mcg/min",infusion:true},
    {label:"Obst. VA alta — Nebulización",range:"0,5 mL/kg (1:1000)",note:"máx 5 mL · O₂ 4–6 L/min",factor:0.5,unit:"mL",maxDose:5},
  ]},
  {name:"Amiodarona",cat:"RCP",color:"#fb923c",source:"Pediamécum AEP",rev:"2021-04",status:"verified",notes:"⚠️ Prolonga QT. No mezclar con ningún otro fármaco. Bolo directo nunca < 3 min. Segunda dosis IV directa: esperar ≥ 15 min tras la primera.",doses:[
    {label:"FV/TV sin pulso — IV/IO",range:"5 mg/kg",note:"bolo rápido en PCR · máx 300 mg/dosis · puede repetir hasta 15 mg/kg total",factor:5,unit:"mg",maxDose:300},
    {label:"Taquiarritmia — carga IV",range:"5 mg/kg",note:"infundir en 20–60 min (neonatos: 30 min) · máx 300 mg",factor:5,unit:"mg",maxDose:300},
    {label:"Perfusión mantenimiento",range:"5–15 mcg/kg/min",note:"iniciar tan pronto se establezca perfusión continua",factor:10,unit:"mcg/min",infusion:true},
  ]},
  {name:"Atropina",cat:"RCP",color:"#facc15",source:"Pediamécum AEP",rev:"2021-04",status:"verified",notes:"Dosis mínima clásica (0,1 mg) ya NO se recomienda — puede causar bradicardia paradójica (Barrington 2011, Pediatrics). Dosis < 0,02 mg/kg pueden ser insuficientes.",doses:[
    {label:"Bradicardia sintomática — IV/IO",range:"0,02 mg/kg",note:"dosis única · puede repetir 1 vez · sin dosis mínima establecida",factor:0.02,unit:"mg"},
    {label:"Preanestesia / SRI",range:"0,01–0,02 mg/kg",note:"IV/IM · máx 0,5 mg",factor:0.015,unit:"mg",maxDose:0.5},
    {label:"Bradicardia — Endotraqueal",range:"0,04–0,06 mg/kg",note:"solo si no hay acceso IV/IO",factor:0.05,unit:"mg"},
  ]},
  {name:"Adenosina",cat:"RCP",color:"#34d399",source:"Pediamécum AEP",rev:"2021-04",status:"verified",notes:"⚠️ Usar acceso IV más proximal posible. Técnica de 2 jeringas. Dipiridamol potencia su efecto (contraindicado). Teofilina antagoniza su efecto.",doses:[
    {label:"TSV — 1ª dosis IV rápida",range:"0,1 mg/kg",note:"máx 6 mg · bolo IV + flush inmediato 5–10 mL SF",factor:0.1,unit:"mg",maxDose:6},
    {label:"TSV — 2ª dosis IV rápida",range:"0,2 mg/kg",note:"máx 12 mg · si no hay respuesta a 1ª dosis",factor:0.2,unit:"mg",maxDose:12},
  ]},
  {name:"Bicarbonato Na",cat:"RCP",color:"#60a5fa",source:"AEMPS Ficha Técnica + ERC PLS 2021 + Pediamécum AEP",sourceUrl:"https://cima.aemps.es/cima/dochtml/ft/47517/",rev:"2026-03",status:"verified",notes:"⚠️ NO rutinaria en PCR. Solo acidosis metabólica grave (pH<7,10) tras ventilación eficaz + MCE + adrenalina sin respuesta. CI en acidosis respiratoria. No mezclar con aminas ni calcio. Vigilar: hipocalcemia, hipopotasemia, acidosis paradójica intracelular.",doses:[
    {label:"PCR / Acidosis grave — IV/IO",range:"1 mEq/kg",note:"sol. 8,4% (1 mL/kg) · bolo IV lento · repetir según gasimetría · máx 50 mEq",factor:1,unit:"mEq",maxDose:50},
    {label:"Neonato — IV/IO",range:"1 mEq/kg",note:"⚠️ sol. 4,2% (diluir 8,4% al 1:1 con glucosa 5%) · máx 8 mEq/kg/día · infusión lenta (riesgo HIV)",factor:2,unit:"mL sol.4,2%",neonatal:true},
    {label:"Acidosis grave no-PCR — IV perfusión",range:"2–5 mEq/kg",note:"en 4–8h · no superar 50% déficit calculado en 1ª dosis · monitorizar pH, K⁺, Ca²⁺",factor:3,unit:"mEq"},
  ]},
  {name:"Glucosa (SG10%)",cat:"RCP",color:"#a78bfa",source:"ERC PLS 2021 + guías SEUP",rev:"2020-12",status:"verified",notes:"Indicada solo en hipoglucemia documentada (<45–50 mg/dL). Evitar hiperglucemia en PCR.",doses:[
    {label:"Hipoglucemia — IV/IO",range:"2 mL/kg (SG 10%)",note:"= 0,2 g/kg · máx 25 mL · adolescente: 1 amp SG 20%",factor:2,unit:"mL",maxDose:25},
  ]},
  {name:"Fentanilo",cat:"Sedo",color:"#c084fc",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"Opioide sintético 100× más potente que morfina. Puede causar rigidez torácica con bolo rápido → administrar lento. Antagonista: naloxona.",doses:[
    {label:"Analgesia/sedación procedimiento — IV",range:"1–2 mcg/kg",note:"máx 100 mcg · bolo lento 2–3 min · repetir 0,5–1 mcg/kg cada 3 min",factor:1,unit:"mcg",maxDose:100},
    {label:"Analgesia — Intranasal",range:"1–2 mcg/kg",note:"máx 100 mcg · atomizador · 0,5 mL por fosa nasal",factor:1.5,unit:"mcg",maxDose:100},
    {label:"Perfusión analgesia UCI",range:"1–4 mcg/kg/h",note:"ajustar según respuesta clínica",factor:2,unit:"mcg/h",infusion:true},
    {label:"Perfusión neonatal",range:"0,5–2 mcg/kg/h",note:"inicio 0,5 mcg/kg/h · ajuste lento · monitorizar FR/SpO₂",factor:1,unit:"mcg/h",neonatal:true,infusion:true},
  ]},
  {name:"Morfina",cat:"Sedo",color:"#818cf8",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Opioide prototipo. ⚠️ Neonatos y lactantes <3m: mayor riesgo de depresión respiratoria. Contraindicado en TCE con HTIC, broncoespasmo grave, íleo paralítico.",doses:[
    {label:"Dolor agudo — IV lenta",range:"0,05–0,1 mg/kg",note:"máx 15 mg/24h · administrar en 5–10 min",factor:0.05,unit:"mg",maxDose:0.2},
    {label:"Perfusión posoperatoria",range:"0,01–0,04 mg/kg/h",note:"dolor postquirúrgico",factor:0.02,unit:"mg/h",infusion:true},
    {label:"Perfusión neonatal",range:"0,010–0,020 mg/kg/h",note:"máx 0,020 mg/kg/h · monitorización continua",factor:0.015,unit:"mg/h",neonatal:true,infusion:true},
    {label:"IM/SC",range:"0,1–0,2 mg/kg/4h",note:"máx 15 mg/dosis",factor:0.1,unit:"mg",maxDose:15},
  ]},
  {name:"Ketamina",cat:"Sedo",color:"#f472b6",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"Anestesia disociativa: mantiene reflejos, no deprime respiración (en dosis habituales). ⚠️ CI: <3 meses, HTIC, glaucoma o lesiones oculares, hipertensión no controlada, porfiria, cardiopatía grave. Puede causar laringoespasmo. Asociar midazolam si riesgo de reacciones disfóricas.",doses:[
    {label:"Procedimientos — IV",range:"1–2 mg/kg",note:"máx 50 mg · bolo lento ≥30 seg · no superar 0,5 mg/kg/min",factor:1.5,unit:"mg",maxDose:50},
    {label:"Procedimientos — IM",range:"3–5 mg/kg",note:"máx 100 mg · latencia 3–4 min · opción si no hay acceso IV",factor:4,unit:"mg",maxDose:100},
    {label:"Analgesia subanestésica — IV",range:"0,1–0,5 mg/kg",note:"para analgesia sin sedación profunda · bolo lento",factor:0.3,unit:"mg"},
    {label:"Perfusión analgesia/sedación",range:"0,1–1 mg/kg/h",note:"ajustar según efecto clínico",factor:0.5,unit:"mg/h",infusion:true},
  ]},
  {name:"Midazolam",cat:"Sedo",color:"#34d399",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"⚠️ <6 meses: mayor riesgo de depresión respiratoria — titular en pequeños incrementos. Potencia efecto de otros depresores del SNC. CYP3A4: eritromicina y antifúngicos azólicos potencian su efecto. Antagonista: flumazenil.",doses:[
    {label:"Sedación consciente procedimiento — IV",range:"0,05–0,1 mg/kg (6m–5a) · 0,025–0,05 mg/kg (6–12a)",note:"administrar en 2–3 min · esperar 2–5 min antes de repetir · máx 0,2 mg/kg total",factor:0.05,unit:"mg",maxDose:5},
    {label:"Premedicación — IM",range:"0,1–0,15 mg/kg",note:"máx 10 mg · 30–60 min antes del procedimiento",factor:0.1,unit:"mg",maxDose:10},
    {label:"Crisis convulsiva — Bucal/Intranasal",range:"0,2–0,3 mg/kg",note:"máx 10 mg · indicación: crisis >5 min · vía de elección extrahospitalaria",factor:0.3,unit:"mg",maxDose:10},
    {label:"Sedación VM — Carga IV",range:"0,05–0,2 mg/kg",note:"bolo lento IV · no administrar en bolo rápido",factor:0.1,unit:"mg"},
    {label:"Sedación VM — Perfusión continua",range:"0,06–0,12 mg/kg/h",note:"ajustar 25% según nivel de sedación · reevaluar diariamente",factor:0.06,unit:"mg/h",infusion:true},
  ]},
  {name:"Diazepam",cat:"Sedo",color:"#4ade80",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Vida media larga (20–100h + metabolito activo) → no es fármaco de 1ª elección para sedación de procedimientos. Preferir midazolam. Indicado como anticonvulsivante rectal extrahospitalario. ⚠️ No recomendado <6 meses. Excipientes: contiene propilenglicol, benzoato sódico y alcohol bencílico — precaución en neonatos.",doses:[
    {label:"Crisis convulsiva — IV",range:"0,1–0,3 mg/kg",note:"máx 10 mg · lento 3–5 min · repetir a los 5–10 min si precisa",factor:0.2,unit:"mg",maxDose:10},
    {label:"Crisis convulsiva — Rectal",range:"0,3–0,5 mg/kg",note:"máx 10 mg · solución rectal",factor:0.4,unit:"mg",maxDose:10},
    {label:"Sedación procedimiento — IV",range:"0,05–0,1 mg/kg",note:"máx 0,25 mg/kg total · preferir midazolam por vida media más corta",factor:0.1,unit:"mg",maxDose:5},
  ]},
  {name:"Propofol",cat:"Sedo",color:"#fbbf24",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"⚠️ CI absoluta: sedación UCI en <16 años (Síndrome de infusión de propofol en niños). No usar en <1 mes. Alergia al huevo/soja: consultar ficha. Dolor en la inyección: usar vena grande o lidocaína 0,5 mg/kg previa. Personal entrenado con capacidad de manejo de vía aérea.",doses:[
    {label:"Inducción anestesia/sedación profunda — IV",range:"1–2 mg/kg",note:"bolo IV · edad >1 mes · máx primera dosis 100 mg",factor:1.5,unit:"mg",maxDose:100},
    {label:"Mantenimiento — Perfusión",range:"1,5–9 mg/kg/h",note:"titular según profundidad de sedación requerida",factor:3,unit:"mg/h",infusion:true},
    {label:"Bolo suplementario durante perfusión",range:"hasta 1 mg/kg",note:"para aumentar rapidamente profundidad de sedación",factor:1,unit:"mg",maxDose:40},
  ]},
  {name:"Dexmedetomidina",cat:"Sedo",color:"#2dd4bf",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Sedación similar al sueño fisiológico — paciente despertar fácil. ⚠️ NO administrar en BOLO IV (bradicardia, paro sinusal). No usar >24h. No indicado para sedación profunda ni como inductor de intubación. Puede causar hipotensión (28%) y bradicardia (13%). Tener atropina disponible.",doses:[
    {label:"Carga — IV lenta",range:"0,5–1 mcg/kg",note:"infundir en 10 min · omitir si inestabilidad hemodinámica",factor:0.5,unit:"mcg",maxDose:1},
    {label:"Perfusión sedación UCI",range:"0,2–1 mcg/kg/h",note:"inicio 0,7 mcg/kg/h · ajustar gradualmente · no escalar rápido",factor:0.7,unit:"mcg/h",infusion:true},
    {label:"Perfusión analgesia/sedación leve",range:"0,2–0,7 mcg/kg/h",note:"rango analgésico",factor:0.4,unit:"mcg/h",infusion:true},
    {label:"Neonatal — perfusión",range:"0,05–0,3 mcg/kg/h",note:"datos limitados · debut lento · menor aclaramiento en pretérmino",factor:0.1,unit:"mcg/h",neonatal:true,infusion:true},
  ]},
  {name:"Etomidato",cat:"Sedo",color:"#fb923c",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Inductor de elección en HTIC o hipotensión (estabilidad hemodinámica). ⚠️ CI ABSOLUTA: shock séptico (suprime cortisol hasta 24h por inhibición de 11β-hidroxilasa). Mioclonías frecuentes: premedicar con opioides o BZD. Inicio: 10 seg · duración: 5 min. No usar en <6 meses (off-label).",doses:[
    {label:"Inducción/ISR — IV lenta",range:"0,15–0,3 mg/kg",note:"máx 0,4 mg/kg si efecto insuficiente · bolo lento",factor:0.2,unit:"mg",maxDose:20},
  ]},
  {name:"Paracetamol IV",cat:"Sedo",color:"#a3e635",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Analgésico/antipirético de 1ª línea. Buen perfil de seguridad incluso en neonatos si se respeta la dosis. Dosis diaria máxima = 60 mg/kg/día (niños) o 4 g/día (adultos). Intervalo mínimo 4h entre dosis.",doses:[
    {label:"Dolor/fiebre — IV (niños >10kg)",range:"15 mg/kg/6h",note:"máx 60 mg/kg/día · perfusión en 15 min",factor:15,unit:"mg",maxDose:1000},
    {label:"Neonato/lactante <10kg — IV",range:"7,5 mg/kg/6h",note:"máx 30 mg/kg/día en neonatos pretérmino",factor:7.5,unit:"mg",neonatal:true},
  ]},
  {name:"Ketorolac",cat:"Sedo",color:"#f87171",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"AINE. Off-label en <18 años. ⚠️ Máximo 2–5 días por vía IV/IM. CI: IR moderada-grave, sangrado activo, coagulopatía, cirugía cardíaca. Mayor riesgo de sangrado en neonatos <21 días. Administrar bolo IV en 1–5 min.",doses:[
    {label:"Dolor agudo — IV (bolo)",range:"0,5 mg/kg",note:"máx 15 mg · administrar en 1–5 min",factor:0.5,unit:"mg",maxDose:15},
    {label:"Dolor agudo — IM",range:"1 mg/kg",note:"máx 30 mg · dosis única",factor:1,unit:"mg",maxDose:30},
    {label:"Mantenimiento — IV/IM",range:"0,5 mg/kg/6h",note:"máx 48–72h IV / 5 días IM · vigilar función renal",factor:0.5,unit:"mg",maxDose:15},
  ]},
  {name:"Metamizol",cat:"Sedo",color:"#e879f9",source:"Pediamécum AEP",rev:"2025-04",status:"verified",notes:"Off-label en <18 años (ficha técnica no lo recomienda). ⚠️ CI: <12 meses, hipotensión o inestabilidad hemodinámica (vía IV), agranulocitosis en tto anterior, porfiria, déficit G6PD. Riesgo de agranulocitosis (~5–8 casos/millón/año) — no dependiente de dosis. Suspender si fiebre o infección grave durante tratamiento.",doses:[
    {label:"Dolor/fiebre — IV (perfusión lenta)",range:"10–20 mg/kg/6h",note:"máx 1–2 g/dosis · perfusión en 15–30 min · NO bolo directo",factor:15,unit:"mg",maxDose:2000},
    {label:"Dolor/fiebre — IM",range:"10–20 mg/kg/6h",note:"máx 1 g/dosis · profundo y lento",factor:15,unit:"mg",maxDose:1000},
  ]},
  {name:"Rocurônio",cat:"BNM",color:"#60a5fa",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"BNM no despolarizante de inicio rápido. Uso IV exclusivamente. ⚠️ Reversión con SUGAMADEX. En ISR: 1–1,2 mg/kg → inicio 60 seg. Inicio más lento en neonatos. Duración varía según temperatura, pH, fármacos concomitantes.",doses:[
    {label:"Intubación de Secuencia Rápida (ISR)",range:"1–1,2 mg/kg",note:"bolo IV 5–10 seg · inicio clínico ~60 seg · reversión: sugamadex 16 mg/kg si emergencia",factor:1.2,unit:"mg",maxDose:200},
    {label:"Intubación rutinaria",range:"0,45–0,6 mg/kg",note:"bolo IV · inicio bloqueo máximo ~60 seg en niños",factor:0.6,unit:"mg",maxDose:120},
    {label:"Perfusión mantenimiento VM",range:"7–10 mcg/kg/min",note:"= 0,42–0,6 mg/kg/h · monitorizar con TOF cuando sea posible",factor:7,unit:"mcg/min",infusion:true},
  ]},
  {name:"Vecurônio",cat:"BNM",color:"#38bdf8",source:"Pediamécum AEP",rev:"2021-03",status:"verified",notes:"BNM no despolarizante de duración intermedia. Inicio 1–3 min · duración 35–45 min. Niños 2–10a: requieren dosis relativas mayores. Neonatos: mayor sensibilidad y duración más larga. Metabolismo hepático: ajustar en fallo hepático. ⚠️ Siempre acompañar de sedación adecuada (no altera la consciencia).",doses:[
    {label:"Intubación — IV",range:"0,1 mg/kg",note:"si previo succinilcolina: reducir a 0,04–0,06 mg/kg",factor:0.1,unit:"mg",maxDose:10},
    {label:"Mantenimiento — IV (repetición)",range:"0,02–0,03 mg/kg",note:"repetir cada 1–2h según respuesta clínica",factor:0.02,unit:"mg",maxDose:4},
    {label:"Perfusión continua",range:"1,5–2,5 mcg/kg/min",note:"= 0,09–0,15 mg/kg/h · titular con TOF",factor:2,unit:"mcg/min",infusion:true},
  ]},
  {name:"Succinilcolina",cat:"BNM",color:"#f43f5e",source:"Pediamécum AEP",rev:"2020-09",status:"verified",notes:"⚠️ CONTRAINDICADO en: hiperkaliemia conocida, quemados extensos, aplastamiento, miopatías no diagnosticadas, distrofia muscular, hipertermia maligna familiar, déficit de pseudocolinesterasa. Puede causar bradicardia y taquicardia. En niños pequeños: mayor riesgo de miopatía no diagnosticada → considerar rocuronio + sugamadex si dudas. No reversión directa (aguardar metabolismo).",doses:[
    {label:"ISR — Niños/adolescentes IV",range:"1 mg/kg",note:"bolo IV · inicio 30–60 seg · duración 3–5 min",factor:1,unit:"mg",maxDose:150},
    {label:"ISR — Lactantes IV",range:"2 mg/kg",note:"lactantes requieren dosis relativas mayores",factor:2,unit:"mg",neonatal:true,maxDose:40},
    {label:"ISR — Neonatos IV",range:"3 mg/kg",note:"neonatos: mayor dosis relativa por mayor volumen de distribución",factor:3,unit:"mg",neonatal:true,maxDose:20},
    {label:"Sin acceso IV — IM",range:"4–5 mg/kg (lactantes) · 4 mg/kg (niños)",note:"sólo si no hay acceso IV · inicio 3 min · duración 10–30 min",factor:4,unit:"mg",maxDose:200},
  ]},
  {name:"Fenitoína",cat:"Antiepi",color:"#f59e0b",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"⚠️ Velocidad máx IV: 0,5–1 mg/kg/min. Monitorización ECG y PA durante la infusión (riesgo de hipotensión y arritmias). Precipita con glucosa, aminoácidos y casi todos los fármacos. CI en bradicardia/bloqueo AV. Riesgo de Stevens-Johnson en portadores HLA-B*1502 (origen asiático).",doses:[
    {label:"Carga — Estatus epiléptico IV",range:"15–20 mg/kg",note:"máx 1.000 mg · infusión en SF a ≤1 mg/kg/min · AAP recomienda 10 mg/kg 1ª dosis",factor:18,unit:"mg",maxDose:1000},
    {label:"Mantenimiento oral/IV (inicio 12h post-carga)",range:"5 mg/kg/día",note:"repartido en 2 dosis · máx 300 mg/día · ajustar por niveles",factor:5,unit:"mg",maxDose:300},
  ]},
  {name:"Fenobarbital",cat:"Antiepi",color:"#78716c",source:"Pediamécum AEP",rev:"2022-11",status:"verified",notes:"1ª línea en convulsiones neonatales y <1 año. 2ª línea tras BZD + fenitoína en ≥1 año. Depresión respiratoria y SNC significativa — tener disponible soporte ventilatorio. Interacción con valproato: puede aumentar o disminuir niveles de ambos. Inductor enzimático potente (CYP).",doses:[
    {label:"Carga — Estatus epiléptico IV",range:"20 mg/kg",note:"infundir en 20–30 min · máx 1.000 mg · puede repetir 10 mg/kg (máx 40 mg/kg total)",factor:20,unit:"mg",maxDose:1000},
    {label:"Carga — Neonato IV",range:"20–30 mg/kg",note:"1ª línea neonatal · infusión lenta IV · monitorizar FR y SpO₂",factor:25,unit:"mg",neonatal:true},
    {label:"Mantenimiento neonatal IV/VO",range:"2–5 mg/kg/día",note:"repartido en 1–2 dosis",factor:3,unit:"mg",neonatal:true},
    {label:"Mantenimiento lactante IV/VO",range:"5–8 mg/kg/día",note:"repartido en 1–2 dosis",factor:6,unit:"mg"},
    {label:"Mantenimiento niño IV/VO",range:"3–5 mg/kg/día",note:"repartido en 1–2 dosis · máx 200 mg/día",factor:4,unit:"mg",maxDose:200},
  ]},
  {name:"Levetiracetam",cat:"Antiepi",color:"#10b981",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"Perfil de seguridad favorable. Mínimas interacciones farmacológicas (no altera CYP). Creciente uso como 2ª línea en estatus epiléptico. Reacciones conductuales (agitación, agresividad) más frecuentes en niños que en adultos.",doses:[
    {label:"Carga — Estatus epiléptico IV",range:"20–30 mg/kg",note:"máx 3.000 mg · infundir en 15 min",factor:30,unit:"mg",maxDose:3000},
    {label:"Mantenimiento — <6 meses IV/VO",range:"7 mg/kg/12h",note:"puede incrementar hasta 21 mg/kg/12h según respuesta",factor:7,unit:"mg",neonatal:true},
    {label:"Mantenimiento — 6m a 11 años IV/VO",range:"10–30 mg/kg/12h",note:"inicio 10 mg/kg/12h · incrementos de 10 mg/kg c/2 semanas",factor:10,unit:"mg",maxDose:1500},
    {label:"Mantenimiento — ≥12 años / ≥50kg",range:"250–1500 mg/12h",note:"misma pauta que adultos",factor:null,unit:"mg"},
  ]},
  {name:"Valproato Na",cat:"Antiepi",color:"#6366f1",source:"Pediamécum AEP",rev:"2026-02",status:"verified",notes:"⚠️ TERATÓGENO — evitar absolutamente en mujeres en edad fértil salvo que no haya alternativa + programa prevención embarazo AEMPS (feb/2018). CI en niños con errores metabólicos no diagnosticados: detectar primero glucocina/amonio/lactato. Inhibidor enzimático CYP — múltiples interacciones. Carbapenemes reducen niveles. Riesgo de hepatotoxicidad grave en <2a con politerapia.",doses:[
    {label:"Carga — Estatus epiléptico IV",range:"20–40 mg/kg",note:"máx 2.500 mg · infundir en 15–30 min",factor:30,unit:"mg",maxDose:2500},
    {label:"Mantenimiento oral/IV",range:"20–40 mg/kg/día",note:"repartido en 2–3 dosis · ajustar por niveles (50–100 mcg/mL)",factor:30,unit:"mg",maxDose:2500},
  ]},
  {name:"Labetalol",cat:"Cardio",color:"#3b82f6",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"⚠️ CI absoluta: asma, EPOC, bloqueo AV 2º-3º sin marcapasos, shock cardiogénico. Monitorizar PA y FC durante la administración. No interrumpir bruscamente. CI en pacientes con feocromocitoma (puede paradójicamente elevar la PA).",doses:[
    {label:"Crisis hipertensiva — Bolo IV",range:"0,2–1 mg/kg",note:"máx 40 mg/dosis · administrar en 2–3 min · velocidad máx 2 mg/min",factor:0.5,unit:"mg",maxDose:40},
    {label:"Perfusión continua IV",range:"0,5–3 mg/kg/h",note:"concentración usual en Pediatría: 1 mg/mL · titular según respuesta",factor:1,unit:"mg/h",infusion:true},
  ]},
  {name:"Lidocaína",cat:"Cardio",color:"#0ea5e9",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"⚠️ Toxicidad (parestesias, tinnitus, convulsiones, arritmias) con velocidad de infusión excesiva. Velocidad máx IV: 0,7 mg/kg/min. Amiodarona puede reducir su metabolismo. CI: síndrome de Wolf-Parkinson-White, bloqueo AV o intraventricular sin marcapasos, disfunción sinusal grave.",doses:[
    {label:"Arritmia ventricular — Bolo IV",range:"1 mg/kg",note:"bolo directo IV · puede repetir 0,5–1 mg/kg si >15 min desde 1ª dosis",factor:1,unit:"mg",maxDose:100},
    {label:"Arritmia ventricular — Perfusión",range:"20–50 mcg/kg/min",note:"máx 30 mg/min · iniciar inmediatamente tras el bolo",factor:30,unit:"mcg/min",infusion:true},
    {label:"Vía endotraqueal (si no hay IV/IO)",range:"2–3 mg/kg",note:"solo si no hay acceso IV/IO · lavar con 5 mL SF",factor:2.5,unit:"mg"},
    {label:"Estatus epiléptico refractario (off-label)",range:"1 mg/kg bolo + 20–50 mcg/kg/min",note:"opción en EE resistente a BZD y fenitoína por efectos no sedantes",factor:1,unit:"mg",infusion:true},
  ]},
  {name:"Salbutamol IV",cat:"Resp",color:"#22d3ee",source:"Pediamécum AEP",rev:"2020-11",status:"verified",notes:"La vía nebulizada es siempre de elección. IV solo en asma grave con mala respuesta inhalatoria. Monitorizar K⁺ (hipopotasemia) y FC (taquicardia). ⚠️ No combinar con otros simpaticomiméticos. Precaución con β-bloqueantes (antagonismo), xantinas y corticoides (riesgo de hipopotasemia aditiva).",doses:[
    {label:"Crisis grave — Carga IV lenta",range:"5–15 mcg/kg",note:"infundir en 10–20 min · dosis de inicio 5 mcg/kg",factor:5,unit:"mcg",maxDose:500},
    {label:"Perfusión continua IV",range:"1–5 mcg/kg/min",note:"titular según respuesta clínica y SpO₂",factor:2,unit:"mcg/min",infusion:true},
    {label:"Nebulización dosis alta (urgencias)",range:"2,5–5 mg",note:"máx 10 mg · en niños <20 kg: 2,5 mg · puede repetir cada 20 min en crisis grave",factor:null,unit:"mg"},
  ]},
  {name:"Sulfato Mg",cat:"Resp",color:"#a78bfa",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"En asma: broncodilatador de rescate en crisis grave sin respuesta a salbutamol. ⚠️ Monitorizar: reflejos osteotendinosos (ROT), FR y diuresis durante infusión. Signos de toxicidad: pérdida de ROT rotuliano, hipotensión, depresión respiratoria. Antídoto: Gluconato cálcico 100 mg/kg IV. Ajustar dosis en IR.",doses:[
    {label:"Asma grave — IV",range:"25–75 mg/kg",note:"máx 2 g · infundir en 20–30 min · dosis usual 40 mg/kg",factor:40,unit:"mg",maxDose:2000},
    {label:"Hipomagnesemia / eclampsia — IV",range:"25–50 mg/kg",note:"máx 2 g · infundir en 20 min",factor:30,unit:"mg",maxDose:2000},
    {label:"Neonato hipocalcemia/hipomagnesemia",range:"25–50 mg/kg/dosis",note:"IV/IM lenta · puede repetir cada 8–12h",factor:25,unit:"mg",neonatal:true},
  ]},
  {name:"Aminofilina",cat:"Resp",color:"#f97316",source:"Pediamécum AEP (Teofilina IV)",rev:"2021-01",status:"verified",notes:"3ª línea en asma grave — solo si no hay respuesta a salbutamol + sulfato Mg. Índice terapéutico estrecho (5–15 mcg/mL). ⚠️ Monitorizar niveles: toxicidad a >20 mcg/mL (náuseas, arritmias, convulsiones). Múltiples interacciones (eritromicina, quinolonas, cimetidina aumentan niveles). No usar si ya recibe teofilina oral. Ajustar en fumadores (aclaramiento aumentado).",doses:[
    {label:"Carga — IV lenta (sin tratamiento previo con teofilina)",range:"5–6 mg/kg",note:"infundir en 20–30 min · NUNCA bolo directo",factor:5,unit:"mg",maxDose:500},
    {label:"Mantenimiento — Perfusión continua IV",range:"0,9 mg/kg/h (1–9 años) · 0,7 mg/kg/h (10–16 años)",note:"ajustar por niveles plasmáticos · objetivo: 10–20 mcg/mL",factor:0.9,unit:"mg/h",infusion:true},
    {label:"Apnea del prematuro — Carga IV",range:"5–6 mg/kg",note:"infundir en 30 min",factor:5,unit:"mg",neonatal:true},
    {label:"Apnea del prematuro — Mantenimiento IV",range:"0,5–1 mg/kg/6h",note:"inicio 12h post-carga",factor:0.7,unit:"mg",neonatal:true},
  ]},
  {name:"Naloxona",cat:"Antídoto",color:"#ef4444",source:"Pediamécum AEP",rev:"2026-02",status:"verified",notes:"⚠️ Vida media corta (30–80 min) — SIEMPRE más corta que el opioide. Requiere monitorización prolongada y posible redosificación. Usar dosis mínima eficaz para evitar síndrome de abstinencia agudo en pacientes dependientes. En sobredosis grave: perfusión continua preferible a bolos repetidos.",doses:[
    {label:"Depresión respiratoria por opioides — IV/IO/IM (ficha técnica)",range:"0,01 mg/kg",note:"puede repetir c/2–3 min hasta respuesta · dosis adicionales cada 1–2h si precisa",factor:0.01,unit:"mg"},
    {label:"Depresión respiratoria por opioides — IV (PALS 2010)",range:"0,1 mg/kg (si <5a o <20kg) · 2 mg fija (≥5a o ≥20kg)",note:"dosis máx acumulativa: 10 mg",factor:0.1,unit:"mg",maxDose:2},
    {label:"Reversión neonato (madre recibió opioides)",range:"0,01 mg/kg IV/IM/SC",note:"puede repetir c/2–3 min hasta recuperación respiratoria",factor:0.01,unit:"mg",neonatal:true},
    {label:"Perfusión de rescate — Sobredosis grave",range:"0,002–0,16 mg/kg/h",note:"titular según nivel de consciencia y función respiratoria",factor:0.01,unit:"mg/h",infusion:true},
  ]},
  {name:"Flumazenil",cat:"Antídoto",color:"#f59e0b",source:"Pediamécum AEP",rev:"2020-08",status:"verified",notes:"⚠️ Vida media MUY corta (30–60 min) — mucho menor que la mayoría de BZD. Riesgo de resedación → monitorizar. CI: pacientes con BZD por HTIC o estatus epiléptico (puede precipitar convulsiones). CI en intoxicaciones mixtas BZD + antidepresivos tricíclicos. Ajustar dosis en IH (espaciar bolos).",doses:[
    {label:"Reversión sedación BZD — IV",range:"0,01 mg/kg",note:"máx 0,2 mg/dosis · puede repetir cada 60 seg hasta max 0,05 mg/kg total",factor:0.01,unit:"mg",maxDose:0.2},
    {label:"Dosis total máxima",range:"máx 0,05 mg/kg o 1 mg",note:"lo que sea menor · mantener monitorización 2h mínimo por riesgo de resedación",factor:null,unit:"mg"},
  ]},
  {name:"Sugamadex",cat:"Antídoto",color:"#06b6d4",source:"Pediamécum AEP + AEMPS-CIMA",rev:"2021-01",status:"verified",notes:"Agente encapsulante selectivo de rocuronio (y vecuronio). Reversión inmediata e independiente del tiempo. No requiere neostigmina ni atropina. ⚠️ En emergencia (PCR con rocuronio): usar dosis 16 mg/kg sin esperar monitorización TOF. En IR grave (ClCr <30): no recomendado — puede reacumularse.",doses:[
    {label:"Reversión rutinaria — TOF ≥2 respuestas",range:"2 mg/kg",note:"bolo IV rápido · reversión en ~3 min",factor:2,unit:"mg",maxDose:200},
    {label:"Reversión profunda — TOF 0 / posttetánica 1–2",range:"4 mg/kg",note:"bolo IV rápido · reversión en ~3 min",factor:4,unit:"mg",maxDose:400},
    {label:"Reversión emergencia inmediata — ISR con rocuronio",range:"16 mg/kg",note:"si necesidad de re-intubar urgente o imposibilidad ventilatoria tras rocuronio 1,2 mg/kg",factor:16,unit:"mg",maxDose:1200},
  ]},
  {name:"Acetilcisteína",cat:"Antídoto",color:"#84cc16",source:"Pediamécum AEP",rev:"2021-04",status:"verified",notes:"Antídoto específico para intoxicación por paracetamol. Iniciar URGENTE si <8h de la ingesta (máxima eficacia). Reacciones anafilactoides frecuentes (10–20%) con la 1ª bolsa: reducir velocidad si aparecen; generalmente autolimitadas. Indicación según nomograma de Rumack-Matthew.",doses:[
    {label:"Intoxicación paracetamol — Bolsa 1 (primera hora)",range:"150 mg/kg",note:"en 200 mL SG5% · infundir en 60 min",factor:150,unit:"mg",maxDose:15000},
    {label:"Intoxicación paracetamol — Bolsa 2 (horas 1–4)",range:"50 mg/kg",note:"en 500 mL SG5% · infundir en 4h",factor:50,unit:"mg",maxDose:5000},
    {label:"Intoxicación paracetamol — Bolsa 3 (horas 4–20)",range:"100 mg/kg",note:"en 1000 mL SG5% · infundir en 16h · total protocolo: 300 mg/kg en 21h",factor:100,unit:"mg",maxDose:10000},
  ]},
  {name:"Atropina (organofosf.)",cat:"Antídoto",color:"#fb923c",source:"Pediamécum AEP + UpToDate Pediatric",rev:"2021-04",status:"verified",notes:"Indicación: intoxicación por organofosforados o carbamatos (anticolinesterásicos). Objetivo: secar secreciones bronquiales (NO FC ni midriasis). En intoxicación grave: requiere dosis muy altas, repetidas cada 5–10 min hasta que cesen las secreciones. Complementar con pralidoxima si disponible (<24h de exposición). No usar pralidoxima en carbamatos.",doses:[
    {label:"Intoxicación leve — IV/IM",range:"0,02–0,05 mg/kg",note:"repetir cada 15–30 min hasta secado de secreciones",factor:0.03,unit:"mg",maxDose:2},
    {label:"Intoxicación grave — IV",range:"0,05–0,1 mg/kg",note:"repetir cada 5–10 min · no hay dosis máxima en intoxicación grave",factor:0.05,unit:"mg"},
  ]},
  {name:"Hidrocortisona",cat:"Otros",color:"#f472b6",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Corticoide de elección en insuficiencia suprarrenal aguda y shock séptico. En anafilaxia: complemento — nunca sustituye a la adrenalina. Excipientes: algunas presentaciones contienen alcohol bencílico — evitar en neonatos.",doses:[
    {label:"Insuficiencia suprarrenal aguda — Carga IV",range:"1–2 mg/kg",note:"bolo IV rápido · luego perfusión de mantenimiento",factor:2,unit:"mg"},
    {label:"Insuficiencia suprarrenal — Mantenimiento IV",range:"1–3 mg/kg/día",note:"perfusión continua o dividido en 4 dosis",factor:2,unit:"mg"},
    {label:"Shock séptico refractario a catecolaminas — IV",range:"1–3 mg/kg/día",note:"perfusión continua preferible · descontinuar gradualmente",factor:2,unit:"mg",infusion:true},
    {label:"Anafilaxia — IV",range:"1–5 mg/kg",note:"DESPUÉS de adrenalina · bolo IV lento",factor:2,unit:"mg",maxDose:200},
  ]},
  {name:"Dexametasona",cat:"Otros",color:"#a78bfa",source:"Pediamécum AEP",rev:"2022-11",status:"verified",notes:"Potencia antiinflamatoria 25× mayor que hidrocortisona. Sin efecto mineralcorticoide significativo. Indicaciones urgentes principales: laringitis/crup (dosis única), edema cerebral, HTIC, meningitis (antes o con 1ª dosis antibiótico), síndrome inflamatorio multisistémico (MIS-C). No usar en sepsis de rutina salvo insuficiencia suprarrenal documentada.",doses:[
    {label:"Laringitis/Crup — IV/IM/VO",range:"0,15–0,6 mg/kg",note:"dosis única · máx 12 mg · VO puede ser igual de eficaz que IV",factor:0.6,unit:"mg",maxDose:12},
    {label:"Edema cerebral / HTIC — IV",range:"0,15–0,25 mg/kg/6h",note:"indicación tumor cerebral o edema vasogénico · no indicado en TCE",factor:0.2,unit:"mg"},
    {label:"Meningitis bacteriana — IV",range:"0,15 mg/kg/6h",note:"durante 4 días · iniciar 15–20 min ANTES del antibiótico o con 1ª dosis",factor:0.15,unit:"mg"},
    {label:"Extubación (prevención estridor)",range:"0,25–0,5 mg/kg IV",note:"máx 10 mg · 4–8h antes de extubación y repetir hasta 4 dosis cada 6h",factor:0.25,unit:"mg",maxDose:10},
  ]},
  {name:"Metilprednisolona",cat:"Otros",color:"#e879f9",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"Corticoide de referencia en asma grave, lupus, MIS-C, trasplante, enfermedades autoinmunes. Pulso de metilprednisolona (30 mg/kg) indicado en esclerosis múltiple, nefritis grave, rechazo agudo. Monitorizar glucemia, PA y K⁺ con dosis altas.",doses:[
    {label:"Asma grave — IV",range:"1–2 mg/kg/dosis",note:"máx 60 mg/dosis · cada 4–6h en las primeras 24h",factor:1,unit:"mg",maxDose:60},
    {label:"Anafilaxia — IV",range:"1–2 mg/kg",note:"máx 125 mg/dosis · DESPUÉS de adrenalina · puede repetir a las 6h",factor:1,unit:"mg",maxDose:125},
    {label:"Pulso — Patología grave autoinmune/inflamatoria",range:"10–30 mg/kg/día",note:"máx 1 g/día · 1–3 días consecutivos · vigilar hipertensión e hiperglucemia",factor:20,unit:"mg",maxDose:1000},
    {label:"MIS-C — IV",range:"1–2 mg/kg/día",note:"en combinación con IGIV · duración según evolución clínica",factor:1,unit:"mg"},
  ]},
  {name:"Furosemida",cat:"Otros",color:"#34d399",source:"Pediamécum AEP",rev:"2025-05",status:"verified",notes:"Diurético de asa. Acción rápida (5 min IV). Monitorizar electrolitos (hipopotasemia, hiponatremia) y diuresis. ⚠️ Velocidad máx IV: 4 mg/min (riesgo de ototoxicidad). Ajustar dosis en insuficiencia renal. Nota AEMPS jun/2025: alerta cambio denominación Actocortina (para evitar confusión con hidrocortisona).",doses:[
    {label:"Edema — IV/IM",range:"1–2 mg/kg/dosis",note:"máx 20 mg/dosis · puede repetir cada 6–8h · lenta IV ≤4 mg/min",factor:1,unit:"mg",maxDose:20},
    {label:"Edema grave/oliguria — IV",range:"2–6 mg/kg/dosis",note:"dosis altas solo en oliguria o situaciones críticas",factor:2,unit:"mg"},
    {label:"Neonato — IV",range:"1–2 mg/kg/dosis",note:"máx 2 mg/kg/dosis · c/12–24h en pretérmino · c/8h en término",factor:1,unit:"mg",neonatal:true},
    {label:"Perfusión continua UCI",range:"0,05–0,4 mg/kg/h",note:"inicio 0,1 mg/kg/h · preferible a bolos repetidos en oliguria refractaria",factor:0.1,unit:"mg/h",infusion:true},
  ]},
  {name:"Ácido Tranexámico",cat:"Otros",color:"#f43f5e",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"Antifibrinolítico. Indicación principal: hemorragia traumática grave (máx eficacia si <3h del traumatismo). ⚠️ CI: IR grave, historia de trombosis arterial o venosa, CID, historia de convulsiones (puede ser proconvulsivante). Vigilar: trastornos visuales en tratamiento prolongado.",doses:[
    {label:"Hemorragia traumática — Carga IV (≤3h del trauma)",range:"15–30 mg/kg",note:"máx 1 g · infundir en 10–20 min",factor:15,unit:"mg",maxDose:1000},
    {label:"Hemorragia traumática — Mantenimiento IV",range:"2 mg/kg/h",note:"máx 1 g en 8h · iniciar inmediatamente después de la carga",factor:2,unit:"mg/h",maxDose:1000,infusion:true},
    {label:"Cirugía con alto riesgo hemorrágico — IV",range:"10 mg/kg/dosis",note:"antes de la incisión · puede repetir cada 6–8h",factor:10,unit:"mg"},
  ]},

  // ── ANTIBIÓTICOS ─────────────────────────────────────────────────────────
  {name:"Amoxicilina-Clavulánico",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"CI: penicilinas (hipersensibilidad tipo I cruzada con cefalosporinas ~1–2%). ⚠️ Ajustar en IR. Hepatotoxicidad colestásica: más frecuente en adultos, rara en niños. Usar el componente amoxicilina como referencia de dosis; elegir presentación con proporción adecuada.",doses:[
    {label:"Infección leve-moderada — IV",range:"30 mg/kg/8h (amox)",note:"máx 2 g/dosis · infusión IV en 30 min · formulación 5:1",factor:30,unit:"mg/8h",maxDose:2000},
    {label:"Infección grave / neumonía — IV",range:"40 mg/kg/8h (amox)",note:"máx 2 g/dosis · meningitis y endocarditis: 50 mg/kg/6h",factor:40,unit:"mg/8h",maxDose:2000},
  ]},
  {name:"Ampicilina",cat:"ATB",color:"#059669",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Aminopenicilina de amplio espectro. CI: hipersensibilidad a penicilinas. Neonatos: ajustar intervalo según EG y días de vida (ver tabla neonatal). Alta tasa de resistencia adquirida en E. coli e H. influenzae — considerar cobertura según epidemiología local.",doses:[
    {label:"Infección sistémica — IV",range:"50 mg/kg/6h",note:"máx 2 g/dosis · bolo IV o infusión en 30 min",factor:50,unit:"mg/6h",maxDose:2000},
    {label:"Meningitis bacteriana — IV",range:"100 mg/kg/6h",note:"máx 3 g/dosis · iniciar hasta resultado de cultivo",factor:100,unit:"mg/6h",maxDose:3000},
    {label:"Sepsis neonatal precoz — IV",range:"50 mg/kg/12h (EG ≥34s, ≤7d)",note:"EG <34s ó >7d: ajustar intervalo según protocolo neonatal",factor:50,unit:"mg/12h",neonatal:true},
  ]},
  {name:"Cefazolina",cat:"ATB",color:"#0d9488",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Cefalosporina 1ª generación. Primera elección en profilaxis quirúrgica y en infecciones por estafilococo sensible a meticilina (MSSA). CI: hipersensibilidad tipo I a cefalosporinas o penicilinas. No atraviesa bien la BHE — no usar en meningitis.",doses:[
    {label:"Infección leve-moderada — IV/IM",range:"25 mg/kg/8h",note:"máx 1 g/dosis",factor:25,unit:"mg/8h",maxDose:1000},
    {label:"Infección grave (piel/partes blandas, ósea) — IV",range:"50 mg/kg/8h",note:"máx 2 g/dosis · infusión IV en 30 min",factor:50,unit:"mg/8h",maxDose:2000},
    {label:"Profilaxis quirúrgica — IV",range:"30 mg/kg dosis única",note:"máx 2 g · administrar 30–60 min antes de incisión",factor:30,unit:"mg",maxDose:2000},
  ]},
  {name:"Cefotaxima",cat:"ATB",color:"#0891b2",source:"Pediamécum AEP",rev:"2020-12",status:"verified",notes:"Cefalosporina 3ª generación. Primera línea en meningitis bacteriana pediátrica, sepsis y neumonía grave (junto a ampicilina en <3 meses). Buena penetración en LCR. CI: hipersensibilidad a cefalosporinas. Ajustar en IR grave.",doses:[
    {label:"Infección grave — IV",range:"50 mg/kg/8h",note:"máx 2 g/dosis · infusión IV en 30–60 min",factor:50,unit:"mg/8h",maxDose:2000},
    {label:"Meningitis bacteriana — IV",range:"75–100 mg/kg/8h",note:"máx 3 g/dosis · asociar ampicilina si <3 meses",factor:75,unit:"mg/8h",maxDose:3000},
    {label:"Sepsis neonatal tardía — IV",range:"50 mg/kg/12h",note:"EG ≥35s ó >7 días: 50 mg/kg/8h",factor:50,unit:"mg/12h",neonatal:true},
  ]},
  {name:"Ceftriaxona",cat:"ATB",color:"#2563eb",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"⚠️ CONTRAINDICADO en neonatos <28 días (cualquier vía) y en pacientes con hiperbilirrubinemia, hipoalbuminemia o que reciben calcio IV. Precipita con calcio → NO mezclar en el mismo equipo. CI en hipersensibilidad a cefalosporinas. Puede causar colelitiasis reversible (pseudolitiasis biliar).",doses:[
    {label:"Infección grave — IV",range:"50–75 mg/kg/24h",note:"máx 4 g/día · dosis única diaria · infusión en 30–60 min",factor:50,unit:"mg/24h",maxDose:4000},
    {label:"Meningitis bacteriana — IV",range:"100 mg/kg/24h",note:"máx 4 g/día · única dosis diaria o dividida en 2",factor:100,unit:"mg/24h",maxDose:4000},
    {label:"Artritis séptica / osteomielitis — IV",range:"50 mg/kg/24h",note:"máx 2 g/día · puede completar con vía oral según evolución",factor:50,unit:"mg/24h",maxDose:2000},
  ]},
  {name:"Meropenem",cat:"ATB",color:"#7c3aed",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Carbapenem de amplio espectro. Indicado en infecciones graves por gérmenes multirresistentes, sepsis nosocomial y meningitis por P. aeruginosa. CI: hipersensibilidad a carbapenems. Vigilar: convulsiones (raro, más frecuente con imipenem). ⚠️ Los carbapenems reducen niveles de valproato — monitorizar.",doses:[
    {label:"Infección grave — IV",range:"20 mg/kg/8h",note:"máx 1 g/dosis · infusión IV en 30 min",factor:20,unit:"mg/8h",maxDose:1000},
    {label:"Meningitis / infección muy grave — IV",range:"40 mg/kg/8h",note:"máx 2 g/dosis · infusión extendida en 3h aumenta exposición",factor:40,unit:"mg/8h",maxDose:2000},
    {label:"Fibrosis quística (P. aeruginosa) — IV",range:"40 mg/kg/8h",note:"máx 2 g/dosis · ciclos de 14–21 días",factor:40,unit:"mg/8h",maxDose:2000},
  ]},
  {name:"Piperacilina-Tazobactam",cat:"ATB",color:"#6d28d9",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"CI: hipersensibilidad a penicilinas (usar con precaución en alergia a cefalosporinas). ⚠️ Puede producir hipopotasemia en tto prolongado. Ajustar en IR. Dosis referenciadas al componente piperacilina. Alta actividad frente a Pseudomonas y anaerobios.",doses:[
    {label:"Infección grave — IV",range:"100 mg/kg/8h (pip)",note:"máx 4 g/dosis · infusión IV en 30 min",factor:100,unit:"mg/8h (pip)",maxDose:4000},
    {label:"Infección muy grave / neutropenia febril — IV",range:"100 mg/kg/6h (pip)",note:"máx 4 g/dosis · considerar infusión extendida en 4h",factor:100,unit:"mg/6h (pip)",maxDose:4000},
  ]},
  {name:"Vancomicina",cat:"ATB",color:"#be185d",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Glucopéptido. Actividad frente a gram+ incluyendo MRSA y neumococo resistente. ⚠️ Monitorizar niveles (valle 10–20 mcg/mL; meningitis 15–20). Síndrome del hombre rojo: reacción a infusión rápida — infundir siempre en ≥60 min (1–2h). Nefrotóxico: monitorizar función renal y ajustar según niveles. CI en hipersensibilidad.",doses:[
    {label:"Infección grave (MRSA) — IV",range:"15 mg/kg/6h",note:"máx 750 mg/dosis · infundir en 60 min · vigilar niveles valle",factor:15,unit:"mg/6h",maxDose:750},
    {label:"Meningitis / endocarditis — IV",range:"20 mg/kg/6h",note:"máx 750 mg/dosis · objetivo nivel valle 15–20 mcg/mL",factor:20,unit:"mg/6h",maxDose:750},
    {label:"Neonato (EG ≥35s, ≤7d) — IV",range:"15 mg/kg/12h",note:"EG <35s: 15 mg/kg/18–24h · infundir siempre en ≥60 min",factor:15,unit:"mg/12h",neonatal:true},
  ]},
  {name:"Gentamicina",cat:"ATB",color:"#b45309",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Aminoglucósido. Dosis única diaria (DUD): mejor eficacia y menor nefrotoxicidad. ⚠️ Monitorizar niveles: valle <1 mcg/mL (idealmente indetectable); pico 8–12 mcg/mL. Nefrotóxico y ototóxico — evitar en IR; hidratación adecuada. Potencia el bloqueo neuromuscular. En FQ y endocarditis: ver esquema específico.",doses:[
    {label:"Infección sistémica — IV/IM (dosis única diaria)",range:"5–7 mg/kg/24h",note:"máx 500 mg/día · infundir IV en 30 min · pico 8–12 mcg/mL",factor:5,unit:"mg/24h",maxDose:500},
    {label:"Sepsis neonatal — IV (EG ≥35s, ≤7d)",range:"4 mg/kg/48h",note:"EG <35s: 4 mg/kg/48h | >7 días EG ≥35s: 4 mg/kg/36h",factor:4,unit:"mg/48h",neonatal:true},
  ]},
  {name:"Metronidazol",cat:"ATB",color:"#78350f",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Activo frente a anaerobios y protozoos. Indicado en infecciones abdominales, colitis por C. difficile, infecciones por Bacteroides y G. lamblia. ⚠️ Efecto antabús con alcohol. Potencia el anticoagulante de cumarinas. Ajustar en IR/IH graves. CI: 1er trimestre embarazo.",doses:[
    {label:"Infección por anaerobios / abdominal — IV",range:"7,5 mg/kg/8h",note:"máx 500 mg/dosis · infusión IV en 30–60 min",factor:7.5,unit:"mg/8h",maxDose:500},
    {label:"C. difficile grave — IV (si VO no posible)",range:"10 mg/kg/8h",note:"máx 500 mg/dosis · preferir fidaxomicina/vancomicina VO si tolerancia oral",factor:10,unit:"mg/8h",maxDose:500},
    {label:"Profilaxis quirúrgica (cirugía colorrectal) — IV",range:"15 mg/kg dosis única",note:"máx 1 g · administrar 30–60 min antes de incisión",factor:15,unit:"mg",maxDose:1000},
  ]},
  // ── Sedo additions ────────────────────────────────────────────────────
  {name:"Remifentanilo",cat:"Sedo",color:"#818cf8",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Opiáceo ultracorto (t½ 3–5 min). Única vía: perfusión IV. UCI/quirófano. Sin acumulación en insuf. renal/hepática. Rigidez torácica si bolo rápido. Sin analgesia residual al parar.",doses:[
    {label:"Analgesia/sedación UCI — infusión",range:"0,1–1 mcg/kg/min",note:"titular según respuesta · sin bolo de carga",factor:0.3,unit:"mcg/min",infusion:true},
    {label:"Inducción IOT",range:"1–3 mcg/kg",note:"bolo en 30–60 s · máx 200 mcg",factor:1.5,unit:"mcg",maxDose:200},
    {label:"Procedimiento — infusión",range:"0,05–0,5 mcg/kg/min",note:"inicio bajo · titular cada 3–5 min",factor:0.1,unit:"mcg/min",infusion:true},
  ]},
  {name:"Clonidina",cat:"Sedo",color:"#818cf8",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"Agonista α₂. Sedación, analgesia coadyuvante, síndrome de abstinencia (NOWS). Evitar retirada brusca (HTA rebote). Bradicardia e hipotensión como efectos adversos principales.",doses:[
    {label:"Sedación/analgesia — VO",range:"2–5 mcg/kg/dosis",note:"cada 6–8 h · máx 300 mcg/dosis",factor:3,unit:"mcg",maxDose:300},
    {label:"Síndrome abstinencia — VO",range:"3–5 mcg/kg/dosis",note:"cada 4–6 h · titular según síntomas NOWS",factor:4,unit:"mcg",maxDose:300},
    {label:"Perfusión IV — UCI",range:"0,5–2 mcg/kg/h",note:"iniciar 0,5 mcg/kg/h · sin bolo",factor:1,unit:"mcg/h",infusion:true},
  ]},
  // ── BNM additions ─────────────────────────────────────────────────────
  {name:"Cisatracurio",cat:"BNM",color:"#a78bfa",source:"Pediamécum AEP",rev:"2021-01",status:"verified",notes:"BNM no despolarizante. No libera histamina. Eliminación de Hofmann (independiente de función renal/hepática). Primera elección en UCI para BNM prolongado. Monitorizar con TOF.",doses:[
    {label:"Intubación / bloqueo",range:"0,1–0,2 mg/kg",note:"inicio acción 2–3 min · duración 30–60 min",factor:0.15,unit:"mg",maxDose:20},
    {label:"Mantenimiento — bolo",range:"0,03 mg/kg",note:"cada 20–40 min según monitorización TOF",factor:0.03,unit:"mg",maxDose:5},
    {label:"Perfusión continua UCI",range:"1–3 mcg/kg/min",note:"ajustar por TOF · evaluar diariamente",factor:2,unit:"mcg/min",infusion:true},
  ]},
  // ── Antiepi additions ──────────────────────────────────────────────────
  {name:"Lorazepam",cat:"Antiepi",color:"#fbbf24",source:"Pediamécum AEP · NICE",rev:"2022-01",status:"verified",notes:"BZD 1ª línea estatus epiléptico (duración 4–6h > diazepam). Si no disponible: sustituir por midazolam IV o diazepam IV.",doses:[
    {label:"Estatus epiléptico — IV/IO",range:"0,05–0,1 mg/kg",note:"máx 4 mg/dosis · en 2–5 min · puede repetir a los 10 min",factor:0.1,unit:"mg",maxDose:4},
    {label:"Estatus epiléptico — neonato IV",range:"0,05–0,1 mg/kg",note:"en 3–5 min · monitorizar respiración",factor:0.075,unit:"mg",maxDose:0.5,neonatal:true},
  ]},
  {name:"Piridoxina (Vit B6)",cat:"Antiepi",color:"#fbbf24",source:"Pediamécum AEP · NRP",rev:"2022-01",status:"verified",notes:"Neonato: ensayo en crisis refractarias sin causa. Respuesta en 5–10 min confirma epilepsia B6-dependiente. Monitorizar apnea durante y tras administración.",doses:[
    {label:"Epilepsia B6-dependiente — ensayo IV",range:"50–100 mg dosis única",note:"IV lento 10 min · monitorizar apnea · puede repetir",factor:0,unit:"mg",fixedDose:"50–100 mg",neonatal:true},
    {label:"Mantenimiento oral",range:"15–30 mg/kg/día",note:"en 2 dosis · máx 500 mg/día",factor:20,unit:"mg/día",maxDose:500},
  ]},
  // ── Resp additions ─────────────────────────────────────────────────────
  {name:"Adrenalina nebulizada",cat:"Resp",color:"#22d3ee",source:"Pediamécum AEP · SEUP",rev:"2023-01",status:"verified",notes:"L-adrenalina 1:1000. Croup moderado-grave y bronquiolitis grave. Efecto rebote a las 2h → observar mínimo 2h. Monitorizar FC y TA durante nebulización.",doses:[
    {label:"Croup moderado-grave — neb",range:"0,5 mL/kg",note:"máx 5 mL · diluir en 3 mL SF · O₂ 6–8 L/min",factor:0.5,unit:"mL",maxDose:5},
    {label:"Bronquiolitis — nebulización",range:"0,1 mL/kg",note:"máx 3 mL · diluir a 4 mL SF · solo urgencias · efecto temporal",factor:0.1,unit:"mL",maxDose:3},
  ]},
  {name:"Ipratropio",cat:"Resp",color:"#22d3ee",source:"Pediamécum AEP · GEMA",rev:"2023-01",status:"verified",notes:"Anticolinérgico broncodilatador. Sinergismo con salbutamol en crisis asmática grave. No indicado en bronquiolitis. Primera dosis con primer salbutamol. Máx 3 dosis en agudo.",doses:[
    {label:"Crisis asmática — neb (< 5 años)",range:"250 mcg",note:"diluir en SF hasta 4 mL · junto salbutamol · c/20 min (máx 3)",factor:0,unit:"mcg",fixedDose:"250 mcg"},
    {label:"Crisis asmática — neb (≥ 5 años)",range:"500 mcg",note:"diluir en SF hasta 4 mL · junto salbutamol · c/20 min (máx 3)",factor:0,unit:"mcg",fixedDose:"500 mcg"},
  ]},
  {name:"Budesonida neb.",cat:"Resp",color:"#22d3ee",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Corticoide inhalado. Croup moderado-grave si vía oral no disponible o vómitos. Efecto similar a dexametasona oral en croup. No indicada en bronquiolitis.",doses:[
    {label:"Croup moderado-grave — neb",range:"2 mg dosis única",note:"máx 2 mg · sin diluir · O₂ 6–8 L/min · puede repetir a las 12h",factor:0,unit:"mg",fixedDose:"2 mg"},
  ]},
  // ── Cardio additions ──────────────────────────────────────────────────
  {name:"Esmolol",cat:"Cardio",color:"#f472b6",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Betabloqueante selectivo β₁ ultrashort (t½ 9 min). Urgencia HTA, TSV, FA con FC rápida. Contraindicado en bloqueo AV, broncoespasmo, ICC descompensada.",doses:[
    {label:"TSV / Crisis HTA — carga IV",range:"0,5 mg/kg",note:"en 1 min · máx 40 mg · monitorización continua",factor:0.5,unit:"mg",maxDose:40},
    {label:"Mantenimiento — infusión",range:"50–200 mcg/kg/min",note:"iniciar 50 mcg/kg/min · incrementos 50 cada 4 min",factor:100,unit:"mcg/min",infusion:true},
  ]},
  {name:"Digoxina",cat:"Cardio",color:"#f472b6",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Inotrópico + cronotrópico negativo. Índice terapéutico estrecho (objetivo 0,8–2 ng/mL). Hipopotasemia potencia toxicidad. Toxicidad: náuseas, bloqueos, arritmias.",doses:[
    {label:"Digitalización VO — RN",range:"20–30 mcg/kg total",note:"½ inicial → ¼ a las 8h → ¼ a las 8h",factor:25,unit:"mcg",neonatal:true},
    {label:"Digitalización VO — lactante ≤2a",range:"30–50 mcg/kg total",note:"½ inicial → ¼ × 2 separadas 8h",factor:40,unit:"mcg"},
    {label:"Digitalización VO — niño > 2a",range:"20–30 mcg/kg total",note:"máx 1.500 mcg total",factor:25,unit:"mcg",maxDose:1500},
    {label:"Mantenimiento VO — ≤ 10a",range:"10–15 mcg/kg/día",note:"en 2 dosis · máx 250 mcg/día",factor:12,unit:"mcg/día",maxDose:250},
    {label:"Digitalización IV (urgencia)",range:"75% dosis VO",note:"IV lento > 10 min · máx 500 mcg total",factor:20,unit:"mcg",maxDose:500},
  ]},
  {name:"Captopril",cat:"Cardio",color:"#f472b6",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"IECA. Urgencia HTA sin lesión orgánica, insuficiencia cardiaca. Contraindicado en estenosis renal bilateral. Inicio 15–30 min VO. Hipotensión 1ª dosis si hipovolemia.",doses:[
    {label:"HTA urgencia / ICC — VO",range:"0,1–0,5 mg/kg/dosis",note:"máx 12,5 mg · cada 8–12h · 1ª dosis máx 6,25 mg",factor:0.2,unit:"mg",maxDose:12.5},
    {label:"HTA neonato / lactante — VO",range:"0,01–0,1 mg/kg/dosis",note:"cada 8–24h · inicio muy bajo en RN",factor:0.05,unit:"mg",neonatal:true},
  ]},
  // ── ATB additions ──────────────────────────────────────────────────────
  {name:"Azitromicina",cat:"ATB",color:"#34d399",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Macrólido. Infecciones respiratorias por Mycoplasma, Chlamydia, Bordetella. Coqueluche: 5 días. Prolongación QT — evitar con otros QT-prolongantes.",doses:[
    {label:"Infección respiratoria atípica — IV/VO",range:"10 mg/kg/día",note:"máx 500 mg/día · 1 dosis/día × 3–5 días · IV en 60 min diluido",factor:10,unit:"mg/día",maxDose:500},
    {label:"Coqueluche — VO",range:"10 mg/kg/día (día 1) · 5 mg/kg/días 2–5",note:"máx 500 mg d1 · máx 250 mg d2–5 · 5 días total",factor:10,unit:"mg/día",maxDose:500},
  ]},
  {name:"Cefepima",cat:"ATB",color:"#34d399",source:"Pediamécum AEP",rev:"2023-01",status:"verified",notes:"Cefalosporina 4ª gen. Pseudomonas, gram-negativos multirresistentes, meningitis nosocomial. Ajuste renal. No activo frente a SAMR ni anaerobios.",doses:[
    {label:"Infección grave — IV",range:"50 mg/kg/8h",note:"máx 2 g/dosis · infundir en 30 min",factor:50,unit:"mg",maxDose:2000},
    {label:"Neutropenia febril / meningitis nosocomial — IV",range:"50 mg/kg/6h",note:"máx 2 g/dosis",factor:50,unit:"mg",maxDose:2000},
  ]},
  {name:"Clindamicina",cat:"ATB",color:"#34d399",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Anaerobios, SAMR (si sensible), tejidos blandos, osteomielitis. IV: en 30–60 min. Colitis por C. difficile — suspender si diarrea.",doses:[
    {label:"Infección moderada — IV",range:"10 mg/kg/8h",note:"máx 600 mg/dosis · infundir 30–60 min",factor:10,unit:"mg",maxDose:600},
    {label:"Infección grave / osteomielitis — IV",range:"15 mg/kg/8h",note:"máx 900 mg/dosis · infundir 60 min",factor:15,unit:"mg",maxDose:900},
    {label:"SAMR piel / tejidos blandos — VO",range:"10 mg/kg/8h",note:"máx 450 mg/dosis",factor:10,unit:"mg",maxDose:450},
  ]},
  {name:"Linezolid",cat:"ATB",color:"#34d399",source:"Pediamécum AEP",rev:"2023-01",status:"verified",notes:"Oxazolidinona. SAMR, Enterococcus VRE. Bacteriostático. Trombocitopenia si > 2 semanas. Interacción serotoninérgica (ISRS, IMAO). Monitorizar hemograma.",doses:[
    {label:"Infección grave (SAMR, VRE) — IV/VO",range:"10 mg/kg/8h",note:"≤ 11a: 10 mg/kg/8h · ≥ 12a: 600 mg/12h · máx 600 mg/dosis",factor:10,unit:"mg",maxDose:600},
  ]},
  // ── Antifúngicos (nueva categoría) ────────────────────────────────────
  {name:"Fluconazol",cat:"Antifúng",color:"#a78bfa",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Triazol. Candidiasis sistémica/mucosa. Dosis de carga día 1. Múltiples interacciones (warfarina, estatinas, rifampicina). Monitorizar LFTs en tto prolongado.",doses:[
    {label:"Candidiasis sistémica — carga IV",range:"12 mg/kg",note:"día 1 · máx 800 mg · en 60 min",factor:12,unit:"mg",maxDose:800},
    {label:"Candidiasis sistémica — mantenimiento IV/VO",range:"6–12 mg/kg/día",note:"máx 400 mg/día",factor:6,unit:"mg/día",maxDose:400},
    {label:"Candidiasis mucosa — VO",range:"3–6 mg/kg/día",note:"máx 200 mg/día · 7–14 días",factor:3,unit:"mg/día",maxDose:200},
    {label:"Neonato — IV",range:"12 mg/kg/dosis",note:"< 30 sem GA: c/48–72h · ≥ 30 sem GA: c/24h",factor:12,unit:"mg",neonatal:true},
  ]},
  {name:"Caspofungina",cat:"Antifúng",color:"#a78bfa",source:"Pediamécum AEP",rev:"2023-01",status:"verified",notes:"Equinocandina. Candidiasis/aspergilosis invasiva resistente a azoles. Siempre IV. Excelente perfil renal y hepático.",doses:[
    {label:"Candidiasis / Aspergilosis — IV carga (día 1)",range:"70 mg/m²",note:"máx 70 mg · en 60 min",factor:0,unit:"mg/m²",fixedDose:"70 mg/m² (máx 70 mg)"},
    {label:"Mantenimiento — IV (día ≥ 2)",range:"50 mg/m²/día",note:"máx 70 mg/día · en 60 min",factor:0,unit:"mg/m²",fixedDose:"50 mg/m²/día (máx 70 mg)"},
  ]},
  // ── Antídoto additions ─────────────────────────────────────────────────
  {name:"Glucagón",cat:"Antídoto",color:"#fb923c",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Hipoglucemia sin acceso IV. Sobredosis betabloqueantes/bloqueadores Ca²⁺. Acción 5–15 min IM. Ineficaz en desnutrición severa (sin glucógeno). Náuseas frecuentes.",doses:[
    {label:"Hipoglucemia sin acceso IV — IM/SC",range:"0,02–0,03 mg/kg",note:"< 25 kg: 0,5 mg · ≥ 25 kg: 1 mg · máx 1 mg · muslo anterolateral",factor:0.025,unit:"mg",maxDose:1},
    {label:"OD betabloqueantes/Ca²⁺ — IV bolo",range:"0,05–0,15 mg/kg",note:"máx 10 mg · bolo rápido → perfusión 0,05–0,10 mg/kg/h",factor:0.1,unit:"mg",maxDose:10},
  ]},
  {name:"Fitomenadiona (Vit K1)",cat:"Antídoto",color:"#fb923c",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Coagulopatía por déficit Vit K, reversión dicumarínicos. IV siempre lento (riesgo reacción anafiláctica). Efecto tarda 4–6h IV. Si sangrado activo grave: plasma fresco congelado.",doses:[
    {label:"Profilaxis hemorrágica RN — IM",range:"< 1.500 g: 0,5 mg · ≥ 1.500 g: 1 mg",note:"dosis única · muslo anterolateral",factor:0,unit:"mg",fixedDose:"0,5–1 mg IM",neonatal:true},
    {label:"Reversión anticoagulantes orales — IV",range:"0,3–0,5 mg/kg",note:"máx 10 mg · IV lento en 30 min · monitorizar TP",factor:0.3,unit:"mg",maxDose:10},
    {label:"Déficit Vit K / EHRN — IV",range:"1–5 mg dosis única",note:"IV lento en 15–30 min",factor:0,unit:"mg",fixedDose:"1–5 mg IV"},
  ]},
  {name:"Deferoxamina",cat:"Antídoto",color:"#fb923c",source:"Pediamécum AEP",rev:"2022-01",status:"verified",notes:"Quelante del hierro. Si síntomas sistémicos, Fe sérico > 500 mcg/dL o ferritina > 500 mcg/L. Orina color vino de Oporto = indicador respuesta. Riesgo SDRA si perfusión > 24h.",doses:[
    {label:"Intoxicación grave Fe — IV infusión",range:"15 mg/kg/h",note:"máx 90 mg/kg/día · máx 6 g/día · hasta orina sin color vino",factor:15,unit:"mg/h",infusion:true,maxDose:6000},
    {label:"Intoxicación moderada — IM",range:"50 mg/kg/dosis",note:"máx 2 g/dosis · cada 6–12h · máx 6 g/día",factor:50,unit:"mg",maxDose:2000},
  ]},

  // ── Nuevos Sedo ────────────────────────────────────────────────────────
  {name:"Sufentanilo",cat:"Sedo",color:"#c084fc",source:"Pediamécum AEP · Ficha Técnica AEMPS",rev:"2026-03",status:"verified",notes:"Opiáceo sintético 5–10× más potente que fentanilo. UCI pediátrica para sedoanalgesia prolongada y procedimientos dolorosos. Provoca rigidez torácica si bolo rápido. Antagonista: naloxona. Ventana terapéutica estrecha — titular cuidadosamente.",doses:[
    {label:"Analgesia procedimiento — IV",range:"0,1–0,4 mcg/kg",note:"máx 20 mcg · bolo lento ≥3 min",factor:0.2,unit:"mcg",maxDose:20},
    {label:"Analgesia intranasal",range:"0,2–0,4 mcg/kg",note:"máx 20 mcg · atomizador · 0,3 mL por fosa",factor:0.3,unit:"mcg",maxDose:20},
    {label:"Perfusión UCI — mantenimiento",range:"0,02–0,1 mcg/kg/h",note:"iniciar bajo · ajustar por escalas de sedoanalgesia (FLACC, COMFORT-B)",factor:0.05,unit:"mcg/h",infusion:true},
    {label:"Perfusión neonatal",range:"0,01–0,05 mcg/kg/h",note:"inicio 0,01 mcg/kg/h · monitorización cardiorrespiratoria continua",factor:0.02,unit:"mcg/h",neonatal:true,infusion:true},
  ]},
  {name:"Tramadol IV",cat:"Sedo",color:"#94a3b8",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Opioide débil + inhibición recaptación NA/5-HT. Analgesia moderada-intensa, 2ª línea. ⚠️ CI: <1 año, metabolizadores ultrarrápidos CYP2D6 (riesgo depresión resp.), epilepsia no controlada, ISRS (sínd. serotoninérgico). No usar posoperatorio amigdalectomía.",doses:[
    {label:"Dolor moderado-intenso — IV",range:"1–2 mg/kg",note:"máx 100 mg/dosis · infusión lenta 30 min · c/6–8h",factor:1.5,unit:"mg",maxDose:100},
    {label:"Infusión postoperatoria",range:"0,1–0,2 mg/kg/h",note:"máx 400 mg/día · ajustar con analgesia de rescate",factor:0.15,unit:"mg/h",infusion:true},
  ]},
  {name:"Haloperidol",cat:"Sedo",color:"#e879f9",source:"Pediamécum AEP · Ficha Técnica",rev:"2026-03",status:"verified",notes:"Antipsicótico típico. Delirium y agitación en UCI pediátrica. ⚠️ Prolonga QT → ECG basal · no con otros QT-prolongantes. CI: <3 años. Riesgo reacción extrapiramidal y síndrome neuroléptico maligno (raro). Tener disponible biperideno.",doses:[
    {label:"Agitación/delirium UCI — IV/IM",range:"0,025–0,075 mg/kg/dosis",note:"máx 5 mg · c/8–12h · monitorización ECG",factor:0.05,unit:"mg",maxDose:5},
    {label:"Agitación aguda — VO",range:"0,05–0,15 mg/kg/día",note:"máx 5 mg/día · en 2–3 dosis",factor:0.1,unit:"mg/día",maxDose:5},
  ]},

  // ── Nuevos BNM ────────────────────────────────────────────────────────
  {name:"Pancuronio",cat:"BNM",color:"#60a5fa",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"BNM no despolarizante de acción larga (40–60 min). Aceleración cardiaca y aumento TA moderados (bloqueo vagal). Eliminación renal (ajuste si FG<50). Uso UCI cuando se requiere bloqueo prolongado sin cambios HD. Revertir con neostigmina+atropina.",doses:[
    {label:"Intubación / bloqueo inicial — IV",range:"0,1 mg/kg",note:"acción 3–4 min · duración 40–60 min · RN: 0,05 mg/kg",factor:0.1,unit:"mg",maxDose:12},
    {label:"Mantenimiento — bolo IV",range:"0,01–0,02 mg/kg",note:"c/20–40 min según monitorización TOF",factor:0.015,unit:"mg",maxDose:3},
    {label:"Perfusión UCI",range:"0,05–0,1 mg/kg/h",note:"ajustar por TOF; evaluar necesidad diariamente",factor:0.07,unit:"mg/h",infusion:true},
  ]},
  {name:"Atracurio",cat:"BNM",color:"#818cf8",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"BNM no despolarizante intermedio (20–35 min). Liberación de histamina — puede causar hipotensión y broncoespasmo con bolo rápido. Eliminación de Hofmann + hidrólisis ester → seguro en IR/IH. Evitar en asmáticos. Revertir con neostigmina+atropina o sugammadex (limitado).",doses:[
    {label:"Intubación / bloqueo inicial — IV",range:"0,3–0,6 mg/kg",note:"acción 2–3 min · bolo lento 60 seg para reducir liberación histamina",factor:0.5,unit:"mg",maxDose:60},
    {label:"Mantenimiento — bolo IV",range:"0,1–0,2 mg/kg",note:"c/15–25 min según TOF",factor:0.15,unit:"mg",maxDose:20},
    {label:"Perfusión UCI",range:"3–12 mcg/kg/min",note:"ajustar por TOF; no acumulación",factor:7,unit:"mcg/min",infusion:true},
  ]},

  // ── Nuevos Antiepi ────────────────────────────────────────────────────
  {name:"Clonazepam IV",cat:"Antiepi",color:"#f472b6",source:"Pediamécum AEP · EAN Guidelines SE 2022",rev:"2026-03",status:"verified",notes:"BZD de alta potencia (10× diazepam por unidad de masa). 2ª línea en estatus epiléptico si lorazepam/midazolam no disponibles. Larga vida media (30–40h). Antagonista: flumazenil.",doses:[
    {label:"Estatus epiléptico — IV bolo",range:"0,01–0,05 mg/kg",note:"máx 1 mg · bolo IV lento 2 min · puede repetir 1 vez a los 10 min",factor:0.03,unit:"mg",maxDose:1},
    {label:"Crisis neonatal — IV",range:"0,01–0,03 mg/kg",note:"IV lento 5 min · monitorización respiratoria",factor:0.02,unit:"mg",maxDose:0.5,neonatal:true},
  ]},
  {name:"Fosfenitoína",cat:"Antiepi",color:"#c084fc",source:"Pediamécum AEP · EAN Guidelines SE 2022",rev:"2026-03",status:"verified",notes:"Profármaco de fenitoína (1,5 mg fosfenitoína = 1 mg fenitoína). Menor cardiotoxicidad y flebitis que fenitoína. Dosis expresada en 'equivalentes de fenitoína' (EP). Monitorizar ECG e inyectar <3 mg EP/kg/min. Contraindicada en bloqueo AV ≥2º, síndrome seno enfermo.",doses:[
    {label:"Estatus epiléptico — IV/IO (2ª/3ª línea)",range:"20 mg EP/kg",note:"máx 1.500 mg EP · infundir ≤3 mg EP/kg/min · ECG continuo",factor:20,unit:"mg EP",maxDose:1500},
    {label:"Mantenimiento — IV",range:"4–8 mg EP/kg/día",note:"en 2 dosis · infundir en 15–30 min · nivelar fenitoína libre",factor:6,unit:"mg EP/día",maxDose:300},
  ]},
  {name:"Lacosamida IV",cat:"Antiepi",color:"#818cf8",source:"EAN Guidelines SE 2022 · Ficha Técnica",rev:"2026-03",status:"verified",notes:"Antiepiléptico de 3ª generación. Bloquea canales Na⁺ dependientes de voltaje. 3ª línea en estatus epiléptico refractario. Prolonga PR — ECG previo. Segura en fallo renal moderado. Disponible IV 200 mg/20 mL.",doses:[
    {label:"Estatus refractario — IV (3ª línea)",range:"5–10 mg/kg",note:"máx 400 mg · infundir en 15–60 min · monitorizar ECG",factor:5,unit:"mg",maxDose:400},
    {label:"Mantenimiento — IV/VO",range:"3–6 mg/kg/12h",note:"máx 300 mg/12h · conversión IV:VO 1:1",factor:4,unit:"mg/12h",maxDose:300},
  ]},

  // ── Nuevos Cardio ─────────────────────────────────────────────────────
  {name:"Hidralazina IV",cat:"Cardio",color:"#f472b6",source:"Pediamécum AEP · AHA HTA Pediátrica 2017",rev:"2026-03",status:"verified",notes:"Vasodilatador arterial directo. Urgencias hipertensivas con manifestaciones neurológicas/renales. Inicio acción 10–20 min. Taquicardia refleja — asociar betabloqueante. ⚠️ Lupus inducido en uso crónico (raro en agudo).",doses:[
    {label:"Emergencia HTA — IV bolo",range:"0,1–0,2 mg/kg",note:"máx 20 mg/dosis · bolo lento IV 2–4 min · repetir c/4–6h",factor:0.15,unit:"mg",maxDose:20},
    {label:"Mantenimiento HTA — VO",range:"0,75–3 mg/kg/día",note:"máx 200 mg/día · en 2–4 dosis",factor:1.5,unit:"mg/día",maxDose:200},
  ]},
  {name:"Propranolol IV",cat:"Cardio",color:"#38bdf8",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Betabloqueante no selectivo. TSV resistente a adenosina, tormenta tiroidea, taquicardia sinusal persistente. ⚠️ CI: broncoespasmo, bloqueo AV >1º, ICC descompensada, hipoglucemia. Bradicardia e hipotensión — monitorización continua.",doses:[
    {label:"TSV resistente adenosina — IV",range:"0,01–0,1 mg/kg",note:"máx 1 mg/dosis · bolo lento ≥10 min · monitorización ECG continua",factor:0.05,unit:"mg",maxDose:1},
    {label:"HTA grave / tormenta tiroidea — VO",range:"0,5–2 mg/kg/día",note:"máx 120 mg/día · en 3–4 dosis",factor:1,unit:"mg/día",maxDose:120},
  ]},
  {name:"Nifedipino",cat:"Cardio",color:"#fbbf24",source:"Pediamécum AEP · AHA HTA Pediátrica 2017",rev:"2026-03",status:"verified",notes:"BCC dihidropiridínico. Urgencia HTA sin lesión orgánica (cápsula VO). ⚠️ Vía sublingual DESACONSEJADA (bajadas bruscas e impredecibles). Usar cápsula masticada VO. Inicio 15–30 min. CI: estenosis aórtica grave.",doses:[
    {label:"Urgencia HTA — VO (cápsula)",range:"0,1–0,25 mg/kg/dosis",note:"máx 10 mg · cápsula masticada · inicio 15–30 min · repetir c/4–6h si precisa",factor:0.2,unit:"mg",maxDose:10},
    {label:"HTA crónica — VO (liberación prolongada)",range:"0,25–0,5 mg/kg/12h",note:"máx 120 mg/día · comprimidos LP no triturar",factor:0.3,unit:"mg",maxDose:60},
  ]},
  {name:"Fentolamina",cat:"Cardio",color:"#f87171",source:"Pediamécum AEP · Ficha Técnica",rev:"2026-03",status:"verified",notes:"Bloqueante α adrenérgico. Crisis hipertensiva por feocromocitoma/paraganglioma, extravasación catecolaminas. Para extravasación: inyección local subcutánea en los primeros 12h. IV solo en crisis HTA severa con exceso catecolaminas.",doses:[
    {label:"Crisis HTA catecolamínica — IV bolo",range:"0,05–0,1 mg/kg",note:"máx 5 mg · bolo IV · puede repetir c/5–10 min",factor:0.1,unit:"mg",maxDose:5},
    {label:"Extravasación catecolaminas — SC local",range:"0,1 mg/kg",note:"máx 5 mg · diluir en 10 mL SF · inyectar SC en zona de extravasación · dentro de 12h",factor:0.1,unit:"mg",maxDose:5},
  ]},

  // ── Nuevos Resp ───────────────────────────────────────────────────────
  {name:"Terbutalina IV/SC",cat:"Resp",color:"#22d3ee",source:"Pediamécum AEP · GEMA 5.3",rev:"2026-03",status:"verified",notes:"β₂ agonista. Crisis asmática grave-muy grave si no responde a vía inhalada. Monitorización cardiaca continua (riesgo hipopotasemia, taquicardia, HTA). SC si no hay acceso IV inmediato.",doses:[
    {label:"Crisis grave — SC",range:"0,005–0,01 mg/kg",note:"máx 0,3 mg · SC cara anterolateral muslo · puede repetir c/20 min (3 dosis)",factor:0.01,unit:"mg",maxDose:0.3},
    {label:"Crisis grave — IV bolo",range:"0,005–0,01 mg/kg",note:"máx 0,3 mg · IV lento 5 min · monitorizar ECG",factor:0.01,unit:"mg",maxDose:0.3},
    {label:"Crisis muy grave — Perfusión IV",range:"0,1–4 mcg/kg/min",note:"iniciar 0,1 mcg/kg/min · incrementar cada 15 min · monitorizar K⁺, FC, TA",factor:0.5,unit:"mcg/min",infusion:true},
  ]},
  {name:"Dexametasona (croup)",cat:"Resp",color:"#34d399",source:"Pediamécum AEP · SEUP 2022",rev:"2026-03",status:"verified",notes:"Corticoide de elección en laringitis subglótica (croup). Dosis única VO equivale a IM/IV. Inicio efecto 1–2h. Preferir VO (budesonida neb si vómitos). No indicada en bronquiolitis. En asma: ver categoría Resp-dexametasona oral alternativa.",doses:[
    {label:"Croup leve-moderado — VO/IM dosis única",range:"0,15–0,6 mg/kg",note:"máx 12 mg · dosis única · VO = IM = IV en eficacia · Westley ≥2",factor:0.15,unit:"mg",maxDose:12},
    {label:"Croup grave — IV",range:"0,6 mg/kg",note:"máx 12 mg · dosis única · junto a adrenalina nebulizada",factor:0.6,unit:"mg",maxDose:12},
  ]},

  // ── Nuevos Antídotos ──────────────────────────────────────────────────
  {name:"Carbón activado",cat:"Antídoto",color:"#64748b",source:"Pediamécum AEP · POISINDEX · AACT/EAPCCT 2005",rev:"2026-03",status:"verified",notes:"Descontaminación digestiva. Mayor eficacia en primera hora. CI: tracto GI no protegido, obstétrico, hidrocarburos, ácidos/álcalis, hierro, litio, etanol, metanol. Riesgo broncoaspiración si disminuye nivel de consciencia — proteger vía aérea. No diluir con leche.",doses:[
    {label:"Dosis única — VO/SNG",range:"1 g/kg",note:"máx 50 g · 1.ª h post-ingesta · suspensión 1 g/5 mL o diluir en agua",factor:1,unit:"g",maxDose:50},
    {label:"Dosis múltiples (intox. grave lenta absorción)",range:"0,25–0,5 g/kg/4h",note:"máx 25 g/dosis · fármacos circulación enterohepática: carbamazepina, digital, fenobarbital, quinina, teofilina",factor:0.5,unit:"g",maxDose:25},
  ]},
  {name:"Hidroxocobalamina",cat:"Antídoto",color:"#f87171",source:"Pediamécum AEP · Ficha Técnica Cyanokit",rev:"2026-03",status:"verified",notes:"Antídoto intoxicación por cianuro (incendios, amígdalas, nitroprusiato). Diagnóstico clínico (no esperar resultado laboratorio). Tiñe orina y piel de rojo-marrón (no confundir). Compatible con RL/SF/SG5% — no mezclar con otros fármacos en la misma vía. Atropina y adrenalina se pueden administrar simultáneamente.",doses:[
    {label:"Intoxicación cianuro — IV",range:"70 mg/kg",note:"máx 5 g (=1 vial) · infundir en 15 min · puede repetir hasta 3 dosis",factor:70,unit:"mg",maxDose:5000},
    {label:"Neonato / lactante — IV",range:"70 mg/kg",note:"máx 5 g · infundir en 15 min · suspender nitroprusiato si causa toxicidad CN",factor:70,unit:"mg",neonatal:true,maxDose:5000},
  ]},
  {name:"Fisostigmina",cat:"Antídoto",color:"#fbbf24",source:"Pediamécum AEP · POISINDEX",rev:"2026-03",status:"verified",notes:"Inhibidor AChE reversible. Síndrome anticolinérgico grave (antihistamínicos, antipsicóticos, atropina, escopolamina, tricíclicos) con agitación, convulsiones o delirium grave. ⚠️ CI: intoxicación tricíclicos o QRS>120ms (riesgo asistolia). Atropina disponible como antídoto. Bolo muy lento.",doses:[
    {label:"Síndrome anticolinérgico grave — IV",range:"0,01–0,03 mg/kg",note:"máx 2 mg · IV lento ≥5 min · puede repetir c/20–30 min · atropina preparada",factor:0.02,unit:"mg",maxDose:2},
  ]},
  {name:"Octreotide",cat:"Antídoto",color:"#34d399",source:"Pediamécum AEP · ESPGHAN",rev:"2026-03",status:"verified",notes:"Análogo somatostatina. 1) Hiperinsulinismo: suprime insulina. 2) Hemorragia variceal: reduce flujo portal. 3) Hipoglucemia por sulfonilureas. Monitorizar glucemia c/2h (hipoglucemia paradójica es posible).",doses:[
    {label:"Hiperinsulinismo congénito / hipogluc. sulfonilureas — SC/IV",range:"1–5 mcg/kg/6–8h",note:"SC o IV lento · inicio 1 mcg/kg · ajustar por glucemia",factor:3,unit:"mcg",maxDose:50},
    {label:"Perfusión hiperinsulinismo",range:"1–10 mcg/kg/h",note:"inicio 1 mcg/kg/h · ajustar cada 6–12h · monitorizar glucemia horaria",factor:5,unit:"mcg/h",infusion:true},
    {label:"Hemorragia variceal — IV bolo",range:"1–2 mcg/kg",note:"máx 50 mcg · bolo IV · seguir de perfusión 1–2 mcg/kg/h",factor:1.5,unit:"mcg",maxDose:50},
  ]},

  // ── Nuevos Antifúng ───────────────────────────────────────────────────
  {name:"Voriconazol IV",cat:"Antifúng",color:"#a78bfa",source:"Pediamécum AEP · ESCMID 2023",rev:"2026-03",status:"verified",notes:"Triazol 2ª gen. 1ª elección aspergilosis invasiva y candidiasis resistente a fluconazol. Metabolismo CYP2C19 muy variable (polimorfismo genético) → monitorizar niveles (diana 1–5 mg/L). ⚠️ Hepatotoxicidad, fotosensibilidad, alucinaciones visuales (transitórias). Múltiples interacciones.",doses:[
    {label:"Aspergilosis / candidiasis grave — IV carga",range:"9 mg/kg/12h (2 dosis día 1)",note:"máx 350 mg/dosis · < 2 años: dosis ajustadas según farmacocinética pediátrica",factor:9,unit:"mg",maxDose:350},
    {label:"Mantenimiento — IV",range:"8 mg/kg/12h (< 12 años) · 4 mg/kg/12h (≥ 12 años)",note:"máx 350 mg/12h · conversión IV:VO 1:1",factor:8,unit:"mg",maxDose:350},
    {label:"Mantenimiento — VO (≥ 12 años)",range:"200–300 mg/12h",note:"VO en ayunas · ajustar según niveles plasmáticos",factor:0,unit:"mg",fixedDose:"200–300 mg/12h"},
  ]},
  {name:"Anfotericina B liposomal",cat:"Antifúng",color:"#e879f9",source:"Pediamécum AEP · ESCMID 2023",rev:"2026-03",status:"verified",notes:"Polieno liposomal. Amplio espectro (Candida, Aspergillus, Cryptococcus, Mucor). Menos nefrotóxico que anfotericina B convencional. ⚠️ Reacciones infusión (fiebre, escalofríos): premedicar con paracetamol IV ± hidrocortisona. Monitorizar Na, K, Mg, creatinina. No compatible con SF.",doses:[
    {label:"Candidiasis / aspergilosis invasiva — IV",range:"3–5 mg/kg/día",note:"máx 5 mg/kg/día · infundir en 60–120 min · diluir en SG5% (no SF) · monitorizar función renal",factor:3,unit:"mg/día"},
    {label:"Mucormicosis — IV",range:"5–10 mg/kg/día",note:"máx 10 mg/kg/día · forma más agresiva requiere dosis máximas",factor:7.5,unit:"mg/día",maxDose:700},
    {label:"Meningitis criptocócica — IV",range:"3–4 mg/kg/día",note:"combinar con 5-flucitosina 25 mg/kg/6h VO · 2 semanas inducción",factor:3.5,unit:"mg/día"},
  ]},
  {name:"Micafungina",cat:"Antifúng",color:"#c084fc",source:"Pediamécum AEP · ESCMID 2023",rev:"2026-03",status:"verified",notes:"Equinocandina. Candidiasis invasiva / profilaxis en TCMH. Activa sobre biofilms (ventaja en candidemia asociada a catéter). No activa frente a Cryptococcus ni Mucor. Excelente perfil de seguridad renal y hepático. Mínimas interacciones.",doses:[
    {label:"Candidemia / candidiasis invasiva — IV",range:"2 mg/kg/día (< 40 kg) · 100 mg/día (≥ 40 kg)",note:"máx 100 mg/día · infundir en 60 min",factor:2,unit:"mg/día",maxDose:100},
    {label:"Profilaxis TCMH — IV",range:"1 mg/kg/día (< 50 kg) · 50 mg/día (≥ 50 kg)",note:"máx 50 mg/día · durante neutropenia",factor:1,unit:"mg/día",maxDose:50},
    {label:"Candidiasis esofágica — IV",range:"3 mg/kg/día (< 30 kg) · 150 mg/día (≥ 30 kg)",note:"máx 150 mg/día",factor:3,unit:"mg/día",maxDose:150},
  ]},

  // ── Nuevos ATB ────────────────────────────────────────────────────────
  {name:"Amikacina",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Aminoglucósido. Gram-negativos MDR, neonatal temprano. Nefrotóxico y ototóxico → monitorizar función renal, niveles plasmáticos (pico/valle) o con PK/PD (área bajo curva). Dosis única diaria (optimiza eficacia, reduce toxicidad). ⚠️ No mezclar con penicilinas/heparina.",doses:[
    {label:"Neonato (0–7 días) — IV/IM",range:"15–20 mg/kg/24h",note:"dilución 5 mg/mL · infundir en 30 min · c/36–48h en prematuro extremo",factor:15,unit:"mg/24h",neonatal:true},
    {label:"Neonato (8–28 días) — IV/IM",range:"15 mg/kg/24h",note:"infundir en 30 min · monitorizar creatinina y diuresis",factor:15,unit:"mg/24h",neonatal:true},
    {label:"Lactante/niño — IV",range:"15–22,5 mg/kg/24h",note:"máx 1,5 g/día · dosis única diaria · pico objetivo: 50–65 mg/L (1h) · valle < 5 mg/L",factor:15,unit:"mg/24h",maxDose:1500},
  ]},
  {name:"Ceftazidima",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Cefalosporina 3ª gen antipseudomonas. Fibrosis quística, infecciones nosocomiales por P. aeruginosa, meningitis nosocomial. Escasa actividad frente a gram-positivos y anaerobios. Ajuste renal (FG<50).",doses:[
    {label:"Infección grave / Pseudomonas — IV",range:"50 mg/kg/8h",note:"máx 2 g/dosis · infundir en 30 min",factor:50,unit:"mg",maxDose:2000},
    {label:"Meningitis nosocomial — IV",range:"50 mg/kg/6h",note:"máx 2 g/dosis · considerar infusión extendida 3h para optimizar PK/PD",factor:50,unit:"mg",maxDose:2000},
    {label:"Fibrosis quística — IV",range:"50 mg/kg/8h",note:"máx 2 g/dosis · ciclos de 14–21 días · en combinación con aminoglucósido",factor:50,unit:"mg",maxDose:2000},
    {label:"Neonato — IV",range:"25–50 mg/kg/12h",note:"<7 días: c/12h · >7 días: c/8h",factor:30,unit:"mg",neonatal:true},
  ]},
  {name:"Ciprofloxacino IV",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Quinolona de amplio espectro. Gram-negativos MDR, Pseudomonas. ⚠️ Daño cartilaginoso teórico en <18 años → uso restringido a indicaciones sin alternativa eficaz. No indicado como 1ª línea en infecciones comunitarias. Ajuste renal.",doses:[
    {label:"Infección grave — IV",range:"10 mg/kg/8–12h",note:"máx 400 mg/dosis · infundir en 60 min",factor:10,unit:"mg",maxDose:400},
    {label:"Neutropenia febril / gram-neg MDR — IV",range:"10 mg/kg/8h",note:"máx 400 mg/dosis · infundir en 60 min",factor:10,unit:"mg",maxDose:400},
    {label:"Meningitis por gram-neg MDR — IV",range:"15 mg/kg/8h",note:"máx 400 mg/dosis · infundir en 60 min",factor:15,unit:"mg",maxDose:400},
  ]},
  {name:"Cotrimoxazol (TMP-SMX)",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Sulfametoxazol 400mg + trimetoprim 80mg por 5 mL. Neumonía por Pneumocystis (PCP), listeria, stenotrophomonas, SAMR-CA oral step-down. Dosis expresadas en mg de TMP. ⚠️ CI: <2 meses, fallo renal/hepático grave, déficit G6PD, hiperpotasemia.",doses:[
    {label:"PCP (neumocistosis) — IV/VO",range:"15–20 mg TMP/kg/día",note:"máx 320 mg TMP/día (= 4 amp/día) · en 3–4 dosis · infundir en 90 min · 21 días",factor:15,unit:"mg TMP/día"},
    {label:"SAMR-CA / infección urinaria grave — IV",range:"8–10 mg TMP/kg/día",note:"máx 320 mg TMP/día · en 2–4 dosis",factor:8,unit:"mg TMP/día"},
    {label:"Profilaxis PCP — VO",range:"5 mg TMP/kg/día",note:"máx 320 mg TMP/día · 3 días/semana",factor:5,unit:"mg TMP/día",maxDose:320},
  ],maxDose:320},
  {name:"Penicilina G sódica",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Meningitis bacteriana comunitaria (meningococo, neumococo sensible), sífilis congénita, sepsis neonatal tardía por estreptococo B. Activa sólo gram-positivos y gram-negativos sensibles. Expresar dosis en millones de UI (1 millón UI = 600 mg).",doses:[
    {label:"Meningitis bacteriana — IV",range:"250.000–400.000 UI/kg/día",note:"en 6 dosis c/4h · máx 24 mill. UI/día · infundir cada dosis en 30 min",factor:300000,unit:"UI/día",maxDose:24000000},
    {label:"Sífilis congénita — IV",range:"100.000–150.000 UI/kg/día",note:"en 3 dosis c/8h · 10–14 días · neonato",factor:100000,unit:"UI/día",neonatal:true},
    {label:"Estreptococo B — sepsis neonatal — IV",range:"200.000–300.000 UI/kg/día",note:"en 3–4 dosis · ≥14 días",factor:200000,unit:"UI/día",neonatal:true},
  ]},
  {name:"Oxacilina",cat:"ATB",color:"#10b981",source:"Pediamécum AEP",rev:"2026-03",status:"verified",notes:"Penicilina antiestafilocócica. SASM (Staph. aureus meticilin sensible): infecciones cutáneas graves, artritis séptica, osteomielitis, endocarditis. Superior a cloxacilina IV en farmacocinética. Ajuste en insuficiencia renal grave. No activo frente a SAMR.",doses:[
    {label:"Infección grave SASM — IV",range:"150–200 mg/kg/día",note:"máx 12 g/día · en 4–6 dosis c/4–6h · infundir en 30–60 min",factor:150,unit:"mg/día",maxDose:12000},
    {label:"Endocarditis SASM — IV",range:"200 mg/kg/día",note:"máx 12 g/día · en 6 dosis c/4h · 4–6 semanas",factor:200,unit:"mg/día",maxDose:12000},
    {label:"Neonato <7 días — IV",range:"75 mg/kg/día",note:"en 2–3 dosis · infundir en 30 min",factor:75,unit:"mg/día",neonatal:true},
  ]},

  {name:"Aciclovir IV",cat:"ATB",color:"#34d399",source:"Pediamécum AEP · BNF for Children 2024",rev:"2026-03",status:"verified",
  notes:"Antivírico. Primera elección en encefalitis herpética (HSV) y varicela grave en inmunodeprimidos. Nefrotóxico: hidratación IV adecuada antes y durante. ⚠️ Infundir en ≥ 60 min — cristaluria/nefrotoxicidad con infusión rápida. Ajuste en insuficiencia renal. Reconstituir en SF o RL (no SG).",
  doses:[
    {label:"Encefalitis herpética (HSV) — IV (neonato ≤ 3 meses)",range:"20 mg/kg/dosis",note:"c/8h · infundir 60 min · 14–21 días · hidratación IV obligatoria",factor:20,unit:"mg",maxDose:500,neonatal:true},
    {label:"Encefalitis herpética (HSV) — IV (1 mes–12 años)",range:"15 mg/kg/dosis",note:"c/8h · infundir 60 min · 14–21 días",factor:15,unit:"mg",maxDose:500},
    {label:"Encefalitis herpética (HSV) — IV (> 12 años)",range:"10 mg/kg/dosis",note:"c/8h · infundir 60 min · 14–21 días",factor:10,unit:"mg",maxDose:800},
    {label:"Varicela/VZV grave — IV (inmunocompetente)",range:"10 mg/kg/dosis",note:"c/8h · infundir 60 min · 5–7 días",factor:10,unit:"mg",maxDose:500},
    {label:"Varicela/VZV grave — IV (inmunodeprimido)",range:"15 mg/kg/dosis",note:"c/8h · infundir 60 min · 7–10 días",factor:15,unit:"mg",maxDose:800},
  ]},
  {name:"Eritromicina IV",cat:"ATB",color:"#f472b6",source:"Pediamécum AEP · BNF for Children 2024",rev:"2026-03",status:"verified",
  notes:"Macrólido. Vía IV reservada cuando VO no es posible. Uso procinético en gastroparesia/vaciamiento retardado. ⚠️ Prolongación QT — monitorizar ECG, evitar con otros fármacos que prolongan QT (haloperidol, amiodarona, ondansetrón). Extravasación: flebitis intensa. Diluir bien: [1–5 mg/mL], infundir en 60 min.",
  doses:[
    {label:"Infección respiratoria/sistémica — IV (< 12 años)",range:"12,5 mg/kg/dosis",note:"c/6h · infundir en 60 min · máx 7 días IV · pasar a VO en cuanto sea posible",factor:12.5,unit:"mg",maxDose:500},
    {label:"Infección respiratoria/sistémica — IV (≥ 12 años)",range:"250–500 mg/dosis",note:"c/6h · infundir en 60 min",factor:0,unit:"mg",fixedDose:"250–500 mg"},
    {label:"Procinético (gastroparesia) — IV",range:"3 mg/kg/dosis",note:"c/6–8h · infundir 30–60 min · dosis baja reduce riesgo QT · valorar beneficio/riesgo",factor:3,unit:"mg",maxDose:125},
  ]},
  {name:"Desmopresina IV/SC",cat:"Antifib",color:"#a78bfa",source:"Pediamécum AEP · BNF for Children 2024",rev:"2026-03",status:"verified",
  notes:"Análogo sintético de vasopresina (ADH). ⚠️ Hiponatremia dilucional — monitorizar sodio, peso y diuresis. Mayor riesgo en < 1 año y tras dosis repetidas. No administrar con soluciones hipotónicas. En hemofilia A/vWD: respuesta disminuye con dosis repetidas (taquifilaxia). Contraindicado en vWD tipo 2B.",
  doses:[
    {label:"Hemostasia — Hemofilia A / vWD tipo 1 — IV lento",range:"0,3 mcg/kg/dosis",note:"en 10–20 min · máx 20 mcg/dosis · puede repetir c/12–24h (taquifilaxia)",factor:0.3,unit:"mcg",maxDose:20},
    {label:"Diabetes insípida central — IV/SC/IM",range:"0,01–0,04 mcg/kg/dosis",note:"c/12–24h · máx 0,4 mcg/dosis · titular según respuesta y sodio",factor:0.02,unit:"mcg",maxDose:0.4},
    {label:"Poliuria/polidipsia — neonato IV/SC",range:"0,01 mcg/kg/dosis",note:"c/8–12h · vigilar hiponatremia estrechamente · ajustar individualmente",factor:0.01,unit:"mcg",maxDose:0.2,neonatal:true},
  ]},
];

export const ADULT_DOSE_CAP = 60;

