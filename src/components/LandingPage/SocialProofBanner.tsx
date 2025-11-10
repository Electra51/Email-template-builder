/* eslint-disable react-hooks/set-state-in-effect */
// import { Clock, CloudLightning, TrendingUp } from "lucide-react";
// import React from "react";

// const SocialProofBanner = () => {
//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-purple-900/30 to-pink-900/30 border-y border-purple-500/20">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="flex items-center space-x-3">
//             <div className="flex -space-x-2">
//               {["BG", "AM", "SK", "RH"].map((initial, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-slate-900 text-sm font-bold">
//                   {initial}
//                 </div>
//               ))}
//             </div>
//             <div>
//               <div className="font-bold">Join 50,000+ marketers</div>
//               <div className="text-sm text-slate-400">
//                 Growing their business with EmailCraft
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-8">
//             <div className="flex items-center space-x-2">
//               <TrendingUp className="w-6 h-6 text-green-400" />
//               <div>
//                 <div className="font-bold">98%</div>
//                 <div className="text-sm text-slate-400">Satisfaction</div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Clock className="w-6 h-6 text-blue-400" />
//               <div>
//                 <div className="font-bold">2 mins</div>
//                 <div className="text-sm text-slate-400">Avg Setup</div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CloudLightning className="w-6 h-6 text-yellow-400" />
//               <div>
//                 <div className="font-bold">10x</div>
//                 <div className="text-sm text-slate-400">Faster</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialProofBanner;

"use client";

import {
  Clock,
  CloudLightning,
  TrendingUp,
  Star,
  Users,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";

const SocialProofBanner = () => {
  const [activeUsers, setActiveUsers] = useState(50000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const avatars = [
    { initials: "BG", color: "from-purple-500 to-pink-500", name: "Brad G." },
    { initials: "AM", color: "from-blue-500 to-cyan-500", name: "Anna M." },
    { initials: "SK", color: "from-green-500 to-emerald-500", name: "Sam K." },
    {
      initials: "RH",
      color: "from-yellow-500 to-orange-500",
      name: "Rachel H.",
    },
  ];

  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "98%",
      label: "Satisfaction Rate",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      description: "4.9/5 average rating",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "2 mins",
      label: "Average Setup",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      description: "Start in seconds",
    },
    {
      icon: <CloudLightning className="w-6 h-6" />,
      value: "10x",
      label: "Faster Results",
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      description: "vs traditional tools",
    },
  ];

  const trustBadges = [
    { icon: <Star className="w-4 h-4" />, text: "SOC 2 Certified" },
    { icon: <Award className="w-4 h-4" />, text: "GDPR Compliant" },
    { icon: <Users className="w-4 h-4" />, text: "24/7 Support" },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border-y border-purple-500/20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1190px] mx-auto relative z-10 px-4 sm:px-6 lg:px-6">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>
          <div className="flex flex-col sm:flex-row items-center gap-6 flex-1">
            <div className="relative group">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className={`relative w-12 h-12 bg-linear-to-br ${avatar.color} rounded-full flex items-center justify-center border-3 border-slate-900 text-sm font-bold shadow-lg transform transition-all hover:scale-125 hover:z-10 hover:rotate-12 cursor-pointer`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                      transitionDelay: `${i * 50}ms`,
                    }}
                    title={avatar.name}>
                    {avatar.initials}

                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${avatar.color} rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity -z-10`}></div>
                  </div>
                ))}
              </div>

              {/* +1K indicator */}
              <div className="absolute -right-2 -top-2 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
                +1K
              </div>
            </div>

            {/* Text Content with Live Counter */}
            <div className="text-center sm:text-left">
              <div className="font-bold text-lg mb-1">
                Join{" "}
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {activeUsers.toLocaleString()}+
                </span>{" "}
                marketers
              </div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span>Growing their business with EmailCraft</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {trustBadges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full border border-purple-500/20">
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Metrics Grid */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-lg min-w-[140px]"
                style={{ animationDelay: `${i * 150}ms` }}>
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${metric.bgColor} opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity -z-10`}></div>

                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className={`${metric.color} group-hover:scale-110 transition-transform`}>
                    {metric.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <div className={`font-bold text-xl ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-slate-300 whitespace-nowrap">
                      {metric.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {metric.description}
                    </div>
                  </div>
                </div>

                {/* Progress Bar Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Ticker - Company Logos/Names (Optional) */}
        <div className="mt-8 pt-6 border-t border-purple-500/10">
          <div className="text-center text-xs text-slate-500 mb-4">
            Trusted by leading companies worldwide
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[
              "TechCorp",
              "StartupXYZ",
              "Enterprise Inc",
              "Digital Co",
              "Growth Labs",
            ].map((company, i) => (
              <div
                key={i}
                className="text-slate-600 font-semibold hover:text-slate-400 transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialProofBanner;
