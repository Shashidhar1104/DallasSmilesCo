import herobg from "../assets/dentist_image.jpg";
import phoneImg from "../assets/mobile_app.png";
import video1 from "../assets/Hero-section.mp4";
import video2 from "../assets/Hero-section.mp4";
import video3 from "../assets/Hero-section.mp4";
import video4 from "../assets/Hero-section.mp4";
import video5 from "../assets/Hero-section.mp4";
import aboutImage from "../assets/logo-final.png";
import { useState } from "react";

import {
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  FaceSmileIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import smile from "../assets/services1.png";
import braces from "../assets/services2.png";
import gum from "../assets/services3.png";
import implants from "../assets/services4.png";
import wisdom from "../assets/services5.png";
import kids from "../assets/services6.png";
import root from "../assets/services7.png";
import crowns from "../assets/services8.png";

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
  {
    title: "Root Canal",
    desc: "Relieve pain and save your natural teeth.",
    image: root,
  },
  {
    title: "Crowns & Dentures",
    desc: "Restore function and aesthetics of teeth.",
    image: crowns,
  },
];

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Gentle & Patient-Centered Care",
    desc: "We treat every patient with compassion, patience, and a personal touch—especially children and anxious individuals.",
  },
  {
    icon: UserGroupIcon,
    title: "Specialized in Child-Friendly Dentistry",
    desc: "We make dental visits stress-free and fun for kids, helping build healthy habits for life.",
  },
  {
    icon: SparklesIcon,
    title: "Experienced & Trusted Professionals",
    desc: "Our skilled team brings years of clinical expertise with a calm, reassuring approach.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Digital Dentistry",
    desc: "With 3D scanners, digital X-rays, and guided treatment, we ensure faster and more accurate care.",
  },
  {
    icon: HeartIcon,
    title: "Complete Dental Solutions",
    desc: "From preventive care to orthodontics and restorations—we’re your one-stop dental destination.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Transparent & Ethical Treatment Plans",
    desc: "We explain every step clearly, offer honest guidance, and respect your time and trust.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Modern, Hygienic & Comfortable Clinic",
    desc: "Equipped with advanced technology and a warm environment to ensure safety and comfort.",
  },
  {
    icon: ClockIcon,
    title: "Convenient Appointments & Timely Follow-Ups",
    desc: "Flexible scheduling and prompt communication to fit your busy lifestyle.",
  },
];

const testimonials = [
  {
    name: "Panithapu Divya",
    reviews: "5 reviews",
    time: "10 months ago",
    text:
      "Dr. Vinay is a skillful dentist who really cares about his patients. His caring attitude is extraordinary and he always walks the extra mile.",
  },
  {
    name: "Sampath Chary",
    reviews: "1 review • 2 photos",
    time: "3 months ago",
    text:
      "So cool. Caring was good in the treatment process. Highly suggested this doctor for all dental problems.",
  },
  {
    name: "Sameer Jackson",
    reviews: "4 reviews",
    time: "5 days ago",
    text:
      "We were very impressed with the care our child received. The service was excellent and the doctor was very patient.",
  },
  {
    name: "Aarav Patel",
    reviews: "6 reviews",
    time: "2 months ago",
    text:
      "Very professional clinic with modern equipment. Highly recommend!",
  },
  {
    name: "Neha Sharma",
    reviews: "3 reviews",
    time: "1 month ago",
    text:
      "Friendly staff and painless treatment. Loved the experience.",
  },
];


