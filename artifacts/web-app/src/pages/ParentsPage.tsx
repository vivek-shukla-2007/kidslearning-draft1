import { FileText, BarChart3, HelpCircle } from "lucide-react";

export default function ParentsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">For Parents</h1>
      <p className="text-lg text-gray-600 mb-12">
        Resources and guides to support your child's learning journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <FileText className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Learning Roadmap</h3>
          <p className="text-gray-600 mb-4">Year-by-year breakdown of what your child should learn.</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Coming Soon →</button>
        </div>

        <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Progress Tracker</h3>
          <p className="text-gray-600 mb-4">Monitor your child's learning progress in detail.</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Coming Soon →</button>
        </div>

        <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <HelpCircle className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">FAQs</h3>
          <p className="text-gray-600 mb-4">Common questions about our learning platform.</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">Coming Soon →</button>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">How You Can Help</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Make it fun:</strong> Learning is best when it doesn't feel like a chore. Celebrate small wins!
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Short sessions:</strong> 10-15 minutes daily is better than 1 hour once a week.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Print worksheets:</strong> Offline practice helps with retention.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Be patient:</strong> Every child learns at their own pace. Progress takes time.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
