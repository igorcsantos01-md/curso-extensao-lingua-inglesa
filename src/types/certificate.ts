export interface ProgrammaticAxis {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hours: string;
}

export interface CertificateData {
  id: string;
  certNumber: string;
  bookNumber: string;
  sheetNumber: string;
  code: string;
  altCodes: string[];
  controlKey: string;
  sha256: string;
  verificationDomain: string;
  mainTitleFront: string;
  backHeaderTitle: string;
  backHeaderSubtitle: string;
  holderName: string;
  holderRole: string;
  holderCpf: string;
  holderInstitution: string;
  openingTextLine1: string;
  openingTextLine2: string;
  courseTitle: string;
  courseCategory: string;
  periodText: string;
  totalHoursNumeric: number;
  totalHoursWritten: string;
  grade: string;
  status: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  cityAndDate: string;
  fubogFramingTitle: string;
  fubogFramingSummary: string;
  section3Title: string;
  axes: ProgrammaticAxis[];
  averbacaoText: string;
  leftSignerName: string;
  leftSignerRole: string;
  leftSignerEntity: string;
  rightSignerName: string;
  rightSignerRole: string;
  rightSignerEntity: string;
}

export interface AbstractSegment {
  id: string;
  section: 'BACKGROUND' | 'METHODS' | 'RESULTS' | 'CONCLUSIONS';
  englishText: string;
  portugueseTranslation: string;
  skimmingNote: string;
  scanningMetrics?: string;
  meshTerms: string[];
  grammarAndCognatesNote: string;
}

export interface FalseCognateItem {
  id: string;
  englishTerm: string;
  wrongLiteralTranslation: string;
  correctMedicalTranslation: string;
  clinicalExampleEn: string;
  clinicalExamplePt: string;
  category: 'Clínica Médica' | 'Epidemiologia' | 'Farmacologia' | 'Cirurgia & Trauma';
}

export interface QuizQuestion {
  id: string;
  excerptEn: string;
  sourceJournal: string;
  questionPt: string;
  options: string[];
  correctIndex: number;
  explanationPt: string;
}
