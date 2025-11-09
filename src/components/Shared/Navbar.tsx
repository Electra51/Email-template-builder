"use client";

import { Mail, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EmailCraft
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-purple-400 transition">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-400 transition">
              Testimonials
            </a>
            <button className="text-purple-400 hover:text-purple-300 transition">
              Sign In
            </button>
            <button className="bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
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
              className="block hover:text-purple-400 transition">
              Features
            </a>
            <a
              href="#pricing"
              className="block hover:text-purple-400 transition">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block hover:text-purple-400 transition">
              Testimonials
            </a>
            <button className="block w-full text-left text-purple-400 hover:text-purple-300 transition">
              Sign In
            </button>
            <button className="block w-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
