import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [weddingOpen, setWeddingOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300
      ${scrolled 
        ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-3" 
        : "bg-brand-dark py-5"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Thulir Media
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 font-medium text-white">

          <li className="cursor-pointer hover:text-brand-red transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-brand-red transition">
            About
          </li>

          {/* Wedding */}
          <li
            className="relative cursor-pointer hover:text-brand-red"
            onMouseEnter={() => setWeddingOpen(true)}
            onMouseLeave={() => setWeddingOpen(false)}
          >
            Wedding

            {weddingOpen && (
              <ul className="absolute top-full left-0 bg-brand-card border border-white/10 shadow-xl w-48 text-white">
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Candid
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Pre Wedding
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Traditional
                </li>
              </ul>
            )}
          </li>

          {/* Media */}
          <li
            className="relative cursor-pointer hover:text-brand-red"
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}
          >
            Media

            {mediaOpen && (
              <ul className="absolute top-full left-0 bg-brand-card border border-white/10 shadow-xl w-64 text-white">
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Corporate Video Production
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Ad Film
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  E-Commerce Product Photography
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Fashion Photography
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Brand Video Production
                </li>
              </ul>
            )}
          </li>

          {/* Studio */}
          <li
            className="relative cursor-pointer hover:text-brand-red"
            onMouseEnter={() => setStudioOpen(true)}
            onMouseLeave={() => setStudioOpen(false)}
          >
            Studio

            {studioOpen && (
              <ul className="absolute top-full left-0 bg-brand-card border border-white/10 shadow-xl w-64 text-white">
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Portrait Photography Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Indoor Photoshoot Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Rental Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Podcast Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Model Photoshoot Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Fashion Photoshoot Studio
                </li>
                <li className="px-4 py-2 hover:text-brand-red cursor-pointer">
                  Product Photoshoot Studio
                </li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-brand-red transition">
            Contact
          </li>

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;