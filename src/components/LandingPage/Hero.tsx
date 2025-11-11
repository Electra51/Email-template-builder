"use client";

import { ArrowRight, Sparkles, Play, CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState({ emails: 0, users: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animated counter for stats
    const emailTarget = 10;
    const userTarget = 50;
    const duration = 2000;
    const steps = 60;
    const emailIncrement = emailTarget / steps;
    const userIncrement = userTarget / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount({
          emails: Math.min(emailIncrement * currentStep, emailTarget),
          users: Math.min(userIncrement * currentStep, userTarget),
        });
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${count.emails.toFixed(1)}M+`,
      label: "Emails Sent",
      color: "from-purple-400 to-pink-400",
    },
    {
      value: `${count.users.toFixed(1)}K+`,
      label: "Active Users",
      color: "from-blue-400 to-cyan-400",
    },
    { value: "99.9%", label: "Uptime", color: "from-green-400 to-emerald-400" },
    {
      value: "4.9/5",
      label: "User Rating",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  const features = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-purple-500/30 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer group">
            <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="bg-linear-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent navMenu tracking-wider">
              Trusted by 50,000+ marketers worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight navMenu">
            <span className="block mb-[-5px]">Email Marketing</span>
            <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
              Made Simple
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed fontInter tracking-wider">
            Create, send, and track beautiful email campaigns with our powerful
            drag-and-drop builder. No design skills required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group relative bg-linear-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center space-x-2 overflow-hidden">
              <span className="relative z-10 fontInter tracking-wider">
                Start Free Trial
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="group border-2 border-purple-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center space-x-2 backdrop-blur-sm">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="fontInter tracking-wider">Watch Demo</span>
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="navMenu tracking-wider">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid with Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`}></div>

                <div className="relative">
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2 fontInter tracking-wider`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-400 font-medium fontInter tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-linear-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="pt-16 max-w-6xl mx-auto">
            <div className="relative group">
              {/* Glow effect behind mockup */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

              {/* Mockup Container */}
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl">
                {/* Browser Chrome */}
                <div className="bg-slate-900/50 border-b border-purple-500/20 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-500">
                    app.emailcraft.com/builder
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-linear-to-br from-slate-900 to-slate-800 p-8 md:p-12 min-h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    {/* Animated Icon */}
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-linear-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-linear-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Drag & Drop Email Builder
                      </h3>
                      <p className="text-slate-400 max-w-md">
                        Design professional emails with our intuitive visual
                        editor. See changes in real-time.
                      </p>
                    </div>

                    {/* Feature Badges */}
                    <div className="flex flex-wrap gap-3 justify-center pt-4">
                      {[
                        "Templates",
                        "AI Assistant",
                        "Live Preview",
                        "Auto-Save",
                      ].map((badge, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm font-medium text-purple-300">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
