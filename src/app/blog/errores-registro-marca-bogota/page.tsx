import { Metadata } from "next";
import ErroresRegistroMarcaContent from "./ErroresRegistroMarcaContent";

/* ================= METADATA SEO ================= */

export const metadata: Metadata = {
  title:
    "Errores al registrar una marca en Bogotá Colombia (guía 2026) | PRAVICE Abogados",

  description:
    "Descubre los errores más comunes al registrar una marca en Colombia y cómo evitarlos. Guía completa para Bogotá con estrategias para evitar rechazos ante la SIC.",

  keywords: [
    "errores registro marca Colombia",
    "registrar marca Bogotá errores",
    "rechazo marca SIC",
    "registro de marca Colombia problemas",
    "abogados marcas Bogotá",
    "registro marca Colombia costo",
    "SIC Colombia marcas",
  ],

  authors: [{ name: "PRAVICE Abogados" }],
  creator: "PRAVICE Abogados",
  publisher: "PRAVICE Abogados",

  metadataBase: new URL("https://marcas-y-patentes.vercel.app"),

  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
  },

  category: "Legal",
  classification: "Registro de marca Colombia",

  openGraph: {
    title:
      "Errores al registrar una marca en Bogotá (y cómo evitarlos) | PRAVICE",
    description:
      "Evita perder dinero y tiempo. Aprende los errores más comunes al registrar una marca en Colombia y cómo proteger tu negocio correctamente.",
    url: "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    publishedTime: "2026-01-01T08:00:00.000Z",
    modifiedTime: "2026-01-01T08:00:00.000Z",
    authors: ["PRAVICE Abogados"],
    images: [
      {
        url: "https://marcas-y-patentes.vercel.app/images/blog/errores-marcas-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Errores al registrar una marca en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Errores al registrar una marca en Colombia (guía completa 2026)",
    description:
      "Evita rechazos ante la SIC y protege tu marca correctamente en Bogotá.",
    images: [
      "https://marcas-y-patentes.vercel.app/images/blog/errores-marcas-colombia.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ================= PAGE ================= */

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
              "Errores comunes al registrar una marca en Bogotá, Colombia",
            description:
              "Guía completa sobre los errores más frecuentes al registrar una marca en Colombia y cómo evitarlos ante la SIC.",
            image:
              "https://marcas-y-patentes.vercel.app/images/blog/errores-marcas-colombia.jpg",
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
              "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
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
                name: "¿Cuál es el error más común al registrar una marca en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No realizar la búsqueda de antecedentes marcarios antes de presentar la solicitud.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo registrar una marca sin abogado en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, pero aumenta significativamente el riesgo de errores y rechazo ante la SIC.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si la SIC rechaza mi marca?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puedes perder el dinero invertido y deberás iniciar un nuevo proceso o presentar recursos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tarda registrar una marca en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El proceso puede tardar entre 6 y 12 meses dependiendo del caso.",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= BREADCRUMB (SEO PRO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://marcas-y-patentes.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://marcas-y-patentes.vercel.app/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Errores registro marca Bogotá",
                item: "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
              },
            ],
          }),
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <ErroresRegistroMarcaContent />
    </>
  );
}
