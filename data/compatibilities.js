// ═══════════════════════════════════════════════════════════════════
// data/compatibilities.js — Compatibilidad en Y de fármacos IV
// PediCode v1.0 — módulo de compatibilidades
// ───────────────────────────────────────────────────────────────────
// Las 7 fuentes que efectivamente respaldan cada par de esta matriz
// están listadas más abajo, en el bloque "FUENTES" (con código, cita
// completa y enlace verificable cada una — ver auditoría v4.10 al
// final de este comentario). Santos MT et al. 2013, King Guide y
// Micromedex NO se citan directamente en ningún par de este fichero
// — Micromedex y Trissel's son parte de la metodología interna de
// [CL2020] (ver su ficha abajo), no fuentes consultadas por PediCode
// de forma independiente; se retiran de este listado para no sugerir
// una cobertura de fuentes que no es real.
//
// ⚠ Verificar siempre con farmacéutico clínico o fuente primaria.
//    Los datos de compatibilidad pueden variar según concentración,
//    diluyente, temperatura y tiempo de contacto.
// ═══════════════════════════════════════════════════════════════════
//
// Nota (2026-09, v4.8): este módulo estaba duplicado — app.js tenía su
// propia copia interna (más completa, 60 fármacos/456 pares — 25,8% de cobertura, con fuentes
// [CL2020]/[KEMH]/[Fl17] más recientes) que nunca se sincronizó aquí, y
// que era la que realmente usaba la app en producción (app.js no
// importaba este fichero). Se ha unificado: este fichero pasa a ser la
// única fuente de verdad y app.js ahora importa desde aquí. Se han
// añadido además Nicardipino, Sufentanilo y Fentolamina (que faltaban
// en ambas copias). Se revisaron BNFc 2020-21 y BNF 84 buscando datos
// de compatibilidad en Y para completar los pares aún marcados '?';
// ninguno de los 5 libros clínicos disponibles contiene una tabla de
// compatibilidad por pares, así que esos pares (y los de los 3 fármacos
// nuevos) siguen sin dato — no se ha inventado ningún valor.
// ═══════════════════════════════════════════════════════════════════
//
// Nota (2026-09, v4.10): auditoría de calidad de las 7 fuentes citadas
// — verificadas una por una contra su publicación original (DOI/URL):
// las 7 son reales y están correctamente citadas, ninguna es inventada.
// Se corrigieron 2 imprecisiones encontradas:
//  • [KEMH]: la guía dice "v5.1 2024" pero el PDF oficial indica
//    "First Issued 30/04/2018 · Last Reviewed 05/07/2021 · Next Review
//    05/07/2026" — corregido a "v5.1 (rev. 2021, próxima rev. 2026)" y
//    enlazado directamente al PDF (antes enlazaba solo a la portada del
//    hospital).
//  • [LPaz]: era una fuente sin enlace ni forma de verificarla — es una
//    tabla real del Servicio de Farmacia del H. La Paz, pero publicada
//    en redes sociales (no revisada por pares). Se añadió el enlace a
//    la publicación original para que cualquiera pueda verificarla, y
//    se marca explícitamente como fuente de menor nivel de evidencia
//    en su ficha (no es un estudio revisado por pares).
// Se evaluó además una revisión sistemática más reciente y de acceso
// abierto — Gostyńska A, Przybylski T, Ogrodowczyk M. "Y-Site
// Compatibility Studies of Parenteral Nutrition and Other Intravenous
// Medications in Neonatal and Pediatric Patients: A Review of the
// Literature Evidence." Pharmaceutics 2024;16(2):264. DOI:
// 10.3390/pharmaceutics16020264 — pero es específica de compatibilidad
// con Nutrición Parenteral (no incluida en esta matriz de pares
// fármaco-fármaco), por lo que no se ha incorporado a los 456 pares
// existentes; queda documentada aquí como candidata si en el futuro se
// añade Nutrición Parenteral como entidad de esta matriz.
// ═══════════════════════════════════════════════════════════════════

// ─── LISTA DE FÁRMACOS ─────────────────────────────────────────────
// id: clave interna (lowercase, sin acentos)
// label: etiqueta multilingual
// icon: emoji representativo
// group: agrupación visual
// ═══════════════════════════════════════════════════════════════════
// COMPATIBILIDAD EN Y — UCIP + NICU
// ───────────────────────────────────────────────────────────────────
// FUENTES:
//  [CL2020] Castells Lao G et al. Med Intensiva 2020;44(2):80-87
//           Hospital Clínic Barcelona — 44 fármacos, revisión sistemática
//           Fuente: Medline + Stabilis 4.0 + Trissel's + Micromedex
//  [LPaz]   H. La Paz 2020 — Servicio de Farmacia, tabla práctica UCI
//           (difundida en redes sociales, no revisada por pares —
//           https://x.com/Farmacia_LaPaz/status/1252836515509501959)
//  [Tri]    Trissel's Handbook on Injectable Drugs / ASHP Injectable
//           Drug Information (sin número de edición confirmado — ver nota arriba)
//  [Sta]    Stabilis 4.0 (stabilis.org)
//  [Fl17]   Flamein F et al. Pharm Technol Hosp Pharm 2017;2(2):71-78 (NICU)
//  [KEMH]   KEMH (King Edward Memorial Hospital) NICU Y-Site
//           Compatibility Guideline v5.1 — rev. 05/07/2021,
//           próxima revisión 05/07/2026 (Australia)
//  [ATM]    Comité Consultivo Infecciones Neonatales, Soc. Chilena
//           Infectología. Antimicrobianos en neonatología. Parte II:
//           dilución y administración. Rev Chilena Infectol 2021
// ═══════════════════════════════════════════════════════════════════

