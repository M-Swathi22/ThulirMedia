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
      ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">ThulirMedia</h1>

        {/* Menu */}
        <ul className="flex gap-8 font-medium">

          <li className="cursor-pointer">Home</li>

          <li className="cursor-pointer">About</li>

          {/* Wedding Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setWeddingOpen(true)}
            onMouseLeave={() => setWeddingOpen(false)}
          >
            Wedding

            {weddingOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg p-4 w-48 space-y-2">
                <li className="hover:text-gray-500">Candid</li>
                <li className="hover:text-gray-500">Pre Wedding</li>
                <li className="hover:text-gray-500">Traditional</li>
              </ul>
            )}
          </li>

          {/* Media Production */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}
          >
            Media

            {mediaOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg p-4 w-64 space-y-2">
                <li className="hover:text-gray-500">Corporate Video Production</li>
                <li className="hover:text-gray-500">Ad Film</li>
                <li className="hover:text-gray-500">E-Commerce Product Photography</li>
                <li className="hover:text-gray-500">Fashion Photography</li>
                <li className="hover:text-gray-500">Brand Video Production</li>
              </ul>
            )}
          </li>

          {/* Studio */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setStudioOpen(true)}
            onMouseLeave={() => setStudioOpen(false)}
          >
            Studio

            {studioOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg p-4 w-64 space-y-2">
                <li>Portrait Photography Studio</li>
                <li>Indoor Photoshoot Studio</li>
                <li>Rental Studio</li>
                <li>Podcast Studio</li>
                <li>Model Photoshoot Studio</li>
                <li>Fashion Photoshoot Studio</li>
                <li>Product Photoshoot Studio</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer">Contact</li>

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;