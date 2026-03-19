"use client";

import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

const data = [
  {
    number: 1,
    title: "Experiencia en Propiedad Intelectual en Colombia",
    text: "Más de un siglo de experiencia en registro de marcas y patentes en Colombia, apoyando empresas y emprendedores en Bogotá con soluciones legales efectivas.",
  },
  {
    number: 2,
    title: "Especialistas ante la SIC en Colombia",
    text: "Equipo de abogados expertos en propiedad industrial ante la Superintendencia de Industria y Comercio (SIC), con enfoque en empresas en Bogotá y todo el país.",
  },
  {
    number: 3,
    title: "Garantía en Registro de Marca en Colombia",
    text: "Acompañamiento completo en el proceso de registro de marca ante la SIC en Colombia, brindando seguridad jurídica a empresas en Bogotá.",
  },
  {
    number: 4,
    title: "Soluciones para Empresas en Bogotá y Colombia",
    text: "Estrategias legales adaptadas al mercado colombiano para proteger marcas, patentes y activos intangibles de empresas y emprendimientos.",
  },
];

export default function Experience() {
  return (
    <section
      className={styles.section}
      id="experience"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Abogados de marcas y patentes en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Firma legal en Bogotá especializada en registro de marcas y propiedad
          intelectual en Colombia ante la SIC. Experiencia comprobada en el
          mercado colombiano.
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Abogados Especialistas en Marcas y Patentes en Bogotá, Colombia
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contamos con amplia experiencia en registro de marcas y propiedad
          intelectual en Colombia. Desde Bogotá, asesoramos empresas y
          emprendedores que buscan proteger sus activos ante la Superintendencia
          de Industria y Comercio (SIC) y fortalecer su seguridad jurídica en el
          mercado colombiano.
        </motion.p>

        {/* GRID */}
        <div
          className={styles.grid}
          itemProp="hasOfferCatalog"
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          {data.map((item, index) => (
            <motion.div
              key={item.number}
              className={styles.card}
              itemScope
              itemType="https://schema.org/Offer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className={styles.line}></div>

              <div className={styles.circle}>{item.number}</div>

              <h3 itemProp="name">{item.title}</h3>

              <p itemProp="description">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
