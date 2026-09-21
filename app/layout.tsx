import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://undercheck.com.ar"),
  title: "Undercheck: Agencia AI-powered",
  description:
    "Undercheck es una agencia de desarrollo web, automatizaciones, publicidad y datos, potenciada por IA.",
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
    title: "Undercheck: Agencia AI-powered",
    description:
      "Desarrollo web, automatizaciones, publicidad y datos, potenciados por IA.",
    url: "https://undercheck.com.ar",
    siteName: "Undercheck",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScrollProvider>
          <AmbientBackground />
          <GrainOverlay />
          <SiteHeader />
          {children}
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
