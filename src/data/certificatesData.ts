import {
  CertificateData,
  AbstractSegment,
  FalseCognateItem,
  QuizQuestion,
} from '../types/certificate';

export const CERTIFICATE_03_MEDICAL_ENGLISH: CertificateData = {
  id: 'cert-03',
  certNumber: '03',
  bookNumber: '01/2023',
  sheetNumber: '29',
  code: 'EMS-LNG-2023-0903',
  altCodes: ['EMS-EXT-2023-0903', '0903-7027-9457-4C8E'],
  controlKey: '0903-7027-9457-4C8E',
  sha256: '9e4a1f82c3b07d65a1928e40c6b51d29e8f17a63b4c52d90f1837e2a5b6c0903',
  verificationDomain: 'https://medical-english-saude.vercel.app/',
  mainTitleFront: 'CERTIFICADO DE CURSO DE LÍNGUA',
  backHeaderTitle: 'MEMORIAL DESCRITIVO E REGISTRO ACADÊMICO DE ATIVIDADE EXTRACURRICULAR',
  backHeaderSubtitle: 'Verso Oficial do Certificado Nº 03 · Fé Pública Interinstitucional e Validação Curricular',
  holderName: 'LUCAS GONÇALVES SILVEIRA',
  holderRole: 'Médico',
  holderCpf: '702.794.941-57',
  holderInstitution: 'Centro Universitário Alfredo Nasser (UNIFAN)',
  openingTextLine1:
    'A Editora Mente e Saúde (CNPJ: 51.372.335/0001-71), em parceria institucional com o Centro Profissionalizante Maria Dalva de Araújo (CNPJ:',
  openingTextLine2:
    '51.269.112/0001-83), certifica para os devidos fins de comprovação curricular, acadêmica e de títulos (Lei nº 9.394/96) que',
  courseTitle:
    'Curso Online de Língua Inglesa Instrumental (Medical English): Leitura e Tradução de Artigos Científicos em Saúde',
  courseCategory: 'Curso de Língua',
  periodText: '11 de setembro a 10 de novembro de 2023',
  totalHoursNumeric: 40,
  totalHoursWritten: '40 (quarenta)',
  grade: '9,8',
  status: 'APROVADO',
  bodyParagraph1:
    'concluiu com APROVAÇÃO e aproveitamento integral a Atividade Extracurricular intitulada "Curso Online de Língua Inglesa Instrumental (Medical English): Leitura e Tradução de Artigos Científicos em Saúde", desenvolvida na modalidade de Curso de Língua, realizada no período de 11 de setembro a 10 de novembro de 2023, contabilizando carga horária total de 40 (quarenta) horas.',
  bodyParagraph2:
    'No âmbito desta formação complementar em ambiente virtual de aprendizagem, o profissional cumpriu integralmente os módulos teóricos e práticos de leitura técnica instrumental (skimming e scanning), vocabulário médico internacional e descritores MeSH/MEDLINE, interpretação crítica de abstracts estruturados (padrão IMRaD) e tradução aplicada de diretrizes clínicas internacionais (Clinical Guidelines), obtendo nota final 9,8 (APROVADO).',
  cityAndDate: 'Goiânia - GO, 17 de novembro de 2023.',
  fubogFramingTitle:
    'Item 09 - Atividades Extracurriculares: Cursos de extensão, estágios em instituições de ensino, cursos de língua e de computação, aprovação em concursos, congressos médicos (Pelo menos 30 horas por certificado)',
  fubogFramingSummary:
    'Período: 11 de setembro a 10 de novembro de 2023 | Total: 40h (APROVADO - Nota 9,8)',
  section3Title: '3. MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA (40 HORAS)',
  axes: [
    {
      id: 'eixo-1',
      title: 'Eixo I — Estratégias de Leitura Instrumental (Skimming e Scanning)',
      subtitle: 'Compreensão Leitora Rápida, Cognatos e Falsos Cognatos na Literatura Biomédica',
      description:
        'Aplicação de técnicas de skimming e scanning na triagem de artigos científicos em inglês, identificação de cognatos médicos, controle de falsos cognatos clínicos e análise de marcadores discursivos.',
      hours: '10h 00min',
    },
    {
      id: 'eixo-2',
      title: 'Eixo II — Terminologia Médica em Inglês e Descritores MeSH/PubMed',
      subtitle: 'Morfossintaxe Científica, Prefixos/Sufixos Greco-Latinos e Voz Passiva Acadêmica',
      description:
        'Estudo sistematizado do léxico médico-cirúrgico internacional, grupos nominais complexos, tempos verbais de relatos clínicos e indexação terminológica via Medical Subject Headings (MeSH).',
      hours: '10h 00min',
    },
    {
      id: 'eixo-3',
      title: 'Eixo III — Interpretação Crítica de Abstracts e Ensaios Clínicos (IMRaD)',
      subtitle: 'Análise de Background, Methods, Results, Conclusions e Desfechos Estatísticos',
      description:
        'Leitura analítica de resumos estruturados e artigos originais (NEJM, The Lancet, JAMA), interpretação de tabelas, gráficos de sobrevivência (Hazard Ratio, Odds Ratio, IC 95%) e metodologia.',
      hours: '10h 00min',
    },
    {
      id: 'eixo-4',
      title: 'Eixo IV — Tradução Técnica de Diretrizes Internacionais e Exame Final',
      subtitle: 'Prática de Tradução Comentada de Clinical Guidelines e Avaliação Certificadora',
      description:
        'Tradução técnica guiada de protocolos internacionais, consensos médicos e revisões sistemáticas para o português padrão, seguida de avaliação somativa online com aprovação e nota 9,8.',
      hours: '10h 00min',
    },
  ],
  averbacaoText:
    'Certificado registrado sob o nº 03 no Livro de Extensão e Cursos nº 01/2023, Folha 29, expedido pela Editora Mente e Saúde (CNPJ: 51.372.335/0001-71) e Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83).',
  leftSignerName: 'BÁRBARA LIMA DOS SANTOS',
  leftSignerRole: 'Editora-Chefe e Coordenadora de Extensão Editorial',
  leftSignerEntity: 'Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)',
  rightSignerName: 'JAMES ARAÚJO DE SANTANA',
  rightSignerRole: 'Coordenador de Extensão e Projetos Educativos',
  rightSignerEntity: 'Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)',
};

