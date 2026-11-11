import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Languages,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Microscope,
} from 'lucide-react';
import {
  CLINICAL_ABSTRACT_SEGMENTS,
  FALSE_COGNATES_DATA,
  MEDICAL_ENGLISH_QUIZ,
} from '../data/certificatesData';

type ReadingLens = 'skimming' | 'scanning' | 'mesh' | 'translation';

export const MedicalEnglishLab: React.FC = () => {
  const [activeLens, setActiveLens] = useState<ReadingLens>('skimming');
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(
    CLINICAL_ABSTRACT_SEGMENTS[2].id
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const activeSegment =
    CLINICAL_ABSTRACT_SEGMENTS.find((s) => s.id === selectedSegmentId) ||
    CLINICAL_ABSTRACT_SEGMENTS[0];

  const categories = [
    'Todos',
    'Clínica Médica',
    'Epidemiologia',
    'Farmacologia',
    'Cirurgia & Trauma',
  ];

  const filteredCognates =
    selectedCategory === 'Todos'
      ? FALSE_COGNATES_DATA
      : FALSE_COGNATES_DATA.filter((item) => item.category === selectedCategory);

  const handleSelectQuizOption = (questionId: string, optionIdx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
  };

  const totalAnswered = Object.keys(quizAnswers).length;
  const totalCorrect = MEDICAL_ENGLISH_QUIZ.filter(
    (q) => quizAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <section id="laboratorio" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#0D4A3A] mb-3">
            <span>Metodologia Instrumental Aplicada</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">40 Horas Acadêmicas</span>
            <span aria-hidden="true">·</span>
            <span>Padrão IMRaD &amp; MeSH/PubMed</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Laboratório Interativo de Leitura e Tradução de Artigos Científicos em
            Saúde
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Explore na prática os quatro pilares do{' '}
            <strong className="text-slate-900 font-semibold">
              Curso Online de Língua Inglesa Instrumental (Medical English)
            </strong>
            : decomposição estrutural de <em>abstracts</em> internacionais, leitura
            rápida por <em>Skimming</em> e <em>Scanning</em>, domínio de falsos
            cognatos médicos e tradução técnica comentada de diretrizes clínicas.
          </p>
        </div>

        {/* =============================================================== */}
        {/* PART 1: 2-ZONE INTERACTIVE CLINICAL ABSTRACT DECONSTRUCTOR       */}
        {/* =============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Zone (Interactive Stage - 7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              {/* Top Lens Selector Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200">
                <div>
                  <div className="text-xs text-slate-500 font-mono">
                    SIMULADOR DE LEITURA INSTRUMENTAL · ENSAIO CLÍNICO (NEJM/LANCET
                    STYLE)
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    01. Deconstrutor de Abstract Biomédico (Padrão IMRaD)
                  </h3>
                </div>

                {/* Interactive Segmented Lens Controls */}
                <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start">
                  <button
                    type="button"
                    onClick={() => setActiveLens('skimming')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeLens === 'skimming'
                        ? 'bg-[#0B1F3A] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    Skimming
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLens('scanning')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeLens === 'scanning'
                        ? 'bg-[#0D4A3A] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    Scanning (Dados)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLens('mesh')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeLens === 'mesh'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    Termos MeSH
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLens('translation')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeLens === 'translation'
                        ? 'bg-[#92400E] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    Tradução Paralela
                  </button>
                </div>
              </div>

              {/* Article Title Header inside Simulator */}
              <div className="mb-5 pb-4 border-b border-slate-200/80">
                <div className="text-xs text-slate-500 font-mono">
                  ORIGINAL ARTICLE · CLINICAL ENDOCRINOLOGY &amp; OPHTHALMIC
                  MICROVASCULAR OUTCOMES
                </div>
                <div
                  className="text-xl font-bold text-[#0B1F3A] mt-1 leading-snug"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  SGLT2 Inhibition and Microvascular Retinal Progression in Type 2
                  Diabetes Mellitus: A Multicenter Randomized Controlled Trial
                </div>
              </div>

              {/* Interactive IMRaD Segments */}
              <div className="space-y-3">
                {CLINICAL_ABSTRACT_SEGMENTS.map((segment) => {
                  const isSelected = segment.id === selectedSegmentId;
                  return (
                    <button
                      key={segment.id}
                      type="button"
                      onClick={() => setSelectedSegmentId(segment.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-white border-[#0D4A3A] ring-2 ring-[#0D4A3A]/15 shadow-xs'
                          : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#0D4A3A]">
                          {segment.section}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {isSelected
                            ? 'Em análise no painel lateral →'
                            : 'Clique para inspecionar'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-800 leading-relaxed font-normal">
                        {segment.englishText}
                      </p>
                      {activeLens === 'translation' && (
                        <p className="mt-2 pt-2 border-t border-slate-100 text-xs text-[#0B1F3A] font-medium leading-relaxed">
                          <span className="font-mono uppercase text-[11px] text-[#92400E] mr-1.5">
                            [PT-BR]:
                          </span>
                          {segment.portugueseTranslation}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>
                Selecione qualquer seção (Background, Methods, Results, Conclusions)
                para dissecar sua estrutura.
              </span>
              <span className="font-mono tabular-nums text-slate-700 font-semibold">
                Seção ativa: {activeSegment.section}
              </span>
            </div>
          </div>

          {/* Right Zone (Control & Concept Deck - 5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-xl p-6 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700/80">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                    Análise Instrumental · {activeSegment.section}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5 tracking-wide">
                    Dissecação Linguística e Metodológica
                  </h4>
                </div>
                <Microscope className="w-5 h-5 text-amber-400 shrink-0" />
              </div>

              {/* Original Excerpt Box */}
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-4 mb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Texto Original em Inglês Científico
                </div>
                <p className="text-sm text-slate-100 leading-relaxed italic">
                  &ldquo;{activeSegment.englishText}&rdquo;
                </p>
              </div>

              {/* Technical Translation Box */}
              <div className="bg-emerald-950/60 border border-emerald-700/50 rounded-lg p-4 mb-5">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-300 mb-1">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Tradução Técnica Padrão (Português Médico)</span>
                </div>
                <p className="text-sm text-emerald-50 leading-relaxed">
                  {activeSegment.portugueseTranslation}
                </p>
              </div>

              {/* Dynamic Breakdown Details */}
              <div className="space-y-4 text-sm">
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Leitura Rápida (Skimming) &amp; Função Retórica</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeSegment.skimmingNote}
                  </p>
                </div>

                {activeSegment.scanningMetrics && (
                  <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-3.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-1">
                      <Search className="w-3.5 h-3.5" />
                      <span>Varredura Quantitativa (Scanning Estatístico)</span>
                    </div>
                    <p className="text-xs font-mono tabular-nums text-white">
                      {activeSegment.scanningMetrics}
                    </p>
                  </div>
                )}

                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-3.5">
                  <div className="text-xs font-semibold text-emerald-300 mb-1">
                    Morfossintaxe, Voz Passiva &amp; Falsos Cognatos
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeSegment.grammarAndCognatesNote}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1.5">
                    DESCRITORES INDEXADOS (MeSH / MEDLINE):
                  </div>
                  <div className="text-xs text-amber-300 font-mono leading-relaxed">
                    {activeSegment.meshTerms.join('  ·  ')}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Eixos I, II, III e IV do Memorial Descritivo</span>
              <a
                href="#certificado-oficial"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Ver no Verso do Certificado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* PART 2: CLINICAL FALSE COGNATES ATLAS                           */}
        {/* =============================================================== */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono text-[#0D4A3A] uppercase tracking-wider">
                EIXO I &amp; II · PREVENÇÃO DE ERROS DE TRADUÇÃO BIOMÉDICA
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                02. Glossário Crítico de Falsos Cognatos na Literatura Médica
              </h3>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0B1F3A] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCognates.map((fc) => (
              <div
                key={fc.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono uppercase text-[#0D4A3A] font-semibold">
                      {fc.category}
                    </span>
                    <span className="font-mono">Termo em Inglês</span>
                  </div>

                  <div className="text-xl font-bold text-[#0B1F3A] font-mono mb-3">
                    &ldquo;{fc.englishTerm}&rdquo;
                  </div>

                  <div className="space-y-2 text-xs mb-4">
                    <div className="flex items-start gap-2 text-red-800 bg-red-50/80 border border-red-200/70 rounded-md p-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Armadilha Literal: </span>
                        <span className="line-through">{fc.wrongLiteralTranslation}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-emerald-900 bg-emerald-50/90 border border-emerald-200/80 rounded-md p-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Tradução Médica Correta: </span>
                        <span className="font-bold">{fc.correctMedicalTranslation}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs space-y-1">
                  <div className="text-slate-600 italic">
                    <strong className="text-slate-800 not-italic font-mono">
                      EN:{' '}
                    </strong>
                    {fc.clinicalExampleEn}
                  </div>
                  <div className="text-slate-900 font-medium">
                    <strong className="text-[#0D4A3A] font-mono">PT: </strong>
                    {fc.clinicalExamplePt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =============================================================== */}
        {/* PART 3: INTERACTIVE CLINICAL TRANSLATION PROFICIENCY QUIZ        */}
        {/* =============================================================== */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono text-[#0D4A3A] uppercase tracking-wider">
                EIXO IV · SIMULAÇÃO DO EXAME PRÁTICO DE PROFICIÊNCIA LEITORA
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                03. Teste Rápido de Interpretação e Tradução de Artigos Médicos
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs font-mono tabular-nums text-slate-700">
                Desempenho:{' '}
                <strong className="text-[#0D4A3A] text-sm">
                  {totalCorrect}/{MEDICAL_ENGLISH_QUIZ.length}
                </strong>{' '}
                acertos ({totalAnswered} respondidas)
              </div>
              {totalAnswered > 0 && (
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar Teste</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MEDICAL_ENGLISH_QUIZ.map((q, qIdx) => {
              const userChoice = quizAnswers[q.id];
              const isAnswered = userChoice !== undefined;
              const isCorrect = userChoice === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                      <span>QUESTÃO 0{qIdx + 1}</span>
                      <span>{q.sourceJournal.split('—')[0]}</span>
                    </div>

                    <div className="p-3 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono leading-relaxed mb-3">
                      {q.excerptEn}
                    </div>

                    <p className="text-sm font-bold text-[#0B1F3A] mb-3 leading-snug">
                      {q.questionPt}
                    </p>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userChoice === optIdx;
                        const isThisCorrect = q.correctIndex === optIdx;

                        let btnStyle =
                          'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle =
                              'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                          } else if (isThisSelected && !isThisCorrect) {
                            btnStyle =
                              'bg-red-50 border-red-400 text-red-900 line-through';
                          } else {
                            btnStyle =
                              'bg-slate-50/50 border-slate-200 text-slate-400';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full text-left px-3 py-2 rounded-lg border text-xs leading-snug transition-colors ${btnStyle}`}
                          >
                            <span className="font-mono font-bold mr-1.5">
                              {String.fromCharCode(65 + optIdx)})
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {isAnswered && (
                    <div
                      className={`mt-4 pt-3 border-t text-xs leading-relaxed ${
                        isCorrect
                          ? 'border-emerald-200 text-emerald-900'
                          : 'border-amber-200 text-amber-900'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {isCorrect
                            ? 'Resposta Correta — Padrão de Tradução Médica:'
                            : 'Comentário Metodológico da Banca:'}
                        </span>
                      </div>
                      <p>{q.explanationPt}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
