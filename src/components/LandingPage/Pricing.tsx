import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
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
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
              className={`bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                plan.popular
                  ? "border-purple-500 shadow-2xl shadow-purple-500/30 scale-105"
                  : "border-slate-700"
              } relative`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
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
                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                  plan.popular
                    ? "bg-linear-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/50"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
