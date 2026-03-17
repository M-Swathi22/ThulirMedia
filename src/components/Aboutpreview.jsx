import { motion } from "framer-motion";
import storyImage from "../assets/images/aboutpreview.jpg";

function Aboutpreview() {
  return (
    <section className="relative py-28 bg-brand-dark text-white overflow-hidden">

      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-black via-[#111] to-brand-dark"></div>
        <div className="absolute w-full h-full bg-[linear-gradient(120deg,transparent_40%,rgba(255,42,42,0.08)_40%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >

          {/* glow effect */}
          <div className="absolute -inset-2 bg-brand-red/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* image */}
          <img
            src={storyImage}
            alt="wedding"
            className="
              relative w-full 
              h-[300px] md:h-[400px]   /* 🔥 controlled height */
              object-cover 
              rounded-[20px] 
              shadow-2xl

              transition duration-700 ease-out

              group-hover:scale-105 
              group-hover:rotate-[0.5deg]
              group-hover:brightness-110
            "
          />

        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >

          <p className="uppercase tracking-[6px] text-sm text-brand-gray mb-4">
            Our Story
          </p>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.2] mb-6">
            Wedding Photography in{" "}
            <span className="text-brand-red">Coimbatore</span> that Preserves
            Your Love Forever
          </h2>

          <p className="text-base md:text-lg text-brand-gray leading-relaxed mb-5">
            Weddings are more than just a celebration. They are events that
            last a lifetime. They include rituals and meaningful moments,
            like silent prayers or tears of joy. Thulir Media believes these
            memories should be preserved in an honest, beautiful, and
            profound way.
          </p>

          <p className="text-base md:text-lg text-brand-gray leading-relaxed mb-8">
            Couples searching for wedding photography are not just looking
            for someone with a fancy camera. Couples want storytellers with
            a deep understanding of culture, emotions, and time.
          </p>

          <button className="px-8 py-3 rounded-full bg-brand-red 
          uppercase tracking-wide text-sm transition-all duration-300
          hover:bg-brand-redhover hover:scale-105 shadow-lg">
            About Us
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Aboutpreview;