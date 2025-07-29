"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
             // whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src="/Techroma Logo.png"
                alt="Techroma Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="text-gray-800">
  <div className="text-2xl font-bold leading-none font-montserrat">TECHROMA</div>
  <div className="text-sm font-bold text-center font-montserrat">INDUSTRIES</div>
</div>

         </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
              className="text-brand-blue font-medium hover:text-brand-red transition-colors"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              About Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('markets')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Export
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -10 }
            }}
            className="pb-4"
          >
            <div className="flex flex-col space-y-2">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('home')}
                className="text-brand-blue font-medium py-2 text-left"
              >
                Home
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('about')}
                className="text-gray-700 py-2 text-left"
              >
                About Us
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('products')}
                className="text-gray-700 py-2 text-left"
              >
                Products
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('markets')}
                className="text-gray-700 py-2 text-left"
              >
                Export
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 py-2 text-left"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}


