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
              <Shield className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Sustainable Approach</h4>
            <p>Focused on responsible practices that balance performance with environmental care.</p>
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
              <Globe className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Global Outlook</h4>
            <p>A forward-looking approach that embraces international standards, diverse markets, and cross-border collaboration.</p>
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
              <FlaskConical className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Innovation Mindset</h4>
            <p>Driven by continuous improvement and fresh thinking to meet evolving industry demands.</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}