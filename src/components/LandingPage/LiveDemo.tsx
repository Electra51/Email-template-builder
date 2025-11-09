import { ChevronRight } from "lucide-react";
import React from "react";

const LiveDemo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-purple-900/20 to-pink-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See EmailCraft
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              In Action
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            Watch our 2-minute product tour
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-2xl shadow-purple-500/50">
                <ChevronRight className="w-10 h-10 ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
