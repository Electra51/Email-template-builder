import React from "react";

const Integrations = () => {
  const integrations = [
    { name: "Mailchimp", logo: "MC" },
    { name: "SendGrid", logo: "SG" },
    { name: "Stripe", logo: "ST" },
    { name: "Shopify", logo: "SH" },
    { name: "WordPress", logo: "WP" },
    { name: "Zapier", logo: "ZP" },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Integrates{" "}
            </span>
            With Your Favorite Tools
          </h2>
          <p className="text-xl text-slate-300">
            Connect EmailCraft with 100+ popular platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition transform hover:scale-110 cursor-pointer flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl font-bold mb-3">
                {integration.logo}
              </div>
              <div className="text-sm font-medium text-slate-300">
                {integration.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-500/10 transition font-semibold">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
