
import { Link } from "react-router-dom";
import { Instagram, Smartphone, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight">
                <span className="font-playfair">Study</span>
                <span className="font-normal">table</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">© Copyright 2025 Studytable</p>
            <p className="text-gray-400">Your personal AI-Tutor for all academic needs.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Socials</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Smartphone size={20} />
                <span>What's App</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Blogs</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                How we plan learning session?
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                How we plan assessment session?
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                How we manage student life?
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                The effective student
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="#" className="flex items-center space-x-2 text-white mb-4 md:mb-0">
              <span>Notice Board</span>
              <ArrowRight size={16} />
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
