"use client";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { ScienceSection } from "./ScienceSection";
import { GallerySection } from "./GallerySection";
import { PrivacySection } from "./PrivacySection";
import { FAQSection } from "./FAQSection";
import { CTABandSection, FooterSection } from "./CTAAndFooter";

export function HomeLandingPage() {
  return (
    <div className="min-h-svh relative" style={{ background: "#0A0E18" }}>
      <div className="zs-bloom" aria-hidden />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScienceSection />
        <GallerySection />
        <PrivacySection />
        <FAQSection />
        <CTABandSection />
      </main>
      <FooterSection />
    </div>
  );
}
