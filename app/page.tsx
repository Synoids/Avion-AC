import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/services/ServicesSection";

export const metadata = {
  title: "Avion AC - Jasa AC Palembang | Instalasi, Servis & Perbaikan",
  description:
    "Layanan AC profesional di Palembang. Instalasi, servis, pembersihan, dan pengisian freon AC dengan teknisi berpengalaman dan garansi kepuasan.",
  keywords: [
    "Service AC Palembang",
    "Jasa AC Palembang",
    "Instalasi AC Palembang",
    "AC maintenance Palembang",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
