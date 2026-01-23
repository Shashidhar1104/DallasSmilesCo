import logo from "../assets/logo-final.png";

function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#DFF3FB" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LEFT COLUMN */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-1 mb-8">
              <div className="flex items-center gap-0 flex-shrink-0">
                <img
              src={logo}
              alt="Cloud Dentistry"
              className="h-16 w-auto"
            />
              </div>
              
              <span className="text-xl font-medium text-gray-700">
                Dallas Smiles & Co.
              </span>
            </div>

            <h4 className="text-blue-500 font-semibold mb-4 uppercase tracking-wide">
              Visit
            </h4>

            <ul className="space-y-2 text-gray-800">
              <li>Professionals</li>
              <li>Dental Practices</li>
              <li>DSO</li>
              <li>Pair Dental</li>
              <li>Talent Partnerships</li>
            </ul>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-gray-800">Log In</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
                Sign Up
              </button>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <h4 className="text-blue-500 font-semibold mb-4 uppercase tracking-wide">
              Contact
            </h4>

            <div className="space-y-4 text-gray-800">

              <p>
                One Washington Mall<br />
                Suite 1269<br />
                Boston, MA 02108
              </p>

              <div>
                <p className="font-semibold text-gray-600">
                  New Dental Offices:
                </p>
                <p className="text-blue-600">
                  Schedule a discovery call
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600">
                  Member Services:
                </p>
                <p className="text-blue-600">
                  service@clouddentistry.com
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Member Services chat available M–F 7am – 7pm CT
                </p>
                <p className="text-blue-600 mt-1">FAQ</p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h4 className="text-blue-500 font-semibold mb-4 uppercase tracking-wide">
              Connect with us
            </h4>

            <div className="flex gap-6 mb-10 text-blue-600 text-xl">
              <span>◎</span>
              <span>in</span>
              <span>f</span>
            </div>

            <h4 className="text-blue-500 font-semibold mb-4 uppercase tracking-wide">
              Resources
            </h4>

            <ul className="space-y-2 text-gray-800">
              <li>Cloud Dentistry Blog</li>
              <li>FAQ</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-20 text-gray-700 text-sm">
          <p>© 2026 Cloud Dentistry</p>
          <p className="mt-2">
            Terms and Conditions &nbsp;|&nbsp; Privacy Policy
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
