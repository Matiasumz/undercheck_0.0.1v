import type { Metadata, Viewport } from "next";
import { Archivo, Doto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://undercheck.com.ar"),
  title: "Undercheck: agencia de desarrollo web, automatizaciones, publicidad y datos",
  description:
    "Undercheck es una agencia de desarrollo web, automatizaciones, publicidad y datos. Usamos inteligencia artificial en cada proyecto.",
  keywords: [
    "Undercheck",
    "agencia digital",
    "desarrollo web",
    "automatizaciones",
    "publicidad",
    "datos",
    "IA",
    "inteligencia artificial",
  ],
  icons: {
    icon: "/logo-undercheck.png",
  },
  openGraph: {
    title: "Undercheck",
    description:
      "Agencia de desarrollo web, automatizaciones, publicidad y datos, con inteligencia artificial en cada proyecto.",
    url: "https://undercheck.com.ar",
    siteName: "Undercheck",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B1A18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${doto.variable} h-full`}>
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
