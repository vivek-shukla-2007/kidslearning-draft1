import { useState } from 'react';
import { Download, Printer } from 'lucide-react';
import { downloadPDF } from '@/utils/pdf';
import { PhonicsWorksheet } from '@/data/worksheets';

interface MatchingWorksheetProps {
  worksheet: PhonicsWorksheet;
}

export default function MatchingWorksheet({ worksheet }: MatchingWorksheetProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const worksheetRef: React.RefObject<HTMLDivElement> = require('react').useRef(null);

  const handlePrint = () => {
    if (worksheetRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${worksheet.title}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .worksheet-header { text-align: center; margin-bottom: 30px; }
                .worksheet-header h1 { margin: 0; color: #1e40af; }
                .worksheet-header p { color: #666; margin: 5px 0; }
                .matching-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
                .matching-column { }
                .matching-item { margin-bottom: 20px; font-size: 18px; font-weight: bold; }
                @media print {
                  body { margin: 10px; }
                }
              </style>
            </head>
            <body>
              ${worksheetRef.current.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        setTimeout(() => printWindow.print(), 250);
      }
    }
  };

  const handleDownloadPDF = () => {
    if (worksheetRef.current) {
      downloadPDF(worksheetRef.current, {
        filename: `${worksheet.id}.pdf`,
        format: 'a4',
        orientation: 'portrait',
      });
    }
  };

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 flex gap-3 flex-wrap">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Printer size={20} />
          Print
        </button>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <Download size={20} />
          Download PDF
        </button>
        <label className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors">
          <input
            type="checkbox"
            checked={showAnswers}
            onChange={(e) => setShowAnswers(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="font-semibold">Show Answers</span>
        </label>
      </div>

      {/* Worksheet Preview */}
      <div
        ref={worksheetRef}
        className="bg-white p-12 border-2 border-gray-300 rounded-lg shadow-lg max-w-2xl mx-auto"
        style={{ minHeight: '800px' }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">{worksheet.title}</h1>
          <p className="text-gray-600 text-sm">{worksheet.description}</p>
        </div>

        {/* Instructions */}
        <div className="mb-10 p-4 bg-blue-50 border-l-4 border-blue-600">
          <p className="text-sm font-semibold text-gray-800">
            📝 <strong>Instructions:</strong> {worksheet.content.instructions}
          </p>
        </div>

        {/* Matching Grid */}
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Words */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-600">Words</h3>
            <div className="space-y-8">
              {worksheet.content.items.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-gray-400 min-w-[30px]">{idx + 1}.</div>
                  <div className="text-xl font-bold text-gray-800">{item.word}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pictures (placeholder) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-600">Pictures</h3>
            <div className="space-y-8">
              {worksheet.content.items.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center text-sm font-bold text-gray-600"
                  >
                    {showAnswers ? `[${item.answer}]` : `[?]`}
                  </div>
                  <div className="text-sm text-gray-500">Picture {idx + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Matching Lines Guide */}
        {showAnswers && (
          <div className="mt-12 p-4 bg-green-50 border-l-4 border-green-600">
            <p className="text-sm font-semibold text-gray-800">✅ <strong>Answer Key:</strong></p>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              {worksheet.content.items.map((item, idx) => (
                <li key={item.id}>({idx + 1}) {item.word} → {item.answer}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300 text-center text-xs text-gray-500">
          <p>✨ Draw lines to match the words with pictures! ✨</p>
          <p>Kids Learning Platform | www.kidslearning.com</p>
        </div>
      </div>
    </div>
  );
}
