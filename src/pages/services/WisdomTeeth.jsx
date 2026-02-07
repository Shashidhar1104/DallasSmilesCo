import wisdomHero from "../../assets/hero2.jpeg";
import wisdomImg from "../../assets/hero3.jpeg";

function WisdomTeeth() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
              Wisdom Teeth Extraction
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Safe & Comfortable  
              <br />
              <span className="text-sky-300">Wisdom Teeth Removal</span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Expert wisdom teeth extraction for peace of mind, comfort, and fast recovery.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={wisdomHero}
              alt="Wisdom Teeth Extraction in Dallas"
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 bg-[#f1f6fd]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={wisdomImg}
              alt="Wisdom teeth procedure"
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Gentle & Expert Care
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Comfortable Wisdom Tooth Removal
            </h2>

            <p className="mt-4 text-gray-600">
              Wisdom teeth can cause pain and alignment issues — our team
              ensures a smooth and comfortable extraction experience.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Quick consultations and evaluations</li>
              <li>✔ Modern, comfortable extraction techniques</li>
              <li>✔ Recovery support and guidance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="md:col-span-2">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-200 text-[#0A2540] text-sm">
              Why Choose Us for Wisdom Teeth
            </span>

            <h2 className="text-3xl font-semibold text-[#0A2540]">
              Fast, Safe Recovery, Minimal Discomfort
            </h2>

            <p className="mt-4 text-gray-600">
              Wisdom tooth removal doesn’t have to be stressful. Our experienced
              dentists focus on your comfort and recovery.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Expert evaluations and personalized treatment plans</li>
              <li>Local anesthesia and sedation options</li>
              <li>After-care instructions for faster healing</li>
              <li>Friendly and supportive dental team</li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="bg-[#0A2540] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">More Services</h3>

            <ul className="space-y-4">
              <li className="bg-white/15 px-4 py-3 rounded-xl">Braces</li>
              <li className="bg-white/15 px-4 py-3 rounded-xl">Dental Crowns</li>
              <li className="bg-white/15 px-4 py-3 rounded-xl">Root Canal</li>
              <li className="bg-white/15 px-4 py-3 rounded-xl">Teeth Cleaning</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

export default WisdomTeeth;