export const CERTIFICATE_01_ESCRITA_CIENTIFICA: CertificateData = {
  id: 'cert-01',
  certNumber: '01',
  bookNumber: '01/2023',
  sheetNumber: '18',
  code: 'EMS-EXT-2023-0901',
  altCodes: ['0901-7027-9457-9A3C'],
  controlKey: '0901-7027-9457-9A3C',
  sha256: '4a9c8e12b7d03f56a1829e40c6b51d29e8f17a63b4c52d90f1837e2a5b6c0901',
  verificationDomain: 'https://extensao-escrita-cientifica-1.vercel.app/',
  mainTitleFront: 'CERTIFICADO DE CURSO DE EXTENSÃO',
  backHeaderTitle: 'MEMORIAL DESCRITIVO E REGISTRO ACADÊMICO DE ATIVIDADE EXTRACURRICULAR',
  backHeaderSubtitle: 'Verso Oficial do Certificado Nº 01 · Fé Pública Interinstitucional e Validação Curricular',
  holderName: 'LUCAS GONÇALVES SILVEIRA',
  holderRole: 'Médico',
  holderCpf: '702.794.941-57',
  holderInstitution: 'Centro Universitário Alfredo Nasser (UNIFAN)',
  openingTextLine1:
    'A Editora Mente e Saúde (CNPJ: 51.372.335/0001-71), em parceria institucional com o Centro Profissionalizante Maria Dalva de Araújo (CNPJ:',
  openingTextLine2:
    '51.269.112/0001-83), certifica para os devidos fins de comprovação curricular, acadêmica e de títulos (Lei nº 9.394/96) que',
  courseTitle:
    'Curso de Extensão EAD em Escrita Científica, Normas Editoriais (Vancouver/ABNT) e Publicação de Artigos Biomédicos',
  courseCategory: 'Curso de Extensão',
  periodText: '10 de abril a 05 de maio de 2023',
  totalHoursNumeric: 36,
  totalHoursWritten: '36 (trinta e seis)',
  grade: '9,6',
  status: 'APROVADO',
  bodyParagraph1:
    'concluiu com APROVAÇÃO e aproveitamento integral a Atividade Extracurricular intitulada "Curso de Extensão EAD em Escrita Científica, Normas Editoriais (Vancouver/ABNT) e Publicação de Artigos Biomédicos", desenvolvida na modalidade de Curso de Extensão, realizada no período de 10 de abril a 05 de maio de 2023, contabilizando carga horária total de 36 (trinta e seis) horas.',
  bodyParagraph2:
    'No âmbito desta formação complementar em ambiente virtual de aprendizagem, o profissional cumpriu integralmente os módulos teóricos e práticos de estruturação lógica de manuscritos biomédicos no padrão IMRD (Introdução, Métodos, Resultados e Discussão), normalização internacional de referências pelo Estilo Vancouver (ICMJE) e ABNT, ética em pesquisa científica e estratégias de submissão em periódicos indexados, obtendo nota final 9,6 (APROVADO).',
  cityAndDate: 'Goiânia - GO, 12 de maio de 2023.',
  fubogFramingTitle:
    'Item 09 - Atividades Extracurriculares: Cursos de extensão, estágios em instituições de ensino, cursos de língua e de computação, aprovação em concursos, congressos médicos (Pelo menos 30 horas por certificado)',
  fubogFramingSummary:
    'Período: 10 de abril a 05 de maio de 2023 | Total: 36h (APROVADO - Nota 9,6)',
  section3Title: '3. MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA (36 HORAS)',
  axes: [
    {
      id: 'eixo-1',
      title: 'Eixo I — Delineamento de Pesquisa e Arquitetura IMRD',
      subtitle: 'Redação Científica Biomédica e Estruturação de Manuscritos',
      description:
        'Formulação da pergunta de pesquisa clínica, construção da Introdução fundamentada, descrição reprodutível de Materiais e Métodos, apresentação de Resultados em tabelas/figuras e Discussão.',
      hours: '10h 00min',
    },
    {
      id: 'eixo-2',
      title: 'Eixo II — Normalização Documental Internacional (Vancouver e ABNT)',
      subtitle: 'Diretrizes do ICMJE, Citações Diretas/Indiretas e Indexação Descritiva',
      description:
        'Padronização de referências bibliográficas segundo o International Committee of Medical Journal Editors (Estilo Vancouver) e normas ABNT (NBR 6023/10520), com uso de descritores DeCS/MeSH.',
      hours: '08h 00min',
    },
    {
      id: 'eixo-3',
      title: 'Eixo III — Ética Editorial, Integridade Científica e Fluxo Peer Review',
      subtitle: 'Boas Práticas em Publicação Médica, COPE e Periódicos com Corpo Editorial',
      description:
        'Diretrizes éticas em pesquisa biomédica, prevenção ao plágio e autoplágio, escolha de periódicos científicos com ISSN e corpo editorial, carta de apresentação (cover letter) e revisão por pares.',
      hours: '10h 00min',
    },
    {
      id: 'eixo-4',
      title: 'Eixo IV — Estudo Dirigido em Literatura Metodológica e Avaliação Final',
      subtitle: 'Prática de Revisão Crítica de Artigos e Exame de Certificação',
      description:
        'Leitura dirigida do guia metodológico da Editora Mente e Saúde, análise estrutural de artigos médicos publicados e aprovação na avaliação somativa online com aproveitamento de 96% (Nota 9,6).',
      hours: '08h 00min',
    },
  ],
  averbacaoText:
    'Certificado registrado sob o nº 01 no Livro de Extensão e Cursos nº 01/2023, Folha 18, expedido pela Editora Mente e Saúde (CNPJ: 51.372.335/0001-71) e Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83).',
  leftSignerName: 'BÁRBARA LIMA DOS SANTOS',
  leftSignerRole: 'Editora-Chefe e Coordenadora de Extensão Editorial',
  leftSignerEntity: 'Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)',
  rightSignerName: 'JAMES ARAÚJO DE SANTANA',
  rightSignerRole: 'Coordenador de Extensão e Projetos Educativos',
  rightSignerEntity: 'Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)',
};

