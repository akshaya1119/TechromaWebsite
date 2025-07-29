"use client";
import { Leaf, Factory, Settings } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium pigment solutions across organic and inorganic categories with customization capabilities
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Yellow cards for innovation highlights */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-yellow text-gray-800 p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Organic Pigments</h4>
            <p className="mb-4">High-performance organic colorants for vibrant, fade-resistant applications across multiple industries.</p>
            <ul className="text-sm space-y-1">
              <li>• Phthalocyanine Blues & Greens</li>
              <li>• Quinacridone Reds & Violets</li>
              <li>• Benzimidazolone Yellows</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-yellow text-gray-800 p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Factory className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Inorganic Pigments</h4>
            <p className="mb-4">Durable, weather-resistant inorganic pigments for demanding industrial applications.</p>
            <ul className="text-sm space-y-1">
              <li>• Iron Oxide Reds & Yellows</li>
              <li>• Titanium Dioxide Whites</li>
              <li>• Chrome Oxide Greens</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-yellow text-gray-800 p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Settings className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Custom Solutions</h4>
            <p className="mb-4">Tailored pigment formulations and small-batch flexibility to meet specific requirements.</p>
            <ul className="text-sm space-y-1">
              <li>• Color Matching Services</li>
              <li>• Special Dispersions</li>
              <li>• Technical Support</li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Colorful pigment powders" 
            className="w-full h-64 object-cover rounded-xl shadow-lg cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
}