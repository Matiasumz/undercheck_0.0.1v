import { RevealText } from "@/components/ui/RevealText";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <RevealText>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-text sm:text-6xl">
            ¿Tenés un proyecto?
            <br />
            Hablemos.
          </h2>
        </RevealText>
        <RevealText delay={0.1} className="mt-12">
          <ContactForm />
        </RevealText>
      </div>
    </section>
  );
}
