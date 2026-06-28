import { useState } from 'react';
import { useParams } from 'wouter';
import { isFeatureEnabled } from '@/config/features';
import { getPhonicsSound } from '@/data/phonics';
import { getPhonicsWorksheetsBySound } from '@/data/worksheets';
import WorksheetRenderer from '@/components/worksheets/WorksheetRenderer';
import { FileText, Home } from 'lucide-react';
import { Link } from 'wouter';

export default function PhonicsWorksheetPage() {
  const { soundId } = useParams<{ soundId: string }>();
  const sound = getPhonicsSound(soundId || '');
  const worksheets = getPhonicsWorksheetsBySound(soundId || '');
  const [selectedWorksheet, setSelectedWorksheet] = useState(worksheets[0] || null);

  if (!isFeatureEnabled('ENABLE_PHONICS_PHASE2') || !sound) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">❌</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sound Not Found</h3>
          <p className="text-gray-600">The sound worksheets you're looking for don't exist.</p>
        </div>
      </div>
    );
  }

  if (worksheets.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">📋</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Worksheets Available</h3>
          <p className="text-gray-600">Worksheets for this sound are coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/learn/reception/phonics/phase-2" className="hover:text-blue-600 flex items-center gap-1">
          <Home size={16} /> Phonics
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">Sound {sound.letter.toUpperCase()} Worksheets</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Worksheets for Sound {sound.letter.toUpperCase()}</h1>
        <p className="text-lg text-gray-600">Practice with interactive printable worksheets</p>
      </div>

      {/* Worksheet Selector */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {worksheets.map((ws) => (
          <button
            key={ws.id}
            onClick={() => setSelectedWorksheet(ws)}
            className={`p-4 rounded-lg text-left transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
              selectedWorksheet?.id === ws.id
                ? 'bg-blue-600 text-white border-2 border-blue-800 ring-4 ring-blue-300'
                : 'bg-white border-2 border-gray-200 hover:border-blue-400 text-gray-900'
            }`}
          >
            <div className="flex items-start gap-3">
              <FileText size={20} className="flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-sm">{ws.title}</div>
                <div className={`text-xs mt-1 ${selectedWorksheet?.id === ws.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  Type: {ws.type}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Worksheet Preview */}
      {selectedWorksheet && <WorksheetRenderer worksheet={selectedWorksheet} />}
    </div>
  );
}
