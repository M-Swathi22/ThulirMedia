import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* BRAND */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Thulir Media
          </h2>

          <p className="text-sm leading-relaxed">
            Capturing timeless wedding stories with emotion, elegance and creativity.
            Every moment preserved beautifully for a lifetime.
          </p>
        </motion.div>


        {/* QUICK LINKS */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>

          </ul>
        </motion.div>


        {/* CONTACT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-sm mb-2">Coimbatore, Tamil Nadu</p>
          <p className="text-sm mb-2">+91 98765 43210</p>
          <p className="text-sm">thulirmedia@gmail.com</p>

          {/* SOCIAL ICONS */}

          <div className="flex gap-4 mt-5">

            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition">
              <FaYoutube />
            </a>

          </div>

        </motion.div>

      </div>


      {/* BOTTOM LINE */}

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">

        © 2026 Thulir Media. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;