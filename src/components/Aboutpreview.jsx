import { motion } from "framer-motion";
import storyImage from "../assets/images/aboutpreview.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Aboutpreview() {
  return (
    <section className="py-28 bg-brand-dark text-white relative overflow-hidden">

      {/* subtle red glow background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute -inset-2 bg-brand-red/20 blur-xl rounded-[40px]"></div>

          <img
            src={storyImage}
            alt="wedding story"
            className="relative rounded-[40px] object-cover shadow-2xl hover:scale-105 transition duration-700"
          />

        </motion.div>


        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute -left-6 top-2 w-1 h-28 bg-brand-red"></div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Wedding Photography in{" "}
            <span className="text-brand-red">Coimbatore</span> that Preserves
            Your Love Forever
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-brand-gray leading-relaxed mb-6"
          >
            Weddings are more than just a celebration. They are events that
            last a lifetime. They include rituals and meaningful moments,
            like silent prayers or tears of joy. Thulir Media believes these
            memories should be preserved in an honest, beautiful, and
            profound way.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-brand-gray leading-relaxed mb-8"
          >
            Couples searching for wedding photography are not just looking
            for someone with a fancy camera. Couples want storytellers with
            a deep understanding of culture, emotions, and time.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            variants={item}
            className="px-6 py-2 rounded-full border border-brand-gray bg-brand-card 
            text-sm font-medium transition-all duration-300
            hover:bg-brand-red hover:border-brand-red hover:shadow-lg"
          >
            About US
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}

export default Aboutpreview;