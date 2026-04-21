import BlogContent from "./BlogContent";

/* ================= METADATA ================= */

export const metadata = {
  title: "Blog de marcas y patentes en Colombia | Guías legales SIC en Bogotá",
  description:
    "Aprende sobre registro de marcas en Colombia, costos, tiempos, errores y estrategias legales ante la SIC. Blog especializado en propiedad intelectual en Bogotá.",
  keywords:
    "blog marcas Colombia, registro de marca Colombia guía, SIC Colombia marcas, propiedad intelectual Bogotá, abogados marcas Colombia",
  robots: "index, follow",
  alternates: {
    canonical: "https://marcas-y-patentes.vercel.app/blog",
  },

  openGraph: {
    title: "Blog de marcas y patentes en Colombia",
    description:
      "Guías completas para registrar y proteger tu marca en Colombia ante la SIC.",
    url: "https://marcas-y-patentes.vercel.app/blog",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog legal de marcas en Colombia",
    description: "Aprende cómo registrar y proteger tu marca en Colombia.",
  },
};

/* ================= COMPONENT ================= */

export default function BlogSection() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog de marcas y patentes en Colombia",
      description:
        "Contenido especializado en registro de marcas, propiedad intelectual y procesos ante la SIC en Colombia.",
      url: "https://marcas-y-patentes.vercel.app/blog",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Artículos sobre marcas en Colombia",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://marcas-y-patentes.vercel.app/blog/registrar-marca-colombia",
          name: "¿Cómo registrar una marca en Colombia paso a paso?",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://marcas-y-patentes.vercel.app/blog/costo-registrar-marca-colombia",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
          name: "Errores al registrar marca en Colombia",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta registrar una marca en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de las tasas oficiales de la SIC y del tipo de marca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda registrar una marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso puede tardar entre 6 y 12 meses dependiendo del caso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatorio registrar una marca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatorio, pero es clave para proteger tu negocio.",
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
      <BlogContent />
    </>
  );
}
