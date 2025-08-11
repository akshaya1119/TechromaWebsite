"use client";
import { Leaf, Factory, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
 <Tabs defaultValue="admt" className="w-full chemical-tabs">
            <TabsList className="grid w-full grid-cols-2 gap-x-2 mb-8 max-w-none mx-auto" style={{ backgroundColor: '#fcb92d' }}>
              <TabsTrigger 
                value="admt" 
                className="text-sm font-medium px-3 py-1.5 text-black"
              >
                2 Amino Dimethyl Terephthalate
              </TabsTrigger>
              <TabsTrigger 
                value="dcppd" 
                className="text-sm font-medium px-4 py-2 ml-5 text-black"
              >
                2,5 Di Chloro Para Phenylene Diamine
              </TabsTrigger>
            </TabsList>

            <TabsContent value="admt">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-2 shadow-xl" style={{ borderColor: '#fcb92d' }}>
                  <CardContent className="p-0">
                    {/* Product Header */}
                    <div className="p-6 text-center" style={{ backgroundColor: '#2563eb' }}>
                      <h4 className="text-3xl font-bold text-white mb-2">2-Amino Dimethyl Terephthalate (ADMT)</h4>
                      <p className="text-blue-100">High-Performance Chemical Intermediate</p>
                    </div>

                    {/* Images Section */}
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Chemical Structure */}
                      <div className="p-6 flex items-center justify-center bg-white">
                        <div className="text-center">
                          <h5 className="text-lg font-semibold mb-4" style={{ color: '#2563eb' }}>Chemical Structure</h5>
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-4 rounded-lg shadow-md"
                          >
                            <img 
                              src="/2ADMT chemical ring.png" 
                              alt="2 Amino Dimethyl Terephthalate Chemical Structure" 
                              className="w-64 h-64 object-contain mx-auto"
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Powder Form */}
                      <div className="p-6 flex items-center justify-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="text-center">
                          <h5 className="text-lg font-semibold mb-4" style={{ color: '#2563eb' }}>Powder Form</h5>
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-4 rounded-lg shadow-md"
                          >
                            <img 
                              src="/2ADMT Powder form.png" 
                              alt="2 Amino Dimethyl Terephthalate Powder Form" 
                              className="w-64 h-64 object-contain mx-auto"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Information Grid */}
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Technical Specifications */}
                      <div className="p-6 bg-white">
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#2563eb' }}>Technical Specifications</h5>
                        <div className="space-y-3">
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>CAS No.:</span>
                            <p className="text-gray-800">5372-81-6</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Molecular Formula:</span>
                            <p className="text-gray-800">C₁₀H₁₁NO₄</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Density:</span>
                            <p className="text-gray-800">0.53 g/cm³ @ 23°C</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Form:</span>
                            <p className="text-gray-800">Powder or Crystals</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Colour:</span>
                            <p className="text-gray-800">Beige or yellow to light green to brownish</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Water Solubility:</span>
                            <p className="text-gray-800">Insoluble in water</p>
                          </div>
                        </div>
                      </div>

                      {/* Uses & Applications */}
                      <div className="p-6" style={{ backgroundColor: '#fcb92d1a' }}>
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#2563eb' }}>Uses & Applications</h5>
                        <motion.ul 
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        >
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Intermediate in the production of dyes and pigments</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Manufacturing polyester and polyamide fibers</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Synthesis of high-performance polymers</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Coatings, adhesives, and plastic additives</span>
                          </motion.li>
                        </motion.ul>
                      </div>

                      {/* Industries */}
                      <div className="p-6 bg-white">
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#2563eb' }}>Target Industries</h5>
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, staggerChildren: 0.1 }}
                        >
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-blue-500 bg-blue-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-blue-800">Textile & Garment Industry</p>
                            <p className="text-sm text-blue-600">Dye intermediates</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-green-500 bg-green-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-green-800">Polymer & Plastics</p>
                            <p className="text-sm text-green-600">High-performance materials</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-purple-500 bg-purple-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-purple-800">Coatings & Adhesives</p>
                            <p className="text-sm text-purple-600">Specialty formulations</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-red-500 bg-red-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-red-800">Chemical Manufacturing</p>
                            <p className="text-sm text-red-600">Process intermediates</p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="dcppd">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-2 shadow-xl" style={{ borderColor: '#fcb92d' }}>
                  <CardContent className="p-0">
                    {/* Product Header */}
                    <div className="p-6 text-center" style={{ backgroundColor: '#e84061' }}>
                      <h4 className="text-3xl font-bold text-white mb-2">2,5-Di Chloro Para Phenylene Diamine (2,5 DCPPD)</h4>
                      <p className="text-red-100">Versatile Dye Intermediate & Chemical Building Block</p>
                    </div>

                    {/* Images Section */}
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Chemical Structure */}
                      <div className="p-6 flex items-center justify-center bg-white">
                        <div className="text-center">
                          <h5 className="text-lg font-semibold mb-4" style={{ color: '#e84061' }}>Chemical Structure</h5>
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-4 rounded-lg shadow-md"
                          >
                            <img 
                              src="/2,5 DCPPD chemical ring.png" 
                              alt="2,5 Di Chloro Para Phenylene Diamine Chemical Structure" 
                              className="w-64 h-64 object-contain mx-auto"
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Powder Form */}
                      <div className="p-6 flex items-center justify-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="text-center">
                          <h5 className="text-lg font-semibold mb-4" style={{ color: '#e84061' }}>Powder Form</h5>
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-4 rounded-lg shadow-md"
                          >
                            <img 
                              src="/2,5 DCPPD powder.png" 
                              alt="2,5 Di Chloro Para Phenylene Diamine Powder Form" 
                              className="w-64 h-64 object-contain mx-auto"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Information Grid */}
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Technical Specifications */}
                      <div className="p-6 bg-white">
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#e84061' }}>Technical Specifications</h5>
                        <div className="space-y-3">
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>CAS No.:</span>
                            <p className="text-gray-800">20103-09-7</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>Molecular Formula:</span>
                            <p className="text-gray-800">C₆H₆Cl₂N₂</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>Density:</span>
                            <p className="text-gray-800">1.48 g/cm³</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>Form:</span>
                            <p className="text-gray-800">Powder to Crystal</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>Colour:</span>
                            <p className="text-gray-800">White to brown powder to crystal</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#2563eb' }}>Water Solubility:</span>
                            <p className="text-gray-800">Insoluble in water</p>
                          </div>
                        </div>
                      </div>

                      {/* Uses & Applications */}
                      <div className="p-6" style={{ backgroundColor: '#fcb92d1a' }}>
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#e84061' }}>Uses & Applications</h5>
                        <motion.ul 
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        >
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Intermediate in dye manufacturing</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Hair dye formulations (coloring agent)</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Rubber chemicals and antioxidants</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-start"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-yellow-600 mr-2">•</span>
                            <span className="text-gray-800">Specialty chemical synthesis</span>
                          </motion.li>
                        </motion.ul>
                      </div>

                      {/* Industries */}
                      <div className="p-6 bg-white">
                        <h5 className="text-xl font-bold mb-4" style={{ color: '#e84061' }}>Target Industries</h5>
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, staggerChildren: 0.1 }}
                        >
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-purple-500 bg-purple-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-purple-800">Textile Dyeing & Printing</p>
                            <p className="text-sm text-purple-600">Color intermediates</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-pink-500 bg-pink-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-pink-800">Cosmetic Industry</p>
                            <p className="text-sm text-pink-600">Hair dye products</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-orange-500 bg-orange-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-orange-800">Rubber & Polymer</p>
                            <p className="text-sm text-orange-600">Chemical additives</p>
                          </motion.div>
                          <motion.div 
                            className="p-3 rounded-lg border-l-4 border-indigo-500 bg-indigo-50"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="font-medium text-indigo-800">Specialty Chemicals</p>
                            <p className="text-sm text-indigo-600">Pharmaceuticals</p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>

        </motion.div>
      </div>
    </section>
  );
}