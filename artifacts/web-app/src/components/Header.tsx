import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Practice", href: "/practice" },
  { label: "Worksheets", href: "/worksheets" },
  { label: "Read", href: "/read" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    return location === href || location.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">📚</div>
            <div className="hidden sm:block">
              <div className="text-sm sm:text-base font-bold text-blue-600">Kids Learning</div>
              <div className="text-xs text-gray-500">UK Curriculum</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
