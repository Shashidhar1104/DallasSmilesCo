import HeroSlider from "../components/HeroSlider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import smile from "../assets/1.gif";
import braces from "../assets/2.gif";
import gum from "../assets/3.gif";
import implants from "../assets/4.gif";
import wisdom from "../assets/5.gif";
import kids from "../assets/6.gif";
import download1 from "../assets/download-2.jpeg";
import download2 from "../assets/download-3.jpeg";
import download3 from "../assets/download-1.jpeg";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCalendarCheck, FaTooth, FaShieldAlt, FaUserMd, FaSmile } from "react-icons/fa";
import happy_family from "../assets/happy_family_final.png";

const services = [
  {
    title: "Braces",
    price: "Starting at $99/mo*",
    desc: "Improve bite and alignment with low-cost braces designed for every age.",
    icon: braces,
    link: "/services/braces",
  },
  {
    title: "Dental Crowns",
    price: "Starting at $899*",
    desc: "Protect and strengthen weak teeth with custom-made dental crowns.",
    icon: smile,
    link: "/services/crowns",
  },
  {
    title: "Tooth Extractions",
    price: "As low as $199* (per tooth)",
    desc: "Safe extractions to relieve pain and prevent future dental problems.",
    icon: braces,
    link: "/services/extractions",
  },
  {
    title: "Wisdom Teeth",
    price: "Starting at $300* per tooth",
    desc: "Safe and stress-free wisdom tooth removal with minimal recovery time.",
    icon:  wisdom,
    link: "/services/extractions",
  },
  {
    title: "Root Canal",
    price: "Starting at $599* (per tooth)",
    desc: "Painless root canals to treat infection and preserve your natural smile.",
    icon: gum,
    link: "/services/extractions",
  },
  {
    title: "Teeth Cleaning",
    price: "Starting at $200*.",
    desc: "Remove plaque and stains with a quick and affordable teeth cleaning.",
    icon:  wisdom,
    link: "/services/teeth-cleaning",
  },
  {
    title: "Deep Teeth Cleaning",
    price: "Starting at $500*",
    desc: "stop gum issues early with thorough and effective deep cleanings.",
    icon: kids,
    link: "/services/extractions",
  },
  {
    title: "Simple Filling",
    price: "Starting at $149*",
    desc: " restore small tooth damage with quick, painless dental fillings.",
    icon:  wisdom,
    link: "/services/wisdom",
  },
  {
    title: "Dental Implants",
    price: "As low as $199* (per tooth)",
    desc: "Restore missing teeth with durable solutions that look and feel completely natural.",
    icon: implants,
    link: "/services/extractions",
  },
  {
    title: "Dental Restoration",
    price: "Starting at $300* per tooth",
    desc: "Get your confident smile back with durable, natural-looking options for broken or lost teeth.",
    icon:  wisdom,
    link: "/services/wisdom",
  },
  {
    title: "Gingivectomy",
    price: "Starting at $599*",
    desc: "reshape your gum line quickly for a cleaner, more even and healthier-looking smile.",
    icon: gum,
    link: "/services/extractions",
  },
  {
    title: "Wisdom Teeth",
    price: "Starting at $300* per tooth",
    desc: "Safe and stress-free wisdom tooth removal with minimal recovery time.",
    icon:  wisdom,
    link: "/services/wisdom",
  },


];

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Patient for 5 years",
    initials: "JM",
    text:
      "Dr. Sarah and the entire team are absolutely wonderful! I used to dread going to the dentist, but now I actually look forward to my appointments.",
  },
  {
    name: "Michael Thompson",
    role: "Invisalign Patient",
    initials: "MT",
    text:
      "Got Invisalign here and the results exceeded my expectations. The staff was professional, the office is beautiful, and they made the whole process so easy. Highly recommend!",
  },
  {
    name: "Lisa Anderson",
    role: "Family of 4",
    initials: "LA",
    text:
      "We bring our whole family here – from our 6-year-old to my husband. They're amazing with the kids and always so patient. Best dental experience we've ever had in Dallas.",
  },
  {
    name: "Michael Thompson",
    role: "Invisalign Patient",
    initials: "MT",
    text:
      "Got Invisalign here and the results exceeded my expectations. The staff was professional, the office is beautiful, and they made the whole process so easy. Highly recommend!",
  },
  {
    name: "Lisa Anderson",
    role: "Family of 4",
    initials: "LA",
    text:
      "We bring our whole family here – from our 6-year-old to my husband. They're amazing with the kids and always so patient. Best dental experience we've ever had in Dallas.",
  },
];




