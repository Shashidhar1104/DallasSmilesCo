import { useEffect } from "react";
import cherryLogo from "../assets/download-1.jpeg";
import financeHero from "../assets/download-2.jpeg";

function Financing() {
  useEffect(() => {
    // Load Cherry widget script once
    if (!document.getElementById("cherry-widget-script")) {
      const script = document.createElement("script");
      script.id = "cherry-widget-script";
      script.src = "https://provider.withcherry.com/assets/widget.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-[#f1f6fd] min-h-screen pt-16 pb-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0A2540]">
              Flexible Financing with Cherry
            </h1>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We’ve partnered with <strong>Cherry</strong> to make dental care more
              affordable. Get approved in seconds and split your treatment cost
              into easy monthly payments — with no financial stress.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔️ Instant approval (soft credit check)</li>
              <li>✔️ 0% APR options available</li>
              <li>✔️ No hard credit impact</li>
              <li>✔️ Flexible monthly payments</li>
            </ul>
          </div>

          <div className="relative">
            <img
              src={financeHero}
              alt="Dental financing options"
              className="rounded-2xl shadow-lg"
            />
            <img
              src={cherryLogo}
              alt="Cherry Financing"
              className="absolute bottom-4 right-4 w-28 bg-white p-3 rounded-xl shadow"
            />
          </div>
        </div>

        {/* CHERRY WIDGET */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div
            id="cherry-widget"
            data-application-slug="dallas-smiles-dental-orthodontics"
            data-business-name="Dallas Smiles Dental & Orthodontics"
            data-industry-segment="dental"
          />
        </div>

      </div>
    </section>
  );
}

export default Financing;
