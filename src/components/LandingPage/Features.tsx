"use client";

import {
  BarChart3,
  Globe,
  Mail,
  Shield,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Drag & Drop Builder",
      description:
        "Create stunning email templates without coding. Our intuitive builder makes design effortless.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "from-purple-500/20 to-pink-500/20",
      highlights: ["No coding required", "500+ templates", "Real-time preview"],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Delivery",
      description:
        "Send thousands of emails in minutes with our optimized infrastructure and queue system.",
      color: "from-yellow-500 to-orange-500",
      bgGlow: "from-yellow-500/20 to-orange-500/20",
      highlights: ["99.9% uptime", "Smart queue", "Auto-retry"],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Track opens, clicks, and conversions in real-time with detailed performance insights.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "from-blue-500/20 to-cyan-500/20",
      highlights: ["Real-time tracking", "Custom reports", "A/B testing"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contact Management",
      description:
        "Organize and segment your audience with smart lists and custom fields.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "from-green-500/20 to-emerald-500/20",
      highlights: ["Smart segments", "Custom fields", "Auto-tagging"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Channel Campaigns",
      description:
        "Reach your audience across email, SMS, and social media from one platform.",
      color: "from-indigo-500 to-purple-500",
      bgGlow: "from-indigo-500/20 to-purple-500/20",
      highlights: ["Email + SMS", "Social media", "Unified inbox"],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with GDPR, CAN-SPAM, and SOC 2.",
      color: "from-red-500 to-pink-500",
      bgGlow: "from-red-500/20 to-pink-500/20",
      highlights: ["SOC 2 certified", "GDPR compliant", "2FA enabled"],
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-semibold text-purple-300">
              ⚡ Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Everything You Need to
            <br />
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to help you create, send, and optimize
            your email campaigns with maximum efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              {/* Animated Background Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.bgGlow} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div
                  className={`w-14 h-14 bg-linear-to-br ${feature.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Icon Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>

                {/* Feature Highlights */}
                <div
                  className={`space-y-2 overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index
                      ? "max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  {feature.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div
                  className={`mt-4 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}>
                  <button className="flex items-center space-x-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card Number Badge */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-all">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-7xl mx-auto">
          <div className="flex flex-col max-w-7xl mx-auto sm:flex-row justify-between items-center gap-4 bg-linear-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 ">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-slate-400 text-sm">
                Start your 14-day free trial. No credit card required.
              </p>
            </div>
            <button className="shrink-0 bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Comparison Table Teaser */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 text-sm text-slate-400 hover:text-purple-400 transition-colors">
            <span>View detailed feature comparison</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