function Home() {
  
  const [active, setActive] = useState(0);
  
    const visible = testimonials.slice(active, active + 3);

    const navigate = useNavigate();


  
  return (
    <>

{/* ================= HERO SECTION ================= */}
<section
  id="home"
  className="relative w-full
             min-h-[90svh]
             md:h-[90vh]
             overflow-hidden"
>
  {/* Image Slider */}
  <HeroSlider />

  {/* Gradient Overlay */}
  <div
    className="absolute inset-0 z-10
               bg-gradient-to-r
               from-[#0A2540]/90
               via-[#1E5EFF]/50
               to-[#1E5EFF]/20"
  />

  {/* Mobile fallback blur (only if image ends early) */}
  <div
    className="absolute bottom-0 left-0 right-0
               h-[45%]
               md:hidden
               bg-gradient-to-t
               from-[#0A2540]/95
               via-[#1E5EFF]/70
               to-transparent
               backdrop-blur-md
               z-10"
  />

  {/* Content */}
  <div
    className="relative z-20 max-w-7xl mx-auto
               min-h-full
               flex items-start md:items-center
               px-4 sm:px-6
               pt-14 sm:pt-20 md:pt-0
               pb-12"
  >
    <div className="max-w-2xl text-white w-full">

      {/* Category Tag */}
<span
  className="inline-flex items-center gap-2
             mt-0 md:mt-10
             mb-4 px-4 py-1.5
             rounded-full
             bg-white/15 backdrop-blur-md
             text-xs sm:text-sm font-medium tracking-wide
             text-white shadow-sm"
>
  Family Dental Care
</span>


      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        Your Smile Deserves <br />
        <span className="text-sky-300">the Best Care</span> in Dallas
      </h1>

      {/* Description (smaller on mobile) */}
      <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
        Experience compassionate, state-of-the-art dental care for your entire family.
      </p>
      <p className="mt-0 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
      From routine cleanings to advanced orthodontics, we're here to give you the
        confident smile you deserve.
        </p>
  
      {/* Buttons */}
<div className="mt-6 flex flex-col sm:flex-row gap-3">
  {/* Schedule Your Visit */}
  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="group flex items-center justify-center gap-2
               px-6 py-3 rounded-full
               bg-[#0A2540] text-white text-sm font-semibold
               hover:bg-[#163a63] hover:-translate-y-0.5
               transition-all duration-300 shadow-md"
  >
    <FaCalendarCheck className="text-sm" />
    Schedule Your Visit
  </button>

  {/* Explore Our Services */}
  <button
    onClick={() =>
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }
    className="group flex items-center justify-center gap-2
               px-6 py-3 rounded-full
               border border-white/50 text-white text-sm font-semibold
               hover:bg-white hover:text-[#0A2540]
               hover:-translate-y-0.5 transition-all duration-300"
  >
    <FaTooth className="text-sm" />
    Explore Our Services
  </button>

  {/* Financial Partner */}
  <button
  onClick={() => navigate("/financing")}
  className="group flex items-center justify-center gap-2
             px-6 py-3 rounded-full
             border border-white/50 text-white text-sm font-semibold
             hover:bg-white hover:text-[#0A2540]
             hover:-translate-y-0.5 transition-all duration-300"
>
  <span className="text-sm">💳</span>
  Financial Partner
</button>

</div>


      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Insurance */}
        <div className="group flex items-center gap-4
                        px-6 py-4 rounded-2xl
                        bg-white/15 backdrop-blur-md
                        text-white font-semibold
                        shadow-md
                        hover:bg-white hover:text-[#0A2540]
                        hover:-translate-y-0.5 transition-all duration-300">
          <FaShieldAlt className="text-xl group-hover:text-[#0A2540]" />
          <div>
            <p className="text-sm sm:text-base">Insurance Accepted</p>
            <p className="text-xs text-white/70 group-hover:text-gray-600">
              Most major plans
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="group flex items-center gap-4
                        px-6 py-4 rounded-2xl
                        bg-white/15 backdrop-blur-md
                        text-white font-semibold
                        shadow-md
                        hover:bg-white hover:text-[#0A2540]
                        hover:-translate-y-0.5 transition-all duration-300">
          <FaUserMd className="text-xl group-hover:text-[#0A2540]" />
          <div>
            <p className="text-sm sm:text-base">10+ Years</p>
            <p className="text-xs text-white/70 group-hover:text-gray-600">
              Experience
            </p>
          </div>
        </div>

        {/* Happy Patients */}
        <div className="group flex items-center gap-4
                        px-6 py-4 rounded-2xl
                        bg-white/15 backdrop-blur-md
                        text-white font-semibold
                        shadow-md
                        hover:bg-white hover:text-[#0A2540]
                        hover:-translate-y-0.5 transition-all duration-300">
          <FaSmile className="text-xl group-hover:text-[#0A2540]" />
          <div>
            <p className="text-sm sm:text-base">5000+</p>
            <p className="text-xs text-white/70 group-hover:text-gray-600">
              Happy Patients
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* ================= ABOUT US SECTION ================= */}
      <section id="about" className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - IMAGE GRID */}
          <div className="flex gap-6">

            {/* LEFT STACK */}
            <div className="flex flex-col gap-6 w-1/2">
              <img
                src={download1}
                alt="Dental Consultation"
                className="
                h-56 w-full object-cover rounded-3xl
                transition-transform duration-300 hover:scale-105
              "
              />

              <img
                src={download2}
                alt="Dental Care"
                className="
                h-64 w-full object-cover rounded-3xl
                transition-transform duration-300 hover:scale-105
              "
              />
            </div>
            {/* RIGHT SINGLE (OFFSET) */}
            <div className="w-1/2 flex items-center">
              <img
                src={download3}
                alt="Dental Chair"
                className="
                h-[360px] w-full object-cover rounded-3xl
                transition-transform duration-300 hover:scale-105
                mt-10
              "
              />
            </div>

          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div>
            <p className="text-blue-600 text-2xl font-semibold mb-3">About Us</p>

            <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
              Professionals and <br />
              Personalized Dental <br />
              Excellence
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We offer high-quality dental care tailored for the whole family.
              From routine checkups to advanced treatments, our compassionate
              team ensures your smile stays healthy and confident.
            </p>
   
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Personalized Treatment Plans",
                "State-of-the-Art Technology",
                "Gentle Care for Kids and Adults",
                "Flexible Appointment Scheduling",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button
              className="
              bg-[#0A2540] text-white px-6 py-3 rounded-lg font-semibold
              transition-all duration-300
              hover:bg-[#163a63] hover:shadow-lg hover:-translate-y-0.5
            "
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section >


     {/* our services */}
      <section id="services" className="pt-10 pb-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 text-2xl font-medium mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Complete Care for Every Smile
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              From routine cleanings to advanced procedures, we provide
              personalized dental care for all ages.
            </p>
          </div>

          {/* Horizontal Scroll */}

          <div className="max-w-7xl mx-auto px-6 py-10 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-md group hover:shadow-xl transition"
                >
                  {/* Icon */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mb-4"
                  />

                  {/* Heading */}
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <p className="font-bold text-black mb-3">
                    {service.price}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>

                  
                 {/* + Read More */}
<div className="mt-4">
  <button
    type="button"
    onClick={() => {
      navigate(service.link);
      window.scrollTo({ top: 0, behavior: "instant" });
    }}
    className="group inline-flex items-center
               border border-[#0A2540] rounded-full
               h-11 w-11 hover:w-36
               transition-all duration-300 ease-in-out
               overflow-hidden"
  >
    {/* Fixed circle for + */}
    <span
      className="flex items-center justify-center
                 min-w-[44px] h-11
                 text-[#0A2540] text-xl font-medium"
    >
      +
    </span>

    {/* Read more text */}
    <span
      className="pl-2 pr-4 text-[#0A2540] text-sm font-semibold
                 whitespace-nowrap opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-200"
    >
      Read more
    </span>
  </button>
</div>



                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* why choose us */}
       <section id="why" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-3xl"></div>

            <img
              src={happy_family}
              alt="Happy family"
              className="relative z-10 rounded-3xl shadow-xl w-full object-cover"
            />

            
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Trusted Partner for{" "}
              <span className="text-blue-600">Lifelong Dental Health</span>
            </h2>

            <p className="text-gray-600 mb-8">
              At Dallas Smiles Dental & Orthodontics, we believe everyone deserves
              a beautiful, healthy smile. Our dedicated team combines advanced
              technology with compassionate care to deliver exceptional results
              in a comfortable, welcoming environment.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "State-of-the-art technology & equipment",
                "Flexible payment & financing options",
                "Experienced, board-certified dentists",
                "Comfortable, spa-like environment",
                "Emergency same-day appointments",
                "Warm, caring team focused on you",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-[#0A2540] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#163a63] transition">
              Meet Our Team
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>


{/* ================= TESTIMONIAL ================= */}
      <section id="testimonials" className="bg-[#f3f7fb] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* SMALL TITLE */}
          <p className="text-2xl tracking-widest font-semibold text-blue-700 mb-4">
            TESTIMONIALS
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What Our Patients{" "}
            <span className="text-blue-600">Say</span>
          </h2>

          {/* SUB TEXT */}
          <p className="text-lg text-gray-600 leading-relaxed pb-16">
            Don&apos;t just take our word for it – hear from the families who trust
            us with their smiles.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {visible.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                {/* QUOTE */}
              {/* <div className="text-blue-300 text-5xl font-bold mb-4">‟</div> */}
                {/* STARS */}
                <div className="flex gap-1 text-blue-400 text-xl mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  "{item.text}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-semibold">
                    {item.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${active === i
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-blue-400"}
              `}
              />
            ))}
          </div>

        </div>
      </section>

{/* ================= CONTACT / BOOK APPOINTMENT ================= */}
<section id="contact" className="pt-10 pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* MAP */}
      <div className="w-full h-[520px] rounded-3xl overflow-hidden shadow">
        <iframe
  title="Dallas Smiles & Co Location"
  src="https://www.google.com/maps?q=3234%20Forest%20Lane,%20Dallas,%20TX%2075234&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      {/* FORM */}
      <div>
        <p className="text-blue-600 font-semibold mb-2">
          BOOK APPOINTMENT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Care at Dallas Smiles & Co.
        </h2>

        <p className="text-gray-600 mb-8">
          Experience gentle, personalized dental care in a welcoming environment
          where your comfort and smile come first.
        </p>

        <form className="space-y-6">
          
          {/* NAME + MOBILE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MOBILE NUMBER
              </label>
              <input
                type="tel"
                placeholder="Your mobile number..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MESSAGES
            </label>
            <textarea
              rows="5"
              placeholder="Enter your messages..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
            
            {/* CALL */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 7.87 6.38 14.25 14.25 14.25.69 0 1.25-.56 1.25-1.25v-2.5a1.25 1.25 0 00-1.25-1.25c-1.04 0-2.04-.17-2.98-.48a1.25 1.25 0 00-1.3.31l-1.2 1.2a11.43 11.43 0 01-5.09-5.09l1.2-1.2a1.25 1.25 0 00.31-1.3c-.31-.94-.48-1.94-.48-2.98A1.25 1.25 0 005.5 2.25H3c-.69 0-1.25.56-1.25 1.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="font-semibold text-gray-900">
                  +91999XXXXX99, +9172XXXXXX01
                </p>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-[#0A2540] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#163a63] transition"
            >
              Submit Enquiry
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
