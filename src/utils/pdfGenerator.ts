import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import { CertificateData } from '../types/certificate';
import {
  LOGO_EDITORA_BASE64,
  LOGO_CENTRO_BASE64,
  SIG_BARBARA_BASE64,
  SIG_JAMES_BASE64,
} from '../assets/certAssets';

export function getCleanDomain(domain: string): string {
  const trimmed = domain.trim();
  if (!trimmed) return 'https://medical-english-saude.vercel.app/';
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
}

export function getFullVerificationUrl(cert: CertificateData): string {
  const base = getCleanDomain(cert.verificationDomain);
  return `${base}?codigo=${encodeURIComponent(cert.code)}#validador`;
}

export async function generateQrCodeDataUrl(text: string): Promise<string> {
  try {
    return await QRCode.toDataURL(text, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 480,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });
  } catch (err) {
    console.error('Failed to generate QR code:', err);
    return '';
  }
}

function drawTripleInstitutionalFrame(doc: jsPDF) {
  // Warm parchment paper background (1.0, 0.99, 0.98)
  doc.setFillColor(255, 252, 250);
  doc.rect(0, 0, 841.89, 595.28, 'F');

  // Outer Emerald Border (0.02, 0.31, 0.23) -> rgb(5, 79, 59)
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(2.27);
  doc.rect(14.17, 14.17, 813.54, 566.93, 'S');

  // Middle Gold Border (0.85, 0.47, 0.02) -> rgb(217, 120, 5)
  doc.setDrawColor(217, 120, 5);
  doc.setLineWidth(0.99);
  doc.rect(19.28, 19.28, 803.34, 556.72, 'S');

  // Inner Deep Navy Border (0.04, 0.11, 0.34) -> rgb(10, 29, 86)
  doc.setDrawColor(10, 29, 86);
  doc.setLineWidth(1.42);
  doc.rect(23.24, 23.24, 795.4, 548.79, 'S');
}

