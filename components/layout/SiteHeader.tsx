import { navLinks } from "@/lib/constants";
import { Logo } from "@/components/brand/Logo";

// Landing de una sola página: alcanza con el header, sin barra inferior.
// En mobile quedan el logotipo y la acción de contacto; los links de
// sección aparecen desde sm.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-junta/60 bg-concreto/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a href="#top" className="-mx-1 rounded-sm px-1 text-yeso">
          <Logo className="h-7 w-auto" />
        </a>

        <nav aria-label="Principal" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks
              .filter((link) => link.href !== "#contacto")
              .map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="btn btn-ghost">
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
          <a href="#contacto" className="btn btn-primary ml-2">
            Escribinos
          </a>
        </nav>
      </div>
    </header>
  );
}
