import { motion } from "framer-motion";
import bg from "../assets/images/cta.jpg";

function CTASection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND IMAGE */}

      <img
        src={bg}
        alt="wedding"
        className="absolute w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/60"></div>


      {/* CONTENT */}

      <div className="relative z-10 max-w-2xl px-6">

        {/* HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Capture Your Wedding Story
        </motion.h2>


        {/* PARAGRAPH */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-200 text-lg mb-8"
        >
          Connect with us to plan your perfect wedding photography experience.
          We ensure every emotion is beautifully preserved for a lifetime.
        </motion.p>


        {/* BUTTON */}

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold 
          hover:bg-red-600 hover:scale-105 transition duration-300"
        >
          Contact Us
        </motion.a>

      </div>

    </section>
  );
}

export default CTASection;