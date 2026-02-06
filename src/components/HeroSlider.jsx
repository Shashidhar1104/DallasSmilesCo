import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";

function HeroSlider() {
  const images = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]); // ✅ FIXED dependency

  return (
    <div className="absolute inset-0 z-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Dental Hero"
          className={`absolute inset-0 w-1920 h-1080 object-cover
                      transition-opacity duration-700
                      ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default HeroSlider;
