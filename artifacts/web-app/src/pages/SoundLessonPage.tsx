import { isFeatureEnabled } from '@/config/features';

export interface LessonPageProps {
  soundId: string;
}

export default function SoundLessonPage({ soundId }: LessonPageProps) {
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

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Sound: {soundId.toUpperCase()}</h1>
      <p className="text-lg text-gray-600">Lesson content coming soon...</p>
    </div>
  );
}
