import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcas-y-patentes.vercel.app/",
      lastModified: new Date(),
    },

    // 🔥 BLOG
    {
      url: "https://marcas-y-patentes.vercel.app/blog",
      lastModified: new Date(),
    },

    // 🔽 ARTÍCULOS
    {
      url: "https://marcas-y-patentes.vercel.app/blog/registrar-marca-colombia",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/costo-registrar-marca-colombia",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/errores-registro-marca-bogota",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/marca-vs-patente-colombia",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/que-es-la-sic-colombia",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/busqueda-antecedentes-marca",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/riesgos-no-registrar-marca",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/registro-internacional-marca",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/clases-marcas-colombia",
      lastModified: new Date(),
    },
    {
      url: "https://marcas-y-patentes.vercel.app/blog/tiempo-registro-marca",
      lastModified: new Date(),
    },
  ];
}
