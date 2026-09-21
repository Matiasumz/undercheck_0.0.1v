export type NavLink = {
  label: string;
  href: string;
};

// Al sumar "Undercheck Pass" como ruta propia, solo hace falta agregar
// un item acá (ej. { label: "Pass", href: "/pass" }) — nada más depende de esta lista.
export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#porqueelegirnos" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Sitios y productos digitales a medida, con asistencia de IA en cada etapa del desarrollo para construir más rápido y con menos fricción.",
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones",
    description:
      "Flujos y procesos que se ejecutan solos: integraciones, bots y agentes de IA que le sacan trabajo repetitivo a tu equipo.",
  },
  {
    id: "publicidad",
    title: "Publicidad",
    description:
      "Campañas y contenido pensados con IA para iterar rápido, testear más variantes y encontrar qué funciona antes.",
  },
  {
    id: "datos",
    title: "Datos",
    description:
      "Paneles y modelos que convierten datos crudos en decisiones, con IA aplicada a análisis y predicción.",
  },
];

export type WhyUsItem = {
  id: string;
  title: string;
  description: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    id: "low-cost",
    title: "Low cost",
    description: "Soluciones de calidad a un precio accesible.",
  },
  {
    id: "flexibilidad",
    title: "Flexibilidad total",
    description: "Nos amoldamos a tus necesidades y a las de tu proyecto.",
  },
  {
    id: "soporte",
    title: "Soporte 24hs",
    description: "Acompañamiento real, los 365 días del año.",
  },
];

export const CONTACT_FORM_ACTION =
  "https://formsubmit.co/3deb109c88bc7ca20ef7d44acf5a95bc";
export const CONTACT_FORM_REDIRECT = "https://undercheck.com.ar/";

export const WHATSAPP_NUMBER = "5491138770890";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
