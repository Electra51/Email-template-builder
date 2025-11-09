import { BarChart3, Globe, Mail, Shield, Users, Zap } from "lucide-react";
import React from "react";

export default function Features() {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Drag & Drop Builder",
      description:
        "Create stunning email templates without coding. Our intuitive builder makes design effortless.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Delivery",
      description:
        "Send thousands of emails in minutes with our optimized infrastructure and queue system.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Track opens, clicks, and conversions in real-time with detailed performance insights.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contact Management",
      description:
        "Organize and segment your audience with smart lists and custom fields.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Channel Campaigns",
      description:
        "Reach your audience across email, SMS, and social media from one platform.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with GDPR, CAN-SPAM, and SOC 2.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Succeed
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Powerful features designed to help you create, send, and optimize
            your email campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
