import html2pdf from 'html2pdf.js';

export interface PDFOptions {
  filename?: string;
  orientation?: 'portrait' | 'landscape';
  unit?: 'mm' | 'px' | 'in' | 'cm';
  format?: 'a4' | 'letter' | 'a3';
  compress?: boolean;
}

export function downloadPDF(element: HTMLElement, options: PDFOptions = {}) {
  const {
    filename = 'worksheet.pdf',
    orientation = 'portrait',
    unit = 'mm',
    format = 'a4',
    compress = true,
  } = options;

  const opt = {
    margin: [15, 15, 15, 15],
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { orientation, unit, format, compress },
  };

  html2pdf().set(opt).from(element).save();
}

export function printWorksheet(element: HTMLElement) {
  const printWindow = window.open('', '', 'width=800,height=600');
  if (printWindow) {
    printWindow.document.write(element.innerHTML);
    printWindow.document.close();
    printWindow.print();
  }
}
