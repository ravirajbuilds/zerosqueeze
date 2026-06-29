import { Navbar } from "@/components/marketing/Navbar";
import { CTABandSection, FooterSection } from "@/components/marketing/CTAAndFooter";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";

export default function MeasurePage() {
  return (
    <div style={{ background: "#0A0E18" }} className="min-h-svh">
      <Navbar />
      <main className="pt-16">
        <section className="px-6 max-w-4xl mx-auto pt-16 pb-4 text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#A24BFF]">Measurement Guide</span>
          <h1 className="font-display font-bold text-[#EAF0FA] mt-3 mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            How to take a{" "}
            <span style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Heart Check
            </span>
          </h1>
          <p className="text-[#A7B2C6] text-lg max-w-xl mx-auto">
            A full reading takes under 60 seconds. Follow these steps for the most consistent estimates.
          </p>
        </section>
        <HowItWorksSection />
        <CTABandSection />
      </main>
      <FooterSection />
    </div>
  );
}
