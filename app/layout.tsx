import type { Metadata, Viewport } from "next";
import { Archivo, Doto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Dot-matrix en dosis homeopáticas: una fecha, un dato, un código.
const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const description =
  "Agencia de marketing digital en Buenos Aires: desarrollo web, automatizaciones, publicidad, redes sociales y datos. Usamos inteligencia artificial en cada proyecto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Undercheck | Agencia de marketing digital, desarrollo web y redes sociales",
    template: "%s | Undercheck",
  },
  description,
  keywords: [
    "Undercheck",
    "agencia de marketing digital",
    "agencia digital Buenos Aires",
    "desarrollo web",
    "diseño de páginas web",
    "automatizaciones",
    "publicidad digital",
    "redes sociales",
    "community manager",
    "estrategia de contenido",
    "análisis de datos",
    "inteligencia artificial",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Undercheck | Agencia de marketing digital",
    description,
    url: "/",
    siteName: "Undercheck",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Undercheck | Agencia de marketing digital",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1B1A18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${archivo.variable} ${doto.variable} h-full`}>
      <body className="min-h-full">
        <JsonLd />
        <SiteHeader />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
