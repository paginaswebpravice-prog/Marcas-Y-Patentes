import RegistroPatenteContent from "./RegistroPatenteContent";

/* ================= METADATA ================= */

export const metadata = {
  title: "Registro de patente en Colombia | Abogados de patentes en Bogotá",
  description:
    "Protege tu invención con el registro de patente en Colombia. Asesoría legal en Bogotá para patentes ante la SIC, requisitos, costos y proceso completo.",
  keywords:
    "registro de patente Colombia, patentes Colombia SIC, abogados patentes Bogotá, propiedad industrial Colombia, cómo registrar una patente",
  robots: "index, follow",
  alternates: {
    canonical: "https://marcas-y-patentes.vercel.app/registro-patente",
  },

  openGraph: {
    title: "Registro de patente en Colombia | Protección de invenciones",
    description:
      "Registra tu patente en Colombia con asesoría legal experta. Protege tu innovación ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/registro-patente",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Registro de patente en Colombia",
    description: "Protege tu invención con abogados expertos en patentes.",
  },
};

/* ================= COMPONENT ================= */

export default function RegistroPatenteSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Registro de patente en Colombia",
      description:
        "Servicio de registro de patentes en Colombia para proteger invenciones y desarrollos tecnológicos.",
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
      headline:
        "Registro de patente en Colombia: cómo proteger tu invención paso a paso",
      description:
        "Guía completa sobre el registro de patentes en Colombia, requisitos, tipos de patentes y proceso ante la SIC.",
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
        "@id": "https://marcas-y-patentes.vercel.app/registro-patente",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es una patente en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un derecho exclusivo otorgado por el Estado que protege una invención y permite impedir que terceros la utilicen sin autorización.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura una patente en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las patentes de invención tienen una duración de 20 años contados desde la fecha de solicitud.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una patente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de tasas oficiales de la SIC, tipo de patente y complejidad del proceso.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <RegistroPatenteContent />
    </>
  );
}
