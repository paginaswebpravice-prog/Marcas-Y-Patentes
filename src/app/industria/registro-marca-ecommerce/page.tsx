import RegistroMarcaEcommerceContent from "./RegistroMarcaEcommerceContent";

export const metadata = {
  title:
    "Registro de marca en Colombia | Cómo registrar una marca en Bogotá 2026",
  description:
    "Aprende cómo registrar una marca en Colombia paso a paso. Asesoría en registro de marcas en Bogotá, requisitos, costos y proceso ante la SIC.",
  keywords:
    "registro de marca Colombia, registrar marca Bogotá, cómo registrar una marca Colombia, SIC registro marca, abogados marcas Colombia",
  robots: "index, follow",
  canonical:
    "https://marcas-y-patentes.vercel.app/servicios/registro-marca-colombia",

  openGraph: {
    title: "Registro de marca en Colombia | Guía completa 2026",
    description:
      "Guía completa para registrar una marca en Colombia. Requisitos, costos y proceso ante la SIC en Bogotá.",
    url: "https://marcas-y-patentes.vercel.app/servicios/registro-marca-colombia",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registro de marca en Colombia",
    description:
      "Todo lo que necesitas saber para registrar tu marca en Colombia.",
  },
};

export default function RegistroMarcaColombiaContent() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Registro de marca en Colombia: guía completa paso a paso",
      description:
        "Cómo registrar una marca en Colombia, requisitos, costos y proceso ante la SIC en Bogotá.",
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
          "https://marcas-y-patentes.vercel.app/servicios/registro-marca-colombia",
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
            text: "Debes realizar la búsqueda de antecedentes, presentar la solicitud ante la SIC y cumplir el proceso hasta la concesión del registro.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de la clase y las tasas oficiales de la SIC, además de honorarios si se realiza con asesoría legal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda el registro de marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso puede tardar entre 6 y 12 meses dependiendo del caso y oposiciones.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de marca en Colombia",
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
      <RegistroMarcaEcommerceContent />
    </>
  );
}