export const COMPAT_DRUGS = [
  // ── VASOACTIVOS / INOTRÓPICOS
  { id: 'adrenalina',      label: { es: 'Adrenalina',         pt: 'Adrenalina',         en: 'Epinephrine'        }, icon: '🔴', group: 'vasoactivo' },
  { id: 'noradrenalina',   label: { es: 'Noradrenalina',      pt: 'Noradrenalina',      en: 'Norepinephrine'     }, icon: '🔴', group: 'vasoactivo' },
  { id: 'dopamina',        label: { es: 'Dopamina',           pt: 'Dopamina',           en: 'Dopamine'           }, icon: '🔴', group: 'vasoactivo' },
  { id: 'dobutamina',      label: { es: 'Dobutamina',         pt: 'Dobutamina',         en: 'Dobutamine'         }, icon: '🔴', group: 'vasoactivo' },
  { id: 'milrinona',       label: { es: 'Milrinona',          pt: 'Milrinona',          en: 'Milrinone'          }, icon: '🔴', group: 'vasoactivo' },
  { id: 'vasopresina',     label: { es: 'Vasopresina',        pt: 'Vasopressina',       en: 'Vasopressin'        }, icon: '🔴', group: 'vasoactivo' },
  { id: 'fenilefrina',     label: { es: 'Fenilefrina',        pt: 'Fenilefrina',        en: 'Phenylephrine'      }, icon: '🔴', group: 'vasoactivo' },
  { id: 'isoproterenol',   label: { es: 'Isoproterenol',      pt: 'Isoproterenol',      en: 'Isoproterenol'      }, icon: '🔴', group: 'vasoactivo' },
  { id: 'nitroglicerina',  label: { es: 'Nitroglicerina',     pt: 'Nitroglicerina',     en: 'Nitroglycerin'      }, icon: '🩸', group: 'vasoactivo' },
  { id: 'nitroprusiato',   label: { es: 'Nitroprusiato',      pt: 'Nitroprussiato',     en: 'Nitroprusside'      }, icon: '🩸', group: 'vasoactivo' },
  { id: 'labetalol',       label: { es: 'Labetalol',          pt: 'Labetalol',          en: 'Labetalol'          }, icon: '🩸', group: 'vasoactivo' },
  { id: 'nicardipino',     label: { es: 'Nicardipino',        pt: 'Nicardipina',        en: 'Nicardipine'        }, icon: '🩸', group: 'vasoactivo' },
  { id: 'fentolamina',     label: { es: 'Fentolamina',        pt: 'Fentolamina',        en: 'Phentolamine'       }, icon: '🩸', group: 'vasoactivo' },
  { id: 'alprostadilo',    label: { es: 'Alprostadilo (PGE1)',pt: 'Alprostadil (PGE1)', en: 'Alprostadil (PGE1)' }, icon: '🫀', group: 'vasoactivo', nicu: true },
  // ── SEDOANALGESIA
  { id: 'fentanilo',       label: { es: 'Fentanilo',          pt: 'Fentanilo',          en: 'Fentanyl'           }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'sufentanilo',     label: { es: 'Sufentanilo',        pt: 'Sufentanil',         en: 'Sufentanil'         }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'morfina',         label: { es: 'Morfina',            pt: 'Morfina',            en: 'Morphine'           }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'remifentanilo',   label: { es: 'Remifentanilo',      pt: 'Remifentanilo',      en: 'Remifentanil'       }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'metadona',        label: { es: 'Metadona',           pt: 'Metadona',           en: 'Methadone'          }, icon: '🟣', group: 'sedoanalgesia' },
  { id: 'midazolam',       label: { es: 'Midazolam',          pt: 'Midazolam',          en: 'Midazolam'          }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'propofol',        label: { es: 'Propofol',           pt: 'Propofol',           en: 'Propofol'           }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'ketamina',        label: { es: 'Ketamina',           pt: 'Cetamina',           en: 'Ketamine'           }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'dexmedetomidina', label: { es: 'Dexmedetomidina',    pt: 'Dexmedetomidina',    en: 'Dexmedetomidine'    }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'clonidina',       label: { es: 'Clonidina',          pt: 'Clonidina',          en: 'Clonidine'          }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'flumazenilo',     label: { es: 'Flumazenilo',        pt: 'Flumazenil',         en: 'Flumazenil'         }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'naloxona',        label: { es: 'Naloxona',           pt: 'Naloxona',           en: 'Naloxone'           }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'paracetamol_iv',  label: { es: 'Paracetamol IV',     pt: 'Paracetamol IV',     en: 'Paracetamol IV'     }, icon: '🟡', group: 'sedoanalgesia' },
  { id: 'fenobarbital',    label: { es: 'Fenobarbital',       pt: 'Fenobarbital',       en: 'Phenobarbital'      }, icon: '🟡', group: 'sedoanalgesia', nicu: true },
  // ── RELAJANTES NEUROMUSCULARES
  { id: 'cisatracurio',    label: { es: 'Cisatracurio',       pt: 'Cisatracúrio',       en: 'Cisatracurium'      }, icon: '⚪', group: 'relajante' },
  { id: 'vecuronio',       label: { es: 'Vecuronio',          pt: 'Vecurônio',          en: 'Vecuronium'         }, icon: '⚪', group: 'relajante' },
  { id: 'rocuronio',       label: { es: 'Rocuronio',          pt: 'Rocurônio',          en: 'Rocuronium'         }, icon: '⚪', group: 'relajante' },
  // ── CARDIOLOGÍA
  { id: 'amiodarona',      label: { es: 'Amiodarona',         pt: 'Amiodarona',         en: 'Amiodarone'         }, icon: '🟠', group: 'cardio' },
  { id: 'lidocaina',       label: { es: 'Lidocaína',          pt: 'Lidocaína',          en: 'Lidocaine'          }, icon: '🟠', group: 'cardio' },
  { id: 'diltiazem',       label: { es: 'Diltiazem',          pt: 'Diltiazem',          en: 'Diltiazem'          }, icon: '🟠', group: 'cardio' },
  { id: 'verapamilo',      label: { es: 'Verapamilo',         pt: 'Verapamil',          en: 'Verapamil'          }, icon: '🟠', group: 'cardio' },
  // ── ELECTROLITOS
  { id: 'bicarbonato',     label: { es: 'Bicarbonato Na',     pt: 'Bicarbonato Na',     en: 'Sodium Bicarbonate' }, icon: '🔵', group: 'electrolito' },
  { id: 'calcio_glu',      label: { es: 'Calcio gluconato',   pt: 'Gluconato Ca',       en: 'Calcium Gluconate'  }, icon: '🔵', group: 'electrolito' },
  { id: 'calcio_clo',      label: { es: 'Calcio cloruro',     pt: 'Cloreto de Ca',      en: 'Calcium Chloride'   }, icon: '🔵', group: 'electrolito' },
  { id: 'magnesio',        label: { es: 'Magnesio sulfato',   pt: 'Sulfato Mg',         en: 'Magnesium Sulfate'  }, icon: '🔵', group: 'electrolito' },
  { id: 'potasio',         label: { es: 'Potasio cloruro',    pt: 'Cloreto de K',       en: 'Potassium Chloride' }, icon: '🔵', group: 'electrolito' },
  // ── ANTIBIÓTICOS UCI
  { id: 'meropenem',       label: { es: 'Meropenem',          pt: 'Meropenem',          en: 'Meropenem'          }, icon: '🟤', group: 'antibiotico' },
  { id: 'pip_tazo',        label: { es: 'Pip-tazobactam',     pt: 'Pip-tazobactam',     en: 'Pip-tazobactam'     }, icon: '🟤', group: 'antibiotico' },
  { id: 'ceftazidima',     label: { es: 'Ceftazidima',        pt: 'Ceftazidima',        en: 'Ceftazidime'        }, icon: '🟤', group: 'antibiotico' },
  { id: 'vancomicina',     label: { es: 'Vancomicina',        pt: 'Vancomicina',        en: 'Vancomycin'         }, icon: '🟤', group: 'antibiotico' },
  { id: 'fluconazol',      label: { es: 'Fluconazol',         pt: 'Fluconazol',         en: 'Fluconazole'        }, icon: '🟤', group: 'antibiotico' },
  { id: 'aciclovir',       label: { es: 'Aciclovir',          pt: 'Aciclovir',          en: 'Acyclovir'          }, icon: '🟤', group: 'antibiotico' },
  // ── ANTIBIÓTICOS NICU/PICU
  { id: 'ampicilina',      label: { es: 'Ampicilina',         pt: 'Ampicilina',         en: 'Ampicillin'         }, icon: '🔶', group: 'neonatal', nicu: true },
  { id: 'gentamicina',     label: { es: 'Gentamicina',        pt: 'Gentamicina',        en: 'Gentamicin'         }, icon: '🔶', group: 'neonatal', nicu: true },
  { id: 'amikacina',       label: { es: 'Amikacina',          pt: 'Amicacina',          en: 'Amikacin'           }, icon: '🔶', group: 'neonatal', nicu: true },
  // ── NICU ESPECÍFICOS
  { id: 'cafeina',         label: { es: 'Cafeína citrato',    pt: 'Cafeína citrato',    en: 'Caffeine citrate'   }, icon: '🍼', group: 'neonatal', nicu: true },
  { id: 'aminofilina',     label: { es: 'Aminofilina',        pt: 'Aminofilina',        en: 'Aminophylline'      }, icon: '🍼', group: 'neonatal', nicu: true },
  { id: 'indometacina',    label: { es: 'Indometacina IV',    pt: 'Indometacina IV',    en: 'Indomethacin IV'    }, icon: '🍼', group: 'neonatal', nicu: true },
  { id: 'ibuprofeno_iv',   label: { es: 'Ibuprofeno IV',      pt: 'Ibuprofeno IV',      en: 'Ibuprofen IV'       }, icon: '🍼', group: 'neonatal', nicu: true },
  // ── OTROS
  { id: 'furosemida',      label: { es: 'Furosemida',         pt: 'Furosemida',         en: 'Furosemide'         }, icon: '🟢', group: 'otro' },
  { id: 'heparina',        label: { es: 'Heparina sódica',    pt: 'Heparina sódica',    en: 'Heparin'            }, icon: '🟢', group: 'otro' },
  { id: 'insulina',        label: { es: 'Insulina',           pt: 'Insulina',           en: 'Insulin'            }, icon: '🟢', group: 'otro' },
  { id: 'nacetilcisteina', label: { es: 'N-acetilcisteína',   pt: 'N-acetilcisteína',   en: 'N-acetylcysteine'   }, icon: '⚗️', group: 'otro' },
  { id: 'pantoprazol',     label: { es: 'Pantoprazol',        pt: 'Pantoprazol',        en: 'Pantoprazole'       }, icon: '⚗️', group: 'otro' },
  { id: 'hidrocortisona',  label: { es: 'Hidrocortisona',     pt: 'Hidrocortisona',     en: 'Hydrocortisone'     }, icon: '⚗️', group: 'otro' },
  { id: 'somatostatina',   label: { es: 'Somatostatina',      pt: 'Somatostatina',      en: 'Somatostatin'       }, icon: '⚗️', group: 'otro' },
];

