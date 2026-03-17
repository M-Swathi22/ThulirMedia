import { motion } from "framer-motion";
import img from "../assets/images/approach1.jpg";

function OurApproachSection() {

  const points = [
    "Natural storytelling that captures real emotions",
    "Candid moments preserved without forced posing",
    "Elegant editing style that keeps memories timeless",
    "Every small detail of your wedding beautifully documented"
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <motion.div
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={img}
              alt="wedding"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </motion.div>


        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-brand-red font-semibold mb-3 uppercase tracking-wider">
            Our Approach
          </p>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Our Approach to 
            <span className="text-brand-red"> Wedding Photography</span>
          </h2>

          <p className="text-brand-gray leading-relaxed mb-8">
            At Thulir Media, we believe wedding photography should feel real,
            emotional and timeless. Every wedding has its own story, and our
            approach focuses on capturing genuine moments that reflect the
            love, joy and traditions of your special day.
          </p>

          <div className="space-y-5">

            {points.map((point, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4"
              >

                <div className="w-3 h-3 mt-2 bg-brand-red rounded-full"></div>

                <p className="text-gray-300">{point}</p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default OurApproachSection;