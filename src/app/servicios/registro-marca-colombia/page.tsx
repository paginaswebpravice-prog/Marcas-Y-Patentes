import RegistroMarcaColombiaContent from "./RegistroMarcaColombiaContent";

/* ================= METADATA ================= */

export const metadata = {
  title: "Registro de marca en Colombia | Cómo registrar tu marca ante la SIC",
  description:
    "Aprende cómo registrar una marca en Colombia paso a paso ante la SIC. Guía legal completa desde Bogotá con abogados en propiedad intelectual.",
  keywords:
    "registro de marca Colombia, registrar marca SIC, marcas y patentes Colombia, abogados marcas Bogotá, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/registro/registro-marca-colombia",
  },

  openGraph: {
    title: "Registro de marca en Colombia | Guía legal SIC",
    description:
      "Registra tu marca en Colombia correctamente ante la SIC con guía legal paso a paso.",
    url: "https://marcas-y-patentes.vercel.app/registro/registro-marca-colombia",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registro de marca en Colombia",
    description:
      "Guía completa para registrar tu marca ante la SIC en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function RegistroMarcaColombiaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de marca en Colombia",
      description:
        "Servicio legal especializado en registro de marcas ante la SIC en Colombia.",
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Bogotá, Colombia",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Registro de marca en Colombia: guía completa paso a paso",
      description:
        "Guía legal para registrar una marca en Colombia ante la SIC y proteger tu identidad comercial.",
      author: {
        "@type": "Organization",
        name: "Marcas y Patentes",
      },
      publisher: {
        "@type": "Organization",
        name: "Marcas y Patentes",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://marcas-y-patentes.vercel.app/registro/registro-marca-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debes hacer una búsqueda de antecedentes, presentar la solicitud ante la SIC y esperar el proceso de evaluación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de la clase de la marca y las tasas oficiales de la SIC.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda el registro de marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso puede tardar entre 6 y 12 meses dependiendo de oposiciones o requerimientos.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <RegistroMarcaColombiaContent />
    </>
  );
}
