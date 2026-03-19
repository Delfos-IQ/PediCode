// Auto-generated ES module — PediCode modular migration
// Step 1: Data extraction

export const INFUSION_DRUGS = [
  {name:"Adrenalina",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.05,rHi:1,color:"#f87171",source:"Pediamécum AEP",rev:"2020-12",notes:"Vía CENTRAL. En neonatos: 0,05–0,3 mcg/kg/min. >0,3 predomina efecto α-vasopresor. Incompatible con alcalinos."},
  {name:"Noradrenalina",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.05,rHi:1,color:"#f87171",source:"Pediamécum AEP",rev:"2020-12",notes:"Sólo vía CENTRAL. >0,5 mcg/kg/min = dosis alta (criterio de refractariedad). Riesgo de necrosis por extravasación → fentolamina si extravasa."},
  {name:"Dopamina",unit:"mcg/kg/min",prescUnit:"mg",rLo:2,rHi:20,color:"#fb923c",source:"Pediamécum AEP",rev:"2020-12",notes:"<5 dopaminérgico · 5–10 inotrópico (β1) · >15 vasopresor (α). Incompatible con soluciones alcalinas."},
  {name:"Dobutamina",unit:"mcg/kg/min",prescUnit:"mg",rLo:2,rHi:15,color:"#fb923c",source:"Pediamécum AEP",rev:"2020-12",notes:"Máx 40 mcg/kg/min. Inotrópico β1 puro. Menos eficaz en prematuros. Incompatible con alcalinos."},
  {name:"Milrinona",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.25,rHi:0.75,color:"#a78bfa",source:"Pediamécum AEP",rev:"2021-01",notes:"Carga: 50–75 mcg/kg en 15–30 min (omitir si hipotensión). Duración máx recomendada: 35h. Riesgo de trombocitopenia en niños. No diluir con bicarbonato."},
  {name:"Vasopresina",unit:"mU/kg/min",prescUnit:"U",rLo:0.3,rHi:2,color:"#e879f9",source:"Pediamécum AEP (off-label)",rev:"2021-01",notes:"Off-label en choque vasopléjico refractario. Rango habitual: 0,3–2 mU/kg/min. Sólo vía CENTRAL."},
  {name:"Morfina",unit:"mcg/kg/h",prescUnit:"mg",rLo:10,rHi:40,color:"#818cf8",source:"Pediamécum AEP",rev:"2021-01",notes:"Neonatos: máx 15–20 mcg/kg/h. Vigilar depresión respiratoria."},
  {name:"Fentanilo",unit:"mcg/kg/h",prescUnit:"mcg",rLo:1,rHi:4,color:"#c084fc",source:"Pediamécum AEP",rev:"2020-12",notes:"Neonatos: 0,5–2 mcg/kg/h. Menor acumulación que morfina en IR."},
  {name:"Midazolam",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.5,rHi:2,color:"#34d399",source:"Pediamécum AEP",rev:"2021-01",notes:"Rango = 0,06–0,12 mg/kg/h = 1–2 mcg/kg/min. Ajustar 25% según Ramsay. Vigilar acumulación en hepáticos."},
  {name:"Ketamina",unit:"mg/kg/h",prescUnit:"mg",rLo:0.1,rHi:1,color:"#f472b6",source:"Pediamécum AEP",rev:"2020-11",notes:"0,1–0,5 mg/kg/h analgésico · 0,5–1 mg/kg/h sedante. Asociar midazolam en sedación prolongada."},
  {name:"Propofol",unit:"mg/kg/h",prescUnit:"mg",rLo:1.5,rHi:9,color:"#fbbf24",source:"Pediamécum AEP",rev:"2021-01",notes:"⚠️ CI absoluta sedación UCI en <16 años. Solo inducción/procedimientos."},
  {name:"Dexmedetomidina",unit:"mcg/kg/h",prescUnit:"mcg",rLo:0.2,rHi:1,color:"#2dd4bf",source:"Pediamécum AEP",rev:"2026-03",notes:"Nunca bolo IV directo. No escalar rápido. Tener atropina disponible."},
  {name:"Labetalol",unit:"mg/kg/h",prescUnit:"mg",rLo:0.25,rHi:3,color:"#38bdf8",source:"Pediamécum AEP",rev:"2020-11",notes:"Crisis hipertensiva. CI: asma, bloqueo AV. Monitorizar PA y FC."},
  {name:"Lidocaína",unit:"mg/kg/h",prescUnit:"mg",rLo:1,rHi:3,color:"#0ea5e9",source:"Pediamécum AEP",rev:"2020-11",notes:"Arritmias ventriculares. Velocidad máx IV: 0,7 mg/kg/min. Monitorizar ECG continuo."},
  {name:"Amiodarona",unit:"mg/kg/h",prescUnit:"mg",rLo:5,rHi:15,color:"#a78bfa",source:"Pediamécum AEP",rev:"2021-04",notes:"Mantenimiento post-PCR. Incompatible con SF y bicarbonato. Solo SG5%."},
  {name:"Insulina",unit:"U/kg/h",prescUnit:"U",rLo:0.02,rHi:0.1,color:"#34d399",source:"Pediamécum AEP",rev:"2021-01",notes:"CAD: inicio 0,05–0,1 U/kg/h. Hiperpotasemia: 0,1 U/kg/h + glucosa. Control glucémico horario."},
  {name:"Aminofilina",unit:"mg/kg/h",prescUnit:"mg",rLo:0.5,rHi:1,color:"#f97316",source:"Pediamécum AEP",rev:"2021-01",notes:"Índice terapéutico estrecho. Monitorizar niveles (objetivo: 10–20 mcg/mL). No usar si ya toma teofilina VO."},
  {name:"Nicardipino",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.5,rHi:3,color:"#f472b6",source:"Pediamécum AEP",rev:"2022-01",notes:"Bloqueante Ca²⁺ dihidropiridínico. Crisis HTA grave con lesión orgánica. Sólo vía central. Inicio 5–15 min. No en ICC descompensada ni cardiopatía obstructiva."},
  {name:"Nitroprusiato",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.3,rHi:8,color:"#f472b6",source:"Pediamécum AEP",rev:"2022-01",notes:"Vasodilatador mixto. Emergencia HTA con lesión orgánica. Fotosensible (proteger de luz). Toxicidad cianuro si > 3 mcg/kg/min o > 72h → monitorizar tiocianatos. Solo UCI."},
  {name:"Remifentanilo",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.05,rHi:2,color:"#818cf8",source:"Pediamécum AEP",rev:"2022-01",notes:"Opiáceo ultrashort (t½ 3–5 min). UCI/quirófano. Sin acumulación incluso en insuf. renal o hepática. Titulación rápida. Rigidez torácica si bolo rápido. Sin analgesia residual al parar."},
  {name:"Clonidina",unit:"mcg/kg/h",prescUnit:"mg",rLo:0.5,rHi:2,color:"#818cf8",source:"Pediamécum AEP",rev:"2021-01",notes:"Agonista α₂. Coadyuvante sedoanalgesia, síndrome abstinencia (NOWS). No suspender bruscamente (HTA rebote). Bradicardia e hipotensión: efectos adversos principales."},
  {name:"Sufentanilo",unit:"mcg/kg/h",prescUnit:"mcg",rLo:0.01,rHi:0.1,color:"#c084fc",source:"Pediamécum AEP",rev:"2026-03",notes:"Opiáceo 5–10× más potente que fentanilo. UCI pediátrica: sedoanalgesia prolongada y ECMO. Rango neonatal: 0,01–0,05 mcg/kg/h. Menor acumulación que fentanilo. Monitorizar escala COMFORT-B / FLACC."},
  {name:"Heparina",unit:"U/kg/h",prescUnit:"U",rLo:10,rHi:28,color:"#f87171",source:"Pediamécum AEP · ACCP Guidelines",rev:"2026-03",notes:"Anticoagulación sistémica (ECMO, trombosis, CEC). Protocolo ajuste por TTPA (objetivo 60–85 s). Carga inicial: 75 U/kg IV en 10 min (omitir en ECMO). Antídoto: sulfato de protamina 1 mg neutraliza 100 U heparina."},
  {name:"Furosemida",unit:"mcg/kg/min",prescUnit:"mg",rLo:0.1,rHi:0.4,color:"#22d3ee",source:"Pediamécum AEP",rev:"2026-03",notes:"Diurético de asa. Perfusión continua = mayor eficacia y menor toxicidad que bolos. Indicación: diuresis resistente a bolos, insuficiencia cardiaca, síndrome edematoso. Monitorizar K⁺, Na⁺, creatinina. Máx 4 mg/kg/h."},
  {name:"Fentolamina",unit:"mcg/kg/min",prescUnit:"mg",rLo:1,rHi:5,color:"#f87171",source:"Pediamécum AEP",rev:"2026-03",notes:"Bloqueante α no selectivo. Crisis HTA por feocromocitoma/paraganglioma, retirada clonidina, extravasación catecolaminas. Monitorizar FC y TA continua. Taquicardia refleja frecuente."},
];

