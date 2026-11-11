import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Search,
  Download,
  FileText,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { CertificateData } from '../types/certificate';
import { getFullVerificationUrl } from '../utils/pdfGenerator';

interface PublicValidatorProps {
  cert: CertificateData;
  onDownloadPdf: () => void;
}

export const PublicValidator: React.FC<PublicValidatorProps> = ({
  cert,
  onDownloadPdf,
}) => {
  const [queryInput, setQueryInput] = useState<string>(cert.code);
  const [isValidMatch, setIsValidMatch] = useState<boolean>(true);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [autoDetectedFromUrl, setAutoDetectedFromUrl] = useState<boolean>(false);

  const checkIsValid = (rawQuery: string): boolean => {
    const q = rawQuery.trim().toUpperCase();
    if (!q) return false;
    return (
      cert.code.toUpperCase() === q ||
      cert.controlKey.toUpperCase() === q ||
      cert.sha256.toUpperCase() === q ||
      cert.altCodes.some((alt) => alt.toUpperCase() === q)
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codigoParam =
      params.get('codigo') || params.get('chave') || params.get('code');

    if (codigoParam) {
      setQueryInput(codigoParam);
      setIsValidMatch(checkIsValid(codigoParam));
      setAutoDetectedFromUrl(true);

      if (window.location.hash === '#validador') {
        setTimeout(() => {
          document
            .getElementById('validador')
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    } else {
      setQueryInput(cert.code);
      setIsValidMatch(true);
    }
  }, [cert]);

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidMatch(checkIsValid(queryInput));

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('codigo', queryInput.trim().toUpperCase());
      url.hash = 'validador';
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore history errors in restricted sandboxes
    }
  };

  const handleQuickFill = (codeToFill: string) => {
    setQueryInput(codeToFill);
    setIsValidMatch(checkIsValid(codeToFill));
  };

  const handleCopyVerificationLink = () => {
    const url = getFullVerificationUrl(cert);
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <section
      id="validador"
      className="py-16 bg-[#0B1F3A] text-white border-t border-slate-800 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sistema Oficial de Verificação Pública de Autenticidade</span>
              <span aria-hidden="true">·</span>
              <span>Lei nº 9.394/96 (LDB)</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white tracking-tight"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                textWrap: 'balance',
              }}
            >
              Validador Eletrônico de Certificados e Registro de Fé Pública
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
              Consulte a autenticidade documental informando o{' '}
              <strong className="text-white">Código de Autenticidade</strong>, a{' '}
              <strong className="text-white">Chave de Controle</strong> ou o{' '}
              <strong className="text-white">Hash Criptográfico SHA-256</strong>{' '}
              constante no documento oficial.
            </p>
          </div>

          {/* Quick Consultation Triggers for Code & Key */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1">
              Chaves Oficiais do Registro:
            </span>
            <button
              type="button"
              onClick={() => handleQuickFill(cert.code)}
              className="px-3 py-1.5 text-xs font-mono font-semibold bg-emerald-950/90 text-emerald-200 border border-emerald-700/70 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Cód.: {cert.code}
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill(cert.controlKey)}
              className="px-3 py-1.5 text-xs font-mono font-semibold bg-slate-800 text-amber-300 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Chave: {cert.controlKey}
            </button>
          </div>
        </div>

        {/* Search Form Bar */}
        <form
          onSubmit={handleVerifySubmit}
          className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 sm:p-5 mb-8"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder={`Informe o Código (${cert.code}), Chave (${cert.controlKey}) ou Hash SHA-256...`}
                aria-label="Código de Autenticidade ou Chave de Controle"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#059669] hover:bg-emerald-500 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Consultar Autenticidade</span>
            </button>
          </div>

          {autoDetectedFromUrl && (
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>
                Verificação eletrônica acionada via parâmetro de autenticação (
                ?codigo={cert.code}#validador).
              </span>
            </div>
          )}
        </form>

        {/* Validation Result Panel */}
        {isValidMatch ? (
          <div className="bg-white text-slate-900 rounded-xl border border-emerald-500/40 shadow-xl overflow-hidden">
            {/* Top Status Banner */}
            <div className="bg-[#064E3B] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-200">
                    FÉ PÚBLICA INTERINSTITUCIONAL CONFIRMADA · REGISTRO OFICIAL
                    ATIVO
                  </div>
                  <div className="text-base sm:text-lg font-bold tracking-tight">
                    CERTIFICADO AUTÊNTICO E VÁLIDO — {cert.status} (NOTA{' '}
                    {cert.grade})
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyVerificationLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-600/60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Link de Validação Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link Oficial</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onDownloadPdf}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-[#D97805] hover:bg-amber-600 text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar PDF Oficial (2 Laudas)</span>
                </button>
              </div>
            </div>

            {/* Detailed Dossier Grid */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 7 Cols: Holder & Course Data */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1">
                    1. Identificação Oficial do Profissional Titular
                  </div>
                  <div
                    className="text-2xl font-bold text-[#0A1D56]"
                    style={{
                      fontFamily: '"Libre Baskerville", Georgia, serif',
                    }}
                  >
                    {cert.holderName}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mt-1">
                    {cert.holderRole} &nbsp;·&nbsp; CPF:{' '}
                    <span className="font-mono">{cert.holderCpf}</span>{' '}
                    &nbsp;·&nbsp; {cert.holderInstitution}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1">
                    2. Atividade Extracurricular Certificada (Item 09 do Edital)
                  </div>
                  <div className="text-base font-bold text-[#064E3B] leading-snug">
                    &ldquo;{cert.courseTitle}&rdquo;
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cert.fubogFramingTitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      Modalidade
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {cert.courseCategory}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      Carga Horária
                    </div>
                    <div className="text-sm font-bold font-mono tabular-nums text-[#064E3B] mt-0.5">
                      {cert.totalHoursNumeric} horas (4 Eixos)
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      Período
                    </div>
                    <div className="text-xs font-semibold text-slate-900 mt-0.5">
                      {cert.periodText}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      Aproveitamento
                    </div>
                    <div className="text-sm font-bold font-mono tabular-nums text-emerald-700 mt-0.5">
                      Nota {cert.grade} ({cert.status})
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Cryptographic Keys & Registry Metadata */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                <div className="space-y-3.5 text-xs">
                  <div className="font-bold text-[#0A1D56] uppercase font-mono tracking-wider pb-2 border-b border-slate-200">
                    3. Rastreabilidade e Chaves Criptográficas
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-500 block">
                        Código de Autenticidade:
                      </span>
                      <span className="font-mono font-bold text-sm text-[#064E3B]">
                        {cert.code}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">
                        Chave de Controle / Dígito:
                      </span>
                      <span className="font-mono font-bold text-sm text-[#92400E]">
                        {cert.controlKey}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block">
                      Averbação no Livro Institucional:
                    </span>
                    <span className="font-medium text-slate-800">
                      Certificado Nº {cert.certNumber} · Livro nº{' '}
                      {cert.bookNumber} · Folha {cert.sheetNumber} (
                      {cert.cityAndDate})
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">
                      Entidades Emissoras Conveniadas:
                    </span>
                    <span className="font-mono text-[11px] text-slate-800 block mt-0.5">
                      • Editora Mente e Saúde (CNPJ: 51.372.335/0001-71)
                    </span>
                    <span className="font-mono text-[11px] text-slate-800 block">
                      • Centro Prof. Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">
                      Hash Criptográfico SHA-256 (2 Laudas):
                    </span>
                    <code className="block mt-1 p-2 bg-slate-900 text-emerald-300 rounded font-mono text-[11px] break-all">
                      {cert.sha256}
                    </code>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                  <a
                    href="#certificado-oficial"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1D56] hover:text-emerald-700 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Visualizar Documento Oficial (2 Laudas)</span>
                  </a>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                    ✓ Fé Pública Confirmada
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-amber-500/40 rounded-xl p-6 flex items-start justify-between gap-4 text-amber-100">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-white">
                  Código ou Chave não localizado no registro
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Verifique se digitou corretamente o Código{' '}
                  <code className="font-mono text-amber-300">{cert.code}</code>{' '}
                  ou a Chave de Controle{' '}
                  <code className="font-mono text-amber-300">
                    {cert.controlKey}
                  </code>
                  .
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleQuickFill(cert.code)}
              className="px-3.5 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
            >
              Restaurar Código Oficial
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