export const CERTIFICATE_02_COMPUTACAO: CertificateData = {
  id: 'cert-02',
  certNumber: '02',
  bookNumber: '01/2023',
  sheetNumber: '24',
  code: 'EMS-CMP-2023-0902',
  altCodes: ['0902-7027-9457-8B4D'],
  controlKey: '0902-7027-9457-8B4D',
  sha256: '7b3e9a14c8d02f65a1928e40c6b51d29e8f17a63b4c52d90f1837e2a5b6c0902',
  verificationDomain: 'https://computacao-aplicada-saude.vercel.app/',
  mainTitleFront: 'CERTIFICADO DE CURSO DE COMPUTAÇÃO',
  backHeaderTitle: 'MEMORIAL DESCRITIVO E REGISTRO ACADÊMICO DE ATIVIDADE EXTRACURRICULAR',
  backHeaderSubtitle: 'Verso Oficial do Certificado Nº 02 · Fé Pública Interinstitucional e Validação Curricular',
  holderName: 'LUCAS GONÇALVES SILVEIRA',
  holderRole: 'Médico',
  holderCpf: '702.794.941-57',
  holderInstitution: 'Centro Universitário Alfredo Nasser (UNIFAN)',
  openingTextLine1:
    'A Editora Mente e Saúde (CNPJ: 51.372.335/0001-71), em parceria institucional com o Centro Profissionalizante Maria Dalva de Araújo (CNPJ:',
  openingTextLine2:
    '51.269.112/0001-83), certifica para os devidos fins de comprovação curricular, acadêmica e de títulos (Lei nº 9.394/96) que',
  courseTitle:
    'Curso de Computação Aplicada: Planilhas Eletrônicas (Excel/Sheets), Armazenamento em Nuvem e Gestão Digital em Saúde',
  courseCategory: 'Curso de Computação',
  periodText: '10 de julho a 04 de agosto de 2023',
  totalHoursNumeric: 32,
  totalHoursWritten: '32 (trinta e duas)',
  grade: '9,8',
  status: 'APROVADO',
  bodyParagraph1:
    'concluiu com APROVAÇÃO e aproveitamento integral a Atividade Extracurricular intitulada "Curso de Computação Aplicada: Planilhas Eletrônicas (Excel/Sheets), Armazenamento em Nuvem e Gestão Digital em Saúde", desenvolvida na modalidade de Curso de Computação, realizada no período de 10 de julho a 04 de agosto de 2023, contabilizando carga horária total de 32 (trinta e duas) horas.',
  bodyParagraph2:
    'No âmbito desta formação complementar em ambiente virtual de aprendizagem, o profissional cumpriu integralmente os módulos teóricos e práticos de estruturação de planilhas clínicas (Microsoft Excel e Google Sheets), tabelas dinâmicas, fórmulas estatísticas e gráficos para indicadores assistenciais, arquitetura de armazenamento em nuvem (Google Workspace) e segurança digital em saúde (LGPD), obtendo nota final 9,8 (APROVADO).',
  cityAndDate: 'Goiânia - GO, 11 de agosto de 2023.',
  fubogFramingTitle:
    'Item 09 - Atividades Extracurriculares: Cursos de extensão, estágios em instituições de ensino, cursos de língua e de computação, aprovação em concursos, congressos médicos (Pelo menos 30 horas por certificado)',
  fubogFramingSummary:
    'Período: 10 de julho a 04 de agosto de 2023 | Total: 32h (APROVADO - Nota 9,8)',
  section3Title: '3. MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA (32 HORAS)',
  axes: [
    {
      id: 'eixo-1',
      title: 'Eixo I — Planilhas Eletrônicas Aplicadas à Clínica (Excel e Sheets)',
      subtitle: 'Estruturação Tabular, Funções Lógicas e Automação de Calculadoras',
      description:
        'Modelagem de bancos de dados clínicos, funções lógicas e de busca (SE, CONT.SES, PROCV/PROCX, QUERY), validação de dados de prontuários e automação de escores clínicos.',
      hours: '08h 00min',
    },
    {
      id: 'eixo-2',
      title: 'Eixo II — Tabelas Dinâmicas e Gráficos Estatísticos em Saúde',
      subtitle: 'Análise Descritiva, Séries Históricas e Painéis Epidemiológicos',
      description:
        'Construção prática de Tabelas Dinâmicas (Pivot Tables), cálculo automatizado de média, desvio-padrão, taxa de ocupação hospitalar e gráficos de indicadores assistenciais.',
      hours: '08h 00min',
    },
    {
      id: 'eixo-3',
      title: 'Eixo III — Arquitetura de Armazenamento em Nuvem (Workspace)',
      subtitle: 'Sincronização Multiusuário, Controle de Versão e Fluxo Colaborativo',
      description:
        'Organização hierárquica de diretórios clínicos em nuvem (Google Drive, Docs e Sheets), gerenciamento de permissões para equipes médicas e rotinas de backup seguro.',
      hours: '08h 00min',
    },
    {
      id: 'eixo-4',
      title: 'Eixo IV — Gestão Digital em Saúde, Segurança de Dados e LGPD',
      subtitle: 'Anonimização de Dados Sensíveis e Exame Prático de Certificação',
      description:
        'Aplicação da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) em registros médicos, pseudonimização de planilhas de pesquisa e aprovação na avaliação final com nota 9,8.',
      hours: '08h 00min',
    },
  ],
  averbacaoText:
    'Certificado registrado sob o nº 02 no Livro de Extensão e Cursos nº 01/2023, Folha 24, expedido pela Editora Mente e Saúde (CNPJ: 51.372.335/0001-71) e Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83).',
  leftSignerName: 'BÁRBARA LIMA DOS SANTOS',
  leftSignerRole: 'Editora-Chefe e Coordenadora de Extensão Editorial',
  leftSignerEntity: 'Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)',
  rightSignerName: 'JAMES ARAÚJO DE SANTANA',
  rightSignerRole: 'Coordenador de Extensão e Projetos Educativos',
  rightSignerEntity: 'Centro Profissionalizante Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)',
};