export const INF_DRUG_META = {
  'Adrenalina':     {icon:'💉', group:'Vasoactivos', sub:'0.05–1 mcg/kg/min', color:'#f87171'},
  'Noradrenalina':  {icon:'💉', group:'Vasoactivos', sub:'0.05–1 mcg/kg/min', color:'#f87171'},
  'Dopamina':       {icon:'❤️', group:'Vasoactivos', sub:'2–20 mcg/kg/min', color:'#fb923c'},
  'Dobutamina':     {icon:'❤️', group:'Vasoactivos', sub:'2–15 mcg/kg/min', color:'#fb923c'},
  'Milrinona':      {icon:'💓', group:'Vasoactivos', sub:'0.25–0.75 mcg/kg/min', color:'#a78bfa'},
  'Vasopresina':    {icon:'💧', group:'Vasoactivos', sub:'0.3–2 mU/kg/min', color:'#e879f9'},
  'Morfina':        {icon:'😴', group:'Sedoanalgesia', sub:'10–40 mcg/kg/h', color:'#818cf8'},
  'Fentanilo':      {icon:'😴', group:'Sedoanalgesia', sub:'1–4 mcg/kg/h', color:'#c084fc'},
  'Midazolam':      {icon:'💤', group:'Sedoanalgesia', sub:'0.5–2 mcg/kg/min', color:'#34d399'},
  'Ketamina':       {icon:'🌀', group:'Sedoanalgesia', sub:'0.1–1 mg/kg/h', color:'#f472b6'},
  'Propofol':       {icon:'⚠️', group:'Sedoanalgesia', sub:'1.5–9 mg/kg/h', color:'#fbbf24'},
  'Dexmedetomidina':{icon:'🔵', group:'Sedoanalgesia', sub:'0.2–1 mcg/kg/h', color:'#2dd4bf'},
  'Labetalol':      {icon:'🫀', group:'Otros', sub:'0.25–3 mg/kg/h', color:'#38bdf8'},
  'Lidocaína':      {icon:'⚡', group:'Otros', sub:'1–3 mg/kg/h', color:'#0ea5e9'},
  'Amiodarona':     {icon:'⚡', group:'Otros', sub:'5–15 mg/kg/h', color:'#a78bfa'},
  'Insulina':       {icon:'🩸', group:'Otros', sub:'0.02–0.1 U/kg/h', color:'#34d399'},
  'Aminofilina':    {icon:'🫁', group:'Otros', sub:'0.5–1 mg/kg/h', color:'#f97316'},
  'Sufentanilo':    {icon:'😴', group:'Sedoanalgesia', sub:'0.01–0.1 mcg/kg/h', color:'#c084fc'},
  'Heparina':       {icon:'🩸', group:'Otros', sub:'10–28 U/kg/h', color:'#f87171'},
  'Furosemida':     {icon:'💧', group:'Otros', sub:'0.1–0.4 mcg/kg/min', color:'#22d3ee'},
  'Fentolamina':    {icon:'🫀', group:'Otros', sub:'1–5 mcg/kg/min', color:'#f87171'},
};

export const INF_GROUPS_ORDER = ['Vasoactivos', 'Sedoanalgesia', 'Otros'];

