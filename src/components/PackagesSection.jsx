import { motion } from "framer-motion";

import img1 from "../assets/images/package1.jpeg";
import img2 from "../assets/images/package2.jpg";
import img3 from "../assets/images/package3.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8
    }
  })
};

function PackagesSection() {

  const cards = [
    {
      image: img1,
      title: "Flexible Wedding Coverage",
      text: "Whether your wedding is a one-day ceremony or a multi-day celebration, our photography coverage adapts to your schedule."
    },
    {
      image: img2,
      title: "Customized Packages",
      text: "From pre-wedding shoots to engagement sessions and wedding day coverage, we tailor every package to match your vision."
    },
    {
      image: img3,
      title: "Budget Friendly Options",
      text: "We provide beautiful wedding photography packages that fit different budgets while maintaining quality and emotion."
    }
  ];

  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10"
        >
          Wedding Photography Packages Designed Around You
        </motion.h2>

        {/* Paragraph */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed space-y-5 mb-20"
        >

          <p>
            Every wedding has its own uniqueness. Some weddings take place across multiple days with several ceremonies, while others are simple and personal gatherings.
          </p>

          <p>
            Our wedding photography packages in Coimbatore are designed to adapt to your vision. From pre-wedding coverage to engagement sessions and full wedding day documentation.
          </p>

          <p>
            We also offer budget wedding photography in Coimbatore for couples who want beautiful memories without stretching their budget.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {cards.map((card, i) => (

            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              <div className="overflow-hidden">

                <img
                  src={card.image}
                  alt=""
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600">
                  {card.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PackagesSection;