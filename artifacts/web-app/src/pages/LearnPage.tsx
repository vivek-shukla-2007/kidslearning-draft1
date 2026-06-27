import { useYear } from "@/context/YearContext";
import { BookOpen } from "lucide-react";

export default function LearnPage() {
  const { selectedYear } = useYear();

  const subjects = {
    reception: [
      { title: "Reading", emoji: "📖", topics: "Phonics, Tricky Words, Sight Words" },
      { title: "Writing", emoji: "✏️", topics: "Letter Formation, Tracing" },
      { title: "Maths", emoji: "🔢", topics: "Counting, Number Bonds, Shapes" },
    ],
    "year-1": [
      { title: "Reading", emoji: "📖", topics: "Phonics, Blending, Reading Sentences" },
      { title: "Writing", emoji: "✏️", topics: "Handwriting, Simple Spelling" },
      { title: "Maths", emoji: "🔢", topics: "Addition, Subtraction, Place Value" },
    ],
    "year-2": [
      { title: "Reading", emoji: "📖", topics: "Reading Stories, Comprehension" },
      { title: "Writing", emoji: "✏️", topics: "Sentence Writing, Punctuation" },
      { title: "Maths", emoji: "🔢", topics: "Multiplication, Division, Money" },
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
          <button
            key={idx}
            className="group p-8 bg-white border-2 border-gray-200 rounded-2xl text-left hover:border-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{subject.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.title}</h3>
            <p className="text-gray-600 text-sm">{subject.topics}</p>
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon: Lessons</h3>
        <p className="text-gray-600">Interactive lessons with audio, visuals, and games are being created. Check back soon!</p>
      </div>
    </div>
  );
}
