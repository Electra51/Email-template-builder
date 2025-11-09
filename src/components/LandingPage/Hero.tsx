"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

export default function Hero() {
  const stats = [
    { value: "10M+", label: "Emails Sent" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User Rating" },
  ];
  return (
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
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Create, send, and track beautiful email campaigns with our powerful
            drag-and-drop builder. No design skills required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-linear-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center space-x-2">
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
                <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
