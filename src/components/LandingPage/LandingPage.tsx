"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Zap,
  BarChart3,
  Users,
  Rocket,
  Check,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function EmailCraftLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Drag & Drop Builder",
      description:
        "Create stunning email templates without coding. Our intuitive builder makes design effortless.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Delivery",
      description:
        "Send thousands of emails in minutes with our optimized infrastructure and queue system.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Track opens, clicks, and conversions in real-time with detailed performance insights.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contact Management",
      description:
        "Organize and segment your audience with smart lists and custom fields.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Channel Campaigns",
      description:
        "Reach your audience across email, SMS, and social media from one platform.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with GDPR, CAN-SPAM, and SOC 2.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out EmailCraft",
      features: [
        "Up to 1,000 emails/month",
        "5 templates",
        "Basic analytics",
        "Email support",
        "1 user",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For growing businesses",
      features: [
        "Up to 50,000 emails/month",
        "Unlimited templates",
        "Advanced analytics",
        "Priority support",
        "5 users",
        "A/B testing",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Unlimited everything",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited users",
        "API access",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      content:
        "EmailCraft transformed our email marketing. We've seen a 3x increase in engagement rates!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder of StartupXYZ",
      content:
        "The drag-and-drop builder is incredibly intuitive. We launched our first campaign in under 30 minutes.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      content:
        "The analytics dashboard gives us insights we never had before. ROI increased by 200%!",
      avatar: "ER",
    },
  ];

  const stats = [
    { value: "10M+", label: "Emails Sent" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
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
              <button className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Trusted by 50,000+ marketers worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Email Marketing
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Create, send, and track beautiful email campaigns with our
              powerful drag-and-drop builder. No design skills required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500/10 transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to help you create, send, and optimize
              your email campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-purple-500 shadow-2xl shadow-purple-500/30 scale-105"
                    : "border-slate-700"
                } relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-lg text-slate-400">/month</span>
                    )}
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/50"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Marketers
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              See what our customers have to say
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                </div>

                <p className="text-2xl text-slate-200 italic">
                  {testimonials[activeTestimonial].content}
                </p>

                <div>
                  <div className="font-bold text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-slate-400">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>

                <div className="flex justify-center space-x-2 pt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition ${
                        index === activeTestimonial
                          ? "bg-purple-500 w-8"
                          : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of marketers who trust EmailCraft for their
              campaigns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <Rocket className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
    </div>
  );
}
