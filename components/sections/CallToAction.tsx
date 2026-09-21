import { RevealText } from "@/components/ui/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CallToAction() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <RevealText className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-accent/30 bg-surface px-8 py-16 text-center shadow-[0_0_100px_-30px_var(--color-accent)] sm:px-16 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-accent-line to-accent" />
        <h2 className="font-display text-3xl font-black uppercase tracking-tight text-text sm:text-5xl">
          ¿Listo para llevar tu negocio
          <br className="hidden sm:block" /> al siguiente nivel?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-text-soft">
          Contanos cuál es el mayor desafío de tu negocio hoy y vemos juntos
          cómo la tecnología y la IA pueden resolverlo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#contacto"
            className="rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_-8px_var(--color-accent)] transition-all hover:bg-accent-hover hover:shadow-[0_0_60px_-6px_var(--color-accent-hover)]"
          >
            Hablemos
          </MagneticButton>
          <MagneticButton
            href="#servicios"
            className="rounded-full border border-border-strong px-8 py-4 text-sm font-bold uppercase tracking-widest text-text transition-colors hover:border-accent hover:text-accent"
          >
            Ver todos los servicios
          </MagneticButton>
        </div>
      </RevealText>
    </section>
  );
}