export const ALL_CERTIFICATES: CertificateData[] = [
  CERTIFICATE_03_MEDICAL_ENGLISH,
  CERTIFICATE_01_ESCRITA_CIENTIFICA,
  CERTIFICATE_02_COMPUTACAO,
];

export const CLINICAL_ABSTRACT_SEGMENTS: AbstractSegment[] = [
  {
    id: 'seg-bg',
    section: 'BACKGROUND',
    englishText:
      'Early intensive glycemic control and sodium-glucose cotransporter 2 (SGLT2) inhibition have been proposed to attenuate microvascular retinal progression in patients with type 2 diabetes mellitus and high cardiovascular risk.',
    portugueseTranslation:
      'O controle glicêmico intensivo precoce e a inibição do cotransportador de sódio-glicose 2 (SGLT2) têm sido propostos para atenuar a progressão microvascular retiniana em pacientes com diabetes mellitus tipo 2 e alto risco cardiovascular.',
    skimmingNote:
      'Tópico frasal + lacuna clínica: Identifica imediatamente a intervenção (inibidores de SGLT2) e o desfecho-alvo (progressão microvascular retiniana).',
    scanningMetrics: 'Alvo populacional: DM2 + Alto Risco CV',
    meshTerms: [
      'Sodium-Glucose Transporter 2 Inhibitors',
      'Diabetic Retinopathy',
      'Diabetes Mellitus, Type 2',
      'Microvessels',
    ],
    grammarAndCognatesNote:
      'Voz passiva no Present Perfect ("have been proposed") indica consenso ou hipótese recente na literatura sem restringir a um único autor. "Attenuate" = atenuar/reduzir.',
  },
  {
    id: 'seg-methods',
    section: 'METHODS',
    englishText:
      'In this multicenter, double-blind, randomized controlled trial, we assigned 4,820 patients across 38 tertiary centers in a 1:1 ratio to receive either empagliflozin (10 mg once daily) or matching placebo for a median follow-up of 36 months.',
    portugueseTranslation:
      'Neste ensaio clínico controlado, randomizado, duplo-cego e multicêntrico, alocamos 4.820 pacientes em 38 centros terciários, na proporção de 1:1, para receber empagliflozina (10 mg uma vez ao dia) ou placebo correspondente por um seguimento mediano de 36 meses.',
    skimmingNote:
      'Delineamento metodológico padrão-ouro: Ensaio Clínico Randomizado (RCT) duplo-cego multicêntrico.',
    scanningMetrics: 'n = 4.820 | 38 centros | 10 mg/dia | 36 meses (mediana)',
    meshTerms: [
      'Randomized Controlled Trials as Topic',
      'Double-Blind Method',
      'Follow-Up Studies',
    ],
    grammarAndCognatesNote:
      'Atenção a "assigned" (alocados/designados, nunca "assinados") e "once daily" (posologia de 1x/dia, equivalente a QD).',
  },
  {
    id: 'seg-results',
    section: 'RESULTS',
    englishText:
      'A primary composite microvascular outcome event occurred in 198 of 2,410 patients (8.2%) in the intervention group as compared with 289 of 2,410 patients (12.0%) in the placebo group (hazard ratio, 0.67; 95% confidence interval [CI], 0.56 to 0.80; P < 0.001). Severe adverse events were comparable between arms.',
    portugueseTranslation:
      'Um evento do desfecho primário microvascular composto ocorreu em 198 de 2.410 pacientes (8,2%) no grupo intervenção, em comparação com 289 de 2.410 pacientes (12,0%) no grupo placebo (razão de risco [Hazard Ratio], 0,67; intervalo de confiança [IC] de 95%, 0,56 a 0,80; P < 0,001). Eventos adversos graves foram comparáveis entre os braços.',
    skimmingNote:
      'Desfecho positivo estatisticamente significante: Redução de 33% no risco relativo do desfecho microvascular.',
    scanningMetrics: '8,2% vs 12,0% | HR 0,67 (IC 95% 0,56–0,80) | P < 0,001',
    meshTerms: [
      'Treatment Outcome',
      'Confidence Intervals',
      'Proportional Hazards Models',
    ],
    grammarAndCognatesNote:
      'Falso cognato clássico: "Severe adverse events" traduz-se tecnicamente como "Eventos adversos GRAVES" (e não "severos"). "Arms" = braços do ensaio clínico.',
  },
  {
    id: 'seg-conclusion',
    section: 'CONCLUSIONS',
    englishText:
      'Among patients with type 2 diabetes at elevated cardiovascular risk, SGLT2 inhibition significantly lowered the risk of clinically significant retinal progression without increasing treatment-limiting toxicity.',
    portugueseTranslation:
      'Entre pacientes com diabetes tipo 2 sob risco cardiovascular elevado, a inibição de SGLT2 reduziu significativamente o risco de progressão retiniana clinicamente significativa, sem aumentar a toxicidade limitante do tratamento.',
    skimmingNote:
      'Síntese aplicável à prática clínica (Take-home message): Eficácia protetora confirmada com perfil de segurança favorável.',
    scanningMetrics: 'Redução significativa sem toxicidade limitante',
    meshTerms: ['Evidence-Based Medicine', 'Practice Guidelines as Topic'],
    grammarAndCognatesNote:
      'Grupo nominal complexo: "treatment-limiting toxicity" deve ser lido de trás para frente ("toxicidade limitante do tratamento").',
  },
];

