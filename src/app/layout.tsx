import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Abogados en Marcas y Patentes en Colombia | Registro de Marca - Pravice",

  description:
    "Abogados especialistas en registro de marcas y patentes en Colombia. Protege tu marca, logo o negocio con asesoría legal experta en propiedad intelectual. Atención en Bogotá y todo el país.",

  keywords: [
    "registro de marca Colombia",
    "abogados propiedad intelectual",
    "patentes Colombia",
    "registro de logo Colombia",
    "abogados en Bogotá marcas y patentes",
    "protección de marca",
  ],

  authors: [{ name: "Pravice Abogados" }],
  creator: "Pravice Abogados",

  metadataBase: new URL("https://marcasypatentespravice.com"),

  openGraph: {
    title: "Abogados en Marcas y Patentes en Colombia | Pravice",
    description:
      "Protege tu marca con abogados expertos en propiedad intelectual en Colombia. Registro de marcas, patentes y asesoría legal especializada.",
    url: "",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "legal services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
