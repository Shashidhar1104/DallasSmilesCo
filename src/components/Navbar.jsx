import { useState, useEffect } from "react";
import logo from "../assets/dentallogo.png";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";


function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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

      {/* MOBILE: Centered Address + Hours */}
      <div className="flex md:hidden w-full justify-center items-center gap-4 text-center">
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

      {/* DESKTOP: Left Address + Hours */}
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

      {/* DESKTOP: Phone on Right */}
      <a
        href="tel:+19724845400"
        className="hidden md:flex items-center gap-2 ml-auto font-semibold
                   hover:text-sky-300 transition"
      >
        <PhoneIcon className="w-4 h-4 text-sky-300" />
        <span>(972) 484-5400</span>
      </a>

    </div>
  </div>
</div>





      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center h-24">

          {/* LOGO */}
<button
  onClick={() => scrollToSection("home")}
  className="flex items-center gap-1 flex-shrink-0 text-left"
>
  <img
    src={logo}
    alt="Dallas Smiles"
    className="h-24 w-auto pt-2"
  />

  <div className="leading-tight">
    <h1 className="text-xl md:text-3xl font-semibold text-[#0A2540]">
      Dallas Smiles
    </h1>
    <p className="text-[11px] md:text-sm tracking-wide uppercase text-gray-500">
      Dental & Orthodontics
    </p>
  </div>
</button>


         
          {/* DESKTOP MENU */}
<nav className="hidden md:flex items-center ml-auto">

  {/* MENU LINKS */}
  <div className="flex items-center gap-6">
    {menuItems.map((item) => (
      <button
        key={item.label}
        onClick={() => scrollToSection(item.id)}
        className="text-gray-900 font-medium hover:text-blue-600 transition"
      >
        {item.label}
      </button>
    ))}
  </div>

  {/* CTA GROUP */}
  <div className="flex items-center gap-3 ml-6">
    
    {/* CALL NOW */}
    <a
      href="tel:+12145551234"
      className="flex items-center gap-1 px-5 py-2 rounded-full
                 border border-[#0A2540] text-[#0A2540]
                 font-semibold hover:bg-[#0A2540] hover:text-white
                 transition"
    >
      <PhoneIcon className="w-4 h-4" />
      Call Now
    </a>

    {/* BOOK APPOINTMENT */}
    <button
      onClick={() => scrollToSection("contact")}
      className="bg-[#0A2540] hover:bg-[#163a63]
                 text-white px-5 py-2 rounded-full
                 font-semibold transition"
    >
      Book Appointment
    </button>

  </div>
</nav>


          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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

      {/* MOBILE MENU */}
{open && (
  <div className="md:hidden bg-white border-t">
    <div className="px-6 py-6 space-y-4">

      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.id)}
          className="block w-full text-left text-gray-900 font-medium"
        >
          {item.label}
        </button>
      ))}

      {/* CALL NOW */}
      <a
        href="tel:+12145551234"
        className="flex items-center justify-center gap-2
                   w-full border border-blue-600
                   text-blue-600 py-3 rounded-full
                   font-semibold"
      >
        <PhoneIcon className="w-4 h-4" />
        Call Now
      </a>

      {/* BOOK APPOINTMENT */}
      <button
        onClick={() => scrollToSection("appointment")}
        className="block w-full bg-blue-600
                   text-white py-3 rounded-full
                   font-semibold"
      >
        Book Appointment
      </button>
    </div>
  </div>
)}

    </header>
  );
}

export default Navbar;
