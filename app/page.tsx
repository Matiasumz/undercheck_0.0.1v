import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = [
  "Desarrollo Web",
  "Automatizaciones",
  "Publicidad",
  "Datos",
  "AI-powered",
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee
        items={marqueeItems}
        className="border-y border-border py-4 text-sm uppercase tracking-[0.3em] text-text-muted"
      />
      <About />
      <Services />
      <WhyUs />
      <Contact />
    </main>
  );
}
