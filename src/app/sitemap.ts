import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcas-y-patentes.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
