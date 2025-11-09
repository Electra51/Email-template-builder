import { Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">EmailCraft</span>
            </div>
            <p className="text-slate-400">
              The modern email marketing platform for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© 2025 EmailCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
