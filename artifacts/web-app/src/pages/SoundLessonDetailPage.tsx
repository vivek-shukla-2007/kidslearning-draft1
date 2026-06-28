import { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { isFeatureEnabled } from '@/config/features';
import { getPhonicsSound } from '@/data/phonics';
import { useProgress } from '@/hooks/useProgress';
import { Volume2, ArrowRight, Star, FileText } from 'lucide-react';

export default function SoundLessonDetailPage() {
  const { soundId } = useParams<{ soundId: string }>();
  const sound = getPhonicsSound(soundId || '');
  const { completeSound } = useProgress();
  const [hasCompleted, setHasCompleted] = useState(false);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  if (!isFeatureEnabled('ENABLE_PHONICS_PHASE2') || !sound) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">❌</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sound Not Found</h3>
          <p className="text-gray-600">The sound you're looking for doesn't exist or is disabled.</p>
          <Link href="/learn/reception/phonics/phase-2" className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-700">
            ← Back to Sounds
          </Link>
        </div>
      </div>
    );
  }

  const currentExample = sound.examples[currentExampleIndex];
  const nextSoundId = sound.id === 'l' ? 's' : String.fromCharCode(sound.letter.charCodeAt(0) + 1);

  const handleCompleteLesson = () => {
    completeSound(sound.id);
    setHasCompleted(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/learn" className="hover:text-blue-600">Learn</Link>
        <span>/</span>
        <Link href="/learn/reception" className="hover:text-blue-600">Reception</Link>
        <span>/</span>
        <Link href="/learn/reception/phonics" className="hover:text-blue-600">Phonics</Link>
        <span>/</span>
        <Link href="/learn/reception/phonics/phase-2" className="hover:text-blue-600">Phase 2</Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">{sound.letter.toUpperCase()}</span>
      </div>

      {/* Main Lesson */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">Phase 2 • Sound {sound.letter.toUpperCase()}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">{sound.letter.toUpperCase()}</h1>
          <p className="text-xl text-gray-600">{sound.pronunciationGuide}</p>
        </div>

        {/* Audio & Pronunciation */}
        <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200">
          <button className="w-full flex items-center justify-center gap-4 py-6 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-xl font-bold focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Volume2 size={32} />
            Listen to Sound
          </button>
          <p className="text-center text-gray-600 mt-4 text-sm">👆 Press play to hear the sound repeated 3 times</p>
        </div>

        {/* Examples Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Words with {sound.letter.toUpperCase()}</h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            {/* Large Example */}
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-blue-600 mb-4">{currentExample.word}</div>
              <button className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold focus:outline-none focus:ring-4 focus:ring-green-300">
                <Volume2 size={20} />
                Say: {currentExample.pronunciation}
              </button>
            </div>

            {/* Example Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentExampleIndex((prev) => (prev === 0 ? sound.examples.length - 1 : prev - 1))}
                className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              >
                ← Previous
              </button>
              <div className="flex gap-2">
                {sound.examples.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentExampleIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentExampleIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to example ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentExampleIndex((prev) => (prev === sound.examples.length - 1 ? 0 : prev + 1))}
                className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Blending */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Blending Practice</h2>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <p className="text-gray-700 mb-6">Watch how we blend the sounds together:</p>
            <div className="space-y-4">
              {sound.blendingExamples.slice(0, 2).map((blend, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-yellow-300">
                  <div className="text-sm text-gray-600 mb-2">Example {idx + 1}</div>
                  <div className="flex items-center gap-3 text-2xl font-bold">
                    {blend.split('-').map((letter, i) => (
                      <div key={i}>
                        <span className="text-blue-600">{letter}</span>
                        {i < blend.split('-').length - 1 && <span className="text-gray-400 mx-2">+</span>}
                      </div>
                    ))}
                    <span className="text-gray-400 mx-2">=</span>
                    <span className="text-green-600">{sound.commonWords[idx]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete Lesson Button */}
        {!hasCompleted && (
          <button
            onClick={handleCompleteLesson}
            className="w-full py-6 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all mb-8 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center gap-2"
          >
            <Star size={24} />
            Mark as Complete
          </button>
        )}

        {hasCompleted && (
          <div className="mb-8 p-6 bg-green-50 border-2 border-green-400 rounded-xl text-center">
            <div className="text-4xl mb-2">🎉</div>
            <p className="text-green-700 font-bold">Great job! You've completed this sound.</p>
          </div>
        )}

        {/* Worksheets Section */}
        <div className="mb-8 p-6 bg-orange-50 border-2 border-orange-300 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={28} className="text-orange-600" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Practice with Worksheets</h3>
                <p className="text-sm text-gray-600">Tracing, matching, and fill-in exercises</p>
              </div>
            </div>
            <Link
              href={`/learn/reception/phonics/phase-2/${sound.id}/worksheets`}
              className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-300 whitespace-nowrap"
            >
              View Worksheets →
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Link
            href="/learn/reception/phonics/phase-2"
            className="flex-1 py-4 px-6 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:border-gray-400 transition-colors text-center"
          >
            ← Back to Sounds
          </Link>
          <button className="flex-1 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Next Sound <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