export async function downloadCertificateVectorPdf(cert: CertificateData): Promise<void> {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: 'a4',
    compress: true,
  });

  // Set official PDF document metadata for accessibility and archival
  doc.setProperties({
    title: `Certificado Nº ${cert.certNumber} - ${cert.holderName} (${cert.code})`,
    subject: `${cert.courseTitle} - Carga Horária: ${cert.totalHoursNumeric} horas`,
    author: 'Editora Mente e Saúde & Centro Profissionalizante Maria Dalva de Araújo',
    keywords: `Certificado, Medical English, ${cert.code}, ${cert.controlKey}, ${cert.holderName}, Item 09`,
    creator: 'Sistema Oficial de Certificação Interinstitucional',
  });

  const fullVerifyUrl = getFullVerificationUrl(cert);
  const cleanDomain = getCleanDomain(cert.verificationDomain);
  const qrDataUrl = await generateQrCodeDataUrl(fullVerifyUrl);

  // =========================================================================
  // LAUDA 1 — FRENTE DO CERTIFICADO (Calibrated A4 Landscape 841.89 x 595.28)
  // =========================================================================
  drawTripleInstitutionalFrame(doc);

  // Left Logo (Editora Mente e Saúde)
  doc.addImage(LOGO_EDITORA_BASE64, 'PNG', 39.69, 34.02, 56.69, 56.69);

  // Left Institutional Text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(6, 78, 59);
  doc.text('EDITORA MENTE E SAÚDE', 104.88, 51.02);

  doc.setFont('courier', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('CNPJ: 51.372.335/0001-71', 104.88, 63.78);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.0);
  doc.setTextColor(13, 148, 136);
  doc.text('Conselho Editorial e Extensão Científica', 104.88, 75.12);

  // Center Program Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(6, 78, 59);
  doc.text(
    'PROGRAMA INTERINSTITUCIONAL DE EXTENSÃO, COMUNICAÇÃO CIENTÍFICA',
    420.94,
    48.19,
    { align: 'center' }
  );
  doc.text('E EDUCAÇÃO EM SAÚDE', 420.94, 60.09, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(10, 29, 86);
  doc.text(
    `Certificado Nº ${cert.certNumber} · Livro de Extensão nº ${cert.bookNumber} · Cód. ${cert.code}`,
    420.94,
    74.27,
    { align: 'center' }
  );

  // Right Logo (Centro Profissionalizante Maria Dalva de Araújo)
  doc.addImage(LOGO_CENTRO_BASE64, 'PNG', 745.51, 34.02, 56.69, 56.69);

  // Right Institutional Text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(10, 29, 86);
  doc.text('CENTRO PROFISSIONALIZANTE', 737.01, 49.61, { align: 'right' });
  doc.text('MARIA DALVA DE ARAÚJO', 737.01, 61.8, { align: 'right' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('CNPJ: 51.269.112/0001-83', 737.01, 74.27, { align: 'right' });

  // Header Divider Line
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.line(39.69, 99.21, 802.2, 99.21);

  // Main Certificate Title
  doc.setFont('times', 'bold');
  doc.setFontSize(23.5);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.mainTitleFront, 420.94, 133.23, { align: 'center' });

  // Gold Underline under Main Title
  doc.setDrawColor(217, 120, 5);
  doc.setLineWidth(1.42);
  doc.line(269.29, 141.73, 572.6, 141.73);

  // Opening Institutional Certification Text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.0);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.openingTextLine1, 420.94, 164.5, { align: 'center' });
  doc.text(cert.openingTextLine2, 420.94, 177.0, { align: 'center' });

  // Holder Highlight Box
  doc.setFillColor(237, 252, 245);
  doc.setDrawColor(217, 120, 5);
  doc.setLineWidth(0.85);
  doc.rect(68.03, 189.92, 705.83, 59.53, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(22.5);
  doc.setTextColor(10, 29, 86);
  doc.text(cert.holderName, 420.94, 217.7, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.0);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `${cert.holderRole}  |  CPF: ${cert.holderCpf}  |  ${cert.holderInstitution}`,
    420.94,
    238.11,
    { align: 'center' }
  );

  // Body Paragraph 1 & 2 (Well-proportioned width 703pt with balanced line spacing)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.8);
  doc.setTextColor(15, 23, 42);

  const p1Lines = doc.splitTextToSize(cert.bodyParagraph1, 703);
  doc.text(p1Lines, 69.45, 271.5, { lineHeightFactor: 1.25 });

  const p2Lines = doc.splitTextToSize(cert.bodyParagraph2, 703);
  doc.text(p2Lines, 69.45, 321.5, { lineHeightFactor: 1.25 });

  // City and Date
  doc.setFont('times', 'italic');
  doc.setFontSize(13.0);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.cityAndDate, 420.94, 388.35, { align: 'center' });

  // Left Signature (Bárbara Lima dos Santos)
  doc.addImage(SIG_BARBARA_BASE64, 'PNG', 62.36, 422.36, 181.42, 51.02);
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.99);
  doc.line(42.52, 477.64, 263.62, 477.64);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.leftSignerName, 153.07, 490.39, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.leftSignerRole, 153.07, 501.17, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.leftSignerEntity, 153.07, 511.65, { align: 'center' });

  // Official Gold Circular Seal (Fé Pública)
  doc.setFillColor(255, 242, 199);
  doc.setDrawColor(217, 120, 5);
  doc.setLineWidth(1.7);
  doc.circle(308.98, 467.72, 32.6, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(120, 53, 15);
  doc.text('SELO OFICIAL', 308.98, 456.94, { align: 'center' });

  doc.setFontSize(8.0);
  doc.text('FÉ PÚBLICA', 308.98, 468.28, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(5.4);
  doc.text(cert.code, 308.98, 480.47, { align: 'center' });

  // QR Code Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.rect(350.08, 429.45, 70.87, 70.87, 'FD');
  if (qrDataUrl) {
    doc.addImage(qrDataUrl, 'PNG', 352.91, 432.28, 65.2, 65.2);
    doc.link(350.08, 429.45, 70.87, 70.87, { url: fullVerifyUrl });
  }

  // Manual Verification Box (Width 143.15pt — calibrated so URL never overflows)
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.rect(426.61, 429.45, 143.15, 70.87, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.0);
  doc.setTextColor(6, 78, 59);
  doc.text('AUTENTICAÇÃO PÚBLICA MANUAL', 432.28, 440.79);

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(15, 23, 42);
  doc.text(`Cód.: ${cert.code}`, 432.28, 452.98);

  doc.setTextColor(146, 64, 14);
  doc.text(`Chave: ${cert.controlKey}`, 432.28, 464.31);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.5);
  doc.setTextColor(10, 29, 86);
  doc.text('Endereço p/ Verificação Online:', 432.28, 475.65);

  doc.setFont('courier', 'normal');
  doc.setFontSize(4.7);
  doc.setTextColor(15, 23, 42);
  doc.text(cleanDomain, 432.28, 486.14);
  doc.link(426.61, 429.45, 143.15, 70.87, { url: fullVerifyUrl });

  // Right Signature (James Araújo de Santana)
  doc.addImage(SIG_JAMES_BASE64, 'PNG', 595.28, 422.36, 181.42, 51.02);
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.99);
  doc.line(575.43, 477.64, 799.37, 477.64);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(10, 29, 86);
  doc.text(cert.rightSignerName, 687.4, 490.39, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.rightSignerRole, 687.4, 501.17, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(5.8);
  doc.setTextColor(10, 29, 86);
  doc.text(cert.rightSignerEntity, 687.4, 511.65, { align: 'center' });

  // Bottom Security Line
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(6, 78, 59);
  doc.text(
    `Verifique via QR Code ou acesse ${cleanDomain} informando o Código ${cert.code} ou Chave ${cert.controlKey}`,
    420.94,
    542.83,
    { align: 'center' }
  );

  // =========================================================================
  // LAUDA 2 — VERSO OFICIAL (MEMORIAL DESCRITIVO E REGISTRO ACADÊMICO)
  // =========================================================================
  doc.addPage('a4', 'landscape');
  drawTripleInstitutionalFrame(doc);

  // Dual Compact Logos at Top-Left
  doc.addImage(LOGO_EDITORA_BASE64, 'PNG', 39.69, 34.02, 36.85, 36.85);
  doc.addImage(LOGO_CENTRO_BASE64, 'PNG', 82.2, 34.02, 36.85, 36.85);

  // Back Header Titles
  doc.setFont('times', 'bold');
  doc.setFontSize(13.5);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.backHeaderTitle, 130.39, 49.61);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.backHeaderSubtitle, 130.39, 63.78);

  // Back Header Divider Line
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(1.42);
  doc.line(39.69, 79.37, 802.2, 79.37);

  // Box 1: DADOS DE IDENTIFICAÇÃO DO PROFISSIONAL
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.rect(39.69, 87.87, 439.37, 87.87, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(6, 78, 59);
  doc.text('1. DADOS DE IDENTIFICAÇÃO DO PROFISSIONAL', 51.02, 102.61);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.setTextColor(15, 23, 42);
  doc.text(`Titular Certificado: ${cert.holderName}`, 51.02, 119.62);
  doc.text(`CPF Registrado: ${cert.holderCpf}`, 51.02, 134.36);
  doc.text(`Qualificação Profissional: ${cert.holderRole}`, 51.02, 149.1);
  doc.text(`Instituição de Origem: ${cert.holderInstitution}`, 51.02, 163.84);

  // Box 2: ENQUADRAMENTO CURRICULAR E PONTUAÇÃO
  doc.setFillColor(240, 245, 255);
  doc.setDrawColor(10, 29, 86);
  doc.setLineWidth(0.71);
  doc.rect(490.39, 87.87, 311.81, 87.87, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(10, 29, 86);
  doc.text('2. ENQUADRAMENTO CURRICULAR E PONTUAÇÃO', 501.73, 102.61);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.6);
  doc.setTextColor(15, 23, 42);
  const framingLines = doc.splitTextToSize(cert.fubogFramingTitle, 290);
  doc.text(framingLines, 501.73, 118.8, { lineHeightFactor: 1.16 });

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.fubogFramingSummary, 501.73, 164.41);

  // Box 3 Header: MATRIZ PROGRAMÁTICA E METODOLOGIA PEDAGÓGICA
  doc.setFillColor(237, 252, 245);
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.rect(39.69, 184.25, 762.52, 21.26, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.section3Title, 51.02, 198.99);

  // 4 Axis Rows (Each 39.69pt high — carefully spaced so Title, Subtitle, Description never collide)
  const rowStartY = 205.51;
  const rowHeight = 39.69;

  cert.axes.slice(0, 4).forEach((axis, idx) => {
    const yTop = rowStartY + idx * rowHeight;

    // Row Box
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(204, 214, 224);
    doc.setLineWidth(0.71);
    doc.rect(39.69, yTop, 762.52, rowHeight, 'FD');

    // Vertical Column Dividers
    doc.setDrawColor(227, 232, 240);
    doc.line(263.62, yTop, 263.62, yTop + rowHeight);
    doc.line(731.34, yTop, 731.34, yTop + rowHeight);

    // Axis Title (Column 1 - max 2 lines)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.1);
    doc.setTextColor(10, 29, 86);
    const titleLines = doc.splitTextToSize(axis.title, 207).slice(0, 2);
    doc.text(titleLines, 48.19, yTop + 11.5, { lineHeightFactor: 1.15 });

    // Axis Subtitle (Column 1 bottom - 1 line or 2 compact lines)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.0);
    doc.setTextColor(71, 85, 105);
    const subLines = doc.splitTextToSize(axis.subtitle, 207).slice(0, 2);
    doc.text(subLines, 48.19, yTop + 28.8, { lineHeightFactor: 1.1 });

    // Axis Description (Column 2 - max 3 lines cleanly centered)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(15, 23, 42);
    const descLines = doc.splitTextToSize(axis.description, 448).slice(0, 3);
    doc.text(descLines, 272.13, yTop + 13.2, { lineHeightFactor: 1.2 });

    // Axis Hours (Column 3)
    doc.setFont('courier', 'bold');
    doc.setFontSize(8.0);
    doc.setTextColor(6, 78, 59);
    doc.text(axis.hours, 766.5, yTop + 23.0, { align: 'center' });
  });

  // Box 4: REGISTRO OFICIAL DE FÉ PÚBLICA, ENDEREÇO WEB E CHAVES DE VERIFICAÇÃO
  doc.setFillColor(255, 250, 235);
  doc.setDrawColor(217, 120, 5);
  doc.setLineWidth(0.99);
  doc.rect(39.69, 372.76, 762.52, 87.87, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(146, 64, 14);
  doc.text(
    '4. REGISTRO OFICIAL DE FÉ PÚBLICA, ENDEREÇO WEB E CHAVES DE VERIFICAÇÃO DE AUTENTICIDADE',
    51.02,
    387.78
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.6);
  doc.setTextColor(15, 23, 42);
  const averbLines = doc.splitTextToSize(cert.averbacaoText, 655);
  doc.text(averbLines, 51.02, 401.8, { lineHeightFactor: 1.18 });

  doc.setFont('courier', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(6, 78, 59);
  doc.text(
    `CÓDIGO DE AUTENTICIDADE: ${cert.code}   |   CHAVE DE CONTROLE / DÍGITO: ${cert.controlKey}`,
    51.02,
    424.63
  );

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(10, 29, 86);
  doc.text(
    `ENDEREÇO PARA VERIFICAÇÃO MANUAL (SEM QR CODE): ${fullVerifyUrl}`,
    51.02,
    438.8
  );
  doc.link(51.02, 431.0, 650, 10, { url: fullVerifyUrl });

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.9);
  doc.setTextColor(15, 23, 42);
  doc.text(`HASH SHA-256: ${cert.sha256}`, 51.02, 452.98);

  // Back QR Code Box inside Section 4
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(5, 79, 59);
  doc.setLineWidth(0.71);
  doc.rect(718.58, 379.84, 73.7, 73.7, 'FD');
  if (qrDataUrl) {
    doc.addImage(qrDataUrl, 'PNG', 721.42, 382.68, 68.03, 68.03);
    doc.link(718.58, 379.84, 73.7, 73.7, { url: fullVerifyUrl });
  }

  // Back Footer Signatures & Center Chancery
  doc.addImage(SIG_BARBARA_BASE64, 'PNG', 73.7, 464.88, 153.07, 42.52);
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.99);
  doc.line(51.02, 510.24, 260.79, 510.24);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.6);
  doc.setTextColor(6, 78, 59);
  doc.text(cert.leftSignerName, 155.9, 522.14, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text(cert.leftSignerEntity, 155.9, 532.91, { align: 'center' });

  // Center Back Footer
  doc.setFont('times', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(cert.cityAndDate, 420.94, 508.82, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(71, 85, 105);
  doc.text(
    'Documento Oficial de 2 Laudas (Frente e Verso) · Válido em Todo o Território Nacional',
    420.94,
    522.14,
    { align: 'center' }
  );

  doc.setFont('courier', 'normal');
  doc.setFontSize(6.2);
  doc.setTextColor(6, 78, 59);
  doc.text(`Registro: ${cert.code} · Chave: ${cert.controlKey}`, 420.94, 532.91, {
    align: 'center',
  });

  // Right Back Signature
  doc.addImage(SIG_JAMES_BASE64, 'PNG', 609.45, 464.88, 153.07, 42.52);
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.99);
  doc.line(578.27, 510.24, 790.87, 510.24);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.6);
  doc.setTextColor(10, 29, 86);
  doc.text(cert.rightSignerName, 684.57, 522.14, { align: 'center' });

  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text('Centro Maria Dalva de Araújo (CNPJ: 51.269.112/0001-83)', 684.57, 532.91, {
    align: 'center',
  });

  const safeName = cert.holderName.replace(/\s+/g, '_').toUpperCase();
  const filename = `Certificado_Extensao_${cert.certNumber}_${cert.code}_${safeName}.pdf`;
  doc.save(filename);
}
