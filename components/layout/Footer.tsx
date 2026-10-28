import { WHATSAPP_LINK } from "@/lib/constants";
import { Monogram } from "@/components/brand/Logo";

const footerLinkClass =
  "inline-flex min-h-11 items-center text-sm text-ceniza transition-colors duration-150 hover:text-yeso";

export function Footer() {
  return (
    <footer className="border-t border-junta">
      <div className="container-site flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-sm text-ceniza">
          <Monogram className="h-6 w-auto text-yeso" />
          <span>
            ©{" "}
            <span className="font-dot font-bold">
              {new Date().getFullYear()}
            </span>{" "}
            Undercheck. Keep it under.
          </span>
        </p>
        <ul className="flex gap-6">
          <li>
            <a href="#contacto" className={footerLinkClass}>
              Contacto
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
