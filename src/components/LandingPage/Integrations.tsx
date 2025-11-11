"use client";
import React, { useState } from "react";
import { Zap, ArrowRight, Check } from "lucide-react";

const Integrations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const integrations = [
    {
      name: "Mailchimp",
      logo: "MC",
      color: "from-yellow-400 to-yellow-600",
      description: "Email Marketing",
    },
    {
      name: "SendGrid",
      logo: "SG",
      color: "from-blue-400 to-blue-600",
      description: "Email Delivery",
    },
    {
      name: "Stripe",
      logo: "ST",
      color: "from-purple-400 to-purple-600",
      description: "Payments",
    },
    {
      name: "Shopify",
      logo: "SH",
      color: "from-green-400 to-green-600",
      description: "E-commerce",
    },
    {
      name: "WordPress",
      logo: "WP",
      color: "from-blue-500 to-indigo-600",
      description: "CMS Platform",
    },
    {
      name: "Zapier",
      logo: "ZP",
      color: "from-orange-400 to-red-500",
      description: "Automation",
    },
  ];

  const features = [
    "One-click authentication",
    "Real-time data sync",
    "Advanced automation",
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Seamless Integrations
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Connects{" "}
            </span>
            <span className="text-white">With Your</span>
            <br />
            <span className="text-white">Favorite Tools</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Integrate EmailCraft with{" "}
            <span className="text-purple-400 font-semibold">
              100+ platforms
            </span>{" "}
            and supercharge your workflow in minutes
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-5 py-2.5">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/25">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 bg-linear-to-br ${
                    integration.color
                  } rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    hoveredIndex === index ? "rotate-6 scale-110" : ""
                  }`}>
                  {integration.logo}
                </div>
                <div className="text-base font-semibold text-white mb-1">
                  {integration.name}
                </div>
                <div className="text-xs text-slate-400">
                  {integration.description}
                </div>
              </div>

              {/* Connect indicator */}
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}>
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-linear-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Connect?
              </h3>
              <p className="text-slate-400">
                Explore all available integrations and boost your productivity
              </p>
            </div>

            <button className="group relative bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold flex items-center gap-2 hover:gap-3">
              View All Integrations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-slate-400">Integrations</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-sm text-slate-400">Active Connections</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-sm text-slate-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