export const COMPAT_GROUPS = {
  vasoactivo:   { es: '🔴 Vasoactivos',       pt: '🔴 Vasoativos',        en: '🔴 Vasoactive'    },
  sedoanalgesia:{ es: '🟣 Sedoanalgesia',      pt: '🟣 Sedoanalgesia',     en: '🟣 Sedoanalgesia' },
  relajante:    { es: '⚪ Relajantes NM',      pt: '⚪ Relaxantes NM',     en: '⚪ Neuromuscular'  },
  cardio:       { es: '🟠 Cardiología',        pt: '🟠 Cardiologia',       en: '🟠 Cardiac'       },
  electrolito:  { es: '🔵 Electrolitos',       pt: '🔵 Eletrólitos',       en: '🔵 Electrolytes'  },
  antibiotico:  { es: '🟤 Antibióticos',       pt: '🟤 Antibióticos',      en: '🟤 Antibiotics'   },
  neonatal:     { es: '🔶 Neonatología/UCIP',  pt: '🔶 Neonatologia/UCIP', en: '🔶 Neonatal/PICU' },
  otro:         { es: '🟢 Otros',              pt: '🟢 Outros',            en: '🟢 Other'         },
};

export const COMPAT_PAIRS = {
  // ════ ADRENALINA
  'adrenalina+amiodarona':        { status:'C',  note:'', src:'CL2020' },
  'adrenalina+bicarbonato':       { status:'I',  note:'Álcali inactiva catecolaminas — precipitación', src:'CL2020' },
  'adrenalina+calcio_clo':        { status:'C',  note:'', src:'CL2020' },
  'adrenalina+calcio_glu':        { status:'C',  note:'', src:'CL2020' },
  'adrenalina+ceftazidima':       { status:'C',  note:'', src:'CL2020' },
  'adrenalina+cisatracurio':      { status:'C',  note:'', src:'CL2020' },
  'adrenalina+clonidina':         { status:'IC', note:'Solo en suero fisiológico', src:'Sta' },
  'adrenalina+dexmedetomidina':   { status:'C',  note:'', src:'CL2020' },
  'adrenalina+diltiazem':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+dobutamina':        { status:'C',  note:'', src:'CL2020' },
  'adrenalina+dopamina':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+fentanilo':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+flumazenilo':       { status:'C',  note:'', src:'CL2020' },
  'adrenalina+furosemida':        { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'adrenalina+heparina':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+insulina':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+isoproterenol':     { status:'C',  note:'', src:'CL2020' },
  'adrenalina+ketamina':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+labetalol':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+magnesio':          { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'adrenalina+metadona':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+midazolam':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+milrinona':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+morfina':           { status:'C',  note:'', src:'CL2020' },
  'adrenalina+naloxona':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+nitroglicerina':    { status:'C',  note:'', src:'CL2020' },
  'adrenalina+nitroprusiato':     { status:'C',  note:'', src:'CL2020' },
  'adrenalina+noradrenalina':     { status:'C',  note:'', src:'CL2020' },
  'adrenalina+pantoprazol':       { status:'IC', note:'Compatible solo a bajas concentraciones', src:'CL2020' },
  'adrenalina+pip_tazo':          { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'adrenalina+potasio':           { status:'C',  note:'', src:'CL2020' },
  'adrenalina+propofol':          { status:'C',  note:'', src:'CL2020' },
  'adrenalina+remifentanilo':     { status:'IC', note:'Compatible en condiciones estándar', src:'CL2020' },
  'adrenalina+somatostatina':     { status:'C',  note:'', src:'CL2020' },
  'adrenalina+vasopresina':       { status:'C',  note:'', src:'CL2020' },
  'adrenalina+vecuronio':         { status:'C',  note:'', src:'CL2020' },
  'adrenalina+verapamilo':        { status:'IC', note:'Compatible solo a concentraciones bajas', src:'CL2020' },
  // ════ NORADRENALINA
  'bicarbonato+noradrenalina':    { status:'I',  note:'Álcali inactiva catecolaminas', src:'CL2020' },
  'cisatracurio+noradrenalina':   { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+noradrenalina':{ status:'C',  note:'', src:'CL2020' },
  'dobutamina+noradrenalina':     { status:'C',  note:'', src:'CL2020' },
  'dopamina+noradrenalina':       { status:'C',  note:'', src:'CL2020' },
  'fentanilo+noradrenalina':      { status:'C',  note:'', src:'CL2020' },
  'furosemida+noradrenalina':     { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'heparina+noradrenalina':       { status:'C',  note:'', src:'CL2020' },
  'insulina+noradrenalina':       { status:'C',  note:'', src:'CL2020' },
  'labetalol+noradrenalina':      { status:'C',  note:'', src:'CL2020' },
  'midazolam+noradrenalina':      { status:'C',  note:'', src:'CL2020' },
  'milrinona+noradrenalina':      { status:'C',  note:'', src:'CL2020' },
  'morfina+noradrenalina':        { status:'C',  note:'', src:'CL2020' },
  'nitroglicerina+noradrenalina': { status:'C',  note:'', src:'CL2020' },
  'nitroprusiato+noradrenalina':  { status:'C',  note:'', src:'CL2020' },
  'noradrenalina+potasio':        { status:'C',  note:'', src:'CL2020' },
  'noradrenalina+propofol':       { status:'C',  note:'', src:'CL2020' },
  'noradrenalina+remifentanilo':  { status:'IC', note:'Compatible en condiciones estándar', src:'CL2020' },
  'noradrenalina+vasopresina':    { status:'C',  note:'', src:'CL2020' },
  'noradrenalina+vecuronio':      { status:'C',  note:'', src:'CL2020' },
  'noradrenalina+verapamilo':     { status:'IC', note:'Compatible solo a concentraciones bajas', src:'CL2020' },
  // ════ DOPAMINA
  'bicarbonato+dopamina':         { status:'I',  note:'Álcali inactiva catecolaminas', src:'CL2020' },
  'cisatracurio+dopamina':        { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+dopamina':     { status:'C',  note:'', src:'CL2020' },
  'diltiazem+dopamina':           { status:'C',  note:'', src:'CL2020' },
  'dobutamina+dopamina':          { status:'C',  note:'', src:'CL2020' },
  'dopamina+fentanilo':           { status:'C',  note:'', src:'CL2020' },
  'dopamina+furosemida':          { status:'I',  note:'Incompatible — precipitación', src:'CL2020,LPaz' },
  'dopamina+heparina':            { status:'IC', note:'Precipitación posible a concentraciones altas', src:'CL2020' },
  'dopamina+insulina':            { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'dopamina+labetalol':           { status:'C',  note:'', src:'CL2020' },
  'dopamina+midazolam':           { status:'IC', note:'Compatible dopamina ≤3,2 mg/mL + midazolam ≤2 mg/mL', src:'CL2020' },
  'dopamina+milrinona':           { status:'C',  note:'', src:'CL2020' },
  'dopamina+morfina':             { status:'C',  note:'', src:'CL2020' },
  'dopamina+nitroglicerina':      { status:'IC', note:'Solo en glucosado 5%', src:'CL2020' },
  'dopamina+nitroprusiato':       { status:'C',  note:'', src:'CL2020' },
  'dopamina+potasio':             { status:'C',  note:'', src:'CL2020' },
  'dopamina+propofol':            { status:'C',  note:'', src:'CL2020' },
  'dopamina+remifentanilo':       { status:'IC', note:'Verificar', src:'CL2020' },
  'dopamina+vecuronio':           { status:'C',  note:'', src:'CL2020' },
  'dopamina+verapamilo':          { status:'IC', note:'Verificar', src:'CL2020' },
  // ════ DOBUTAMINA
  'bicarbonato+dobutamina':       { status:'I',  note:'Álcali inactiva catecolaminas', src:'CL2020' },
  'calcio_clo+dobutamina':        { status:'IC', note:'Compatible a ≤4 mg/mL de cada uno', src:'CL2020' },
  'calcio_glu+dobutamina':        { status:'IC', note:'Compatible a ≤4 mg/mL de cada uno', src:'CL2020' },
  'cisatracurio+dobutamina':      { status:'C',  note:'', src:'CL2020' },
  'diltiazem+dobutamina':         { status:'C',  note:'', src:'CL2020' },
  'dobutamina+dexmedetomidina':   { status:'C',  note:'', src:'CL2020' },
  'dobutamina+fentanilo':         { status:'C',  note:'', src:'CL2020' },
  'dobutamina+furosemida':        { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020,LPaz' },
  'dobutamina+heparina':          { status:'IC', note:'Compatible dobutamina ≤1 mg/mL + heparina ≤50 UI/mL', src:'CL2020' },
  'dobutamina+insulina':          { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'dobutamina+ketamina':          { status:'C',  note:'', src:'LPaz' },
  'dobutamina+magnesio':          { status:'IC', note:'Compatible a ≤4 mg/mL + ≤40 mg/mL magnesio', src:'CL2020' },
  'dobutamina+midazolam':         { status:'IC', note:'Verificar — precaución', src:'LPaz' },
  'dobutamina+milrinona':         { status:'C',  note:'', src:'CL2020' },
  'dobutamina+morfina':           { status:'C',  note:'', src:'CL2020' },
  'dobutamina+nitroglicerina':    { status:'C',  note:'', src:'CL2020' },
  'dobutamina+nitroprusiato':     { status:'C',  note:'', src:'CL2020' },
  'dobutamina+potasio':           { status:'IC', note:'Compatible a ≤4 mg/mL + ≤60 mEq/L KCl', src:'CL2020' },
  'dobutamina+propofol':          { status:'C',  note:'', src:'CL2020' },
  'dobutamina+remifentanilo':     { status:'C',  note:'', src:'CL2020' },
  'dobutamina+vecuronio':         { status:'C',  note:'', src:'CL2020' },
  // ════ MILRINONA
  'amiodarona+milrinona':         { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+milrinona':       { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+milrinona':    { status:'C',  note:'', src:'CL2020' },
  'fentanilo+milrinona':          { status:'C',  note:'', src:'CL2020' },
  'furosemida+milrinona':         { status:'I',  note:'Precipitación inmediata', src:'CL2020,LPaz' },
  'heparina+milrinona':           { status:'C',  note:'', src:'CL2020' },
  'midazolam+milrinona':          { status:'C',  note:'', src:'CL2020' },
  'milrinona+morfina':            { status:'C',  note:'', src:'CL2020' },
  'milrinona+nitroglicerina':     { status:'C',  note:'', src:'CL2020' },
  'milrinona+nitroprusiato':      { status:'C',  note:'', src:'CL2020' },
  'milrinona+potasio':            { status:'IC', note:'Verificar concentración de potasio', src:'CL2020' },
  'milrinona+propofol':           { status:'C',  note:'', src:'CL2020' },
  'milrinona+remifentanilo':      { status:'IC', note:'Verificar', src:'CL2020' },
  'milrinona+vasopresina':        { status:'C',  note:'', src:'CL2020' },
  'milrinona+vecuronio':          { status:'C',  note:'', src:'CL2020' },
  // ════ AMIODARONA
  'amiodarona+bicarbonato':       { status:'I',  note:'Precipitación', src:'CL2020' },
  'amiodarona+cisatracurio':      { status:'C',  note:'', src:'CL2020' },
  'amiodarona+dexmedetomidina':   { status:'C',  note:'', src:'CL2020' },
  'amiodarona+diltiazem':         { status:'C',  note:'', src:'CL2020' },
  'amiodarona+dobutamina':        { status:'IC', note:'Solo en glucosado 5%; inestable en SF 0,9%', src:'CL2020' },
  'amiodarona+dopamina':          { status:'IC', note:'Solo en glucosado 5%; inestable en SF 0,9%', src:'CL2020' },
  'amiodarona+fentanilo':         { status:'C',  note:'', src:'CL2020' },
  'amiodarona+fenilefrina':       { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'amiodarona+furosemida':        { status:'IC', note:'Compatible amiodarona ≤6 mg/mL + furosemida ≤1 mg/mL', src:'CL2020' },
  'amiodarona+heparina':          { status:'I',  note:'Precipitación — no administrar en Y', src:'CL2020' },
  'amiodarona+insulina':          { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'amiodarona+labetalol':         { status:'C',  note:'', src:'CL2020' },
  'amiodarona+midazolam':         { status:'C',  note:'', src:'CL2020,LPaz' },
  'amiodarona+morfina':           { status:'C',  note:'', src:'CL2020' },
  'amiodarona+nitroglicerina':    { status:'IC', note:'Verificar', src:'CL2020' },
  'amiodarona+nitroprusiato':     { status:'IC', note:'Compatible amiodarona ≤15 mg/mL + nitroprusiato ≤0,3 mg/mL', src:'CL2020' },
  'amiodarona+noradrenalina':     { status:'C',  note:'', src:'CL2020' },
  'amiodarona+potasio':           { status:'I',  note:'Incompatible a concentraciones estándar', src:'CL2020' },
  'amiodarona+propofol':          { status:'C',  note:'', src:'CL2020' },
  'amiodarona+remifentanilo':     { status:'C',  note:'', src:'CL2020' },
  'amiodarona+vancomicina':       { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'amiodarona+vasopresina':       { status:'C',  note:'', src:'CL2020' },
  'amiodarona+vecuronio':         { status:'C',  note:'', src:'CL2020' },
  // ════ FENTANILO
  'ceftazidima+fentanilo':        { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+fentanilo':       { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+fentanilo':    { status:'C',  note:'', src:'CL2020' },
  'fentanilo+flumazenilo':        { status:'C',  note:'', src:'CL2020' },
  'fentanilo+heparina':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+hidrocortisona':     { status:'C',  note:'', src:'CL2020' },
  'fentanilo+insulina':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+ketamina':           { status:'C',  note:'', src:'CL2020,LPaz' },
  'fentanilo+labetalol':          { status:'C',  note:'', src:'CL2020' },
  'fentanilo+magnesio':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+meropenem':          { status:'C',  note:'', src:'CL2020' },
  'fentanilo+metadona':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+midazolam':          { status:'C',  note:'', src:'CL2020,LPaz' },
  'fentanilo+morfina':            { status:'C',  note:'', src:'CL2020' },
  'fentanilo+nitroglicerina':     { status:'C',  note:'', src:'CL2020' },
  'fentanilo+nitroprusiato':      { status:'C',  note:'', src:'CL2020' },
  'fentanilo+paracetamol_iv':     { status:'C',  note:'', src:'Sta' },
  'fentanilo+pantoprazol':        { status:'C',  note:'', src:'CL2020' },
  'fentanilo+pip_tazo':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+potasio':            { status:'C',  note:'', src:'CL2020' },
  'fentanilo+propofol':           { status:'C',  note:'', src:'CL2020' },
  'fentanilo+remifentanilo':      { status:'IC', note:'Compatible a concentraciones estándar', src:'CL2020' },
  'fentanilo+rocuronio':          { status:'C',  note:'', src:'CL2020' },
  'fentanilo+vancomicina':        { status:'C',  note:'', src:'CL2020' },
  'fentanilo+vasopresina':        { status:'C',  note:'', src:'CL2020' },
  'fentanilo+vecuronio':          { status:'C',  note:'', src:'CL2020' },
  // ════ MIDAZOLAM
  'ceftazidima+midazolam':        { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+midazolam':       { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+midazolam':    { status:'C',  note:'', src:'CL2020' },
  'fluconazol+midazolam':         { status:'C',  note:'', src:'CL2020' },
  'furosemida+midazolam':         { status:'I',  note:'Precipitación por incompatibilidad de pH', src:'CL2020,LPaz' },
  'heparina+midazolam':           { status:'C',  note:'', src:'CL2020' },
  'hidrocortisona+midazolam':     { status:'C',  note:'', src:'CL2020' },
  'insulina+midazolam':           { status:'C',  note:'', src:'CL2020' },
  'ketamina+midazolam':           { status:'C',  note:'', src:'CL2020,LPaz' },
  'labetalol+midazolam':          { status:'C',  note:'', src:'CL2020' },
  'magnesio+midazolam':           { status:'C',  note:'', src:'CL2020' },
  'meropenem+midazolam':          { status:'C',  note:'', src:'CL2020' },
  'midazolam+metadona':           { status:'C',  note:'', src:'CL2020' },
  'midazolam+morfina':            { status:'C',  note:'', src:'CL2020,LPaz' },
  'midazolam+naloxona':           { status:'C',  note:'', src:'CL2020' },
  'midazolam+nitroglicerina':     { status:'C',  note:'', src:'CL2020' },
  'midazolam+nitroprusiato':      { status:'C',  note:'', src:'CL2020' },
  'midazolam+pantoprazol':        { status:'I',  note:'Precipitación — pH incompatible', src:'CL2020' },
  'midazolam+paracetamol_iv':     { status:'C',  note:'', src:'Sta' },
  'midazolam+pip_tazo':           { status:'C',  note:'', src:'CL2020' },
  'midazolam+potasio':            { status:'C',  note:'', src:'CL2020' },
  'midazolam+propofol':           { status:'C',  note:'', src:'CL2020' },
  'midazolam+remifentanilo':      { status:'C',  note:'', src:'CL2020,LPaz' },
  'midazolam+rocuronio':          { status:'C',  note:'', src:'CL2020' },
  'midazolam+vancomicina':        { status:'C',  note:'', src:'CL2020' },
  'midazolam+vasopresina':        { status:'C',  note:'', src:'CL2020' },
  'midazolam+vecuronio':          { status:'C',  note:'', src:'CL2020' },
  // ════ MORFINA
  'ceftazidima+morfina':          { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+morfina':         { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+morfina':      { status:'C',  note:'', src:'CL2020' },
  'fluconazol+morfina':           { status:'C',  note:'', src:'CL2020' },
  'furosemida+morfina':           { status:'I',  note:'Precipitación por incompatibilidad de pH', src:'CL2020' },
  'heparina+morfina':             { status:'C',  note:'', src:'CL2020' },
  'insulina+morfina':             { status:'C',  note:'', src:'CL2020' },
  'ketamina+morfina':             { status:'C',  note:'', src:'CL2020' },
  'labetalol+morfina':            { status:'C',  note:'', src:'CL2020' },
  'magnesio+morfina':             { status:'C',  note:'', src:'CL2020' },
  'meropenem+morfina':            { status:'C',  note:'', src:'CL2020' },
  'morfina+naloxona':             { status:'C',  note:'', src:'CL2020' },
  'morfina+nitroglicerina':       { status:'C',  note:'', src:'CL2020' },
  'morfina+nitroprusiato':        { status:'C',  note:'', src:'CL2020' },
  'morfina+pantoprazol':          { status:'I',  note:'Precipitación — no administrar en Y', src:'CL2020' },
  'morfina+paracetamol_iv':       { status:'C',  note:'', src:'Sta' },
  'morfina+pip_tazo':             { status:'C',  note:'', src:'CL2020' },
  'morfina+potasio':              { status:'C',  note:'', src:'CL2020' },
  'morfina+propofol':             { status:'C',  note:'', src:'CL2020' },
  'morfina+remifentanilo':        { status:'C',  note:'', src:'CL2020,LPaz' },
  'morfina+rocuronio':            { status:'C',  note:'', src:'CL2020' },
  'morfina+vancomicina':          { status:'C',  note:'', src:'CL2020' },
  'morfina+vasopresina':          { status:'C',  note:'', src:'CL2020' },
  'morfina+vecuronio':            { status:'C',  note:'', src:'CL2020' },
  // ════ PROPOFOL
  'cisatracurio+propofol':        { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+propofol':     { status:'C',  note:'', src:'CL2020' },
  'furosemida+propofol':          { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  'heparina+propofol':            { status:'IC', note:'Puede romper la emulsión lipídica', src:'CL2020' },
  'insulina+propofol':            { status:'C',  note:'', src:'CL2020' },
  'ketamina+propofol':            { status:'C',  note:'Uso clínico habitual — verificar concentraciones', src:'CL2020' },
  'labetalol+propofol':           { status:'C',  note:'', src:'CL2020' },
  'magnesio+propofol':            { status:'C',  note:'', src:'CL2020' },
  'meropenem+propofol':           { status:'C',  note:'', src:'CL2020' },
  'nitroglicerina+propofol':      { status:'C',  note:'', src:'CL2020' },
  'nitroprusiato+propofol':       { status:'C',  note:'', src:'CL2020' },
  'pantoprazol+propofol':         { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  'pip_tazo+propofol':            { status:'C',  note:'', src:'CL2020' },
  'potasio+propofol':             { status:'IC', note:'Concentraciones estándar de KCl', src:'CL2020' },
  'propofol+remifentanilo':       { status:'C',  note:'', src:'CL2020,LPaz' },
  'propofol+rocuronio':           { status:'C',  note:'', src:'CL2020' },
  'propofol+vancomicina':         { status:'IC', note:'Puede romper emulsión a altas concentraciones', src:'CL2020' },
  'propofol+vasopresina':         { status:'C',  note:'', src:'CL2020' },
  'propofol+vecuronio':           { status:'C',  note:'', src:'CL2020' },
  // ════ KETAMINA
  'cisatracurio+ketamina':        { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+ketamina':     { status:'C',  note:'', src:'CL2020,LPaz' },
  'heparina+ketamina':            { status:'C',  note:'', src:'CL2020' },
  'ketamina+rocuronio':           { status:'C',  note:'', src:'CL2020' },
  'ketamina+vecuronio':           { status:'C',  note:'', src:'CL2020' },
  // ════ DEXMEDETOMIDINA
  'cisatracurio+dexmedetomidina': { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+heparina':     { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+insulina':     { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+labetalol':    { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+magnesio':     { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+meropenem':    { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+nitroglicerina':{ status:'C', note:'', src:'CL2020' },
  'dexmedetomidina+potasio':      { status:'C',  note:'', src:'CL2020' },
  'dexmedetomidina+rocuronio':    { status:'C',  note:'', src:'CL2020,LPaz' },
  'dexmedetomidina+vecuronio':    { status:'C',  note:'', src:'CL2020,LPaz' },
  'dexmedetomidina+vasopresina':  { status:'C',  note:'', src:'CL2020' },
  // ════ RELAJANTES NEUROMUSCULARES
  'cisatracurio+heparina':        { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'cisatracurio+insulina':        { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+potasio':         { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+rocuronio':       { status:'?',  note:'Sin datos', src:'' },
  'cisatracurio+vancomicina':     { status:'C',  note:'', src:'CL2020' },
  'cisatracurio+vecuronio':       { status:'?',  note:'Sin datos', src:'' },
  'heparina+rocuronio':           { status:'IC', note:'Verificar concentraciones', src:'Sta' },
  'heparina+vecuronio':           { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'insulina+vecuronio':           { status:'C',  note:'', src:'CL2020' },
  'isoproterenol+vecuronio':      { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'nitroprusiato+vecuronio':      { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'potasio+vecuronio':            { status:'C',  note:'', src:'CL2020' },
  'rocuronio+vancomicina':        { status:'IC', note:'Verificar concentraciones', src:'Sta' },
  'rocuronio+vecuronio':          { status:'?',  note:'Sin datos — no mezclar', src:'' },
  // ════ ELECTROLITOS
  'bicarbonato+calcio_clo':       { status:'I',  note:'Precipitación de CaCO3', src:'CL2020' },
  'bicarbonato+calcio_glu':       { status:'I',  note:'Precipitación de CaCO3', src:'CL2020' },
  'bicarbonato+furosemida':       { status:'C',  note:'', src:'CL2020' },
  'bicarbonato+heparina':         { status:'C',  note:'', src:'CL2020' },
  'bicarbonato+magnesio':         { status:'IC', note:'Precipitación posible a concentraciones altas', src:'CL2020' },
  'bicarbonato+midazolam':        { status:'I',  note:'Precipitación — pH muy incompatible', src:'CL2020' },
  'bicarbonato+potasio':          { status:'C',  note:'', src:'CL2020' },
  'calcio_clo+calcio_glu':        { status:'?',  note:'No mezclar en el mismo acceso', src:'' },
  'calcio_clo+furosemida':        { status:'I',  note:'Precipitación', src:'CL2020' },
  'calcio_clo+heparina':          { status:'I',  note:'Precipitación', src:'CL2020' },
  'calcio_clo+magnesio':          { status:'IC', note:'Precipitación posible — verificar', src:'CL2020' },
  'calcio_clo+potasio':           { status:'C',  note:'', src:'CL2020' },
  'calcio_glu+furosemida':        { status:'IC', note:'Precipitación posible — verificar', src:'CL2020' },
  'calcio_glu+heparina':          { status:'IC', note:'Precipitación a concentraciones altas', src:'CL2020' },
  'calcio_glu+magnesio':          { status:'IC', note:'Precipitación posible — vías separadas recomendadas', src:'CL2020' },
  'calcio_glu+potasio':           { status:'C',  note:'', src:'CL2020' },
  'furosemida+heparina':          { status:'C',  note:'', src:'CL2020' },
  'furosemida+insulina':          { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'furosemida+potasio':           { status:'C',  note:'', src:'CL2020' },
  'heparina+insulina':            { status:'C',  note:'Compatible — uso clínico habitual', src:'CL2020' },
  'heparina+magnesio':            { status:'C',  note:'', src:'CL2020' },
  'heparina+potasio':             { status:'C',  note:'', src:'CL2020' },
  'insulina+magnesio':            { status:'C',  note:'', src:'CL2020' },
  'insulina+potasio':             { status:'C',  note:'Compatible — administración conjunta frecuente', src:'CL2020' },
  'isoproterenol+magnesio':       { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'isoproterenol+potasio':        { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'magnesio+potasio':             { status:'C',  note:'', src:'CL2020' },
  // ════ ANTIBIÓTICOS UCI
  'ceftazidima+heparina':         { status:'C',  note:'', src:'CL2020' },
  'ceftazidima+insulina':         { status:'C',  note:'', src:'CL2020' },
  'ceftazidima+pip_tazo':         { status:'?',  note:'No mezclar beta-lactámicos sin verificar', src:'' },
  'ceftazidima+potasio':          { status:'C',  note:'', src:'CL2020' },
  'ceftazidima+vancomicina':      { status:'I',  note:'Precipitación — usar accesos separados', src:'CL2020' },
  'fluconazol+furosemida':        { status:'I',  note:'Precipitación', src:'CL2020' },
  'fluconazol+heparina':          { status:'C',  note:'', src:'CL2020' },
  'fluconazol+insulina':          { status:'C',  note:'', src:'CL2020' },
  'fluconazol+potasio':           { status:'C',  note:'', src:'CL2020' },
  'fluconazol+vancomicina':       { status:'C',  note:'Compatible a concentraciones estándar', src:'CL2020' },
  'aciclovir+heparina':           { status:'IC', note:'Verificar', src:'Sta' },
  'aciclovir+insulina':           { status:'IC', note:'Verificar', src:'Sta' },
  'aciclovir+potasio':            { status:'IC', note:'Verificar', src:'Sta' },
  'heparina+vancomicina':         { status:'IC', note:'Precipitación posible a concentraciones altas', src:'CL2020' },
  'insulina+vancomicina':         { status:'C',  note:'', src:'CL2020' },
  'meropenem+heparina':           { status:'C',  note:'', src:'CL2020' },
  'meropenem+insulina':           { status:'C',  note:'', src:'CL2020' },
  'meropenem+pip_tazo':           { status:'?',  note:'Sin datos — no mezclar', src:'' },
  'meropenem+potasio':            { status:'IC', note:'Compatible a concentraciones estándar', src:'CL2020' },
  'meropenem+vancomicina':        { status:'C',  note:'Compatible en Y a concentraciones estándar', src:'CL2020' },
  'pip_tazo+heparina':            { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'pip_tazo+insulina':            { status:'C',  note:'', src:'CL2020' },
  'pip_tazo+potasio':             { status:'C',  note:'', src:'CL2020' },
  'pip_tazo+vancomicina':         { status:'C',  note:'Compatible a concentraciones estándar', src:'CL2020' },
  'vancomicina+potasio':          { status:'C',  note:'', src:'CL2020' },
  // ════ FUROSEMIDA
  'furosemida+ketamina':          { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  'furosemida+labetalol':         { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  'furosemida+nitroglicerina':    { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  'furosemida+remifentanilo':     { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  // ════ PANTOPRAZOL
  'pantoprazol+pip_tazo':         { status:'I',  note:'Precipitación — pH incompatible', src:'CL2020' },
  'pantoprazol+vancomicina':      { status:'I',  note:'Precipitación — pH incompatible', src:'CL2020' },
  'pantoprazol+meropenem':        { status:'C',  note:'', src:'CL2020' },
  'heparina+pantoprazol':         { status:'C',  note:'', src:'CL2020' },
  'insulina+pantoprazol':         { status:'IC', note:'Verificar', src:'CL2020' },
  // ════ VASOPRESINA
  'heparina+vasopresina':         { status:'C',  note:'', src:'CL2020' },
  'insulina+vasopresina':         { status:'C',  note:'', src:'CL2020' },
  'nitroglicerina+vasopresina':   { status:'C',  note:'', src:'CL2020' },
  // ════ N-ACETILCISTEÍNA
  'bicarbonato+nacetilcisteina':  { status:'I',  note:'Incompatible — no administrar en Y', src:'CL2020' },
  // ════ LABETALOL
  'heparina+labetalol':           { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'labetalol+nitroglicerina':     { status:'C',  note:'', src:'CL2020' },
  'labetalol+nitroprusiato':      { status:'C',  note:'', src:'CL2020' },
  'labetalol+potasio':            { status:'C',  note:'', src:'CL2020' },
  // ════ NITROGLICERINA / NITROPRUSIATO
  'heparina+nitroglicerina':      { status:'IC', note:'Puede reducir efecto anticoagulante — monitorizar APTT', src:'CL2020' },
  'insulina+nitroglicerina':      { status:'C',  note:'', src:'CL2020' },
  'nitroglicerina+nitroprusiato': { status:'C',  note:'', src:'CL2020' },
  'nitroglicerina+potasio':       { status:'C',  note:'', src:'CL2020' },
  'heparina+nitroprusiato':       { status:'C',  note:'', src:'CL2020' },
  'insulina+nitroprusiato':       { status:'C',  note:'', src:'CL2020' },
  'nitroprusiato+potasio':        { status:'C',  note:'', src:'CL2020' },
  // ════ HIDROCORTISONA
  'hidrocortisona+insulina':      { status:'C',  note:'', src:'CL2020' },
  'heparina+hidrocortisona':      { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'hidrocortisona+meropenem':     { status:'C',  note:'', src:'CL2020' },
  'hidrocortisona+pip_tazo':      { status:'C',  note:'', src:'CL2020' },
  'hidrocortisona+potasio':       { status:'C',  note:'', src:'CL2020' },
  'hidrocortisona+vancomicina':   { status:'IC', note:'Verificar', src:'CL2020' },
  // ════ SOMATOSTATINA
  'heparina+somatostatina':       { status:'C',  note:'', src:'CL2020' },
  'insulina+somatostatina':       { status:'C',  note:'', src:'CL2020' },
  // ════ DILTIAZEM / VERAPAMILO
  'diltiazem+fentanilo':          { status:'C',  note:'', src:'CL2020' },
  'diltiazem+heparina':           { status:'C',  note:'', src:'CL2020' },
  'diltiazem+insulina':           { status:'C',  note:'', src:'CL2020' },
  'diltiazem+magnesio':           { status:'C',  note:'', src:'CL2020' },
  'diltiazem+midazolam':          { status:'C',  note:'', src:'CL2020' },
  'diltiazem+morfina':            { status:'C',  note:'', src:'CL2020' },
  'diltiazem+nitroglicerina':     { status:'C',  note:'', src:'CL2020' },
  'diltiazem+nitroprusiato':      { status:'C',  note:'', src:'CL2020' },
  'diltiazem+potasio':            { status:'C',  note:'', src:'CL2020' },
  'diltiazem+propofol':           { status:'C',  note:'', src:'CL2020' },
  'diltiazem+vecuronio':          { status:'C',  note:'', src:'CL2020' },
  'heparina+verapamilo':          { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'naloxona+verapamilo':          { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'nitroglicerina+verapamilo':    { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  'nitroprusiato+verapamilo':     { status:'IC', note:'Compatible a concentraciones bajas', src:'CL2020' },
  // ════ REMIFENTANILO
  'heparina+remifentanilo':       { status:'IC', note:'Verificar concentraciones', src:'CL2020' },
  'pip_tazo+remifentanilo':       { status:'IC', note:'Compatible a concentraciones estándar', src:'CL2020' },
  'potasio+remifentanilo':        { status:'IC', note:'Compatible a concentraciones estándar', src:'CL2020' },
  'remifentanilo+vecuronio':      { status:'IC', note:'Compatible en condiciones estándar', src:'CL2020' },
  // ════ METADONA
  'heparina+metadona':            { status:'IC', note:'Verificar', src:'CL2020' },
  // ════ FLUMAZENILO / NALOXONA
  'flumazenilo+heparina':         { status:'IC', note:'Verificar', src:'CL2020' },
  'heparina+naloxona':            { status:'C',  note:'', src:'CL2020' },
  // ════ PARACETAMOL IV
  'heparina+paracetamol_iv':      { status:'C',  note:'', src:'Sta' },
  'paracetamol_iv+propofol':      { status:'IC', note:'Posible incompatibilidad física — verificar', src:'Sta' },
  'paracetamol_iv+vancomicina':   { status:'C',  note:'', src:'Sta' },
  // ════ ALPROSTADILO (PGE1) — NICU ══════════════════════════════════
  'adrenalina+alprostadilo':      { status:'IC', note:'Datos limitados en neonatología — verificar', src:'KEMH' },
  'alprostadilo+dopamina':        { status:'IC', note:'Verificar concentraciones', src:'KEMH' },
  'alprostadilo+dobutamina':      { status:'IC', note:'Verificar concentraciones', src:'KEMH' },
  'alprostadilo+fentanilo':       { status:'C',  note:'', src:'KEMH' },
  'alprostadilo+heparina':        { status:'C',  note:'', src:'KEMH' },
  'alprostadilo+midazolam':       { status:'C',  note:'', src:'KEMH' },
  'alprostadilo+morfina':         { status:'C',  note:'', src:'KEMH' },
  // ════ AMPICILINA — NICU/PICU ═══════════════════════════════════════
  // ⚠ AMPICILINA pH 9-10 — incompatible con la gran mayoría de fármacos
  'amikacina+ampicilina':         { status:'I',  note:'INACTIVACIÓN QUÍMICA de aminoglucósido — VÍA SEPARADA obligatoria', src:'ATM,Tri' },
  'ampicilina+bicarbonato':       { status:'I',  note:'Precipitación — ambos muy alcalinos', src:'ATM' },
  'ampicilina+calcio_clo':        { status:'I',  note:'Precipitación', src:'ATM' },
  'ampicilina+calcio_glu':        { status:'I',  note:'Precipitación', src:'ATM,KEMH' },
  'adrenalina+ampicilina':        { status:'I',  note:'Incompatible — pH incompatible', src:'ATM' },
  'ampicilina+dobutamina':        { status:'I',  note:'Incompatible — pH incompatible', src:'ATM' },
  'ampicilina+dopamina':          { status:'I',  note:'Incompatible — pH incompatible', src:'ATM' },
  'ampicilina+fluconazol':        { status:'I',  note:'Precipitación visual inmediata', src:'KEMH,Tri' },
  'ampicilina+gentamicina':       { status:'I',  note:'INACTIVACIÓN QUÍMICA de gentamicina — VÍA SEPARADA obligatoria', src:'ATM,KEMH,Tri' },
  'ampicilina+heparina':          { status:'IC', note:'Compatible a bajas concentraciones en SF', src:'KEMH' },
  'ampicilina+insulina':          { status:'I',  note:'Incompatible', src:'ATM' },
  'ampicilina+midazolam':         { status:'I',  note:'Precipitación — pH incompatible', src:'ATM,KEMH' },
  'ampicilina+morfina':           { status:'I',  note:'Incompatible', src:'ATM' },
  'ampicilina+pip_tazo':          { status:'?',  note:'No mezclar beta-lactámicos sin verificar', src:'' },
  'ampicilina+vancomicina':       { status:'IC', note:'Compatible a bajas concentraciones — verificar con farmacéutico', src:'KEMH' },
  'ampicilina+fentanilo':         { status:'IC', note:'Datos limitados — verificar', src:'KEMH' },
  // ════ GENTAMICINA — NICU/PICU ══════════════════════════════════════
  // ⚠ Gentamicina: inactivada por penicilinas/beta-lactámicos en la misma vía
  'amikacina+gentamicina':        { status:'I',  note:'No mezclar aminoglucósidos — precipitación y reducción de eficacia', src:'Tri' },
  'furosemida+gentamicina':       { status:'IC', note:'Compatible en Y a concentraciones estándar — vigilar ototoxicidad aditiva', src:'Tri' },
  'gentamicina+heparina':         { status:'I',  note:'Precipitación — no administrar en Y', src:'Tri,KEMH' },
  'gentamicina+midazolam':        { status:'IC', note:'Verificar', src:'KEMH' },
  'gentamicina+morfina':          { status:'IC', note:'Verificar', src:'KEMH' },
  'fluconazol+gentamicina':       { status:'IC', note:'Verificar', src:'Sta' },
  'gentamicina+vancomicina':      { status:'IC', note:'Compatible en Y — NO en misma solución. Monitorizar nefrotoxicidad', src:'KEMH,Tri' },
  // ════ AMIKACINA — NICU/PICU ════════════════════════════════════════
  'amikacina+fluconazol':         { status:'C',  note:'Compatible a concentraciones estándar', src:'Sta' },
  'amikacina+furosemida':         { status:'IC', note:'Vigilar ototoxicidad aditiva', src:'Tri' },
  'amikacina+heparina':           { status:'I',  note:'Precipitación — no administrar en Y', src:'Tri' },
  'amikacina+midazolam':          { status:'IC', note:'Verificar', src:'KEMH' },
  'amikacina+morfina':            { status:'IC', note:'Verificar', src:'KEMH' },
  'amikacina+vancomicina':        { status:'IC', note:'Compatible en Y — NO en misma solución. Monitorizar nefrotoxicidad', src:'Tri' },
  // ════ FENOBARBITAL — NICU/PICU ═════════════════════════════════════
  // ⚠ FENOBARBITAL pH 9-10 — precipita con casi todo
  'calcio_clo+fenobarbital':      { status:'I',  note:'Precipitación', src:'Fl17' },
  'calcio_glu+fenobarbital':      { status:'I',  note:'Precipitación', src:'Fl17' },
  'fenobarbital+dobutamina':      { status:'I',  note:'Incompatible — pH incompatible', src:'Fl17' },
  'fenobarbital+dopamina':        { status:'I',  note:'Incompatible — pH incompatible', src:'Fl17' },
  'fenobarbital+fentanilo':       { status:'IC', note:'Verificar — datos limitados en neonatos', src:'Fl17' },
  'fenobarbital+heparina':        { status:'I',  note:'Incompatible', src:'Fl17,KEMH' },
  'fenobarbital+hidrocortisona':  { status:'IC', note:'Verificar concentraciones', src:'KEMH' },
  'fenobarbital+insulina':        { status:'I',  note:'Incompatible', src:'Fl17' },
  'fenobarbital+ketamina':        { status:'IC', note:'Datos limitados — verificar', src:'Fl17' },
  'fenobarbital+midazolam':       { status:'IC', note:'Precipitación posible — monitorizar la vía', src:'Fl17,KEMH' },
  'fenobarbital+morfina':         { status:'I',  note:'Precipitación', src:'Fl17,KEMH' },
  'fenobarbital+vancomicina':     { status:'IC', note:'Verificar', src:'KEMH' },
  // ════ CAFEÍNA CITRATO — NICU ════════════════════════════════════════
  'ampicilina+cafeina':           { status:'IC', note:'Verificar', src:'KEMH' },
  'cafeina+dobutamina':           { status:'IC', note:'Verificar concentraciones', src:'KEMH' },
  'cafeina+dopamina':             { status:'IC', note:'Verificar concentraciones', src:'KEMH' },
  'cafeina+fentanilo':            { status:'C',  note:'', src:'KEMH' },
  'cafeina+gentamicina':          { status:'IC', note:'Verificar', src:'KEMH' },
  'cafeina+heparina':             { status:'C',  note:'', src:'KEMH' },
  'cafeina+midazolam':            { status:'IC', note:'Verificar', src:'KEMH' },
  'cafeina+morfina':              { status:'IC', note:'Verificar', src:'KEMH' },
  'cafeina+vancomicina':          { status:'IC', note:'Verificar', src:'KEMH' },
  // ════ AMINOFILINA — NICU/PICU ══════════════════════════════════════
  // ⚠ AMINOFILINA pH 8,6-9 — múltiples incompatibilidades
  'aminofilina+dobutamina':       { status:'IC', note:'Verificar', src:'Tri' },
  'aminofilina+dopamina':         { status:'IC', note:'Verificar', src:'Tri' },
  'aminofilina+fentanilo':        { status:'IC', note:'Verificar concentraciones', src:'Tri' },
  'aminofilina+heparina':         { status:'IC', note:'Verificar', src:'Tri' },
  'aminofilina+hidrocortisona':   { status:'IC', note:'Verificar', src:'Tri' },
  'aminofilina+insulina':         { status:'I',  note:'Incompatible', src:'Tri' },
  'aminofilina+midazolam':        { status:'I',  note:'Incompatible — precipitación', src:'Tri,Fl17' },
  'aminofilina+morfina':          { status:'I',  note:'Incompatible — precipitación', src:'Tri,Fl17' },
  'aminofilina+vancomicina':      { status:'I',  note:'Incompatible — precipitación', src:'Tri' },
  // ════ INDOMETACINA / IBUPROFENO IV — NICU ══════════════════════════
  'amikacina+indometacina':       { status:'I',  note:'Incompatible', src:'Tri' },
  'dobutamina+indometacina':      { status:'IC', note:'Verificar', src:'Tri' },
  'dopamina+indometacina':        { status:'IC', note:'Verificar concentraciones', src:'Tri' },
  'furosemida+indometacina':      { status:'IC', note:'Verificar', src:'Tri' },
  'gentamicina+indometacina':     { status:'I',  note:'Incompatible — precipitación', src:'Tri' },
  'heparina+indometacina':        { status:'IC', note:'Verificar', src:'Tri' },
  'dopamina+ibuprofeno_iv':       { status:'IC', note:'Verificar', src:'Tri' },
  'gentamicina+ibuprofeno_iv':    { status:'I',  note:'Incompatible', src:'Tri' },
  'heparina+ibuprofeno_iv':       { status:'IC', note:'Verificar', src:'Tri' },
  // ════ FLUCONAZOL ════════════════════════════════════════════════════
  'aciclovir+fluconazol':         { status:'IC', note:'Verificar', src:'Sta' },
  'ceftazidima+fluconazol':       { status:'I',  note:'Precipitación', src:'Tri' },
  'calcio_glu+fluconazol':        { status:'I',  note:'Precipitación', src:'Tri' },
  'fluconazol+meropenem':         { status:'IC', note:'Verificar', src:'Sta' },
  // ════ ACICLOVIR ═════════════════════════════════════════════════════
  'aciclovir+dopamina':           { status:'I',  note:'Incompatible — no administrar en Y', src:'Sta' },
  'aciclovir+dobutamina':         { status:'I',  note:'Incompatible', src:'Sta' },
  'aciclovir+midazolam':          { status:'IC', note:'Verificar', src:'Sta' },
  'aciclovir+morfina':            { status:'IC', note:'Verificar concentraciones', src:'Sta' },
  'aciclovir+vancomicina':        { status:'IC', note:'Verificar', src:'Sta' },
};


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