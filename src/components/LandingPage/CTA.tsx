import { Rocket } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-linear-to-br from-purple-500 to-pink-500 p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of marketers who trust EmailCraft for their campaigns
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
  );
};

export default CTA;
