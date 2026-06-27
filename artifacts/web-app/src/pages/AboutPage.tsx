export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl">
        We believe every child deserves access to high-quality, free education.
      </p>

      <div className="max-w-3xl">
        <div className="prose prose-lg text-gray-700 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p>
              To create the best free learning platform for Reception to Year 2 students following the UK National
              Curriculum. We believe learning should be:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Free and accessible to everyone</li>
              <li>Engaging and interactive</li>
              <li>Aligned with UK curriculum standards</li>
              <li>Safe and private</li>
              <li>Inclusive and accessible</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <p>
              We're a team of educators, designers, and developers passionate about early childhood education. Every
              decision we make is guided by one simple question: "Will this help a 5-year-old learn better today?"
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why We Built This</h2>
            <p>
              Education costs should never be a barrier. Our platform removes the obstacles by providing free, quality
              resources for families across the UK. Teachers also find our worksheets and lessons invaluable for their
              classrooms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h2>
            <ul className="space-y-3">
              <li>
                <strong>Child-Centered:</strong> We design for the learner, not the technology.
              </li>
              <li>
                <strong>Accessible:</strong> Everyone deserves quality education, regardless of background.
              </li>
              <li>
                <strong>Transparent:</strong> No hidden costs, no tracking, no data harvesting.
              </li>
              <li>
                <strong>Excellent:</strong> We apply BBC-level quality to everything we do.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
