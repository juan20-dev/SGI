export interface ResourceItem {
  id: string;
  title: string;
  code?: string;
  url: string;
  type: 'form' | 'sharepoint' | 'image' | 'emergency' | 'info' | 'document' | 'video';
  typeLabel: string;
  description: string;
  status: 'active' | 'pending' | 'interactive';
  statusBadge?: string;
  isInductionContent?: boolean;
}

export interface CategorySection {
  id: 'interno' | 'visitantes' | 'contratistas';
  title: string;
  subtitle: string;
  badge: string;
  iconName: 'Building2' | 'Users' | 'Wrench';
  colorTheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    activeTab: string;
    iconColor: string;
    accentBg: string;
  };
  items: ResourceItem[];
}

export const TICLINE_DATA: CategorySection[] = [
  {
    id: 'interno',
    title: 'COLABORADORES',
    subtitle: 'Acceso exclusivo para colaboradores de TICLINE',
    badge: '',
    iconName: 'Building2',
    colorTheme: {
      badgeBg: 'bg-blue-100 dark:bg-blue-950/80',
      badgeText: 'text-blue-800 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-800',
      activeTab: 'bg-blue-900 text-white shadow-md shadow-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      accentBg: 'bg-blue-50 dark:bg-blue-950/30'
    },
    items: [
      {
        id: 'int-pol-01',
        title: 'POL-GI-01 Politica del Sistema de Gestion Integradov05 QR.pdf',
        code: 'POL-GI-01',
        url: 'https://ticlinevolucion.sharepoint.com/:b:/s/Administracin/IQBkBzF7eN8PT77REGeDPo4DAbFEaSKpe3xX3GZAOjXn9AY?e=lO8nEc',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Política institucional del Sistema de Gestión Integrado de TICLINE con código QR oficial (POL-GI-01 Politica del Sistema de Gestion Integradov05 QR).',
        status: 'active'
      },
      {
        id: 'int-1',
        title: 'Comité Paritario de Seguridad y Salud en el Trabajo (COPASST)',
        code: 'COPASST',
        url: 'https://ticlinevolucion.sharepoint.com/:p:/s/Administracin/IQAFD_buOfeFRoqKaan1Mm_rAQuJGhUv9x7bCZ1PwiFPTI4?e=DF0gI4',
        type: 'sharepoint',
        typeLabel: 'Presentación SharePoint',
        description: 'Información institucional, objetivos e integrantes vigentes del Comité Paritario de SST.',
        status: 'active'
      },
      {
        id: 'int-2',
        title: 'FR-GI-25 Tarjeta de Reporte ACI',
        code: 'FR-GI-25',
        url: 'https://forms.office.com/r/NCGjuLbfn6',
        type: 'form',
        typeLabel: 'Formulario Microsoft Forms',
        description: 'Formato digital para el reporte preventivo de Actos, Condiciones Inseguras e Incidentes.',
        status: 'active'
      },
      {
        id: 'int-3',
        title: 'Comité de convivencia laboral (CCL)',
        code: 'CCL',
        url: 'https://ticlinevolucion.sharepoint.com/:p:/s/Administracin/IQC4RmNiWvMgTIJG87f5ZyM2AdgSGBtVEoXQxWQ4BbLrmqM?e=6xKfC7',
        type: 'sharepoint',
        typeLabel: 'Presentación SharePoint',
        description: 'Principios, conformación y alcance del Comité de Convivencia Laboral de TICLINE.',
        status: 'active'
      },
      {
        id: 'int-m-03',
        title: 'M-GI-03 Manual de Convivencia Laboral',
        code: 'M-GI-03',
        url: 'https://ticlinevolucion.sharepoint.com/:b:/s/Administracin/IQDpIY7B4fzgSpbvnyu4z23NAQElb2lKBt12O6kWITfw_bw?e=jfgso0',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Manual de convivencia laboral con directrices, lineamientos de conducta y fomento de un ambiente de trabajo armónico.',
        status: 'active'
      },
      {
        id: 'int-pol-03',
        title: 'POL- GI - 03 Política Prevención Acoso Laboral',
        code: 'POL-GI-03',
        url: 'https://ticlinevolucion.sharepoint.com/:b:/s/Administracin/IQBpdF0Yb9pzSIxPgjI-wj09AVYbTp309Xn_2RpzXHXJAfA?e=8DBUc5',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Política institucional para la prevención del acoso laboral (POL- GI - 03 POLITICA PREVENCIÓN ACOSO LABORALv03.pdf).',
        status: 'active'
      },
      {
        id: 'int-4',
        title: 'Procedimiento Queja Laboral',
        code: 'PROCEDIMIENTO',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQD2kjxAr2KZSaEiKWvyttAbAV3m4fzNUjF39nZYA5muy6I?e=Julf3P',
        type: 'sharepoint',
        typeLabel: 'Imagen / Infografía',
        description: 'Diagrama del flujo y pasos para la recepción, análisis y tramite de quejas laborales.',
        status: 'active'
      },
      {
        id: 'int-fr-41',
        title: 'FR-GI-41 Formato Queja CCL',
        code: 'FR-GI-41',
        url: 'https://forms.cloud.microsoft/r/mKtDhskLrH',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Formato digital para la recepción y trámite de quejas del Comité de Convivencia Laboral.',
        status: 'active'
      },
      {
        id: 'int-proc-acc',
        title: 'Procedimiento Reporte de Accidente Laboral',
        code: 'PROCEDIMIENTO',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQAIc65TkEL0RoXR32SiRtH1ATpnF3jeseGtTQshvz3v1Ro?e=BDNx1Z',
        type: 'sharepoint',
        typeLabel: 'Imagen / Infografía',
        description: 'Diagrama y pasos clave para el reporte oportuno y atención de accidentes laborales.',
        status: 'active'
      },
      {
        id: 'int-fr-27',
        title: 'FR-GI-27 Declaración De Hechos-Accidentes / Incidentes',
        code: 'FR-GI-27',
        url: 'https://forms.cloud.microsoft/r/HPSckaHwSm',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Formato digital para la declaración y recopilación de hechos ante accidentes o incidentes.',
        status: 'active'
      },
      {
        id: 'int-proc-enf',
        title: 'Procedimiento Reporte de enfermedad Laboral',
        code: 'PROCEDIMIENTO',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQC0qOzILf-rS7fs1WBhDOpmAY8x46jvl2uT-5tXsWrV1vw?e=RmdT74',
        type: 'sharepoint',
        typeLabel: 'Imagen / Infografía',
        description: 'Diagrama y pasos a seguir para el reporte, registro y atención de presuntas enfermedades laborales.',
        status: 'active'
      },
      {
        id: 'int-fr-138',
        title: 'FR-GI-138 Reporte de Enfermedad Laboral',
        code: 'FR-GI-138',
        url: 'https://forms.cloud.microsoft/r/8ZZ9EL0uTs',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Formato digital oficial para el reporte y radicación de presunta enfermedad laboral.',
        status: 'active'
      },
      {
        id: 'int-fr-136',
        title: 'FR-GI-136 Matriz Roles y Responsabilidades Integrales',
        code: 'FR-GI-136',
        url: 'https://ticlinevolucion.sharepoint.com/:x:/s/Administracin/IQASlrRn5l4YSJZ4trmkXaOZAaFAQ6nUmJW-V2omVvcBNLY?e=VjIt0o',
        type: 'document',
        typeLabel: 'Excel / SharePoint',
        description: 'Matriz integral que define los roles, funciones y responsabilidades del Sistema de Gestión en TICLINE.',
        status: 'active'
      },
      {
        id: 'int-pesv-1',
        title: 'Líder PESV',
        code: 'LÍDER PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:i:/g/personal/yuly_salamanca_ticline_co/IQAInH9PYMklT4ueQwAlmSypAZwDqOHOIE8xhx3-kr7Zwik',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Designación y funciones del Líder del Plan Estratégico de Seguridad Vial (PESV) en TICLINE.',
        status: 'active'
      },
      {
        id: 'int-pesv-2',
        title: 'Comité de seguridad Vial - CSV',
        code: 'CSV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:b:/g/personal/yuly_salamanca_ticline_co/IQCA55iJjdSZQYMImjXtpzrXAQiXLoeFNlfWXF1JSfTxpfY',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Conformación, directrices y actas del Comité de Seguridad Vial (CSV) de TICLINE.',
        status: 'active'
      },
      {
        id: 'int-pesv-3',
        title: 'Política de Seguridad Vial',
        code: 'POL-PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:b:/g/personal/yuly_salamanca_ticline_co/IQAyg_W2n7djRJpSublvzWXiAY77JAycgQb3aqON7Ll7GOU',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Política oficial de seguridad vial, compromisos institucionales y prevención de siniestros viales.',
        status: 'active'
      },
      {
        id: 'int-pesv-4',
        title: 'Objetivos e indicadores Vial',
        code: 'OBJ-PESV',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQBiObEWxNk6TroWJpzEvv7_AThDeuCq7Vmgaz3k6YyeQyA?e=z8HicX',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Objetivos y metas de gestión e indicadores periódicos de desempeño de la seguridad vial.',
        status: 'active'
      },
      {
        id: 'int-pesv-5',
        title: 'Programas PESV',
        code: 'PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:i:/g/personal/yuly_salamanca_ticline_co/IQAJGwOhzLICRZEVZHGn6Y_WAWQtL2v96Pe1oknDXYMdtCA',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Programas y líneas de acción preventiva del Plan Estratégico de Seguridad Vial.',
        status: 'active'
      },
      {
        id: 'int-pesv-6',
        title: 'Protocolo en caso de accidente de transito',
        code: 'PROTOCOLO',
        url: 'https://ticlinevolucion-my.sharepoint.com/:x:/g/personal/yuly_salamanca_ticline_co/IQCBcBxaHYo3R7hQXv-hXFIsAS1zJaK5ii8eICX4Xs-h4j0',
        type: 'document',
        typeLabel: 'Excel / SharePoint',
        description: 'Protocolo de reporte, atención inmediata y pasos a seguir en caso de accidente de tránsito.',
        status: 'active'
      },
      {
        id: 'int-6',
        title: 'Brigada de emergencias',
        code: 'BRIGADA',
        url: 'https://ticlinevolucion.sharepoint.com/:p:/s/Administracin/IQDDcHMOiApJTaDge5bpk2ibAei4gXoRRm1r5qd7s2ihfvQ?e=DbYfAW',
        type: 'sharepoint',
        typeLabel: 'Presentación SharePoint',
        description: 'Conoce el equipo de brigadistas capacitados en primeros auxilios y evacuación.',
        status: 'active'
      },
      {
        id: 'int-7',
        title: 'Plan de emergencias',
        code: 'SGI-PLAN',
        url: 'https://ticlinevolucion.sharepoint.com/:w:/s/Administracin/IQCPHdf6Ci2xTZlmbxmvCvkdAW0kNKpyDv7K2wANMmkbrAI?e=ZkwgsI',
        type: 'document',
        typeLabel: 'Documento Word / SharePoint',
        description: 'Protocolos de atención frente a sismos, incendios y contingencias en sedes.',
        status: 'active'
      },
      {
        id: 'int-8',
        title: 'Números de emergencia Medellín',
        code: 'MEDELLÍN',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQBOi6veiB2XTJomUrrXOW0vARezWW_bN5xq6V8W8bCLTIA?e=1IGFLX',
        type: 'sharepoint',
        typeLabel: 'Directorio / Imagen',
        description: 'Líneas directas de ambulancias, policía, bomberos y centros de atención en Medellín.',
        status: 'active'
      },
      {
        id: 'int-9',
        title: 'Números de emergencia Pereira',
        code: 'PEREIRA',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQCTFuKZ5VSBR5s0MWSZ9iyAAe5EHgA7u8QjYn3f5bSNxr4?e=KoNbYR',
        type: 'sharepoint',
        typeLabel: 'Directorio / Imagen',
        description: 'Líneas institucionales y organismos de socorro para la sede Pereira.',
        status: 'active'
      }
    ]
  },
  {
    id: 'visitantes',
    title: 'VISITANTES, CLIENTES Y PROVEEDORES',
    subtitle: 'Normas SGI, inducción de ingreso y directorio para visitantes',
    badge: '',
    iconName: 'Users',
    colorTheme: {
      badgeBg: 'bg-blue-100 dark:bg-blue-950/80',
      badgeText: 'text-blue-800 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-800',
      activeTab: 'bg-blue-800 text-white shadow-md shadow-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      accentBg: 'bg-blue-50 dark:bg-blue-950/30'
    },
    items: [
      {
        id: 'vis-1',
        title: 'Inducción SGI – Visitantes',
        code: 'INDUCCIÓN',
        url: 'https://ticlinevolucion.sharepoint.com/:v:/s/Administracin/IQC0fRJY2E7NR5mQg8YCyQavAYgcPBoVl5-7U7JmTSXruHo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=ewcbHk',
        type: 'video',
        typeLabel: 'Video / Presentación',
        description: 'Video y guía interactiva de seguridad en instalaciones, normas generales y pautas de evacuación.',
        status: 'active'
      },
      {
        id: 'vis-2',
        title: 'Evaluación de inducción - visitantes',
        code: 'EVALUACIÓN',
        url: 'https://forms.office.com/r/nWDCmVFde1',
        type: 'form',
        typeLabel: 'Formulario Microsoft Forms',
        description: 'Comprobante de comprensión de la inducción de seguridad previa al recorrido.',
        status: 'active'
      },
      {
        id: 'vis-proc-acc',
        title: 'Procedimiento Reporte de Accidentes en TICLINE',
        code: 'PROCEDIMIENTO',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQCftXutYm06SY9UN7Z7Xj2oAdUOr9agxBlGKQDzqd5j44U?e=3s3lYm',
        type: 'sharepoint',
        typeLabel: 'Imagen / Infografía',
        description: 'Protocolo y flujo de comunicación ante cualquier accidente o eventualidad en instalaciones de TICLINE.',
        status: 'active'
      },
      {
        id: 'vis-4',
        title: 'Brigada de emergencias',
        code: 'BRIGADA',
        url: 'https://ticlinevolucion.sharepoint.com/:p:/s/Administracin/IQDDcHMOiApJTaDge5bpk2ibAei4gXoRRm1r5qd7s2ihfvQ?e=DbYfAW',
        type: 'sharepoint',
        typeLabel: 'Presentación SharePoint',
        description: 'Personal identificado para guiarte durante una eventual evacuación.',
        status: 'active'
      },
      {
        id: 'vis-5',
        title: 'Números de emergencia Medellín',
        code: 'MEDELLÍN',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQBOi6veiB2XTJomUrrXOW0vARezWW_bN5xq6V8W8bCLTIA?e=1IGFLX',
        type: 'sharepoint',
        typeLabel: 'Directorio / Imagen',
        description: 'Contactos urgentes y primeros auxilios en sede Medellín.',
        status: 'active'
      },
      {
        id: 'vis-6',
        title: 'Números de emergencia Pereira',
        code: 'PEREIRA',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQCTFuKZ5VSBR5s0MWSZ9iyAAe5EHgA7u8QjYn3f5bSNxr4?e=KoNbYR',
        type: 'sharepoint',
        typeLabel: 'Directorio / Imagen',
        description: 'Contactos urgentes y primeros auxilios en sede Pereira.',
        status: 'active'
      }
    ]
  },
  {
    id: 'contratistas',
    title: 'CONTRATISTA',
    subtitle: 'Acceso a requisitos, formatos e información para contratistas',
    badge: '',
    iconName: 'Wrench',
    colorTheme: {
      badgeBg: 'bg-indigo-100 dark:bg-indigo-950/80',
      badgeText: 'text-indigo-800 dark:text-indigo-300',
      border: 'border-indigo-200 dark:border-indigo-800',
      activeTab: 'bg-indigo-900 text-white shadow-md shadow-indigo-900/20',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      accentBg: 'bg-indigo-50 dark:bg-indigo-950/30'
    },
    items: [
      {
        id: 'con-pol-01',
        title: 'POL-GI-01 Politica del Sistema de Gestion Integradov05 QR.pdf',
        code: 'POL-GI-01',
        url: 'https://ticlinevolucion.sharepoint.com/:b:/s/Administracin/IQBkBzF7eN8PT77REGeDPo4DAbFEaSKpe3xX3GZAOjXn9AY?e=lO8nEc',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Política institucional del Sistema de Gestión Integrado aplicable a contratistas y aliados estratégicos de TICLINE con código QR oficial.',
        status: 'active'
      },
      {
        id: 'con-1',
        title: 'Inducción SGI – Contratistas',
        code: 'VIDEO SGI',
        url: 'https://ticlinevolucion-my.sharepoint.com/:v:/g/personal/yuly_salamanca_ticline_co/IQAhdC_nv3ZVQpzUE_uZXwv_AX7NWlL0PJG4EtJZ8Nktzrk?e=Hcmgdq',
        type: 'video',
        typeLabel: 'Video de Inducción',
        description: 'Video institucional con requerimientos de trabajo seguro, permisos y uso de EPP.',
        status: 'active'
      },
      {
        id: 'con-2',
        title: 'Evaluación de inducción - Contratistas',
        code: 'EVALUACIÓN',
        url: 'https://forms.cloud.microsoft/r/gxmWEsZpnQ',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Evaluación oficial exigida para autorización de labores y acceso técnico.',
        status: 'active'
      },
      {
        id: 'con-fr-25',
        title: 'FR-GI-25 TARJETA REPORTE ACI',
        code: 'FR-GI-25',
        url: 'https://forms.cloud.microsoft/r/NCGjuLbfn6',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Tarjeta digital oficial para el reporte oportuno de Actos, Condiciones e Incidentes (ACI).',
        status: 'active'
      },
      {
        id: 'con-3',
        title: 'Procedimiento Reporte de AT a TICLINE',
        code: 'PROCEDIMIENTO',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQA0YzVn2J5jR5GXtREHQ65iASQJVuTMEKj1qUTFmxhuKww?e=EY0mYW',
        type: 'sharepoint',
        typeLabel: 'Imagen / Infografía',
        description: 'Flujo y pasos requeridos para el reporte inmediato de accidentes de trabajo (AT) a TICLINE.',
        status: 'active'
      },
      {
        id: 'con-4',
        title: 'Reporte Indicadores AT- EG - EL',
        code: 'INDICADORES',
        url: 'https://forms.cloud.microsoft/r/XuBeHh2s5X',
        type: 'form',
        typeLabel: 'Formulario Microsoft Cloud',
        description: 'Formulario para el reporte periódico de indicadores de accidentalidad (AT), enfermedad general (EG) y laboral (EL).',
        status: 'active'
      },
      {
        id: 'con-pesv-1',
        title: 'Líder PESV',
        code: 'LÍDER PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:i:/g/personal/yuly_salamanca_ticline_co/IQAInH9PYMklT4ueQwAlmSypAZwDqOHOIE8xhx3-kr7Zwik',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Designación y funciones del Líder del Plan Estratégico de Seguridad Vial (PESV) en TICLINE.',
        status: 'active'
      },
      {
        id: 'con-pesv-2',
        title: 'Comité de seguridad Vial - CSV',
        code: 'CSV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:b:/g/personal/yuly_salamanca_ticline_co/IQCA55iJjdSZQYMImjXtpzrXAQiXLoeFNlfWXF1JSfTxpfY',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Conformación, directrices y actas del Comité de Seguridad Vial (CSV) de TICLINE.',
        status: 'active'
      },
      {
        id: 'con-pesv-3',
        title: 'Política de Seguridad Vial',
        code: 'POL-PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:b:/g/personal/yuly_salamanca_ticline_co/IQAyg_W2n7djRJpSublvzWXiAY77JAycgQb3aqON7Ll7GOU',
        type: 'document',
        typeLabel: 'Documento PDF / SharePoint',
        description: 'Política oficial de seguridad vial, compromisos institucionales y prevención de siniestros viales aplicable a contratistas.',
        status: 'active'
      },
      {
        id: 'con-pesv-4',
        title: 'Objetivos e indicadores Vial',
        code: 'OBJ-PESV',
        url: 'https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQBiObEWxNk6TroWJpzEvv7_AThDeuCq7Vmgaz3k6YyeQyA?e=z8HicX',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Objetivos y metas de gestión e indicadores periódicos de desempeño de la seguridad vial.',
        status: 'active'
      },
      {
        id: 'con-pesv-5',
        title: 'Programas PESV',
        code: 'PESV',
        url: 'https://ticlinevolucion-my.sharepoint.com/:i:/g/personal/yuly_salamanca_ticline_co/IQAJGwOhzLICRZEVZHGn6Y_WAWQtL2v96Pe1oknDXYMdtCA',
        type: 'image',
        typeLabel: 'Imagen / Infografía',
        description: 'Programas y líneas de acción preventiva del Plan Estratégico de Seguridad Vial.',
        status: 'active'
      },
      {
        id: 'con-pesv-6',
        title: 'Protocolo en caso de accidente de transito',
        code: 'PROTOCOLO',
        url: 'https://ticlinevolucion-my.sharepoint.com/:x:/g/personal/yuly_salamanca_ticline_co/IQCBcBxaHYo3R7hQXv-hXFIsAS1zJaK5ii8eICX4Xs-h4j0',
        type: 'document',
        typeLabel: 'Excel / SharePoint',
        description: 'Protocolo de reporte, atención inmediata y pasos a seguir en caso de accidente de tránsito.',
        status: 'active'
      }
    ]
  }
];

export const EMERGENCY_NUMBERS = {
  medellin: [
    { label: 'Línea Única de Emergencias', number: '123' },
    { label: 'Bomberos Medellín', number: '(604) 385 55 55' },
    { label: 'Cruz Roja Antioquia', number: '(604) 350 53 00' },
    { label: 'Defensa Civil Medellín', number: '(604) 285 41 12' },
    { label: 'Policía Nacional', number: '112' }
  ],
  pereira: [
    { label: 'Línea Única de Emergencias', number: '123' },
    { label: 'Bomberos Pereira', number: '(606) 324 18 00' },
    { label: 'Cruz Roja Risaralda', number: '(606) 324 88 88' },
    { label: 'Defensa Civil Risaralda', number: '(606) 325 35 30' },
    { label: 'Policía Pereira', number: '112' }
  ]
};
