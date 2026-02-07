import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/dentallogo.png";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ROUTING-SAFE SCROLL ================= */
 const handleNavClick = (id) => {
  if (id === "home") {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setOpen(false);
    return;
  }

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  setOpen(false);
};


  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why" },
    { label: "Testimonial", id: "testimonials" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* ================= TOP INFO BAR ================= */}
      <div className="w-full bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center h-10 text-xs md:text-sm">

            {/* MOBILE */}
            <div className="flex md:hidden w-full justify-center items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4 text-sky-300" />
                <span>3234 Forest Lane, Dallas</span>
              </div>
              <span className="opacity-50">|</span>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4 text-sky-300" />
                <span>Mon–Fri: 10:30 AM–11:00 PM</span>
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-sky-300" />
                <span>3234 Forest Lane, Dallas, TX 75234</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-sky-300" />
                <span>Mon–Fri: 10:30 AM – 11:00 PM</span>
              </div>
            </div>

            <a
              href="tel:+19724845400"
              className="hidden md:flex items-center gap-2 ml-auto font-semibold hover:text-sky-300 transition"
            >
              <PhoneIcon className="w-4 h-4 text-sky-300" />
              <span>(972) 484-5400</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center h-24">

          {/* LOGO → ROUTE TO HOME */}
          <button
            onClick={() => {
  navigate("/");
  window.scrollTo({ top: 0, behavior: "smooth" });
}}

            className="flex items-center gap-1 flex-shrink-0 text-left"
          >
            <img src={logo} alt="Dallas Smiles" className="h-24 w-auto pt-2" />
            <div className="leading-tight">
              <h1 className="text-xl md:text-3xl font-semibold text-[#0A2540]">
                Dallas Smiles
              </h1>
              <p className="text-[11px] md:text-sm uppercase text-gray-500">
                Dental & Orthodontics
              </p>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center ml-auto">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-6">
              <a
                href="tel:+12145551234"
                className="flex items-center gap-1 px-5 py-2 rounded-full
                           border border-[#0A2540] text-[#0A2540]
                           font-semibold hover:bg-[#0A2540] hover:text-white transition"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </a>

              <button
                onClick={() => handleNavClick("contact")}
                className="bg-[#0A2540] hover:bg-[#163a63]
                           text-white px-5 py-2 rounded-full font-semibold transition"
              >
                Book Appointment
              </button>
            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-gray-800"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
