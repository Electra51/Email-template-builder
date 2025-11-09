"use client";

import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      content:
        "EmailCraft transformed our email marketing. We've seen a 3x increase in engagement rates!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder of StartupXYZ",
      content:
        "The drag-and-drop builder is incredibly intuitive. We launched our first campaign in under 30 minutes.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      content:
        "The analytics dashboard gives us insights we never had before. ROI increased by 200%!",
      avatar: "ER",
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Marketers
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            See what our customers have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {testimonials[activeTestimonial].avatar}
                </div>
              </div>

              <p className="text-2xl text-slate-200 italic">
                {testimonials[activeTestimonial].content}
              </p>

              <div>
                <div className="font-bold text-lg">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-slate-400">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>

              <div className="flex justify-center space-x-2 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === activeTestimonial
                        ? "bg-purple-500 w-8"
                        : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
