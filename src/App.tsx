/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Download,
  Printer,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  Award,
  Lock,
} from 'lucide-react';
import { CERTIFICATE_03_MEDICAL_ENGLISH } from './data/certificatesData';
import {
  LOGO_EDITORA_BASE64,
  LOGO_CENTRO_BASE64,
} from './assets/certAssets';
import {
  downloadCertificateVectorPdf,
  getFullVerificationUrl,
} from './utils/pdfGenerator';
import { CertificateSheet } from './components/CertificateSheet';
import { MedicalEnglishLab } from './components/MedicalEnglishLab';
import { PublicValidator } from './components/PublicValidator';

export default function App() {
  // Official, immutable Certificate #03 record
  const certData = CERTIFICATE_03_MEDICAL_ENGLISH;

  const [visiblePages, setVisiblePages] = useState<'both' | 'page1' | 'page2'>(
    'both'
  );
  const [zoomScale, setZoomScale] = useState<number>(1.0);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    try {
      await downloadCertificateVectorPdf(certData);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const handleBrowserPrint = () => {
    setVisiblePages('both');
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const fullVerificationUrl = getFullVerificationUrl(certData);
  const officialPdfFilename = `Certificado_Extensao_${certData.certNumber}_${certData.code}_LUCAS_GONCALVES_SILVEIRA.pdf`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* =================================================================== */}
      {/* TOP BAR CONTRACT (3 ZONES: Brand | 4 Single-Line Nav Links | 1 CTA)  */}
      {/* =================================================================== */}
      <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Single Text Element Wordmark */}
          <a
            href="#"
            className="text-base font-bold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0"
          >
            Mente &amp; Saúde · Medical English
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#ementa"
              className="hover:text-[#0B1F3A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Matriz Curricular (40h)
            </a>
            <a
              href="#laboratorio"
              className="hover:text-[#0B1F3A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Laboratório Clínico
            </a>
            <a
              href="#certificado-oficial"
              className="hover:text-[#0B1F3A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Certificado Oficial (PDF)
            </a>
            <a
              href="#validador"
              className="hover:text-[#0B1F3A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Validador Público
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="px-4 py-2 text-xs font-bold text-white bg-[#064E3B] hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isDownloadingPdf
                ? 'Gerando PDF Oficial...'
                : 'Baixar Certificado PDF'}
            </button>
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* HERO SECTION & INSTITUTIONAL OVERVIEW (NO-PRINT)                    */}
      {/* =================================================================== */}
      <section className="no-print bg-[#0B1F3A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
          {/* 2-Column Hero Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left 7 Cols: Course Narrative & Institutional Authority */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-300 mb-4">
                  <span>PROGRAMA INTERINSTITUCIONAL DE EXTENSÃO</span>
                  <span aria-hidden="true">·</span>
                  <span>ITEM 09 DO EDITAL</span>
                  <span aria-hidden="true">·</span>
                  <span>CÓD. {certData.code}</span>
                </div>

                <h1
                  className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.14]"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    textWrap: 'balance',
                  }}
                >
                  Curso Online de Língua Inglesa Instrumental (Medical English):
                  Leitura e Tradução de Artigos Científicos em Saúde
                </h1>

                <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl">
                  Formação complementar interinstitucional promovida pela{' '}
                  <strong className="text-white font-semibold">
                    Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)
                  </strong>{' '}
                  em parceria com o{' '}
                  <strong className="text-white font-semibold">
                    Centro Profissionalizante Maria Dalva de Araújo (CNPJ:
                    51.269.112/0001-83)
                  </strong>
                  , estruturada em 40 horas de prática intensiva em leitura
                  instrumental (<em>Skimming</em> e <em>Scanning</em>),
                  terminologia médica internacional MeSH/PubMed, análise de{' '}
                  <em>abstracts</em> no padrão IMRaD e tradução técnica de{' '}
                  <em>Clinical Guidelines</em>.
                </p>
              </div>

              {/* Primary Hero Actions */}
              <div className="mt-8 pt-6 border-t border-slate-800/90 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="px-5 py-3 bg-[#D97805] hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {isDownloadingPdf
                      ? 'Gerando PDF Oficial...'
                      : 'Baixar Certificado Oficial (PDF 2 Laudas)'}
                  </span>
                </button>

                <a
                  href="#certificado-oficial"
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <FileText className="w-4 h-4 text-emerald-300" />
                  <span>Visualizar Certificado (2 Laudas A4)</span>
                </a>

                <a
                  href="#validador"
                  className="px-4 py-3 bg-transparent hover:bg-slate-800/60 text-emerald-300 border border-emerald-700/60 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Autenticador Público (#validador)</span>
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Official Institutional Dossier Card */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={LOGO_EDITORA_BASE64}
                      alt="Brasão Editora Mente e Saúde"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded bg-white p-0.5 object-contain shrink-0"
                    />
                    <img
                      src={LOGO_CENTRO_BASE64}
                      alt="Emblema Centro Profissionalizante Maria Dalva de Araújo"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full bg-white p-0.5 object-contain shrink-0"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-amber-300 uppercase">
                      Registro de Fé Pública
                    </div>
                    <div className="text-sm font-mono font-bold text-white">
                      {certData.code}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">
                      Profissional Titular Certificado:
                    </span>
                    <span
                      className="text-lg font-bold text-white tracking-wide block mt-0.5"
                      style={{
                        fontFamily: '"Libre Baskerville", Georgia, serif',
                      }}
                    >
                      {certData.holderName}
                    </span>
                    <span className="text-slate-300 font-medium">
                      {certData.holderRole} · CPF: {certData.holderCpf} ·{' '}
                      {certData.holderInstitution}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-400 block">
                        Enquadramento Edital:
                      </span>
                      <span className="font-semibold text-emerald-300">
                        Item 09 · {certData.courseCategory}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">
                        Período e Carga Horária:
                      </span>
                      <span className="font-mono tabular-nums font-semibold text-white">
                        {certData.totalHoursNumeric} horas (Nota {certData.grade})
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block">
                      Chave de Controle &amp; Verificação Online:
                    </span>
                    <div className="font-mono text-amber-300 font-semibold mt-0.5">
                      Chave: {certData.controlKey}
                    </div>
                    <div className="font-mono text-[11px] text-slate-300 truncate mt-0.5">
                      {fullVerificationUrl}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-mono font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>2 Laudas (Frente e Verso A4)</span>
                </span>
                <span className="text-slate-400 font-mono">
                  Livro {certData.bookNumber} · Folha {certData.sheetNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column KPI Strip Below Hero Split */}
          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                Carga Horária Auditada
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                40 Horas
              </div>
              <div className="text-xs text-emerald-300 mt-0.5">
                4 Eixos Programáticos de 10h 00min
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                Período de Realização
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                Set–Nov/2023
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                11 de setembro a 10 de novembro de 2023
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                Aproveitamento Final
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-amber-300 mt-1">
                Nota 9,8 / 10
              </div>
              <div className="text-xs text-emerald-300 mt-0.5">
                Aprovado com 100% de frequência EAD
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                Rastreabilidade Digital
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                SHA-256 + QR
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Dupla chancela institucional (Lei 9.394/96)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* COURSE SYLLABUS & METHODOLOGICAL ARCHITECTURE (NO-PRINT)            */}
      {/* =================================================================== */}
      <section id="ementa" className="no-print py-16 bg-[#F8FAFC] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#0D4A3A] mb-2">
                Matriz Curricular Oficial · Item 09 do Edital de Análise
                Curricular
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  textWrap: 'balance',
                }}
              >
                Estrutura Programática e Escopo Pedagógico do Curso (40 Horas)
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
              Cada eixo abaixo compõe o Memorial Descritivo averbado no Verso
              Oficial (Lauda 2) do certificado, assegurando plena aderência aos
              requisitos de Cursos de Língua do Item 09 (mínimo de 30 horas).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certData.axes.map((axis, idx) => (
              <div
                key={axis.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 pb-3 mb-3 border-b border-slate-100">
                    <span className="font-bold text-[#0D4A3A]">
                      EIXO 0{idx + 1} · FORMAÇÃO INSTRUMENTAL EM SAÚDE
                    </span>
                    <span className="font-bold tabular-nums text-[#0B1F3A]">
                      Carga Horária: {axis.hours}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F3A] leading-snug">
                    {axis.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0D4A3A] mt-1 mb-3">
                    {axis.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {axis.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Avaliação Prática: Leitura e Tradução Guiada</span>
                  <span className="text-emerald-700 font-semibold font-mono">
                    ✓ Cumprido Integralmente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* INTERACTIVE MEDICAL ENGLISH LABORATORY (NO-PRINT)                   */}
      {/* =================================================================== */}
      <div className="no-print">
        <MedicalEnglishLab />
      </div>

      {/* =================================================================== */}
      {/* OFFICIAL READ-ONLY EMBEDDED PDF VIEWER (2 LAUDAS A4 PAISAGEM)       */}
      {/* =================================================================== */}
      <section
        id="certificado-oficial"
        className="py-16 bg-slate-100 border-t border-slate-200 scroll-mt-12 print-only-container"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header (Hidden in Print) */}
          <div className="no-print flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0D4A3A] uppercase mb-1.5">
                <Award className="w-4 h-4" />
                <span>
                  Via Oficial Digitalizada · Formato A4 Paisagem (297mm × 210mm)
                  · 2 Laudas
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Certificado Oficial Nº {certData.certNumber} ({certData.code}) —
                Visualização Integrada em PDF
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleBrowserPrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Certificado (A4 Paisagem)</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isDownloadingPdf}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold bg-[#064E3B] hover:bg-emerald-900 text-white rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>
                  {isDownloadingPdf
                    ? 'Gerando Arquivo PDF...'
                    : 'Baixar Certificado em PDF (2 Laudas)'}
                </span>
              </button>
            </div>
          </div>

          {/* Embedded PDF Reader Frame */}
          <div className="bg-[#1E293B] rounded-xl border border-slate-700 shadow-2xl overflow-hidden print:bg-transparent print:border-none print:shadow-none">
            {/* Top PDF Reader Toolbar (Hidden in Print) */}
            <div className="no-print bg-[#0F172A] text-slate-200 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              {/* Left: PDF File Info & Tamper-Proof Lock */}
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-xs text-white font-semibold truncate">
                  {officialPdfFilename}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-300">
                  <Lock className="w-3 h-3" />
                  <span>Somente Leitura · Fé Pública</span>
                </span>
              </div>

              {/* Center: Page Selector */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setVisiblePages('both')}
                  className={`px-3 py-1 rounded font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    visiblePages === 'both'
                      ? 'bg-[#064E3B] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2 Laudas (Frente e Verso)
                </button>
                <button
                  type="button"
                  onClick={() => setVisiblePages('page1')}
                  className={`px-3 py-1 rounded font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    visiblePages === 'page1'
                      ? 'bg-[#064E3B] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lauda 1 (Frente)
                </button>
                <button
                  type="button"
                  onClick={() => setVisiblePages('page2')}
                  className={`px-3 py-1 rounded font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    visiblePages === 'page2'
                      ? 'bg-[#064E3B] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lauda 2 (Verso)
                </button>
              </div>

              {/* Right: Zoom Controls & Direct PDF Download */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() =>
                      setZoomScale((z) => Math.max(0.65, +(z - 0.1).toFixed(2)))
                    }
                    title="Diminuir Zoom"
                    className="p-1 text-slate-300 hover:text-white rounded cursor-pointer"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 font-bold tabular-nums text-white">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setZoomScale((z) => Math.min(1.2, +(z + 0.1).toFixed(2)))
                    }
                    title="Aumentar Zoom"
                    className="p-1 text-slate-300 hover:text-white rounded cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-[#D97805] hover:bg-amber-600 text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar PDF</span>
                </button>
              </div>
            </div>

            {/* PDF Canvas Viewport */}
            <div className="p-4 sm:p-8 lg:p-10 flex flex-col items-center overflow-x-auto bg-[#334155] print:p-0 print:bg-transparent">
              <div
                className="cert-scale-wrapper origin-top transition-transform duration-150"
                style={{
                  transform: `scale(${zoomScale})`,
                  marginBottom:
                    visiblePages === 'both'
                      ? `${(zoomScale - 1) * 1220}px`
                      : `${(zoomScale - 1) * 600}px`,
                }}
              >
                <CertificateSheet
                  cert={certData}
                  visiblePages={visiblePages}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* PUBLIC AUTHENTICATOR SECTION (#validador) (NO-PRINT)                */}
      {/* =================================================================== */}
      <div className="no-print">
        <PublicValidator
          cert={certData}
          onDownloadPdf={handleDownloadPdf}
        />
      </div>

      {/* =================================================================== */}
      {/* QUIET INSTITUTIONAL FOOTER (NO-PRINT)                               */}
      {/* =================================================================== */}
      <footer className="no-print bg-[#081528] text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-white font-bold text-sm">
              Programa Interinstitucional de Extensão, Comunicação Científica e
              Educação em Saúde
            </div>
            <div>
              Editora Mente e Saúde (CNPJ: 51.372.335/0001-71) &nbsp;·&nbsp;
              Centro Profissionalizante Maria Dalva de Araújo (CNPJ:
              51.269.112/0001-83)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300 font-mono">
            <span>Registro Oficial: {certData.code}</span>
            <span aria-hidden="true">·</span>
            <span>Chave: {certData.controlKey}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="text-amber-300 hover:underline cursor-pointer"
            >
              Baixar PDF Oficial (2 Laudas)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
