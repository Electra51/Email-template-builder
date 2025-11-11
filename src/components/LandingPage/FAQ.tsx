import { Check } from "lucide-react";
import React from "react";

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "How does EmailCraft compare to other platforms?",
              a: "EmailCraft offers better deliverability, faster sending speeds, and more intuitive design tools than competitors.",
            },
            {
              q: "Can I import my existing contacts?",
              a: "Yes! Import contacts from CSV, Excel, or directly from other email platforms like Mailchimp or SendGrid.",
            },
            {
              q: "What's your email deliverability rate?",
              a: "We maintain a 99%+ deliverability rate with dedicated IP addresses and domain warming strategies.",
            },
            {
              q: "Do you offer customer support?",
              a: "Yes! 24/7 email support for all users, plus priority phone support for Pro and Enterprise plans.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition">
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <Check className="w-6 h-6 text-purple-400" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-400 pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
