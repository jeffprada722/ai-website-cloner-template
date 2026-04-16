import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppIntegrations } from "@/components/AppIntegrations";
import { OneTeamSection } from "@/components/OneTeamSection";
import { DedicatedBookkeeperSection } from "@/components/DedicatedBookkeeperSection";
import { AccurateFinancialsSection } from "@/components/AccurateFinancialsSection";
import { SmarterTechSection } from "@/components/SmarterTechSection";
import { MobileAppSection } from "@/components/MobileAppSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <AppIntegrations />
        <OneTeamSection />
        <DedicatedBookkeeperSection />
        <AccurateFinancialsSection />
        <SmarterTechSection />
        <MobileAppSection />
      </main>
      <Footer />
    </>
  );
}
