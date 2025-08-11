"use client";
import { Paintbrush, Shirt, Package, Printer, Factory, Settings } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Markets() {
  return (
    <section id="markets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across diverse sectors worldwide
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Red cards for key industries */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-brand-red text-white p-6 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Factory className="mx-auto text-3xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Polymer Manufacturing</h4>
            <p className="text-sm">High-performance polymers and advanced materials</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-brand-red text-white p-6 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Paintbrush className="mx-auto text-3xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Inks and Coatings</h4>
            <p className="text-sm">Printing inks, paints, and protective coatings</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-brand-red text-white p-6 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Settings className="mx-auto text-3xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Specialty Chemicals</h4>
            <p className="text-sm">Custom chemical solutions and intermediates</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-brand-red text-white p-6 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Package className="mx-auto text-3xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Plastics</h4>
            <p className="text-sm">Packaging, automotive parts, and consumer goods</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}