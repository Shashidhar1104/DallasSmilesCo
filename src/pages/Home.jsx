import herobg from "../assets/dentist_image.jpg";
import { useState } from "react";
import smile from "../assets/Clean tooth.gif";
import braces from "../assets/Cartoon Tooth Character Looking In Mirror.gif";
import gum from "../assets/Cleaning Teeth.gif";
import implants from "../assets/Crown1.gif";
import wisdom from "../assets/Dallas Smiles Dental.gif";
import kids from "../assets/Dental floss.gif";
import download1 from "../assets/download1.jpeg";
import download2 from "../assets/download2.jpeg";
import download3 from "../assets/download3.jpeg";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import doc1 from "../assets/doc1.jpeg";
import doc2 from "../assets/doc2.jpeg";
import happy_family from "../assets/happy_family_final.png";

const services = [
  {
    title: "Smile Makeover",
    desc: "Enhance your smile with cosmetic dental solutions.",
    image: smile,
  },
  {
    title: "Braces & Aligners",
    desc: "Straighten teeth with modern orthodontic treatments.",
    image: braces,
  },
  {
    title: "Advanced Gum Treatment",
    desc: "Comprehensive periodontal care for healthy gums.",
    image: gum,
  },
  {
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth.",
    image: implants,
  },
  {
    title: "Wisdom Tooth Removal",
    desc: "Safe and painless wisdom tooth extractions.",
    image: wisdom,
  },
  {
    title: "Kids Dentistry",
    desc: "Gentle dental care designed for children.",
    image: kids,
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

const stats = [
  { value: "10,000+", label: "Happy Patients" },
  { value: "20+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
  { value: "15+", label: "Expert Staff" },
];


function Home() {
  
  const [active, setActive] = useState(0);
  
    const visible = testimonials.slice(active, active + 3);

  
  return (
    <>
      {/* ================= HERO SECTION ================= */}
{/* ================= HERO SECTION ================= */}
<section
  id="home"
  className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden"
>
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={herobg}   // <-- your uploaded video
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#1E5EFF]/70 to-[#1E5EFF]/30" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
    <div className="max-w-2xl text-white">

      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
        Family Dental Care
      </span>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Elevating Smiles with <br />
        <span className="text-sky-300">Expert Care</span> and a Gentle Touch
      </h1>

      <p className="mt-6 text-lg text-white/90 leading-relaxed">
        Experience compassionate, state-of-the-art dental care for your entire
        family — from routine cleanings to advanced treatments.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-4 rounded-full bg-primary text-white font-semibold
                     shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          Book Appointment
        </button>

        <button
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-4 rounded-full border border-white/40 text-white
                     hover:bg-white hover:text-primary transition"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  </div>
</section>


{/* ================= ABOUT US SECTION ================= */}
      <section className="w-full bg-white py-16">
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
              bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
              transition-all duration-300
              hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
            "
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section >

      <section id="services" className="pt-10 pb-20 bg-[#f1f6fd]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-blue-600 font-medium mb-2">Our Services</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Complete Care for Every Smile
      </h2>
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        From routine cleanings to advanced procedures, we provide
        personalized dental care for all ages.
      </p>
    </div>

    {/* Horizontal Scroll */}
    <div className="relative">
      <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[280px] bg-white rounded-2xl p-8
                       shadow-sm hover:shadow-xl hover:-translate-y-2
                       transition-all duration-300"
          >
            {/* GIF (NO BACKGROUND) */}
            <div className="mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* Plus Button (Dentia style) */}
            <button
              className="mt-6 w-9 h-9 flex items-center justify-center
                         rounded-full border border-blue-500 text-blue-600
                         hover:bg-blue-600 hover:text-white transition"
              aria-label="Read more"
            >
              +
            </button>
          </div>
        ))}

      </div>

      {/* Scroll hint */}
      <p className="text-center text-sm text-gray-400 mt-6">
        ← Scroll to explore more services →
      </p>
    </div>

  </div>
</section>



       <section className="bg-white py-16">
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

            {/* Meet our team floating card */}
            <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 z-20">
              <div className="flex -space-x-2">
                <img
                  src={doc1}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src={doc2}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                +5
              </span>
              <p className="text-sm font-semibold text-gray-800">
                Meet Our Team
              </p>
            </div>
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
            <button className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition">
              Meet Our Team
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>


{/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#f3f7fb] py-20">
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
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">
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

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
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
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
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
