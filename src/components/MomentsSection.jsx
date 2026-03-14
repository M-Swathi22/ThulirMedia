import { useEffect, useState } from "react";

import img1 from "../assets/images/moments1.jpg";
import img2 from "../assets/images/moments2.webp";
import img3 from "../assets/images/moments3.webp";
import img4 from "../assets/images/moments4.jpg";
import img5 from "../assets/images/moments5.jpg";

function MomentsSection() {

  const [index, setIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    const pos = (i - index + images.length) % images.length;

    if (pos === 0) return "center";
    if (pos === 1) return "right1";
    if (pos === 2) return "right2";
    if (pos === images.length - 1) return "left1";
    if (pos === images.length - 2) return "left2";
    return "hidden";
  };

  return (
    <section className="py-28 bg-brand-dark text-white overflow-hidden relative">

      {/* red glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
          <span className="text-brand-red">Moments</span> That Matter
        </h2>

        <div className="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed space-y-5 mb-20">

          <p>
            As one of the most trusted wedding photographers in Coimbatore,
            we understand that weddings happen only once, but their memories
            last forever.
          </p>

          <p>
            Our approach to wedding photography captures emotions and
            moments so that they feel fresh even after many years.
          </p>

          <p>
            We highlight intimate details and spontaneous moments like
            the bride adjusting her saree or the groom's joyful smile.
          </p>

        </div>

        {/* Slider */}

        <div className="relative flex justify-center items-center h-[450px]">

          {images.map((img, i) => {

            const position = getPosition(i);

            let style = "opacity-0 scale-75";

            if (position === "center")
              style = "scale-100 z-30 translate-x-0";

            if (position === "left1")
              style = "-translate-x-[220px] scale-90 z-20";

            if (position === "left2")
              style = "-translate-x-[420px] scale-75 z-10";

            if (position === "right1")
              style = "translate-x-[220px] scale-90 z-20";

            if (position === "right2")
              style = "translate-x-[420px] scale-75 z-10";

            return (
              <img
                key={i}
                src={img}
                alt="wedding moment"
                className={`absolute w-[300px] h-[420px] object-cover rounded-2xl shadow-2xl border border-brand-card transition-all duration-700 hover:scale-105 ${style}`}
              />
            );
          })}

        </div>

        <div className="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed space-y-5 mt-20">

          <p className="font-semibold text-white text-xl">
            Moments You Lived Once, Memories You'll Relive Always
          </p>

          <p>
            Our style is elegant, natural, and deeply emotive. No forced
            poses. No artificial drama. Just beautifully preserved real
            love stories captured forever.
          </p>

        </div>

      </div>

    </section>
  );
}

export default MomentsSection;