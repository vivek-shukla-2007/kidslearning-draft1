import { useYear } from '@/context/YearContext';
import { isFeatureEnabled } from '@/config/features';
import { BookOpen, Zap, Download } from 'lucide-react';
import { Link } from 'wouter';

export default function LearnPage() {
  const { selectedYear } = useYear();

  const subjects = {
    reception: [
      {
        title: "Reading",
        emoji: "📖",
        topics: "Phonics, Tricky Words, Sight Words",
        href: "/learn/reception/reading",
        enabled: isFeatureEnabled('ENABLE_PHONICS'),
      },
      {
        title: "Writing",
        emoji: "✏️",
        topics: "Letter Formation, Tracing",
        href: "/learn/reception/writing",
        enabled: isFeatureEnabled('ENABLE_LETTER_FORMATION'),
      },
      {
        title: "Maths",
        emoji: "🔢",
        topics: "Counting, Number Bonds, Shapes",
        href: "/learn/reception/maths",
        enabled: isFeatureEnabled('ENABLE_COUNTING'),
      },
    ],
    "year-1": [
      {
        title: "Reading",
        emoji: "📖",
        topics: "Phonics, Blending, Reading Sentences",
        href: "/learn/year-1/reading",
        enabled: isFeatureEnabled('ENABLE_PHONICS'),
      },
      {
        title: "Writing",
        emoji: "✏️",
        topics: "Handwriting, Simple Spelling",
        href: "/learn/year-1/writing",
        enabled: isFeatureEnabled('ENABLE_HANDWRITING'),
      },
      {
        title: "Maths",
        emoji: "🔢",
        topics: "Addition, Subtraction, Place Value",
        href: "/learn/year-1/maths",
        enabled: isFeatureEnabled('ENABLE_ADDITION'),
      },
    ],
    "year-2": [
      {
        title: "Reading",
        emoji: "📖",
        topics: "Reading Stories, Comprehension",
        href: "/learn/year-2/reading",
        enabled: isFeatureEnabled('ENABLE_DECODABLE_BOOKS'),
      },
      {
        title: "Writing",
        emoji: "✏️",
        topics: "Sentence Writing, Punctuation",
        href: "/learn/year-2/writing",
        enabled: isFeatureEnabled('ENABLE_SPELLING'),
      },
      {
        title: "Maths",
        emoji: "🔢",
        topics: "Multiplication, Division, Money",
        href: "/learn/year-2/maths",
        enabled: isFeatureEnabled('ENABLE_MULTIPLICATION'),
      },
    ],
  };

  const yearLabel = {
    reception: "Reception",
    "year-1": "Year 1",
    "year-2": "Year 2",
  };

  const subjectList = subjects[selectedYear as keyof typeof subjects];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Learn</h1>
        <p className="text-lg text-gray-600">Interactive lessons for {yearLabel[selectedYear as keyof typeof yearLabel]}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {subjectList.map((subject, idx) => (
          <Link
            key={idx}
            href={subject.href}
            className={`group p-8 rounded-2xl text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              subject.enabled
                ? 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg cursor-pointer'
                : 'bg-gray-50 border-2 border-gray-200 opacity-60 cursor-not-allowed'
            }`}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{subject.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.title}</h3>
            <p className="text-gray-600 text-sm">{subject.topics}</p>
            {!subject.enabled && <div className="text-xs text-gray-500 mt-4">Coming soon...</div>}
          </Link>
        ))}
      </div>

      {/* Phonics Section (if enabled) */}
      {isFeatureEnabled('ENABLE_PHONICS') && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Phonics Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/learn/reception/phonics/phase-2"
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-center focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-900 mb-2">Phase 2</h3>
              <p className="text-sm text-gray-600">Learn 19 sounds (s, a, t, p...)</p>
              <div className="text-xs text-green-600 font-semibold mt-3">→ Get Started</div>
            </Link>

            <div className="p-6 bg-gray-50 border-2 border-gray-300 rounded-xl opacity-50 text-center cursor-not-allowed">
              <div className="text-4xl mb-3 opacity-50">🌿</div>
              <h3 className="font-bold text-gray-600 mb-2">Phase 3</h3>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </div>

            <div className="p-6 bg-gray-50 border-2 border-gray-300 rounded-xl opacity-50 text-center cursor-not-allowed">
              <div className="text-4xl mb-3 opacity-50">🌳</div>
              <h3 className="font-bold text-gray-600 mb-2">Phase 4 & 5</h3>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
