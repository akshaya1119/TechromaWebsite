"use client";
import { Award, Tag, Users } from "lucide-react";
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

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Techroma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a passion for pigments and a vision to fill market gaps in sustainable color solutions
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Professional team in laboratory" 
            className="rounded-xl shadow-lg w-full cursor-pointer transition-all duration-300"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              Delivering vibrant, sustainable color solutions to industries worldwide through innovation, quality, and customer-centric service. Our team's expertise spans decades in pigment chemistry and global trade.
            </p>
            <p className="text-lg text-gray-600">
              We bridge the gap between cutting-edge color technology and practical industrial applications, ensuring every product meets the highest standards of quality and environmental responsibility.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Blue cards for trust-based content */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-blue text-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Quality Excellence</h4>
            <p>Rigorous testing processes and quality control standards ensure every batch meets international specifications.</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-blue text-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Tag className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Certifications</h4>
            <p>Working toward ISO standards and maintaining compliance with global quality and environmental regulations.</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-brand-blue text-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="text-4xl mb-4" size={48} />
            </motion.div>
            <h4 className="text-2xl font-semibold mb-4">Expert Team</h4>
            <p>Decades of combined experience in pigment chemistry, manufacturing, and international trade.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


