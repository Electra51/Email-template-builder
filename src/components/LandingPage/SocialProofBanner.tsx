import { Clock, CloudLightning, TrendingUp } from "lucide-react";
import React from "react";

const SocialProofBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-purple-900/30 to-pink-900/30 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {["BG", "AM", "SK", "RH"].map((initial, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-slate-900 text-sm font-bold">
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <div className="font-bold">Join 50,000+ marketers</div>
              <div className="text-sm text-slate-400">
                Growing their business with EmailCraft
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-bold">98%</div>
                <div className="text-sm text-slate-400">Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-bold">2 mins</div>
                <div className="text-sm text-slate-400">Avg Setup</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CloudLightning className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-bold">10x</div>
                <div className="text-sm text-slate-400">Faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
