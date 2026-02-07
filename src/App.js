import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Financing from "./pages/Financing";
import Braces from "./pages/services/Braces";
import Crowns from "./pages/services/Crowns";
import Extractions from "./pages/services/Extractions";
import WisdomTeeth from "./pages/services/WisdomTeeth";
import RootCanal from "./pages/services/RootCanal";
import TeethCleaning from "./pages/services/TeethCleaning";
import DeepCleaning from "./pages/services/DeepCleaning";
import Fillings from "./pages/services/Fillings";
import Implants from "./pages/services/Implants";
import Restoration from "./pages/services/Restoration";
import Gingivectomy from "./pages/services/Gingivectomy";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/services/braces" element={<Braces />} />
        <Route path="/services/crowns" element={<Crowns />} />
      <Route path="/services/extractions" element={<Extractions />} />
      <Route path="/services/wisdom-teeth" element={<WisdomTeeth />} />
      <Route path="/services/root-canal" element={<RootCanal />} />
      <Route path="/services/teeth-cleaning" element={<TeethCleaning />} />
      <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
      <Route path="/services/fillings" element={<Fillings />} />
      <Route path="/services/implants" element={<Implants />} />
      <Route path="/services/restoration" element={<Restoration />} />
      <Route path="/services/gingivectomy" element={<Gingivectomy />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
