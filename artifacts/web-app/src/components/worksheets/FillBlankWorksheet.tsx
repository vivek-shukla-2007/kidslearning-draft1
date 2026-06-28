import { useState } from 'react';
import { Download, Printer } from 'lucide-react';
import { downloadPDF } from '@/utils/pdf';
import { PhonicsWorksheet } from '@/data/worksheets';

interface FillBlankWorksheetProps {
  worksheet: PhonicsWorksheet;
}

export default function FillBlankWorksheet({ worksheet }: FillBlankWorksheetProps) {
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
                .blank-line { border-bottom: 2px solid black; width: 40px; display: inline-block; }
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

        {/* Fill Blank Items */}
        <div className="space-y-10">
          {worksheet.content.items.map((item, idx) => (
            <div key={item.id} className="flex items-center gap-6">
              <span className="text-sm font-bold text-gray-500 min-w-[30px]">({idx + 1})</span>
              <div className="flex-1 flex items-baseline gap-3">
                {/* Display word with blank and answer */}
                <div className="text-2xl font-bold text-gray-800">
                  {item.word.split('_').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < item.word.split('_').length - 1 && (
                        <span
                          className="inline-block"
                          style={{
                            borderBottom: '2px solid black',
                            minWidth: '40px',
                            display: 'inline-block',
                            marginX: '5px',
                          }}
                        >
                          {showAnswers ? item.answer : ''}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                {item.hint && <span className="text-sm text-gray-600 italic">({item.hint})</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Answer Key */}
        {showAnswers && (
          <div className="mt-12 p-4 bg-green-50 border-l-4 border-green-600">
            <p className="text-sm font-semibold text-gray-800">✅ <strong>Answer Key:</strong></p>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              {worksheet.content.items.map((item, idx) => (
                <li key={item.id}>({idx + 1}) {item.word} → Answer: <strong>{item.answer}</strong></li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300 text-center text-xs text-gray-500">
          <p>✨ Write the missing letter to complete each word! ✨</p>
          <p>Kids Learning Platform | www.kidslearning.com</p>
        </div>
      </div>
    </div>
  );
}
