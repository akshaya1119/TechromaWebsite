import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold">Techroma</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium pigments and color solutions for industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-blue hover:text-brand-yellow transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-brand-blue hover:text-brand-yellow transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-brand-blue hover:text-brand-yellow transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Products</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Organic Pigments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inorganic Pigments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Data</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Markets</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Paints & Coatings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Textiles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plastics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Printing Inks</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality & Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Techroma. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}


