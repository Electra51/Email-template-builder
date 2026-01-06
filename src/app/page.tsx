import Footer from "../components/Shared/Footer";
import Features from "../components/LandingPage/Features";
import Hero from "../components/LandingPage/Hero";

import React from "react";
import Navbar from "../components/Shared/Navbar";
import SocialProofBanner from "../components/LandingPage/SocialProofBanner";
import Pricing from "../components/LandingPage/Pricing";
import Testimonials from "../components/LandingPage/Testimonials";
import Integrations from "../components/LandingPage/Integrations";
import UseCases from "../components/LandingPage/UseCases";
import LiveDemo from "../components/LandingPage/LiveDemo";
import FAQ from "../components/LandingPage/FAQ";
import CTA from "../components/LandingPage/CTA";

export default function Home() {
  return (
    <main className="text-white bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900
      text-white */}
      <Navbar />
      <Hero />
      <SocialProofBanner />
      {/* <Features />
      <Pricing />
      <Testimonials />
      <Integrations />
      <UseCases />
      <LiveDemo />
      <FAQ />
      <CTA />
      <Footer /> */}
    </main>
  );
}
