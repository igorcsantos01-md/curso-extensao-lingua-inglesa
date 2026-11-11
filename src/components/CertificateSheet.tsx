import React, { useEffect, useState } from 'react';
import { CertificateData } from '../types/certificate';
import {
  LOGO_EDITORA_BASE64,
  LOGO_CENTRO_BASE64,
  SIG_BARBARA_BASE64,
  SIG_JAMES_BASE64,
} from '../assets/certAssets';
import {
  generateQrCodeDataUrl,
  getCleanDomain,
  getFullVerificationUrl,
} from '../utils/pdfGenerator';

interface CertificateSheetProps {
  cert: CertificateData;
  visiblePages?: 'both' | 'page1' | 'page2';
}

export const CertificateSheet: React.FC<CertificateSheetProps> = ({
  cert,
  visiblePages = 'both',
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const fullVerifyUrl = getFullVerificationUrl(cert);
  const cleanDomain = getCleanDomain(cert.verificationDomain);

  useEffect(() => {
    let mounted = true;
    generateQrCodeDataUrl(fullVerifyUrl).then((url) => {
      if (mounted) setQrDataUrl(url);
    });
    return () => {
      mounted = false;
    };
  }, [fullVerifyUrl]);

  return (
    <div className="flex flex-col items-center gap-8 print:gap-0 w-full">
      {/* =================================================================== */}
      {/* LAUDA 1 — FRENTE DO CERTIFICADO (842px x 595px @ 1:1 pt ratio)      */}
      {/* =================================================================== */}
      {(visiblePages === 'both' || visiblePages === 'page1') && (
        <div
          id="cert-lauda-1"
          className="cert-print-page relative bg-[#FFFDF9] text-[#0F172A] shadow-2xl print:shadow-none select-text overflow-hidden shrink-0"
          style={{
            width: '842px',
            height: '595px',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          {/* Triple Institutional Borders matching exact PDF coordinates */}
          <div
            className="pointer-events-none absolute"
            style={{
              left: '14.17px',
              top: '14.17px',
              width: '813.54px',
              height: '566.93px',
              border: '2.27px solid #054F3B',
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              left: '19.28px',
              top: '19.28px',
              width: '803.34px',
              height: '556.72px',
              border: '1px solid #D97805',
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              left: '23.24px',
              top: '23.24px',
              width: '795.4px',
              height: '548.79px',
              border: '1.42px solid #0A1D56',
            }}
          />

          {/* Header Tripartido */}
          {/* Left Logo & Info */}
          <img
            src={LOGO_EDITORA_BASE64}
            alt="Logo Editora Mente e Saúde"
            referrerPolicy="no-referrer"
            className="absolute object-contain"
            style={{
              left: '39.69px',
              top: '34.02px',
              width: '56.69px',
              height: '56.69px',
            }}
          />
          <div
            className="absolute leading-tight"
            style={{ left: '104.88px', top: '42.5px' }}
          >
            <div className="font-bold text-[8.5px] text-[#064E3B] tracking-tight">
              EDITORA MENTE E SAÚDE
            </div>
            <div
              className="font-bold text-[7.5px] text-[#0F172A] mt-[2px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              CNPJ: 51.372.335/0001-71
            </div>
            <div className="text-[7px] text-[#0D9488] mt-[2px]">
              Conselho Editorial e Extensão Científica
            </div>
          </div>

          {/* Center Program Title & Traceability Line */}
          <div
            className="absolute text-center"
            style={{ left: '235px', top: '39.5px', width: '372px' }}
          >
            <div className="font-bold text-[8.5px] text-[#064E3B] leading-[11.5px]">
              PROGRAMA INTERINSTITUCIONAL DE EXTENSÃO, COMUNICAÇÃO CIENTÍFICA
              <br />E EDUCAÇÃO EM SAÚDE
            </div>
            <div
              className="font-bold text-[7.4px] text-[#0A1D56] mt-[4px] whitespace-nowrap"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              Certificado Nº {cert.certNumber} · Livro de Extensão nº{' '}
              {cert.bookNumber} · Cód. {cert.code}
            </div>
          </div>

          {/* Right Info & Logo */}
          <div
            className="absolute text-right leading-tight"
            style={{ right: '104.88px', top: '41px' }}
          >
            <div className="font-bold text-[8.5px] text-[#0A1D56]">
              CENTRO PROFISSIONALIZANTE
            </div>
            <div className="font-bold text-[8.5px] text-[#0A1D56] mt-[1px]">
              MARIA DALVA DE ARAÚJO
            </div>
            <div
              className="font-bold text-[7.5px] text-[#0F172A] mt-[2px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              CNPJ: 51.269.112/0001-83
            </div>
          </div>
          <img
            src={LOGO_CENTRO_BASE64}
            alt="Logo Centro Profissionalizante Maria Dalva de Araújo"
            referrerPolicy="no-referrer"
            className="absolute object-contain"
            style={{
              left: '745.51px',
              top: '34.02px',
              width: '56.69px',
              height: '56.69px',
            }}
          />

          {/* Header Divider Line */}
          <div
            className="absolute bg-[#054F3B]"
            style={{
              left: '39.69px',
              top: '99.21px',
              width: '762.52px',
              height: '0.8px',
            }}
          />

          {/* Main Certificate Heading */}
          <div
            className="absolute w-full text-center"
            style={{ top: '110px', left: 0 }}
          >
            <h1
              className="inline-block font-bold text-[23.5px] text-[#064E3B] tracking-wide leading-none"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              {cert.mainTitleFront}
            </h1>
          </div>
          {/* Gold Underline */}
          <div
            className="absolute bg-[#D97805]"
            style={{
              left: '269.29px',
              top: '141.73px',
              width: '303.31px',
              height: '1.5px',
            }}
          />

          {/* Opening Institutional Statement */}
          <div
            className="absolute text-center text-[10px] text-[#0F172A] leading-[12.8px]"
            style={{ left: '55px', top: '154.5px', width: '732px' }}
          >
            <div>{cert.openingTextLine1}</div>
            <div>{cert.openingTextLine2}</div>
          </div>

          {/* Holder Highlight Box */}
          <div
            className="absolute flex flex-col items-center justify-center bg-[#EDFCF5]"
            style={{
              left: '68.03px',
              top: '189.92px',
              width: '705.83px',
              height: '59.53px',
              border: '0.9px solid #D97805',
            }}
          >
            <div
              className="font-bold text-[22px] text-[#0A1D56] tracking-wide leading-tight"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              {cert.holderName}
            </div>
            <div className="font-bold text-[10px] text-[#0F172A] mt-[3px]">
              {cert.holderRole} &nbsp;|&nbsp; CPF: {cert.holderCpf} &nbsp;|&nbsp;{' '}
              {cert.holderInstitution}
            </div>
          </div>

          {/* Body Paragraph 1 */}
          <div
            className="absolute text-[9.8px] text-[#0F172A] leading-[12.5px] text-left"
            style={{ left: '69.45px', top: '262px', width: '703px' }}
          >
            {cert.bodyParagraph1}
          </div>

          {/* Body Paragraph 2 */}
          <div
            className="absolute text-[9.8px] text-[#0F172A] leading-[12.5px] text-left"
            style={{ left: '69.45px', top: '312px', width: '703px' }}
          >
            {cert.bodyParagraph2}
          </div>

          {/* City and Date */}
          <div
            className="absolute w-full text-center"
            style={{ top: '374px', left: 0 }}
          >
            <span
              className="italic text-[13px] text-[#0F172A]"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              {cert.cityAndDate}
            </span>
          </div>

          {/* Left Signature Block (Bárbara Lima dos Santos) */}
          <img
            src={SIG_BARBARA_BASE64}
            alt="Assinatura Bárbara Lima dos Santos"
            referrerPolicy="no-referrer"
            className="absolute object-contain pointer-events-none"
            style={{
              left: '62.36px',
              top: '422.36px',
              width: '181.42px',
              height: '51.02px',
            }}
          />
          <div
            className="absolute bg-[#0F172A]"
            style={{
              left: '42.52px',
              top: '477.64px',
              width: '221.1px',
              height: '1px',
            }}
          />
          <div
            className="absolute text-center leading-tight"
            style={{ left: '42.52px', top: '482px', width: '221.1px' }}
          >
            <div className="font-bold text-[7.8px] text-[#064E3B]">
              {cert.leftSignerName}
            </div>
            <div className="text-[6.8px] text-[#0F172A] mt-[2px]">
              {cert.leftSignerRole}
            </div>
            <div
              className="font-bold text-[6.1px] text-[#064E3B] mt-[2px] whitespace-nowrap"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cert.leftSignerEntity}
            </div>
          </div>

          {/* Center Seal + QR Code + Manual Verification Box */}
          <div
            className="absolute rounded-full flex flex-col items-center justify-center text-center bg-[#FFF2C7]"
            style={{
              left: '276.38px',
              top: '435.12px',
              width: '65.2px',
              height: '65.2px',
              border: '1.7px solid #D97805',
            }}
          >
            <div
              className="font-bold text-[6.3px] text-[#78350F] leading-none"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              SELO OFICIAL
            </div>
            <div
              className="font-bold text-[7.8px] text-[#78350F] leading-none mt-[3px]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              FÉ PÚBLICA
            </div>
            <div
              className="font-bold text-[5.1px] text-[#78350F] leading-none mt-[4px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cert.code}
            </div>
          </div>

          {/* QR Code Box */}
          <div
            className="absolute bg-white flex items-center justify-center"
            style={{
              left: '350.08px',
              top: '429.45px',
              width: '70.87px',
              height: '70.87px',
              border: '0.8px solid #054F3B',
            }}
          >
            {qrDataUrl && (
              <img
                src={qrDataUrl}
                alt={`QR Code ${cert.code}`}
                referrerPolicy="no-referrer"
                className="w-[65.2px] h-[65.2px] object-contain"
              />
            )}
          </div>

          {/* Manual Verification Box (Calibrated so URL fits 100% cleanly without clipping) */}
          <div
            className="absolute bg-white px-[5.5px] py-[5.5px] flex flex-col justify-between"
            style={{
              left: '426.61px',
              top: '429.45px',
              width: '143.15px',
              height: '70.87px',
              border: '0.8px solid #054F3B',
            }}
          >
            <div className="font-bold text-[5.9px] text-[#064E3B] leading-none">
              AUTENTICAÇÃO PÚBLICA MANUAL
            </div>
            <div
              className="font-bold text-[6px] text-[#0F172A] leading-none"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              Cód.: {cert.code}
            </div>
            <div
              className="font-bold text-[6px] text-[#92400E] leading-none"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              Chave: {cert.controlKey}
            </div>
            <div className="font-bold text-[5.4px] text-[#0A1D56] leading-none">
              Endereço p/ Verificação Online:
            </div>
            <div
              className="text-[4.6px] text-[#0F172A] leading-none whitespace-nowrap"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cleanDomain}
            </div>
          </div>

          {/* Right Signature Block (James Araújo de Santana) */}
          <img
            src={SIG_JAMES_BASE64}
            alt="Assinatura James Araújo de Santana"
            referrerPolicy="no-referrer"
            className="absolute object-contain pointer-events-none"
            style={{
              left: '595.28px',
              top: '422.36px',
              width: '181.42px',
              height: '51.02px',
            }}
          />
          <div
            className="absolute bg-[#0F172A]"
            style={{
              left: '575.43px',
              top: '477.64px',
              width: '223.94px',
              height: '1px',
            }}
          />
          <div
            className="absolute text-center leading-tight"
            style={{ left: '554px', top: '482px', width: '265px' }}
          >
            <div className="font-bold text-[7.8px] text-[#0A1D56]">
              {cert.rightSignerName}
            </div>
            <div className="text-[6.8px] text-[#0F172A] mt-[2px]">
              {cert.rightSignerRole}
            </div>
            <div
              className="font-bold text-[5.8px] text-[#0A1D56] mt-[2px] whitespace-nowrap"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cert.rightSignerEntity}
            </div>
          </div>

          {/* Bottom Security Verification Line */}
          <div
            className="absolute w-full text-center font-bold text-[6.1px] text-[#064E3B]"
            style={{
              top: '535px',
              left: 0,
              fontFamily: '"JetBrains Mono", Courier, monospace',
            }}
          >
            Verifique via QR Code ou acesse {cleanDomain} informando o Código{' '}
            {cert.code} ou Chave {cert.controlKey}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* LAUDA 2 — VERSO OFICIAL / MEMORIAL DESCRITIVO (842px x 595px)       */}
      {/* =================================================================== */}
      {(visiblePages === 'both' || visiblePages === 'page2') && (
        <div
          id="cert-lauda-2"
          className="cert-print-page relative bg-[#FFFDF9] text-[#0F172A] shadow-2xl print:shadow-none select-text overflow-hidden shrink-0"
          style={{
            width: '842px',
            height: '595px',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          {/* Triple Institutional Borders */}
          <div
            className="pointer-events-none absolute"
            style={{
              left: '14.17px',
              top: '14.17px',
              width: '813.54px',
              height: '566.93px',
              border: '2.27px solid #054F3B',
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              left: '19.28px',
              top: '19.28px',
              width: '803.34px',
              height: '556.72px',
              border: '1px solid #D97805',
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              left: '23.24px',
              top: '23.24px',
              width: '795.4px',
              height: '548.79px',
              border: '1.42px solid #0A1D56',
            }}
          />

          {/* Top Dual Compact Logos + Back Header */}
          <img
            src={LOGO_EDITORA_BASE64}
            alt="Logo Editora Mente e Saúde"
            referrerPolicy="no-referrer"
            className="absolute object-contain"
            style={{
              left: '39.69px',
              top: '34.02px',
              width: '36.85px',
              height: '36.85px',
            }}
          />
          <img
            src={LOGO_CENTRO_BASE64}
            alt="Logo Centro Profissionalizante"
            referrerPolicy="no-referrer"
            className="absolute object-contain"
            style={{
              left: '82.2px',
              top: '34.02px',
              width: '36.85px',
              height: '36.85px',
            }}
          />

          <div
            className="absolute"
            style={{ left: '130.39px', top: '36px', right: '39.69px' }}
          >
            <div
              className="font-bold text-[13.5px] text-[#064E3B] leading-tight"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              {cert.backHeaderTitle}
            </div>
            <div className="text-[8.5px] text-[#0F172A] mt-[2px]">
              {cert.backHeaderSubtitle}
            </div>
          </div>

          {/* Header Horizontal Line */}
          <div
            className="absolute bg-[#054F3B]"
            style={{
              left: '39.69px',
              top: '79.37px',
              width: '762.52px',
              height: '1.42px',
            }}
          />

          {/* Section 1: DADOS DE IDENTIFICAÇÃO DO PROFISSIONAL */}
          <div
            className="absolute bg-white px-[11.3px] py-[8px]"
            style={{
              left: '39.69px',
              top: '87.87px',
              width: '439.37px',
              height: '87.87px',
              border: '0.8px solid #054F3B',
            }}
          >
            <div className="font-bold text-[8.2px] text-[#064E3B]">
              1. DADOS DE IDENTIFICAÇÃO DO PROFISSIONAL
            </div>
            <div className="text-[8.3px] text-[#0F172A] mt-[5px] space-y-[4px] leading-tight">
              <div>Titular Certificado: {cert.holderName}</div>
              <div>CPF Registrado: {cert.holderCpf}</div>
              <div>Qualificação Profissional: {cert.holderRole}</div>
              <div>Instituição de Origem: {cert.holderInstitution}</div>
            </div>
          </div>

          {/* Section 2: ENQUADRAMENTO CURRICULAR E PONTUAÇÃO */}
          <div
            className="absolute bg-[#F0F5FF] px-[11.3px] py-[8px] flex flex-col justify-between"
            style={{
              left: '490.39px',
              top: '87.87px',
              width: '311.81px',
              height: '87.87px',
              border: '0.8px solid #0A1D56',
            }}
          >
            <div>
              <div className="font-bold text-[8.2px] text-[#0A1D56]">
                2. ENQUADRAMENTO CURRICULAR E PONTUAÇÃO
              </div>
              <div className="font-bold text-[7.6px] text-[#0F172A] mt-[5px] leading-[10.2px]">
                {cert.fubogFramingTitle}
              </div>
            </div>
            <div
              className="font-bold text-[6.4px] text-[#064E3B] whitespace-nowrap"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cert.fubogFramingSummary}
            </div>
          </div>

          {/* Section 3: MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA */}
          <div
            className="absolute bg-[#EDFCF5] flex items-center px-[11.3px]"
            style={{
              left: '39.69px',
              top: '184.25px',
              width: '762.52px',
              height: '21.26px',
              border: '0.8px solid #054F3B',
            }}
          >
            <div className="font-bold text-[8.2px] text-[#064E3B]">
              {cert.section3Title}
            </div>
          </div>

          {/* 4 Rows of Programmatic Matrix */}
          {cert.axes.slice(0, 4).map((axis, idx) => {
            const topPos = 205.51 + idx * 39.69;
            return (
              <div
                key={axis.id}
                className="absolute bg-white flex items-stretch"
                style={{
                  left: '39.69px',
                  top: `${topPos}px`,
                  width: '762.52px',
                  height: '39.69px',
                  border: '0.7px solid #CCD6E0',
                }}
              >
                {/* Col 1: Title & Subtitle */}
                <div
                  className="px-[8.5px] py-[4px] flex flex-col justify-between shrink-0"
                  style={{
                    width: '223.93px',
                    borderRight: '0.7px solid #E3E8F0',
                  }}
                >
                  <div className="font-bold text-[7.1px] text-[#0A1D56] leading-[8.8px]">
                    {axis.title}
                  </div>
                  <div className="text-[6.0px] text-[#475569] leading-[7.2px]">
                    {axis.subtitle}
                  </div>
                </div>

                {/* Col 2: Analytical Description */}
                <div
                  className="px-[8.5px] py-[4.5px] flex items-center shrink-0"
                  style={{
                    width: '467.72px',
                    borderRight: '0.7px solid #E3E8F0',
                  }}
                >
                  <div className="text-[7.2px] text-[#0F172A] leading-[9.5px]">
                    {axis.description}
                  </div>
                </div>

                {/* Col 3: Workload Hours */}
                <div className="flex-1 flex items-center justify-center">
                  <span
                    className="font-bold text-[8px] text-[#064E3B]"
                    style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
                  >
                    {axis.hours}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Section 4: REGISTRO OFICIAL DE FÉ PÚBLICA E CHAVES DE VERIFICAÇÃO */}
          <div
            className="absolute bg-[#FFFAEB] px-[11.3px] py-[7px]"
            style={{
              left: '39.69px',
              top: '372.76px',
              width: '762.52px',
              height: '87.87px',
              border: '1px solid #D97805',
            }}
          >
            <div className="pr-[86px]">
              <div className="font-bold text-[8.2px] text-[#92400E]">
                4. REGISTRO OFICIAL DE FÉ PÚBLICA, ENDEREÇO WEB E CHAVES DE
                VERIFICAÇÃO DE AUTENTICIDADE
              </div>
              <div className="text-[7.6px] text-[#0F172A] leading-[9.6px] mt-[3px]">
                {cert.averbacaoText}
              </div>
              <div
                className="font-bold text-[7.4px] text-[#064E3B] mt-[5px]"
                style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
              >
                CÓDIGO DE AUTENTICIDADE: {cert.code} &nbsp;|&nbsp; CHAVE DE
                CONTROLE / DÍGITO: {cert.controlKey}
              </div>
              <div
                className="font-bold text-[6.7px] text-[#0A1D56] mt-[3px] whitespace-nowrap"
                style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
              >
                ENDEREÇO PARA VERIFICAÇÃO MANUAL (SEM QR CODE): {fullVerifyUrl}
              </div>
              <div
                className="font-bold text-[6.8px] text-[#0F172A] mt-[3px]"
                style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
              >
                HASH SHA-256: {cert.sha256}
              </div>
            </div>

            {/* Right QR Code inside Box 4 */}
            <div
              className="absolute bg-white flex items-center justify-center"
              style={{
                right: '9.92px',
                top: '7.08px',
                width: '73.7px',
                height: '73.7px',
                border: '0.8px solid #054F3B',
              }}
            >
              {qrDataUrl && (
                <img
                  src={qrDataUrl}
                  alt={`QR Code Verso ${cert.code}`}
                  referrerPolicy="no-referrer"
                  className="w-[68px] h-[68px] object-contain"
                />
              )}
            </div>
          </div>

          {/* Back Footer Compact Signatures & Chancery */}
          <img
            src={SIG_BARBARA_BASE64}
            alt="Assinatura Bárbara Lima dos Santos"
            referrerPolicy="no-referrer"
            className="absolute object-contain pointer-events-none"
            style={{
              left: '73.7px',
              top: '464.88px',
              width: '153.07px',
              height: '42.52px',
            }}
          />
          <div
            className="absolute bg-[#0F172A]"
            style={{
              left: '51.02px',
              top: '510.24px',
              width: '209.77px',
              height: '1px',
            }}
          />
          <div
            className="absolute text-center leading-tight"
            style={{ left: '51.02px', top: '514px', width: '209.77px' }}
          >
            <div className="font-bold text-[7.6px] text-[#064E3B]">
              {cert.leftSignerName}
            </div>
            <div
              className="font-bold text-[6.1px] text-[#064E3B] mt-[2px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              {cert.leftSignerEntity}
            </div>
          </div>

          {/* Center Back Footer */}
          <div
            className="absolute text-center leading-tight"
            style={{ left: '270px', top: '496px', width: '302px' }}
          >
            <div
              className="italic text-[10.5px] text-[#0F172A]"
              style={{
                fontFamily:
                  '"Libre Baskerville", Georgia, "Times New Roman", serif',
              }}
            >
              {cert.cityAndDate}
            </div>
            <div className="font-bold text-[6.8px] text-[#475569] mt-[4px]">
              Documento Oficial de 2 Laudas (Frente e Verso) · Válido em Todo o
              Território Nacional
            </div>
            <div
              className="text-[6.1px] text-[#064E3B] mt-[2px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              Registro: {cert.code} · Chave: {cert.controlKey}
            </div>
          </div>

          {/* Right Back Signature */}
          <img
            src={SIG_JAMES_BASE64}
            alt="Assinatura James Araújo de Santana"
            referrerPolicy="no-referrer"
            className="absolute object-contain pointer-events-none"
            style={{
              left: '609.45px',
              top: '464.88px',
              width: '153.07px',
              height: '42.52px',
            }}
          />
          <div
            className="absolute bg-[#0F172A]"
            style={{
              left: '578.27px',
              top: '510.24px',
              width: '212.6px',
              height: '1px',
            }}
          />
          <div
            className="absolute text-center leading-tight"
            style={{ left: '570px', top: '514px', width: '228px' }}
          >
            <div className="font-bold text-[7.6px] text-[#0A1D56]">
              {cert.rightSignerName}
            </div>
            <div
              className="font-bold text-[6.1px] text-[#0A1D56] mt-[2px]"
              style={{ fontFamily: '"JetBrains Mono", Courier, monospace' }}
            >
              Centro Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
