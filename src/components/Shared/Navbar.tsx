"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/logoBold.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-3 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />

            <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-8 fontInter tracking-wider">
              Craft
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-purple-400 transition navMenu tracking-wider">
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-purple-400 transition navMenu tracking-wider">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-400 transition navMenu tracking-wider">
              Testimonials
            </a>
            <button className="text-purple-400 hover:text-purple-300 transition navMenu tracking-wider">
              Sign In
            </button>
            <button className="bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 navMenu tracking-wider">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block hover:text-purple-400 transition navMenu tracking-wider">
              Features
            </a>
            <a
              href="#pricing"
              className="block hover:text-purple-400 transition navMenu tracking-wider">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block hover:text-purple-400 transition navMenu tracking-wider">
              Testimonials
            </a>
            <button className="block w-full text-left text-purple-400 hover:text-purple-300 transition navMenu tracking-wider">
              Sign In
            </button>
            <button className="block w-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg navMenu tracking-wider">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
