// ═══════════════════════════════════════════════════════════════════
// data/compatibilities.js — Compatibilidad en Y de fármacos IV
// PediCode v1.0 — módulo de compatibilidades
// ───────────────────────────────────────────────────────────────────
// Fuentes principales:
//   • Stabilis 4.0 (stabilis.org)
//   • Trissel's Handbook on Injectable Drugs (15ª ed.)
//   • Santos MT et al. Rev Bras Farm Hosp Serv Saúde 2013;4(3):34-37
//   • King Guide to Parenteral Admixtures
//   • Micromedex 2.0 (Truven Health Analytics)
//
// ⚠ Verificar siempre con farmacéutico clínico o fuente primaria.
//    Los datos de compatibilidad pueden variar según concentración,
//    diluyente, temperatura y tiempo de contacto.
// ═══════════════════════════════════════════════════════════════════

// ─── LISTA DE FÁRMACOS ─────────────────────────────────────────────
// id: clave interna (lowercase, sin acentos)
// label: etiqueta multilingual
// icon: emoji representativo
// group: agrupación visual
export const COMPAT_DRUGS = [
  // Vasoactivos / inotrópicos
  { id: 'adrenalina',     label: { es: 'Adrenalina',       pt: 'Adrenalina',       en: 'Epinephrine'      }, icon: '🔴', group: 'vasoactivo' },
  { id: 'noradrenalina',  label: { es: 'Noradrenalina',    pt: 'Noradrenalina',    en: 'Norepinephrine'   }, icon: '🔴', group: 'vasoactivo' },
  { id: 'dopamina',       label: { es: 'Dopamina',         pt: 'Dopamina',         en: 'Dopamine'         }, icon: '🔴', group: 'vasoactivo' },
  { id: 'dobutamina',     label: { es: 'Dobutamina',       pt: 'Dobutamina',       en: 'Dobutamine'       }, icon: '🔴', group: 'vasoactivo' },
  { id: 'milrinona',      label: { es: 'Milrinona',        pt: 'Milrinona',        en: 'Milrinone'        }, icon: '🔴', group: 'vasoactivo' },
  { id: 'vasopresina',    label: { es: 'Vasopresina',      pt: 'Vasopressina',     en: 'Vasopressin'      }, icon: '🔴', group: 'vasoactivo' },
  { id: 'fenilefrina',    label: { es: 'Fenilefrina',      pt: 'Fenilefrina',      en: 'Phenylephrine'    }, icon: '🔴', group: 'vasoactivo' },
  { id: 'isoproterenol',  label: { es: 'Isoproterenol',    pt: 'Isoproterenol',    en: 'Isoproterenol'    }, icon: '🔴', group: 'vasoactivo' },
  { id: 'nitroglicerina', label: { es: 'Nitroglicerina',   pt: 'Nitroglicerina',   en: 'Nitroglycerin'    }, icon: '🩸', group: 'vasoactivo' },
  { id: 'nitroprusiato',  label: { es: 'Nitroprusiato',    pt: 'Nitroprussiato',   en: 'Nitroprusside'    }, icon: '🩸', group: 'vasoactivo' },
  { id: 'labetalol',      label: { es: 'Labetalol',        pt: 'Labetalol',        en: 'Labetalol'        }, icon: '🩸', group: 'vasoactivo' },
  // Sedoanalgesia
  { id: 'fentanilo',      label: { es: 'Fentanilo',        pt: 'Fentanilo',        en: 'Fentanyl'         }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'morfina',        label: { es: 'Morfina',          pt: 'Morfina',          en: 'Morphine'         }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'remifentanilo',  label: { es: 'Remifentanilo',    pt: 'Remifentanilo',    en: 'Remifentanil'     }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'metadona',       label: { es: 'Metadona',         pt: 'Metadona',         en: 'Methadone'        }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'midazolam',      label: { es: 'Midazolam',        pt: 'Midazolam',        en: 'Midazolam'        }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'propofol',       label: { es: 'Propofol',         pt: 'Propofol',         en: 'Propofol'         }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'ketamina',       label: { es: 'Ketamina',         pt: 'Cetamina',         en: 'Ketamine'         }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'dexmedetomidina',label: { es: 'Dexmedetomidina',  pt: 'Dexmedetomidina',  en: 'Dexmedetomidine'  }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'clonidina',      label: { es: 'Clonidina',        pt: 'Clonidina',        en: 'Clonidine'        }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'flumazenilo',    label: { es: 'Flumazenilo',      pt: 'Flumazenil',       en: 'Flumazenil'       }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'naloxona',       label: { es: 'Naloxona',         pt: 'Naloxona',         en: 'Naloxone'         }, icon: '🟡', group: 'sedoanalgesia' },
  // Relajantes neuromusculares
  { id: 'cisatracurio',   label: { es: 'Cisatracurio',     pt: 'Cisatracúrio',     en: 'Cisatracurium'    }, icon: '⚪', group: 'relajante' },
  { id: 'vecuronio',      label: { es: 'Vecuronio',        pt: 'Vecurônio',        en: 'Vecuronium'       }, icon: '⚪', group: 'relajante' },
  { id: 'rocuronio',      label: { es: 'Rocuronio',        pt: 'Rocurônio',        en: 'Rocuronium'       }, icon: '⚪', group: 'relajante' },
  // Antiarrítmicos / cardio
  { id: 'amiodarona',     label: { es: 'Amiodarona',       pt: 'Amiodarona',       en: 'Amiodarone'       }, icon: '🟠', group: 'cardio' },
  { id: 'lidocaina',      label: { es: 'Lidocaína',        pt: 'Lidocaína',        en: 'Lidocaine'        }, icon: '🟠', group: 'cardio' },
  { id: 'diltiazem',      label: { es: 'Diltiazem',        pt: 'Diltiazem',        en: 'Diltiazem'        }, icon: '🟠', group: 'cardio' },
  { id: 'verapamilo',     label: { es: 'Verapamilo',       pt: 'Verapamil',        en: 'Verapamil'        }, icon: '🟠', group: 'cardio' },
  // Electrolitos / fluidoterapia
  { id: 'bicarbonato',    label: { es: 'Bicarbonato Na',   pt: 'Bicarbonato Na',   en: 'Sodium Bicarbonate'}, icon: '🔵', group: 'electrolito' },
  { id: 'calcio_glu',     label: { es: 'Calcio gluconato', pt: 'Gluconato Ca',     en: 'Calcium Gluconate' }, icon: '🔵', group: 'electrolito' },
  { id: 'calcio_clo',     label: { es: 'Calcio cloruro',   pt: 'Cloreto de Ca',    en: 'Calcium Chloride'  }, icon: '🔵', group: 'electrolito' },
  { id: 'magnesio',       label: { es: 'Magnesio sulfato', pt: 'Sulfato Mg',       en: 'Magnesium Sulfate' }, icon: '🔵', group: 'electrolito' },
  { id: 'potasio',        label: { es: 'Potasio cloruro',  pt: 'Cloreto de K',     en: 'Potassium Chloride'}, icon: '🔵', group: 'electrolito' },
  // Diuréticos / anticoagulantes
  { id: 'furosemida',     label: { es: 'Furosemida',       pt: 'Furosemida',       en: 'Furosemide'       }, icon: '🟢', group: 'otro' },
  { id: 'heparina',       label: { es: 'Heparina sódica',  pt: 'Heparina sódica',  en: 'Heparin'          }, icon: '🟢', group: 'otro' },
  { id: 'insulina',       label: { es: 'Insulina',         pt: 'Insulina',         en: 'Insulin'          }, icon: '🟢', group: 'otro' },
  // Antibióticos
  { id: 'meropenem',      label: { es: 'Meropenem',        pt: 'Meropenem',        en: 'Meropenem'        }, icon: '🟤', group: 'antibiotico' },
  { id: 'pip_tazo',       label: { es: 'Pip-tazobactam',   pt: 'Pip-tazobactam',   en: 'Pip-tazobactam'   }, icon: '🟤', group: 'antibiotico' },
  { id: 'ceftazidima',    label: { es: 'Ceftazidima',      pt: 'Ceftazidima',      en: 'Ceftazidime'      }, icon: '🟤', group: 'antibiotico' },
  { id: 'vancomicina',    label: { es: 'Vancomicina',      pt: 'Vancomicina',      en: 'Vancomycin'       }, icon: '🟤', group: 'antibiotico' },
  // Otros
  { id: 'nacetilcisteina',label: { es: 'N-acetilcisteína', pt: 'N-acetilcisteína', en: 'N-acetylcysteine' }, icon: '⚗️', group: 'otro' },
  { id: 'pantoprazol',    label: { es: 'Pantoprazol',      pt: 'Pantoprazol',      en: 'Pantoprazole'     }, icon: '⚗️', group: 'otro' },
  { id: 'hidrocortisona', label: { es: 'Hidrocortisona',   pt: 'Hidrocortisona',   en: 'Hydrocortisone'   }, icon: '⚗️', group: 'otro' },
  { id: 'somatostatina',  label: { es: 'Somatostatina',    pt: 'Somatostatina',    en: 'Somatostatin'     }, icon: '⚗️', group: 'otro' },
];

