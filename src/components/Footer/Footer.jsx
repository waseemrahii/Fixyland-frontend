import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Fixyland</h3>
          <p className="mb-6 leading-relaxed">
            Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit quo
            minus maxime placeat facere.
          </p>
          <div className="flex space-x-3">
            <Link
              to="#"
              className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center hover:bg-emerald-500 transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center hover:bg-emerald-500 transition"
            >
              <Twitter size={18} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center hover:bg-emerald-500 transition"
            >
              <Instagram size={18} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center hover:bg-emerald-500 transition"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">EXPLORE</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white transition">About Hotel</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link to="/staff" className="hover:text-white transition">Hotel Staff</Link></li>
            <li><Link to="/news" className="hover:text-white transition">Latest News</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">CONTACT</h4>
          <p className="mb-3">7631 Sabina Park, 115 Devon Isle, Louisiana, USA</p>
          <p className="mb-3">(+1) 987 654 3210</p>
          <p>info@domain.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">NEWSLETTER</h4>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Ex. info@domain.com"
              className="w-full bg-neutral-800 p-3 rounded-md text-white focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 hover:text-emerald-400 transition">
              <Send size={18} />
            </button>
          </div>
          <div className="flex items-center text-sm">
            <input type="checkbox" id="terms" className="mr-2 accent-emerald-500" />
            <label htmlFor="terms">I agree to all terms and policies</label>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© Copyright 2025 Fixyland. All Rights Reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-white transition">Terms and Conditions</Link>
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
