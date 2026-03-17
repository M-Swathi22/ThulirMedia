import { motion } from "framer-motion";
import heroImage from "../assets/images/hero2.jpg";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image with Zoom */}
      <motion.img
        src={heroImage}
        alt="hero"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-5xl"
        >

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight"
          >
            Capturing Beautiful{" "}
            <span className="text-brand-red">Wedding Stories</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-6 font-body text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed"
          >
            We capture emotions, traditions and timeless memories so that
            your wedding story can be relived for generations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex gap-5 flex-wrap justify-center"
          >

            <button className="font-body bg-brand-red px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-brand-redhover transition-all duration-300 shadow-xl hover:scale-105">
              View Portfolio
            </button>

            <button className="font-body border border-white px-8 py-3 rounded-full uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Contact Us
            </button>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;