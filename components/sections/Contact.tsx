import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 border-t border-junta">
      <div className="container-site py-16 sm:py-24">
        <h2 className="type-poster text-[18vw] text-yeso sm:text-7xl lg:text-[7.5rem]">
          ¿Tenés un proyecto?
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="max-w-[45ch] text-lg leading-[1.6] text-humo">
              Contanos qué querés resolver. Te respondemos por mail o por
              WhatsApp.
            </p>

            <dl className="mt-8 border-y border-junta">
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="text-humo">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="link">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-junta py-4">
                <dt className="text-humo">Respuesta</dt>
                <dd className="text-yeso">Los 365 días del año</dd>
              </div>
            </dl>
          </div>

          <div className="card p-5 sm:p-8 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
