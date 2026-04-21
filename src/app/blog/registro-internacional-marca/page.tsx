import { Metadata } from "next";
import RegistroInternacionalMarcaContent from "./RegistroInternacionalMarcaContent";

export const metadata: Metadata = {
  title: "Registro de marca internacional desde Colombia | Sistema de Madrid",
  description:
    "Aprende cómo registrar tu marca internacionalmente desde Colombia usando el Sistema de Madrid y protege tu negocio en múltiples países.",
  keywords: [
    "registro internacional de marca Colombia",
    "Sistema de Madrid Colombia",
    "registrar marca en otros países",
    "propiedad intelectual internacional Colombia",
    "abogados marcas Bogotá",
  ],
  openGraph: {
    title: "Registro internacional de marca desde Colombia",
    description:
      "Protege tu marca en múltiples países con el Sistema de Madrid desde Colombia.",
    url: "https://marcas-y-patentes.vercel.app/blog/registro-internacional-marca",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
  },
  alternates: {
    canonical:
      "https://marcas-y-patentes.vercel.app/blog/registro-internacional-marca",
  },
};

export default function Page() {
  return (
    <>
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Registro de marca internacional desde Colombia",
              description:
                "Guía completa para registrar tu marca internacionalmente usando el Sistema de Madrid desde Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados",
              },
              mainEntityOfPage:
                "https://marcas-y-patentes.vercel.app/blog/registro-internacional-marca",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Puedo registrar mi marca en varios países al mismo tiempo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, mediante el Sistema de Madrid puedes solicitar protección en múltiples países con una sola solicitud.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Necesito registrar primero mi marca en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, necesitas una solicitud o registro base ante la SIC.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto dura el registro internacional?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente dura 10 años y puede renovarse.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RegistroInternacionalMarcaContent />
    </>
  );
}
