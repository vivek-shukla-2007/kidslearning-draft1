import { Link } from 'wouter';
import { useYear } from '@/context/YearContext';
import { isFeatureEnabled } from '@/config/features';
import { PHONICS_PHASE_2 } from '@/data/phonics';
import { useProgress } from '@/hooks/useProgress';
import { Play, CheckCircle } from 'lucide-react';

export default function PhonicsSoundGridPage() {
  const { selectedYear } = useYear();
  const { progress } = useProgress();

  if (!isFeatureEnabled('ENABLE_PHONICS_PHASE2')) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Feature Not Available</h3>
          <p className="text-gray-600">Phonics Phase 2 is currently disabled. Check back soon!</p>
        </div>
      </div>
    );
  }

  const isCompleted = (soundId: string) => progress.completedSounds.includes(soundId);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">Phase 2 - Phonics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Learn Your First Sounds</h1>
        <p className="text-lg text-gray-600">Master 19 sounds to start reading</p>
      </div>

      {/* Progress Overview */}
      <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-blue-600">{progress.completedSounds.length}</div>
            <div className="text-gray-600">Sounds Completed</div>
          </div>
          <div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: `${(progress.completedSounds.length / 19) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 mt-2">{Math.round((progress.completedSounds.length / 19) * 100)}% Complete</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{progress.badges.length}</div>
            <div className="text-gray-600">Badges Earned</div>
          </div>
        </div>
      </div>

      {/* Sound Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {PHONICS_PHASE_2.map((sound) => {
          const completed = isCompleted(sound.id);
          return (
            <Link
              key={sound.id}
              href={`/learn/reception/phonics/phase-2/${sound.id}`}
              className={`group relative p-6 rounded-xl text-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-300 ${
                completed
                  ? 'bg-green-100 border-2 border-green-400 hover:shadow-lg hover:scale-105'
                  : 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:scale-105'
              }`}
            >
              {/* Checkmark Badge */}
              {completed && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-1">
                  <CheckCircle size={20} />
                </div>
              )}

              {/* Sound Letter */}
              <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform"> {sound.letter.toUpperCase()}</div>

              {/* Labels */}
              <div className="text-sm font-semibold text-gray-900 mb-2">{sound.letter}</div>
              {!completed && (
                <div className="flex items-center justify-center gap-1 text-blue-600 text-xs font-semibold">
                  <Play size={14} />
                  Learn
                </div>
              )}
              {completed && <div className="text-xs text-green-600 font-semibold">✓ Completed</div>}
            </Link>
          );
        })}
      </div>

      {/* Learning Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Learning Tips</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">1.</span>
            <span>Complete one sound per day for best results</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">2.</span>
            <span>Practice blending sounds together after learning a few</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">3.</span>
            <span>Use worksheets to reinforce what you've learned</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">4.</span>
            <span>Take the quiz after each sound to track progress</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
