import MeNegaronRegistroMarcaContent from "./MeNegaronRegistroMarcaContent";

/* ================= METADATA ================= */

export const metadata = {
  title: "Me negaron el registro de marca en Colombia | Qué hacer ante la SIC",
  description:
    "Descubre qué hacer si te negaron el registro de tu marca en Colombia. Guía legal con abogados en Bogotá para responder objeciones y apelar ante la SIC.",
  keywords:
    "me negaron registro de marca Colombia, rechazo SIC marca, apelación registro marca Colombia, abogados marcas Bogotá, propiedad intelectual Colombia",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/problemas/me-negaron-registro-marca",
  },

  openGraph: {
    title: "Me negaron el registro de marca en Colombia | Qué hacer",
    description:
      "Aprende qué hacer si la SIC rechazó tu marca en Colombia y cómo puedes defender tu solicitud legalmente.",
    url: "https://marcas-y-patentes.vercel.app/problemas/me-negaron-registro-marca",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Me negaron el registro de marca",
    description:
      "Guía legal en Colombia para responder rechazos de registro de marca ante la SIC.",
  },
};

/* ================= COMPONENT ================= */

export default function MeNegaronRegistroMarcaSeo() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Defensa de registro de marca en Colombia",
      description:
        "Servicio legal especializado en responder rechazos de marcas ante la SIC en Colombia.",
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
        "Me negaron el registro de marca en Colombia: qué hacer y cómo responder",
      description:
        "Guía legal sobre cómo actuar si la SIC rechaza el registro de tu marca en Colombia.",
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
          "https://marcas-y-patentes.vercel.app/problemas/me-negaron-registro-marca",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Por qué la SIC puede negar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puede negarla por similitud con marcas existentes, falta de distintividad o errores en la solicitud.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo apelar si me niegan el registro de marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, puedes responder objeciones o presentar recursos ante la SIC dentro de los plazos establecidos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hago si me rechazan la marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debes analizar la causal del rechazo y responder con argumentos jurídicos o ajustar la solicitud.",
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
      <MeNegaronRegistroMarcaContent />
    </>
  );
}
