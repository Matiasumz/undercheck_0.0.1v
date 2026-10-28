export type NavLink = {
  label: string;
  href: string;
};

// Al sumar "Undercheck Pass" como ruta propia, solo hace falta agregar
// un item acá (ej. { label: "Pass", href: "/pass" }) — nada más depende de esta lista.
export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  id: string;
  // Código corto de la portada (Doto) y semilla estable de su color.
  code: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web",
    code: "web",
    title: "Desarrollo web",
    description:
      "Sitios y productos digitales a medida. Usamos IA en cada etapa del desarrollo para construir más rápido.",
  },
  {
    id: "automatizaciones",
    code: "auto",
    title: "Automatizaciones",
    description:
      "Integraciones, bots y agentes de IA que hacen solos el trabajo repetitivo de tu equipo.",
  },
  {
    id: "publicidad",
    code: "ads",
    title: "Publicidad",
    description:
      "Campañas y contenido hechos con IA para probar más variantes y encontrar antes lo que funciona.",
  },
  {
    id: "redes",
    code: "social",
    title: "Redes sociales",
    description:
      "Estrategia de contenido, gestión de cuentas y community management. Planificamos qué publicar, lo producimos y le respondemos a tu comunidad.",
  },
  {
    id: "datos",
    code: "data",
    title: "Datos",
    description:
      "Paneles y modelos que ordenan tus datos para decidir, con IA aplicada a análisis y predicción.",
  },
];

export type WhyUsItem = {
  id: string;
  title: string;
  description: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    id: "precio",
    title: "Precio accesible",
    description: "Trabajo de calidad a un costo que una pyme puede pagar.",
  },
  {
    id: "flexibilidad",
    title: "Flexibilidad",
    description: "Adaptamos el alcance y los tiempos a tu proyecto.",
  },
  {
    id: "soporte",
    title: "Soporte 24 h",
    description: "Te acompañamos los 365 días del año.",
  },
];

export const CONTACT_EMAIL = "hola@undercheck.com.ar";

export const CONTACT_FORM_ACTION =
  "https://formsubmit.co/3deb109c88bc7ca20ef7d44acf5a95bc";
export const CONTACT_FORM_REDIRECT = "https://undercheck.com.ar/";

export const WHATSAPP_NUMBER = "5491138770890";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
