import { useState, useEffect } from "react";
import logo from "../assets/logo-final.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-24">

          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="Cloud Dentistry"
              className="h-16 w-auto"
            />
            <span
              className="text-2xl font-normal tracking-wide"
              style={{ color: "#3f4245", letterSpacing: "0.02em" }}
            >
              Dallas Smiles & Co.
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12 ml-auto mr-12">
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              Professionals
            </a>

            <a
              href="#"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              Offices
            </a>

            <a
              href="#"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              Log In
            </a>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Sign Up
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-gray-800"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-6 space-y-6">
            <a href="#" className="block text-gray-900 font-medium">
              Professionals
            </a>
            <a href="#" className="block text-gray-900 font-medium">
              Offices
            </a>
            <a href="#" className="block text-gray-900 font-medium">
              Log In
            </a>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
