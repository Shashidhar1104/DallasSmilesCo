import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-center gap-4">

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Book Appointment */}
      <button
        onClick={() =>
          document
            .getElementById("appointment")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        <FaTooth size={18} />
        Book Appointment
      </button>
    </div>
  );
}

export default FloatingButtons;
