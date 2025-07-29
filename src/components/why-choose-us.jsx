"use client";
import { Globe, Shield, CheckCircle, Truck, Headphones, FlaskConical } from "lucide-react";
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

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Techroma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for quality, compliance, and global reach
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Alternating colored cards for benefits */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-blue text-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Export Focused</h4>
            <p>Dedicated export capabilities with extensive experience in international markets and trade regulations.</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-red text-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Quality Assurance</h4>
            <p>Comprehensive testing processes and quality control measures ensure consistent, reliable products.</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-yellow text-gray-800 p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Compliance</h4>
            <p>Full adherence to international standards and environmental regulations across all markets.</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Global Presence</h3>
            <p className="text-lg text-gray-600 mb-6">
              With established trade networks across continents, we ensure reliable supply chains and local support wherever your business operates.
            </p>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Global shipping and export" 
              className="rounded-lg shadow-lg cursor-pointer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <Truck className="text-white text-xl" size={24} />
              </motion.div>
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h5>
                <p className="text-gray-600">Efficient logistics and partnerships for timely global delivery.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-start space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <Headphones className="text-white text-xl" size={24} />
              </motion.div>
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h5>
                <p className="text-gray-600">Round-the-clock technical and customer service support.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-start space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <FlaskConical className="text-gray-800 text-xl" size={24} />
              </motion.div>
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">R&D Innovation</h5>
                <p className="text-gray-600">Continuous research and development for next-generation solutions.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}