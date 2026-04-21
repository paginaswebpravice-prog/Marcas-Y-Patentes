import { Metadata } from "next";
import MarcaVsPatenteContent from "./MarcaVsPatenteContent";

/* ================= METADATA SEO ================= */

export const metadata: Metadata = {
  title: "Diferencia entre marca y patente en Colombia (Guía 2026) | PRAVICE",
  description:
    "Descubre la diferencia entre marca y patente en Colombia. Aprende cuál necesitas según tu negocio y cómo proteger tu empresa ante la SIC en Bogotá.",

  keywords: [
    "marca vs patente Colombia",
    "diferencia marca y patente",
    "registrar marca Colombia",
    "patente Colombia que es",
    "propiedad intelectual Colombia",
    "SIC marcas y patentes",
    "abogados propiedad intelectual Bogotá",
  ],

  authors: [{ name: "PRAVICE Abogados" }],
  creator: "PRAVICE Abogados",
  publisher: "PRAVICE Abogados",

  metadataBase: new URL("https://marcas-y-patentes.vercel.app"),

  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/marca-vs-patente-colombia",
  },

  openGraph: {
    title: "Marca vs Patente en Colombia: diferencias clave",
    description:
      "Aprende cuándo registrar una marca o una patente en Colombia y cuál conviene más según tu negocio.",
    url: "https://marcas-y-patentes.vercel.app/blog/marca-vs-patente-colombia",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    publishedTime: "2026-01-01T08:00:00.000Z",
    authors: ["PRAVICE Abogados"],
    images: [
      {
        url: "https://marcas-y-patentes.vercel.app/images/blog/marca-vs-patente.jpg",
        width: 1200,
        height: 630,
        alt: "Diferencia entre marca y patente en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marca vs Patente en Colombia (Guía completa)",
    description:
      "Conoce qué protege cada figura y cuál necesitas según tu negocio en Colombia.",
    images: [
      "https://marcas-y-patentes.vercel.app/images/blog/marca-vs-patente.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= SCHEMA JSON-LD ================= */

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Diferencia entre marca y patente en Colombia: ¿Cuál necesitas?",
          description:
            "Guía completa para entender cuándo registrar una marca o una patente en Colombia.",
          image:
            "https://marcas-y-patentes.vercel.app/images/blog/marca-vs-patente.jpg",
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
            "https://marcas-y-patentes.vercel.app/blog/marca-vs-patente-colombia",
        }),
      }}
    />
  );
}

/* ================= FAQ SCHEMA ================= */

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Qué es mejor, marca o patente?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Depende de tu negocio. La marca protege identidad comercial y la patente protege invenciones.",
              },
            },
            {
              "@type": "Question",
              name: "¿Se pueden registrar ambas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, muchas empresas registran tanto su marca como sus patentes para una protección completa.",
              },
            },
            {
              "@type": "Question",
              name: "¿Dónde se registran?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ambos trámites se realizan ante la Superintendencia de Industria y Comercio (SIC) en Colombia.",
              },
            },
          ],
        }),
      }}
    />
  );
}

/* ================= PAGE ================= */

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <MarcaVsPatenteContent />
    </>
  );
}
