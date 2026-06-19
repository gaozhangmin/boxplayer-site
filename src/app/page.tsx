import SiteNav from "@/components/sections/SiteNav";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PricingSection from "@/components/sections/PricingSection";
import Showcase from "@/components/sections/Showcase";
import Sources from "@/components/sections/Sources";
import OpenSource from "@/components/sections/OpenSource";
import DeveloperCLI from "@/components/sections/DeveloperCLI";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Features />
        <PricingSection />
        <Showcase />
        <Sources />
        <OpenSource />
        <DeveloperCLI />
        <Download />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
