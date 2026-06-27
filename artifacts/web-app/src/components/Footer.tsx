import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">📚</div>
              <h3 className="text-lg font-bold text-white">Kids Learning</h3>
            </div>
            <p className="text-sm text-gray-400">The best FREE learning platform for Reception to Year 2 following the UK National Curriculum.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/learn" className="block text-sm hover:text-blue-400 transition-colors">Learn</Link>
              <Link href="/practice" className="block text-sm hover:text-blue-400 transition-colors">Practice</Link>
              <Link href="/worksheets" className="block text-sm hover:text-blue-400 transition-colors">Worksheets</Link>
              <Link href="/read" className="block text-sm hover:text-blue-400 transition-colors">Read</Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <nav className="space-y-2">
              <Link href="/parents" className="block text-sm hover:text-blue-400 transition-colors">For Parents</Link>
              <Link href="/about" className="block text-sm hover:text-blue-400 transition-colors">About Us</Link>
              <a href="#privacy" className="block text-sm hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#contact" className="block text-sm hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">Get weekly learning tips for parents</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} Kids Learning Platform. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