function Home() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;
  return (
    <>
      {/* ================= HERO SECTION ================= */}
<section id="home" className="relative w-full overflow-hidden">

  {/* FULL BACKGROUND IMAGE */}
  <img
    src={herobg}
    alt="Dental professional"
    className="w-full h-[650px] md:h-[750px] object-cover"
  />

  {/* OVERLAY CONTENT PANEL */}
  <div
    className="
      absolute
      top-3
      left-0
      h-auto
      w-full
      md:w-[55%]
      bg-white/70
      backdrop-blur-sm
      px-4
      md:px-12
      py-5
      md:py-10
    "
  >
    <h1 className="text-3xl md:text-4xl font-semibold text-blue-600 leading-tight">
      The largest network of dental professionals actively seeking
      permanent and temporary work.
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl">
      Designed for dental professionals and offices, Cloud Dentistry
      connects verified professionals with offices looking to hire.
      Professionals earn more while offices save on recruitment
      expenses.
    </p>
  </div>

  

</section>

{/* ================= ABOUT US SECTION ================= */}
<section id="about" className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-16">
          ABOUT US
        </h2>

        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* IMAGE LEFT */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Dallas Smiles"
              className="w-72 h-72 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* TEXT RIGHT */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Pediatric Dentist
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dallas Smiles & Co. is dedicated to providing gentle,
              patient-first dental care in a friendly and comfortable
              environment. We focus on preventive care, advanced
              treatments, and building confident, healthy smiles for
              patients of all ages.
            </p>
          </div>
        </div>

        {/* ICON STATS */}
        <div className="grid md:grid-cols-3 gap-14 text-center">

          {/* EXPERIENCE */}
          <div>
            <div className="mx-auto w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-4">
              {/* Graduation Badge */}
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 22h16" />
                <path d="M8 14l-2 8" />
                <path d="M16 14l2 8" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-blue-600">15+ Years</h4>
            <p className="text-gray-700 uppercase text-sm tracking-wide">
              Of Experience
            </p>
          </div>

          {/* HAPPY PATIENTS */}
          <div>
            <div className="mx-auto w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-4">
              {/* Tooth */}
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-3 0-6 2-6 6 0 6 2 14 6 14s6-8 6-14c0-4-3-6-6-6z" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-blue-600">10K</h4>
            <p className="text-gray-700 uppercase text-sm tracking-wide">
              Of Happy Patients
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <div className="mx-auto w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-4">
              {/* Dental Chair */}
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M4 12h12l4 4" />
                <path d="M6 12v6" />
                <path d="M14 12v6" />
                <path d="M2 18h20" />
              </svg>
            </div>
            <h4 className="text-3xl font-bold text-blue-600">20+</h4>
            <p className="text-gray-700 uppercase text-sm tracking-wide">
              Service Offers
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* ================= FREE ACCOUNT SECTION ================= */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-10">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Free to sign up and explore for both dental professionals and offices.
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Find dental professionals when you need them.
          </p>

          <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
  {[video1, video2, video3, video4, video5].map((video, index) => (
    <div
      key={index}
      className="min-w-[220px] h-[360px] rounded-2xl overflow-hidden relative bg-black"
    >
      <video
        src={video}
        className="w-full h-full object-cover"
        controls
        preload="metadata"
      />
    </div>
  ))}
</div>


        </div>
      </section>

      <section id="services" className="pt-10 pb-20 bg-[#f7fbff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Our Services
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100
                     hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          {/* Icon Area (same as reference) */}
          <div className="bg-blue-200 flex items-center justify-center h-52">
            <img
              src={service.image}
              alt={service.title}
              className="w-200 h-200 object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-left">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
    <section id="why" className="pt-10 pb-20 bg-white">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
      WHY CHOOSE US?
    </h2>
  </div>

  {/* Container */}
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-blue-50 rounded-3xl p-10 md:p-14">
      
      {/* 🔥 GRID FIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
        {features.map((item, index) => (
          <div key={index} className="flex gap-6">
            
            {/* Icon */}
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
              <item.icon className="w-7 h-7 text-blue-600" />
            </div>

            {/* Content */}
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</section>


       {/* ================= TRANSPARENCY + STATS SECTION ================= */}
<section className="w-full">

  {/* ===== TOP BLUE RECTANGLE (NO WAVE) ===== */}
  <div className="w-full bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl">
          <span className="font-semibold">100% transparency for all.</span>{" "}
          Browse peer-reviews of verified dental professionals and office
          ratings. Unlimited hiring and bookings anytime, anywhere, and on any
          device.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition">
            LOOKING FOR WORK?
          </button>
          <button className="bg-sky-400 hover:bg-sky-500 px-6 py-3 rounded-full font-medium transition">
            LOOKING TO HIRE?
          </button>
        </div>

      </div>
    </div>
  </div>

  {/* ===== WHITE STATS + IMAGE + WAVE ===== */}
  <div className="relative bg-white overflow-hidden">

    <div className="max-w-7xl mx-auto px-6 pt-5 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT: STATS (CENTERED BLOCK) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-12 text-center">

            <div>
              <div className="text-blue-600 text-4xl mb-4">📅</div>
              <p className="text-3xl font-semibold text-blue-600">674,708</p>
              <p className="text-gray-700 mt-2">
                Dental positions<br />filled
              </p>
            </div>

            <div>
              <div className="text-blue-600 text-4xl mb-4">🏢</div>
              <p className="text-3xl font-semibold text-blue-600">39,550</p>
              <p className="text-gray-700 mt-2">
                Dental offices in<br />network
              </p>
            </div>

            <div>
              <div className="text-blue-600 text-4xl mb-4">👤</div>
              <p className="text-3xl font-semibold text-blue-600">35,722</p>
              <p className="text-gray-700 mt-2">
                Approved and verified<br />dental professionals
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT: PHONE IMAGE */}
        <div className="flex justify-center relative z-10">
          <img
            src={phoneImg}
            alt="Cloud Dentistry App"
            className="max-w-sm w-full"
          />
        </div>

      </div>
    </div>

    {/* ===== WAVE (VISIBLE & UNDER IMAGE) ===== */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[160px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,120 480,120 720,100 960,80 1200,40 1440,60 L1440,120 L0,120 Z"
          fill="#f9fafb"
        />
      </svg>
    </div>

  </div>
</section>

{/* ================= TESTIMONIAL ================= */}
<section id="testimonial" className="pt-10 pb-20 bg-blue-100">
  <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-600 mb-6">
    TESTIMONIAL
  </h2>

  <p className="text-center max-w-4xl mx-auto text-gray-600 mb-10 px-4">
    From smile makeovers to routine care, we offer modern, gentle dental
    services designed to keep you confident, comfortable and glowing with health.
  </p>

  {/* Google Review Bar */}
  <div className="max-w-6xl mx-auto bg-white rounded-xl flex items-center justify-between px-6 py-4 mb-12 shadow-sm">
    <div className="flex items-center gap-3">
      <span className="font-semibold">Google Reviews</span>
      <span className="text-yellow-400">★★★★★</span>
      <span className="text-gray-500">(120+ reviews)</span>
    </div>

    <a
      href="https://maps.google.com/?cid=XXXXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Review us on Google
    </a>
  </div>

  {/* Slider */}
  <div className="overflow-hidden max-w-6xl mx-auto px-4">
    <div
      className="flex gap-6 transition-transform duration-500"
      style={{ transform: `translateX(-${index * 33.333}%)` }}
    >
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="min-w-[300px] md:min-w-[32%] bg-white rounded-2xl p-6 shadow"
        >
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm text-gray-500">
            {item.reviews} • {item.time}
          </div>

          <div className="text-yellow-400 mt-2">★★★★★</div>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 mt-8">
    {[...Array(maxIndex + 1)].map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-3 h-3 rounded-full ${
          index === i ? "bg-blue-600" : "bg-gray-300"
        }`}
      />
    ))}
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
          src="https://www.google.com/maps?q=Dallas%20Smiles%20%26%20Co&output=embed"
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
