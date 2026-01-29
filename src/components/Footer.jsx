import logo from "../assets/logo-final.png";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";


function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#E6F6FD]">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LEFT COLUMN – BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Vinay's Dental Care"
                className="h-14 w-auto"
              />
              <span className="text-xl font-medium text-gray-800">
                Dallas Smiles & Co.
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-sm">
              Dallas Smiles & Co. is dedicated to delivering compassionate,
              high-quality dental treatments while building trust and long-term
              patient relationships.
            </p>

            <div className="mt-6 flex gap-4 text-blue-600 text-lg">
              <span className="cursor-pointer">◎</span>
              <span className="cursor-pointer">f</span>
            </div>
          </div>

          {/* MIDDLE COLUMN – QUICK LINKS */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-5 uppercase tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li
                onClick={() => scrollToSection("home")}
                className="cursor-pointer hover:text-blue-600"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className="cursor-pointer hover:text-blue-600"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection("services")}
                className="cursor-pointer hover:text-blue-600"
              >
                Services
              </li>
              <li
                onClick={() => scrollToSection("testimonial")}
                className="cursor-pointer hover:text-blue-600"
              >
                Testimonials
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer hover:text-blue-600"
              >
                Contact Us
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN – CONTACT */}
          <div>
            <h4 className="text-blue-600 font-semibold mb-5 uppercase tracking-wide">
              Contact
            </h4>

            <div className="space-y-4 text-gray-700">
              <p>
                C/o Sunil Opticians, #4-7-104<br />
                Opp. Motimarket, Esamia Bazar<br />
                Hyderabad, Telangana 500027
              </p>

              <div>
                <p className="font-medium text-gray-600">Phone</p>
                <p className="text-blue-600 font-medium">
                  +91 9032035039
                </p>
                <p className="text-blue-600 font-medium">
                  +91 7207048801
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-600">Open Hours</p>
                <p>10:30 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
<div
  className={`border-t border-gray-200 mt-12 pt-6 transition-all duration-700 delay-500 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
  <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

    {/* Copyright */}
    <div className="text-center lg:text-left">
      <p className="text-gray-500 text-sm flex items-center gap-2 justify-center lg:justify-start">
        © {new Date().getFullYear()}
        <span className="text-blue-600 font-semibold">
          Dallas Smiles & Co.
        </span>
        <span className="text-gray-400">|</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="w-3 h-3 text-red-500" /> by Amplinovians.
        </span>
      </p>

      <p className="text-gray-400 text-xs mt-1">
        Creating healthy smiles with care & trust
      </p>
    </div>

  </div>
</div>


      </div>
    </footer>
  );
}

export default Footer;
