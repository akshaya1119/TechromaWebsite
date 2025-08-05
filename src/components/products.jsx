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

        {/* Chemical Products Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0068a2' }}>Chemical Products</h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#c8c9cb' }}>
              From Molecules to Masterpieces: Chemicals that Transform Industries
            </p>
          </div>

         
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
              <Card className="overflow-hidden border-2" style={{ borderColor: '#fcb92d' }}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Structure Image */}
                    <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#0068a2' }}>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="w-full max-w-md"
                        >
                          <img 
                            src="/2ADMT chemical ring.png" 
                            alt="2 Amino Dimethyl Terephthalate Chemical Structure" 
                            className="w-full h-auto object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Product Information */}
                    <div className="p-8" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="text-2xl font-bold mb-6" style={{ color: '#0068a2' }}>2 Amino Dimethyl Terephthalate (ADMT)</h4>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>CAS No.:</span>
                            <p style={{ color: '#000000' }}>5372-81-6</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Molecular Formula:</span>
                            <p style={{ color: '#000000' }}>C₁₀H₁₁NO₄</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Density:</span>
                            <p style={{ color: '#000000' }}>0.53 g/cm³ @ 23°C</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Form:</span>
                            <p style={{ color: '#000000' }}>Powder or Crystals</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-semibold" style={{ color: '#e84061' }}>Colour:</span>
                          <p style={{ color: '#000000' }}>Beige or yellow to light green to brownish</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold" style={{ color: '#e84061' }}>Water Solubility:</span>
                          <p style={{ color: '#000000' }}>Insoluble in water</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dcppd">
              <Card className="overflow-hidden border-2" style={{ borderColor: '#fcb92d' }}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Structure Image */}
                    <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#fcb92d1a' }}>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="w-full max-w-md"
                        >
                          <img 
                            src="/2,5 DCPPD chemical ring.png" 
                            alt="2,5 Di Chloro Para Phenylene Diamine Chemical Structure" 
                            className="w-full h-auto object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Product Information */}
                    <div className="p-8" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="text-2xl font-bold mb-6" style={{ color: '#0068a2' }}>2,5 Di Chloro Para Phenylene Diamine (2,5 DCPPD)</h4>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>CAS No.:</span>
                            <p style={{ color: '#000000' }}>20103-09-7</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Molecular Formula:</span>
                            <p style={{ color: '#000000' }}>C₆H₆Cl₂N₂</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Density:</span>
                            <p style={{ color: '#000000' }}>1.48 g/cm³</p>
                          </div>
                          <div>
                            <span className="font-semibold" style={{ color: '#e84061' }}>Form:</span>
                            <p style={{ color: '#000000' }}>Powder to Crystal</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-semibold" style={{ color: '#e84061' }}>Colour:</span>
                          <p style={{ color: '#000000' }}>White to brown powder to crystal</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold" style={{ color: '#e84061' }}>Water Solubility:</span>
                          <p style={{ color: '#000000' }}>Insoluble in water</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </motion.div>
      </div>
    </section>
  );
}