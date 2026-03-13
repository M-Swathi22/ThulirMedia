import { motion } from "framer-motion";
import storyImage from "../assets/images/story.jpg";

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

function StorySection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={storyImage}
            alt="wedding story"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.h2
            variants={item}
            className="text-4xl font-bold mb-8"
          >
            Wedding Photography in Coimbatore that Preserves Your Love Forever
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed mb-6"
          >
            Weddings are more than just a celebration. They are events that last a lifetime. They include rituals and meaningful moments, like silent prayers or tears of joy. Thulir Media believes these memories should be preserved in an honest, beautiful, and profound way.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Couples searching for wedding photography are not just looking for someone with a fancy camera. Couples want storytellers with a deep understanding of culture, emotions, and time. It's simple. We are interested in what you feel, and not what you see.
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
}

export default StorySection;