export const FALSE_COGNATES_DATA: FalseCognateItem[] = [
  {
    id: 'fc-1',
    englishTerm: 'Severe',
    wrongLiteralTranslation: 'Severo',
    correctMedicalTranslation: 'Grave / Intenso / Acentuado',
    clinicalExampleEn: 'The patient presented with severe acute respiratory distress.',
    clinicalExamplePt: 'O paciente apresentou desconforto respiratório agudo grave.',
    category: 'Clínica Médica',
  },
  {
    id: 'fc-2',
    englishTerm: 'Injury',
    wrongLiteralTranslation: 'Injúria (calúnia moral)',
    correctMedicalTranslation: 'Lesão / Trauma / Dano Tecidual',
    clinicalExampleEn: 'Acute kidney injury (AKI) was reversible after fluid resuscitation.',
    clinicalExamplePt: 'A lesão renal aguda (LRA) foi reversível após ressuscitação volêmica.',
    category: 'Cirurgia & Trauma',
  },
  {
    id: 'fc-3',
    englishTerm: 'Condition / Disorder',
    wrongLiteralTranslation: 'Condição social / Desordem física',
    correctMedicalTranslation: 'Afecção / Patologia / Quadro Clínico / Distúrbio',
    clinicalExampleEn: 'Autoimmune thyroid disorders require longitudinal monitoring.',
    clinicalExamplePt: 'Distúrbios tireoidianos autoimunes requerem monitoramento longitudinal.',
    category: 'Clínica Médica',
  },
  {
    id: 'fc-4',
    englishTerm: 'Drug / Medication',
    wrongLiteralTranslation: 'Droga ilícita (sentido leigo)',
    correctMedicalTranslation: 'Fármaco / Medicamento',
    clinicalExampleEn: 'Adverse drug reactions were documented in phase III trials.',
    clinicalExamplePt: 'Reações adversas a medicamentos foram documentadas nos ensaios de fase III.',
    category: 'Farmacologia',
  },
  {
    id: 'fc-5',
    englishTerm: 'Actually',
    wrongLiteralTranslation: 'Atualmente (Nowadays / Currently)',
    correctMedicalTranslation: 'Na verdade / De fato / Realmente',
    clinicalExampleEn: 'The biomarker actually reflects endothelial inflammation.',
    clinicalExamplePt: 'O biomarcador, na verdade, reflete inflamação endotelial.',
    category: 'Epidemiologia',
  },
  {
    id: 'fc-6',
    englishTerm: 'Preservative',
    wrongLiteralTranslation: 'Preservativo (Condom)',
    correctMedicalTranslation: 'Conservante (em colírios, vacinas e soluções)',
    clinicalExampleEn: 'Preservative-free ophthalmic solutions reduce corneal toxicity.',
    clinicalExamplePt: 'Soluções oftálmicas sem conservantes reduzem a toxicidade corneana.',
    category: 'Farmacologia',
  },
];

