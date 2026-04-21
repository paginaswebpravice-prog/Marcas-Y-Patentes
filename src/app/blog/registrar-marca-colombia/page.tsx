import { Metadata } from "next";
import RegistrarMarcaColombiaContent from "./RegistrarMarcaColombiaContent";

export const metadata: Metadata = {
  title:
    "Cómo registrar una marca en Colombia paso a paso (Guía 2026) | PRAVICE",
  description:
    "Aprende cómo registrar una marca en Colombia paso a paso ante la SIC. Guía completa desde Bogotá para proteger tu negocio correctamente.",

  keywords: [
    "registrar marca Colombia",
    "como registrar marca Bogotá",
    "registro marca SIC Colombia",
    "registro de marca paso a paso",
    "abogados marcas Colombia",
    "SIC registro de marca",
  ],

  authors: [{ name: "PRAVICE Abogados" }],
  creator: "PRAVICE Abogados",
  publisher: "PRAVICE Abogados",

  metadataBase: new URL("https://marcas-y-patentes.vercel.app"),

  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/registrar-marca-colombia",
  },

  openGraph: {
    title: "Cómo registrar una marca en Colombia paso a paso (Guía completa)",
    description:
      "Descubre el proceso completo para registrar una marca en Colombia ante la SIC y evitar errores desde Bogotá.",
    url: "https://marcas-y-patentes.vercel.app/blog/registrar-marca-colombia",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    publishedTime: "2026-01-01T08:00:00.000Z",
    authors: ["PRAVICE Abogados"],
    images: [
      {
        url: "https://marcas-y-patentes.vercel.app/images/blog/registro-marca-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo registrar una marca en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Registrar marca en Colombia paso a paso",
    description:
      "Guía completa para registrar tu marca en Colombia ante la SIC sin errores.",
    images: [
      "https://marcas-y-patentes.vercel.app/images/blog/registro-marca-colombia.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA BLOG ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Cómo registrar una marca en Colombia paso a paso desde Bogotá",
            description:
              "Guía completa para registrar una marca en Colombia ante la SIC y proteger tu negocio correctamente.",
            image:
              "https://marcas-y-patentes.vercel.app/images/blog/registro-marca-colombia.jpg",
            author: {
              "@type": "Organization",
              name: "PRAVICE Abogados",
            },
            publisher: {
              "@type": "Organization",
              name: "PRAVICE Abogados",
              logo: {
                "@type": "ImageObject",
                url: "https://marcas-y-patentes.vercel.app/logo.png",
              },
            },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage:
              "https://marcas-y-patentes.vercel.app/blog/registrar-marca-colombia",
          }),
        }}
      />

      {/* ================= SCHEMA FAQ ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto tarda registrar una marca en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El proceso puede tardar entre 6 y 12 meses dependiendo de oposiciones y revisiones.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es obligatorio registrar una marca en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No es obligatorio, pero es esencial para obtener protección legal y exclusividad en Colombia.",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <RegistrarMarcaColombiaContent />
    </>
  );
}
