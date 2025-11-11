/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect, useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  TrendingUp,
  Award,
} from "lucide-react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "EmailCraft transformed our email marketing. We've seen a 3x increase in engagement rates and our team productivity has doubled!",
      avatar: "SJ",
      rating: 5,
      metric: "3x engagement",
      color: "from-purple-500 to-pink-500",
      image:
        "https://api.dicebear.com/7.x/initials/svg?seed=SJ&backgroundColor=8b5cf6",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      content:
        "The drag-and-drop builder is incredibly intuitive. We launched our first campaign in under 30 minutes. Game-changer for startups!",
      avatar: "MC",
      rating: 5,
      metric: "30 min setup",
      color: "from-blue-500 to-cyan-500",
      image:
        "https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=3b82f6",
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "ShopNow",
      content:
        "The analytics dashboard gives us insights we never had before. ROI increased by 200% in just 3 months. Absolutely worth it!",
      avatar: "ER",
      rating: 5,
      metric: "200% ROI",
      color: "from-green-500 to-emerald-500",
      image:
        "https://api.dicebear.com/7.x/initials/svg?seed=ER&backgroundColor=10b981",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeTestimonial]);

  const handleNext = () => {
    setDirection("right");
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeTestimonial ? "right" : "left");
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-semibold text-purple-300">
              ❤️ Customer Love
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Loved by
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Marketers
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who&apos;ve transformed their
            email marketing
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="relative group">
            {/* Glow Effect */}
            <div
              className={`absolute -inset-4 bg-linear-to-r ${testimonials[activeTestimonial].color} opacity-20 blur-2xl rounded-3xl transition-all duration-500`}></div>

            <div className="relative bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-24 h-24 text-purple-400" />
              </div>

              {/* Content */}
              <div className="relative space-y-8">
                {/* Avatar & Info Row */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${testimonials[activeTestimonial].color} rounded-full blur-lg opacity-50 animate-pulse`}></div>
                    <div
                      className={`relative w-20 h-20 bg-linear-to-br ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ring-4 ring-slate-800/50`}>
                      {testimonials[activeTestimonial].avatar}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left flex-1">
                    <div className="font-bold text-xl mb-1">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-slate-400 mb-2">
                      {testimonials[activeTestimonial].role} at{" "}
                      {testimonials[activeTestimonial].company}
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 justify-center sm:justify-start">
                      {[...Array(testimonials[activeTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div
                    className={`bg-linear-to-r ${testimonials[activeTestimonial].color} px-6 py-3 rounded-xl shadow-lg`}>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold text-lg">
                        {testimonials[activeTestimonial].metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <p
                    key={activeTestimonial}
                    className="text-xl md:text-2xl text-slate-200 leading-relaxed italic animate-fadeIn">
                    {testimonials[activeTestimonial].content}
                  </p>
                </div>

                {/* Navigation & Dots */}
                <div className="flex items-center justify-between pt-4">
                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrev}
                    className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-110 hover:shadow-lg group"
                    aria-label="Previous testimonial">
                    <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </button>

                  {/* Dots */}
                  <div className="flex items-center space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`relative transition-all duration-500 ${
                          index === activeTestimonial ? "w-12 h-3" : "w-3 h-3"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}>
                        <div
                          className={`absolute inset-0 rounded-full transition-all ${
                            index === activeTestimonial
                              ? `bg-linear-to-r ${testimonials[index].color}`
                              : "bg-slate-600 hover:bg-slate-500"
                          }`}></div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-110 hover:shadow-lg group"
                    aria-label="Next testimonial">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Auto-play indicator */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Play className="w-3 h-3" />
                  <span>Auto-playing every 5 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Preview Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`text-left p-6 rounded-2xl border transition-all hover:scale-105 ${
                index === activeTestimonial
                  ? `border-purple-500/50 bg-slate-800/80 shadow-lg shadow-purple-500/20`
                  : "border-slate-700/50 bg-slate-800/30 hover:border-slate-600"
              }`}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 bg-linear-to-br ${testimonial.color} rounded-full flex items-center justify-center text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-400 line-clamp-2">
                {testimonial.content}
              </p>
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="w-px h-6 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>50,000+ Reviews</span>
          </div>
          <div className="w-px h-6 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>98% Would Recommend</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
