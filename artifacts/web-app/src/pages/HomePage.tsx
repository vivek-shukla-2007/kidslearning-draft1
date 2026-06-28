import { Link } from "wouter";
import { useYear } from "@/context/YearContext";
import YearCard from "@/components/YearCard";
import FeatureCard from "@/components/FeatureCard";
import { BookOpen, Zap, Download, Award, Users, Shield } from "lucide-react";

export default function HomePage() {
  const { setSelectedYear } = useYear();

  const handleYearSelect = (year: "reception" | "year-1" | "year-2") => {
    setSelectedYear(year);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Learn Reading &amp; Maths <span className="text-blue-600">the Fun Way</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            The best FREE learning platform for Reception to Year 2 following the UK National Curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn/reception"
              onClick={() => handleYearSelect("reception")}
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Start Learning
            </Link>
            <Link
              href="/parents"
              className="inline-block px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors text-center"
            >
              For Parents
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Year */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-white rounded-t-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Choose Your Year</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/learn/reception"
            onClick={() => handleYearSelect("reception")}
            className="block"
          >
            <YearCard
              year="Reception"
              emoji="👶"
              color="green"
              description="Age 4-5 | Letters & Numbers"
              onClick={() => handleYearSelect("reception")}
            />
          </Link>
          <Link
            href="/learn/year-1"
            onClick={() => handleYearSelect("year-1")}
            className="block"
          >
            <YearCard
              year="Year 1"
              emoji="🎒"
              color="blue"
              description="Age 5-6 | Phonics & Adding"
              onClick={() => handleYearSelect("year-1")}
            />
          </Link>
          <Link
            href="/learn/year-2"
            onClick={() => handleYearSelect("year-2")}
            className="block"
          >
            <YearCard
              year="Year 2"
              emoji="📖"
              color="purple"
              description="Age 6-7 | Reading & Maths"
              onClick={() => handleYearSelect("year-2")}
            />
          </Link>
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Why Parents Love Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="🆓"
            title="100% Free"
            description="No hidden costs, no subscriptions. Learning should be accessible to everyone."
          />
          <FeatureCard
            icon="🔐"
            title="No Login Required"
            description="Just click and start learning. Your child's progress is saved automatically."
          />
          <FeatureCard
            icon="📚"
            title="UK Curriculum"
            description="Aligned with Reception, Year 1, and Year 2 learning objectives."
          />
          <FeatureCard
            icon="🎮"
            title="Interactive"
            description="Games, animations, and rewards keep children engaged and motivated."
          />
          <FeatureCard
            icon="🖨️"
            title="Printable Worksheets"
            description="Download and print exercises to reinforce learning at home or school."
          />
          <FeatureCard
            icon="✅"
            title="Progress Tracking"
            description="See exactly what your child has learned with detailed progress reports."
          />
        </div>
      </section>

      {/* Popular Today */}
      <section className="bg-gray-50 py-12 sm:py-20 mb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Popular Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "🔤", title: "Phase 2 Phonics", desc: "Learn your first sounds", href: "/learn/reception/phonics/phase-2" },
              { emoji: "🔢", title: "Number Bonds", desc: "Pairs that make 10", href: "/learn/reception" },
              { emoji: "💬", title: "Tricky Words", desc: "High-frequency words", href: "/learn/reception" },
              { emoji: "🎯", title: "Word Games", desc: "Fun language games", href: "/learn/reception" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => handleYearSelect("reception")}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center cursor-pointer"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-blue-600 text-white rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold mb-2">Designed by Educators</h3>
                <p className="text-blue-100 text-sm">Created with UK primary school teachers to match curriculum standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">♿</div>
              <div>
                <h3 className="font-bold mb-2">Fully Accessible</h3>
                <p className="text-blue-100 text-sm">Works with screen readers and keyboard navigation for all learners.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-bold mb-2">Super Fast</h3>
                <p className="text-blue-100 text-sm">Works on slow connections. Optimized for tablets and smartphones.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🛡️</div>
              <div>
                <h3 className="font-bold mb-2">Safe &amp; Secure</h3>
                <p className="text-blue-100 text-sm">No tracking, no personal data collection. Your privacy is protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">No signup needed. Just pick a year and start learning.</p>
        <Link
          href="/learn/reception"
          onClick={() => handleYearSelect("reception")}
          className="inline-block px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Learning Now →
        </Link>
      </section>
    </div>
  );
}
