import { Sparkles } from "lucide-react";
import React from "react";

const UseCases = () => {
  const useCases = [
    {
      title: "E-commerce",
      description:
        "Send automated product recommendations and abandoned cart emails",
      icon: "🛒",
      metrics: "+150% conversion rate",
    },
    {
      title: "SaaS Companies",
      description: "Onboard users and reduce churn with targeted campaigns",
      icon: "💼",
      metrics: "-40% churn rate",
    },
    {
      title: "Content Creators",
      description: "Grow your audience with engaging newsletters and updates",
      icon: "✍️",
      metrics: "+200% engagement",
    },
    {
      title: "Agencies",
      description: "Manage multiple client campaigns from one dashboard",
      icon: "🎯",
      metrics: "10x productivity",
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built For
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Every Business
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            See how different industries use EmailCraft
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition group cursor-pointer">
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-slate-400 mb-4">{useCase.description}</p>
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-semibold text-purple-300">
                <Sparkles className="w-4 h-4" />
                <span>{useCase.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
