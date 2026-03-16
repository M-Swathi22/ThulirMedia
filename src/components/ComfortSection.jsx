import { motion } from "framer-motion";

import img1 from "../assets/images/comfort1.jpg";
import img2 from "../assets/images/comfort2.jpg";

function ComfortSection() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A <span className="text-brand-red">Comfortable</span> Wedding Experience
          </h2>

          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            Choose from many wedding photographers in Coimbatore, but we are
            known for building genuine connections with couples.
          </p>

          <p className="text-brand-gray text-lg leading-relaxed mb-4">
            When couples feel relaxed, photos become natural and meaningful.
            We guide you gently and help you enjoy the moment without worrying
            about the camera.
          </p>

          <p className="text-brand-gray text-lg leading-relaxed">
            Your wedding album should reflect your personality.
          </p>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[480px] flex items-center justify-center"
        >

          {/* decorative frame */}
          <div className="absolute w-[420px] h-[320px] border-[16px] border-[#e7d7c6] rounded-sm"></div>

          {/* left image */}
          <motion.img
            src={img1}
            alt=""
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute left-6 top-0 w-[260px] h-[360px] object-cover 
            rounded-md shadow-2xl z-20"
          />

          {/* right image */}
          <motion.img
            src={img2}
            alt=""
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute right-6 bottom-0 w-[260px] h-[360px] object-cover 
            rounded-md shadow-2xl z-10"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default ComfortSection;