// ─── GRUPOS (label multilingual) ────────────────────────────────────
export const COMPAT_GROUPS = {
  vasoactivo:   { es: '🔴 Vasoactivos',        pt: '🔴 Vasoativos',         en: '🔴 Vasoactive'       },
  sedoanalgesia:{ es: '🟣 Sedoanalgesia',       pt: '🟣 Sedoanalgesia',      en: '🟣 Sedoanalgesia'    },
  relajante:    { es: '⚪ Relajantes NM',       pt: '⚪ Relaxantes NM',      en: '⚪ Neuromuscular'    },
  cardio:       { es: '🟠 Cardiología',         pt: '🟠 Cardiologia',        en: '🟠 Cardiac'          },
  electrolito:  { es: '🔵 Electrolitos',        pt: '🔵 Eletrólitos',        en: '🔵 Electrolytes'     },
  antibiotico:  { es: '🟤 Antibióticos',        pt: '🟤 Antibióticos',       en: '🟤 Antibiotics'      },
  otro:         { es: '🟢 Otros',               pt: '🟢 Outros',             en: '🟢 Other'            },
};

// ─── COMPATIBILIDAD EN Y ────────────────────────────────────────────
// Formato de clave: [id_menor, id_mayor].sort().join('+')   → siempre alfabético
// status:
//   'C'  = Compatible
//   'I'  = Incompatible
//   'IC' = Compatible en condiciones especiales (concentración, diluyente, tiempo)
//   '?'  = Sin datos disponibles → consultar Stabilis
//
// note (opcional): indicación clínica breve
// solvent (opcional): diluyente específico si aplica
// src (referencia abreviada)
// ────────────────────────────────────────────────────────────────────
export const COMPAT_PAIRS = {

  // ════ ADRENALINA ════
  'adrenalina+amiodarona':      { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+bicarbonato':     { status:'I',  note:'El álcali inactiva las catecolaminas', src:'Trissel\'s' },
  'adrenalina+calcio_clo':      { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+calcio_glu':      { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+ceftazidima':     { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+cisatracurio':    { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+clonidina':       { status:'IC', note:'Solo en suero fisiológico', src:'Stabilis' },
  'adrenalina+dexmedetomidina': { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+diltiazem':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+dobutamina':      { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+dopamina':        { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+fentanilo':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+furosemida':      { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'adrenalina+heparina':        { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+insulina':        { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+isoproterenol':   { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+ketamina':        { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+labetalol':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+meropenem':       { status:'?',  note:'Sin datos — consultar Stabilis', src:'' },
  'adrenalina+metadona':        { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+midazolam':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+milrinona':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+morfina':         { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+naloxona':        { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+nitroglicerina':  { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+nitroprusiato':   { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+noradrenalina':   { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+pantoprazol':     { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+pip_tazo':        { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'adrenalina+potasio':         { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+propofol':        { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+remifentanilo':   { status:'IC', note:'Compatible en condiciones estándar', src:'Stabilis' },
  'adrenalina+somatostatina':   { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+vasopresina':     { status:'C',  note:'', src:'Stabilis' },
  'adrenalina+vecuronio':       { status:'C',  note:'', src:'Trissel\'s' },
  'adrenalina+verapamilo':      { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },

  // ════ NORADRENALINA ════
  'bicarbonato+noradrenalina':  { status:'I',  note:'El álcali inactiva las catecolaminas', src:'Trissel\'s' },
  'cisatracurio+noradrenalina': { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+noradrenalina':{ status:'C',note:'', src:'Stabilis' },
  'dobutamina+noradrenalina':   { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+noradrenalina':     { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+noradrenalina':    { status:'C',  note:'', src:'Trissel\'s' },
  'furosemida+noradrenalina':   { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'heparina+noradrenalina':     { status:'C',  note:'', src:'Trissel\'s' },
  'insulina+noradrenalina':     { status:'C',  note:'', src:'Trissel\'s' },
  'labetalol+noradrenalina':    { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+noradrenalina':    { status:'C',  note:'', src:'Trissel\'s' },
  'milrinona+noradrenalina':    { status:'C',  note:'', src:'Stabilis' },
  'morfina+noradrenalina':      { status:'C',  note:'', src:'Trissel\'s' },
  'nitroglicerina+noradrenalina':{ status:'C', note:'', src:'Trissel\'s' },
  'nitroprusiato+noradrenalina':{ status:'C',  note:'', src:'Trissel\'s' },
  'noradrenalina+potasio':      { status:'C',  note:'', src:'Trissel\'s' },
  'noradrenalina+propofol':     { status:'C',  note:'', src:'Stabilis' },
  'noradrenalina+remifentanilo':{ status:'IC', note:'Compatible en condiciones estándar', src:'Stabilis' },
  'noradrenalina+vasopresina':  { status:'C',  note:'', src:'Stabilis' },
  'noradrenalina+vecuronio':    { status:'C',  note:'', src:'Stabilis' },

  // ════ DOPAMINA ════
  'bicarbonato+dopamina':       { status:'I',  note:'El álcali inactiva las catecolaminas', src:'Trissel\'s' },
  'cisatracurio+dopamina':      { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+dopamina':   { status:'C',  note:'', src:'Stabilis' },
  'diltiazem+dopamina':         { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+dopamina':        { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+fentanilo':         { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+furosemida':        { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },
  'dopamina+heparina':          { status:'IC', note:'Precipitación posible con heparina no fraccionada a altas concentraciones', src:'Stabilis' },
  'dopamina+insulina':          { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+labetalol':         { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+midazolam':         { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+milrinona':         { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+morfina':           { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+nitroglicerina':    { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+nitroprusiato':     { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+potasio':           { status:'C',  note:'', src:'Trissel\'s' },
  'dopamina+propofol':          { status:'C',  note:'', src:'Stabilis' },
  'dopamina+vecuronio':         { status:'C',  note:'', src:'Stabilis' },

  // ════ DOBUTAMINA ════
  'bicarbonato+dobutamina':     { status:'I',  note:'El álcali inactiva las catecolaminas', src:'Trissel\'s' },
  'cisatracurio+dobutamina':    { status:'C',  note:'', src:'Stabilis' },
  'diltiazem+dobutamina':       { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+dexmedetomidina': { status:'C',  note:'', src:'Stabilis' },
  'dobutamina+fentanilo':       { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+furosemida':      { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },
  'dobutamina+heparina':        { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'dobutamina+insulina':        { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+midazolam':       { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+milrinona':       { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+morfina':         { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+nitroglicerina':  { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+nitroprusiato':   { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+potasio':         { status:'C',  note:'', src:'Trissel\'s' },
  'dobutamina+propofol':        { status:'C',  note:'', src:'Stabilis' },
  'dobutamina+vecuronio':       { status:'C',  note:'', src:'Stabilis' },

  // ════ MILRINONA ════
  'amiodarona+milrinona':       { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+milrinona':        { status:'C',  note:'', src:'Stabilis' },
  'furosemida+milrinona':       { status:'I',  note:'Precipitación inmediata', src:'Trissel\'s' },
  'heparina+milrinona':         { status:'C',  note:'', src:'Stabilis' },
  'midazolam+milrinona':        { status:'C',  note:'', src:'Stabilis' },
  'milrinona+morfina':          { status:'C',  note:'', src:'Stabilis' },
  'milrinona+nitroglicerina':   { status:'C',  note:'', src:'Stabilis' },
  'milrinona+nitroprusiato':    { status:'C',  note:'', src:'Stabilis' },
  'milrinona+potasio':          { status:'IC', note:'Verificar concentración de potasio', src:'Stabilis' },
  'milrinona+propofol':         { status:'C',  note:'', src:'Stabilis' },
  'milrinona+vasopresina':      { status:'C',  note:'', src:'Stabilis' },
  'milrinona+vecuronio':        { status:'C',  note:'', src:'Stabilis' },

  // ════ AMIODARONA ════
  'amiodarona+bicarbonato':     { status:'I',  note:'Precipitación', src:'Trissel\'s' },
  'amiodarona+cisatracurio':    { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+dexmedetomidina': { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+diltiazem':       { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+dobutamina':      { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+dopamina':        { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+fentanilo':       { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+furosemida':      { status:'IC', note:'Compatible — verificar concentraciones', src:'Stabilis' },
  'amiodarona+heparina':        { status:'I',  note:'Precipitación. No administrar en Y', src:'Trissel\'s' },
  'amiodarona+insulina':        { status:'IC', note:'', src:'Stabilis' },
  'amiodarona+labetalol':       { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+midazolam':       { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+morfina':         { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+nitroglicerina':  { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+nitroprusiato':   { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+noradrenalina':   { status:'C',  note:'', src:'Trissel\'s' },
  'amiodarona+potasio':         { status:'I',  note:'Incompatible a concentraciones estándar', src:'Trissel\'s' },
  'amiodarona+propofol':        { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+vancomicina':     { status:'IC', note:'', src:'Stabilis' },
  'amiodarona+vasopresina':     { status:'C',  note:'', src:'Stabilis' },
  'amiodarona+vecuronio':       { status:'C',  note:'', src:'Trissel\'s' },

  // ════ SEDOANALGESIA: FENTANILO ════
  'fentanilo+heparina':         { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+insulina':         { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+ketamina':         { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+labetalol':        { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+magnesio':         { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+meropenem':        { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+midazolam':        { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+morfina':          { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+nitroglicerina':   { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+nitroprusiato':    { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+pantoprazol':      { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+pip_tazo':         { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+potasio':          { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+propofol':         { status:'C',  note:'', src:'Trissel\'s' },
  'fentanilo+remifentanilo':    { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+vancomicina':      { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+vasopresina':      { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+vecuronio':        { status:'C',  note:'', src:'Trissel\'s' },
  'ceftazidima+fentanilo':      { status:'C',  note:'', src:'Stabilis' },
  'cisatracurio+fentanilo':     { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+fentanilo':  { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+hidrocortisona':   { status:'C',  note:'', src:'Stabilis' },
  'fentanilo+rocuronio':        { status:'C',  note:'', src:'Stabilis' },

  // ════ MIDAZOLAM ════
  'cisatracurio+midazolam':     { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+midazolam':  { status:'C',  note:'', src:'Stabilis' },
  'furosemida+midazolam':       { status:'I',  note:'Precipitación (incompatibilidad de pH)', src:'Trissel\'s' },
  'heparina+midazolam':         { status:'C',  note:'', src:'Trissel\'s' },
  'hidrocortisona+midazolam':   { status:'C',  note:'', src:'Stabilis' },
  'insulina+midazolam':         { status:'C',  note:'', src:'Trissel\'s' },
  'ketamina+midazolam':         { status:'C',  note:'', src:'Stabilis' },
  'labetalol+midazolam':        { status:'C',  note:'', src:'Trissel\'s' },
  'magnesio+midazolam':         { status:'C',  note:'', src:'Stabilis' },
  'meropenem+midazolam':        { status:'C',  note:'', src:'Stabilis' },
  'midazolam+morfina':          { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+nitroglicerina':   { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+nitroprusiato':    { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+pantoprazol':      { status:'I',  note:'Precipitación — no administrar en Y', src:'Stabilis' },
  'midazolam+pip_tazo':         { status:'C',  note:'', src:'Stabilis' },
  'midazolam+potasio':          { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+propofol':         { status:'C',  note:'', src:'Trissel\'s' },
  'midazolam+rocuronio':        { status:'C',  note:'', src:'Stabilis' },
  'midazolam+vancomicina':      { status:'C',  note:'', src:'Stabilis' },
  'midazolam+vasopresina':      { status:'C',  note:'', src:'Stabilis' },
  'midazolam+vecuronio':        { status:'C',  note:'', src:'Trissel\'s' },
  'ceftazidima+midazolam':      { status:'C',  note:'', src:'Stabilis' },

  // ════ MORFINA ════
  'cisatracurio+morfina':       { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+morfina':    { status:'C',  note:'', src:'Stabilis' },
  'furosemida+morfina':         { status:'I',  note:'Precipitación (incompatibilidad de pH)', src:'Trissel\'s' },
  'heparina+morfina':           { status:'C',  note:'', src:'Trissel\'s' },
  'insulina+morfina':           { status:'C',  note:'', src:'Trissel\'s' },
  'ketamina+morfina':           { status:'C',  note:'', src:'Stabilis' },
  'labetalol+morfina':          { status:'C',  note:'', src:'Trissel\'s' },
  'magnesio+morfina':           { status:'C',  note:'', src:'Stabilis' },
  'meropenem+morfina':          { status:'C',  note:'', src:'Stabilis' },
  'morfina+nitroglicerina':     { status:'C',  note:'', src:'Trissel\'s' },
  'morfina+nitroprusiato':      { status:'C',  note:'', src:'Trissel\'s' },
  'morfina+pantoprazol':        { status:'I',  note:'Precipitación — no administrar en Y', src:'Stabilis' },
  'morfina+pip_tazo':           { status:'C',  note:'', src:'Stabilis' },
  'morfina+potasio':            { status:'C',  note:'', src:'Trissel\'s' },
  'morfina+propofol':           { status:'C',  note:'', src:'Trissel\'s' },
  'morfina+rocuronio':          { status:'C',  note:'', src:'Stabilis' },
  'morfina+vancomicina':        { status:'C',  note:'', src:'Stabilis' },
  'morfina+vasopresina':        { status:'C',  note:'', src:'Stabilis' },
  'morfina+vecuronio':          { status:'C',  note:'', src:'Trissel\'s' },
  'ceftazidima+morfina':        { status:'C',  note:'', src:'Stabilis' },

  // ════ PROPOFOL ════
  'cisatracurio+propofol':      { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+propofol':   { status:'C',  note:'', src:'Stabilis' },
  'furosemida+propofol':        { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },
  'heparina+propofol':          { status:'IC', note:'Separar — la heparina puede romper la emulsión', src:'Stabilis' },
  'insulina+propofol':          { status:'C',  note:'', src:'Stabilis' },
  'ketamina+propofol':          { status:'C',  note:'En práctica clínica — verificar concentraciones', src:'Stabilis' },
  'labetalol+propofol':         { status:'C',  note:'', src:'Stabilis' },
  'magnesio+propofol':          { status:'C',  note:'', src:'Stabilis' },
  'meropenem+propofol':         { status:'C',  note:'', src:'Stabilis' },
  'nitroglicerina+propofol':    { status:'C',  note:'', src:'Stabilis' },
  'nitroprusiato+propofol':     { status:'C',  note:'', src:'Stabilis' },
  'pantoprazol+propofol':       { status:'I',  note:'Incompatible — no administrar en Y', src:'Stabilis' },
  'pip_tazo+propofol':          { status:'C',  note:'', src:'Stabilis' },
  'potasio+propofol':           { status:'IC', note:'Concentraciones estándar de KCl', src:'Stabilis' },
  'propofol+rocuronio':         { status:'C',  note:'', src:'Stabilis' },
  'propofol+vancomicina':       { status:'IC', note:'Verificar — puede romper emulsión', src:'Stabilis' },
  'propofol+vasopresina':       { status:'C',  note:'', src:'Stabilis' },
  'propofol+vecuronio':         { status:'C',  note:'', src:'Stabilis' },
  'ceftazidima+propofol':       { status:'C',  note:'', src:'Stabilis' },

  // ════ KETAMINA ════
  'cisatracurio+ketamina':      { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+ketamina':   { status:'C',  note:'', src:'Stabilis' },
  'heparina+ketamina':          { status:'C',  note:'', src:'Stabilis' },
  'ketamina+rocuronio':         { status:'C',  note:'', src:'Stabilis' },
  'ketamina+vecuronio':         { status:'C',  note:'', src:'Stabilis' },

  // ════ DEXMEDETOMIDINA ════
  'cisatracurio+dexmedetomidina':{ status:'C', note:'', src:'Stabilis' },
  'dexmedetomidina+heparina':   { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+insulina':   { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+labetalol':  { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+magnesio':   { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+meropenem':  { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+nitroglicerina':{ status:'C',note:'', src:'Stabilis' },
  'dexmedetomidina+potasio':    { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+rocuronio':  { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+vecuronio':  { status:'C',  note:'', src:'Stabilis' },
  'dexmedetomidina+vasopresina':{ status:'C',  note:'', src:'Stabilis' },

  // ════ RELAJANTES NEUROMUSCULARES ════
  'cisatracurio+rocuronio':     { status:'?',  note:'Sin datos disponibles', src:'' },
  'cisatracurio+vecuronio':     { status:'?',  note:'Sin datos disponibles', src:'' },
  'rocuronio+vecuronio':        { status:'?',  note:'Sin datos disponibles — no mezclar', src:'' },
  'cisatracurio+heparina':      { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'cisatracurio+insulina':      { status:'C',  note:'', src:'Stabilis' },
  'cisatracurio+potasio':       { status:'C',  note:'', src:'Stabilis' },
  'cisatracurio+vancomicina':   { status:'C',  note:'', src:'Stabilis' },
  'heparina+vecuronio':         { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'insulina+vecuronio':         { status:'C',  note:'', src:'Stabilis' },
  'potasio+vecuronio':          { status:'C',  note:'', src:'Stabilis' },
  'rocuronio+vancomicina':      { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'heparina+rocuronio':         { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },

  // ════ ELECTROLITOS ════
  'bicarbonato+calcio_clo':     { status:'I',  note:'Precipitación de CaCO₃', src:'Trissel\'s' },
  'bicarbonato+calcio_glu':     { status:'I',  note:'Precipitación de CaCO₃', src:'Trissel\'s' },
  'bicarbonato+furosemida':     { status:'C',  note:'', src:'Stabilis' },
  'bicarbonato+heparina':       { status:'C',  note:'', src:'Stabilis' },
  'bicarbonato+magnesio':       { status:'IC', note:'Precipitación posible a concentraciones altas', src:'Trissel\'s' },
  'bicarbonato+midazolam':      { status:'I',  note:'Precipitación (pH incompatible)', src:'Stabilis' },
  'bicarbonato+potasio':        { status:'C',  note:'', src:'Trissel\'s' },
  'calcio_clo+calcio_glu':      { status:'?',  note:'No mezclar en el mismo acceso', src:'' },
  'calcio_clo+furosemida':      { status:'I',  note:'Precipitación', src:'Trissel\'s' },
  'calcio_clo+heparina':        { status:'I',  note:'Precipitación', src:'Trissel\'s' },
  'calcio_clo+magnesio':        { status:'IC', note:'Precipitación posible — verificar', src:'Stabilis' },
  'calcio_clo+potasio':         { status:'C',  note:'', src:'Trissel\'s' },
  'calcio_glu+furosemida':      { status:'IC', note:'Precipitación posible — verificar', src:'Stabilis' },
  'calcio_glu+heparina':        { status:'IC', note:'Precipitación a concentraciones altas', src:'Stabilis' },
  'calcio_glu+magnesio':        { status:'IC', note:'Precipitación posible — administrar por vías separadas si posible', src:'Stabilis' },
  'calcio_glu+potasio':         { status:'C',  note:'', src:'Trissel\'s' },
  'furosemida+heparina':        { status:'C',  note:'', src:'Trissel\'s' },
  'furosemida+insulina':        { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'furosemida+potasio':         { status:'C',  note:'', src:'Trissel\'s' },
  'heparina+insulina':          { status:'C',  note:'Compatible — uso clínico habitual', src:'Trissel\'s' },
  'heparina+magnesio':          { status:'C',  note:'', src:'Stabilis' },
  'heparina+potasio':           { status:'C',  note:'', src:'Trissel\'s' },
  'insulina+magnesio':          { status:'C',  note:'', src:'Stabilis' },
  'insulina+potasio':           { status:'C',  note:'Compatible — administración conjunta frecuente', src:'Trissel\'s' },
  'magnesio+potasio':           { status:'C',  note:'', src:'Trissel\'s' },

  // ════ ANTIBIÓTICOS ════
  'ceftazidima+heparina':       { status:'C',  note:'', src:'Trissel\'s' },
  'ceftazidima+insulina':       { status:'C',  note:'', src:'Stabilis' },
  'ceftazidima+vancomicina':    { status:'I',  note:'Precipitación — usar accesos separados', src:'Trissel\'s' },
  'ceftazidima+pip_tazo':       { status:'?',  note:'Sin datos — no se deben mezclar beta-lactámicos sin verificar', src:'' },
  'meropenem+heparina':         { status:'C',  note:'', src:'Stabilis' },
  'meropenem+insulina':         { status:'C',  note:'', src:'Stabilis' },
  'meropenem+pip_tazo':         { status:'?',  note:'Sin datos — no mezclar carbapenems con pip-tazo', src:'' },
  'meropenem+potasio':          { status:'C',  note:'', src:'Stabilis' },
  'meropenem+vancomicina':      { status:'C',  note:'Compatible en Y a concentraciones estándar', src:'Stabilis' },
  'pip_tazo+heparina':          { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'pip_tazo+insulina':          { status:'C',  note:'', src:'Stabilis' },
  'pip_tazo+potasio':           { status:'C',  note:'', src:'Stabilis' },
  'pip_tazo+vancomicina':       { status:'C',  note:'Compatible a concentraciones estándar', src:'Stabilis' },
  'heparina+vancomicina':       { status:'IC', note:'Precipitación posible a concentraciones altas', src:'Trissel\'s' },
  'insulina+vancomicina':       { status:'C',  note:'', src:'Stabilis' },
  'vancomicina+potasio':        { status:'C',  note:'', src:'Stabilis' },

  // ════ FUROSEMIDA (vía alkalina — incompatible con la mayoría) ════
  'furosemida+labetalol':       { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },
  'furosemida+ketamina':        { status:'I',  note:'Incompatible — no administrar en Y', src:'Stabilis' },
  'furosemida+nitroglicerina':  { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },
  'furosemida+propofol':        { status:'I',  note:'Incompatible — no administrar en Y', src:'Trissel\'s' },

  // ════ PANTOPRAZOL / OMEPRAZOL (muy alcalinos) ════
  'pantoprazol+pip_tazo':       { status:'I',  note:'Precipitación — pH incompatible', src:'Stabilis' },
  'pantoprazol+vancomicina':    { status:'I',  note:'Precipitación — pH incompatible', src:'Stabilis' },
  'pantoprazol+meropenem':      { status:'C',  note:'', src:'Stabilis' },

  // ════ VASOPRESINA ════
  'heparina+vasopresina':       { status:'C',  note:'', src:'Stabilis' },
  'insulina+vasopresina':       { status:'C',  note:'', src:'Stabilis' },
  'nitroglicerina+vasopresina': { status:'C',  note:'', src:'Stabilis' },

  // ════ N-ACETILCISTEÍNA ════
  'bicarbonato+nacetilcisteina':{ status:'I',  note:'Incompatible — no administrar en Y', src:'Stabilis' },

  // ════ LABETALOL ════
  'heparina+labetalol':         { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'labetalol+nitroglicerina':   { status:'C',  note:'', src:'Trissel\'s' },
  'labetalol+nitroprusiato':    { status:'C',  note:'', src:'Trissel\'s' },
  'labetalol+potasio':          { status:'C',  note:'', src:'Trissel\'s' },

  // ════ NITROGLICERINA / NITROPRUSIATO ════
  'heparina+nitroglicerina':    { status:'IC', note:'Puede reducir efecto anticoagulante — monitorizar APTT', src:'Stabilis' },
  'insulina+nitroglicerina':    { status:'C',  note:'', src:'Trissel\'s' },
  'nitroglicerina+nitroprusiato':{ status:'C', note:'', src:'Trissel\'s' },
  'nitroglicerina+potasio':     { status:'C',  note:'', src:'Trissel\'s' },
  'heparina+nitroprusiato':     { status:'C',  note:'', src:'Trissel\'s' },
  'insulina+nitroprusiato':     { status:'C',  note:'', src:'Stabilis' },
  'nitroprusiato+potasio':      { status:'C',  note:'', src:'Trissel\'s' },

  // ════ HIDROCORTISONA ════
  'hidrocortisona+insulina':    { status:'C',  note:'', src:'Stabilis' },
  'heparina+hidrocortisona':    { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'hidrocortisona+potasio':     { status:'C',  note:'', src:'Stabilis' },
  'hidrocortisona+vancomicina': { status:'IC', note:'Verificar', src:'Stabilis' },
  'hidrocortisona+pip_tazo':    { status:'C',  note:'', src:'Stabilis' },
  'hidrocortisona+meropenem':   { status:'C',  note:'', src:'Stabilis' },

  // ════ SOMATOSTATINA ════
  'heparina+somatostatina':     { status:'C',  note:'', src:'Stabilis' },
  'insulina+somatostatina':     { status:'C',  note:'', src:'Stabilis' },

  // ════ DILTIAZEM / VERAPAMILO ════
  'diltiazem+fentanilo':        { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+heparina':         { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+insulina':         { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+midazolam':        { status:'C',  note:'', src:'Stabilis' },
  'diltiazem+morfina':          { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+nitroglicerina':   { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+nitroprusiato':    { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+potasio':          { status:'C',  note:'', src:'Trissel\'s' },
  'diltiazem+propofol':         { status:'C',  note:'', src:'Stabilis' },
  'diltiazem+vecuronio':        { status:'C',  note:'', src:'Stabilis' },

  // ════ REMIFENTANILO ════
  'heparina+remifentanilo':     { status:'IC', note:'Verificar concentraciones', src:'Stabilis' },
  'midazolam+remifentanilo':    { status:'C',  note:'', src:'Stabilis' },
  'propofol+remifentanilo':     { status:'C',  note:'', src:'Stabilis' },
  'remifentanilo+vecuronio':    { status:'IC', note:'Compatible en condiciones estándar', src:'Stabilis' },

  // ════ METADONA ════
  'fentanilo+metadona':         { status:'C',  note:'', src:'Stabilis' },
  'heparina+metadona':          { status:'IC', note:'Verificar', src:'Stabilis' },
  'metadona+midazolam':         { status:'C',  note:'', src:'Stabilis' },

  // ════ FLUMAZENILO / NALOXONA ════
  'flumazenilo+heparina':       { status:'IC', note:'Verificar', src:'Stabilis' },
  'heparina+naloxona':          { status:'C',  note:'', src:'Stabilis' },
  'midazolam+naloxona':         { status:'C',  note:'', src:'Stabilis' },
};

// ─── HELPER: obtener compatibilidad entre dos fármacos ─────────────
export function getCompat(id1, id2) {
  if (id1 === id2) return { status: 'same', note: '' };
  const key = [id1, id2].sort().join('+');
  return COMPAT_PAIRS[key] || { status: '?', note: 'Sin datos disponibles', src: '' };
}

// ─── HELPER: obtener todas las combinaciones de un array de ids ─────
export function getAllPairs(ids) {
  const pairs = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push({ a: ids[i], b: ids[j], ...getCompat(ids[i], ids[j]) });
    }
  }
  return pairs;
}
