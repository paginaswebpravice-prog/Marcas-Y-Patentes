import { Metadata } from "next";
import QueEsLaSicColombiaContent from "./QueEsLaSicColombiaContent";

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "¿Qué es la SIC en Colombia y cómo protege tu marca? | PRAVICE",
  description:
    "Conoce qué es la Superintendencia de Industria y Comercio (SIC) en Colombia, sus funciones y cómo protege tu marca en Bogotá.",

  keywords: [
    "SIC Colombia",
    "Superintendencia de Industria y Comercio",
    "registro de marca Colombia SIC",
    "propiedad intelectual Colombia",
    "abogados marcas Bogotá",
  ],

  authors: [{ name: "PRAVICE Abogados" }],
  creator: "PRAVICE Abogados",
  publisher: "PRAVICE Abogados",

  metadataBase: new URL("https://marcas-y-patentes.vercel.app"),

  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/que-es-la-sic-colombia",
  },

  openGraph: {
    title: "¿Qué es la SIC en Colombia y cómo protege tu marca?",
    description:
      "Descubre qué hace la SIC en Colombia, cómo funciona y cómo protege tu marca frente a terceros.",
    url: "https://marcas-y-patentes.vercel.app/blog/que-es-la-sic-colombia",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    publishedTime: "2026-01-01T08:00:00.000Z",
    authors: ["PRAVICE Abogados"],
    images: [
      {
        url: "https://marcas-y-patentes.vercel.app/images/blog/sic-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Qué es la SIC en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Qué es la SIC en Colombia?",
    description: "Aprende cómo la SIC protege tu marca en Colombia.",
    images: [
      "https://marcas-y-patentes.vercel.app/images/blog/sic-colombia.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ================= PAGE ================= */

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA: ARTICLE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "¿Qué es la SIC en Colombia y cómo protege tu marca?",
            description:
              "Guía completa sobre la Superintendencia de Industria y Comercio (SIC) en Colombia y su rol en la protección de marcas.",
            image:
              "https://marcas-y-patentes.vercel.app/images/blog/sic-colombia.jpg",
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
              "https://marcas-y-patentes.vercel.app/blog/que-es-la-sic-colombia",
          }),
        }}
      />

      {/* ================= SCHEMA: FAQ ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué significa SIC en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SIC significa Superintendencia de Industria y Comercio, entidad encargada de la propiedad intelectual.",
                },
              },
              {
                "@type": "Question",
                name: "¿La SIC protege todas las marcas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Solo protege las marcas registradas oficialmente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es obligatorio registrar una marca?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No es obligatorio, pero es clave para tener protección legal en Colombia.",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= CONTENT ================= */}
      <QueEsLaSicColombiaContent />
    </>
  );
}