export const MEDICAL_ENGLISH_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    excerptEn:
      '"Patients were randomly assigned in a 1:1 ratio to receive preservative-free artificial tears or vehicle control."',
    sourceJournal: 'Módulo IV — Diretrizes Internacionais e Farmacologia Clínica',
    questionPt:
      'Qual é a tradução técnica correta do termo composto "preservative-free artificial tears" no contexto médico-oftalmológico?',
    options: [
      'Lágrimas artificiais livres de conservantes',
      'Lágrimas artificiais com ação preventiva gratuita',
      'Colírios lubrificantes com preservativos estéreis',
      'Soluções oculares de preservação prolongada',
    ],
    correctIndex: 0,
    explanationPt:
      'Em inglês farmacêutico, "preservative" significa "conservante" (como o cloreto de benzalcônio). Portanto, "preservative-free" significa "sem conservantes / livre de conservantes".',
  },
  {
    id: 'q2',
    excerptEn:
      '"The Hazard Ratio for the primary composite endpoint was 0.72 (95% CI, 0.61 to 0.85; P < 0.001)."',
    sourceJournal: 'Módulo III — Leitura de Ensaios Clínicos (Padrão IMRaD)',
    questionPt:
      'Utilizando a técnica de Scanning Estatístico, o que os números deste trecho permitem concluir imediatamente?',
    options: [
      'Houve redução estatisticamente significante de 28% no risco do desfecho primário composto, pois o IC 95% não cruza 1,00.',
      'Houve aumento de 72% na mortalidade do grupo intervenção sem significância estatística.',
      'O estudo foi inconclusivo porque o valor de P foi inferior a 0,001.',
      'Apenas 72% dos pacientes completaram o protocolo de acompanhamento.',
    ],
    correctIndex: 0,
    explanationPt:
      'Um Hazard Ratio (HR) de 0,72 indica redução de 28% (1 - 0,72 = 0,28) no risco do evento, e o Intervalo de Confiança de 95% (0,61 a 0,85) inteiramente abaixo de 1,0 com P < 0,001 confirma significância estatística.',
  },
  {
    id: 'q3',
    excerptEn:
      '"Acute kidney injury (AKI) and severe hepatic impairment were defined as exclusion criteria."',
    sourceJournal: 'Módulo I — Falsos Cognatos e Terminologia Clínica',
    questionPt:
      'Na tradução médica culta para o português brasileiro, como devem ser traduzidos "Acute kidney injury" e "severe hepatic impairment"?',
    options: [
      'Lesão renal aguda e insuficiência/comprometimento hepático grave',
      'Injúria renal atual e impedimento hepático severo',
      'Trauma renal agudo e disfunção biliar moderada',
      'Infecção renal aguda e estenose hepática severa',
    ],
    correctIndex: 0,
    explanationPt:
      '"Injury" em nefrologia e patologia traduz-se por "lesão" (Lesão Renal Aguda - LRA), "severe" traduz-se por "grave" ou "acentuado", e "impairment" por "comprometimento" ou "insuficiência".',
  },
];
