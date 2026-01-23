import herobg from "../assets/dentist_image.jpg";
import phoneImg from "../assets/mobile_app.png";
import video1 from "../assets/Hero-section.mp4";
import video2 from "../assets/Hero-section.mp4";
import video3 from "../assets/Hero-section.mp4";
import video4 from "../assets/Hero-section.mp4";
import video5 from "../assets/Hero-section.mp4";

function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
<section className="relative w-full overflow-hidden">

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


      {/* ================= FREE ACCOUNT SECTION ================= */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-10">

          <div className="mb-10">
            <p className="text-gray-700 font-medium mb-4">
              Create your free account.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
                LOOKING FOR WORK?
              </button>
              <button className="bg-sky-400 text-white px-6 py-2 rounded-full font-medium">
                LOOKING TO HIRE?
              </button>
            </div>
          </div>

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

{/* ================= TESTIMONIALS SECTION ================= */}
<section className="w-full bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 pt-10 pb-10">

    {/* Heading */}
    <h2 className="text-4xl font-medium text-gray-900 mb-14">
      Hear from our users across the country
    </h2>

    {/* Testimonials */}
    <div className="space-y-8">

      {/* Testimonial 1 */}
      <div
        className="p-10 rounded-2xl text-white"
        style={{ backgroundColor: "#5AA7D8" }}
      >
        <p className="text-lg leading-relaxed">
          I would highly recommend Cloud Dentistry. I just moved to a new state,
          and after I transferred my license, I wanted to temp to find my
          perfect fit. Cloud Dentistry is easy to use and offers me the ability
          to pick and choose my schedule.
        </p>

        <p className="mt-6 italic font-medium">
          — User Name, Dental Professional
        </p>
      </div>

      {/* Testimonial 2 */}
      <div
        className="p-10 rounded-2xl text-white"
        style={{ backgroundColor: "#5AA7D8" }}
      >
        <p className="text-lg leading-relaxed">
          Extremely easy to use from an office standpoint! You can book temps
          that are reliable within minutes. I love having control when booking
          and being able to review professionals before making a decision.
        </p>

        <p className="mt-6 italic font-medium">
          — Office Manager, Dental Office
        </p>
      </div>

      {/* Testimonial 3 */}
      <div
        className="p-10 rounded-2xl text-white"
        style={{ backgroundColor: "#5AA7D8" }}
      >
        <p className="text-lg leading-relaxed">
          Love the freedom and flexibility that Cloud Dentistry provides. The
          practices I’ve worked with have been wonderful and the platform makes
          scheduling simple and stress-free.
        </p>

        <p className="mt-6 italic font-medium">
          — Dental Hygienist
        </p>
      </div>

      {/* Testimonial 4 */}
      <div
        className="p-10 rounded-2xl text-white"
        style={{ backgroundColor: "#5AA7D8" }}
      >
        <p className="text-lg leading-relaxed">
          Cloud Dentistry has completely changed how we hire. The transparency,
          speed, and ease of use make it one of the most efficient platforms
          we’ve ever used.
        </p>

        <p className="mt-6 italic font-medium">
          — Practice Owner
        </p>
      </div>

    </div>

  </div>
</section>


    </>
  );
}

export default Home;
