"use client";

import styles from "../styles/WhyRegister.module.css";
import { motion } from "framer-motion";

export default function WhyRegister() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Registro de marcas en Bogotá y Colombia ante la SIC
        </h2>
        <p itemProp="description">
          Servicio legal de registro de marcas y patentes en Colombia, enfocado
          en empresas de Bogotá. Protección jurídica ante la SIC.
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por Qué Registrar tu Marca en Colombia ante la SIC es Vital?
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Si tienes un negocio en Bogotá o cualquier ciudad de Colombia,
          registrar tu marca ante la Superintendencia de Industria y Comercio
          (SIC) es una decisión estratégica. No solo protege tu identidad
          comercial, sino que fortalece tu posición en el mercado colombiano.
        </motion.p>

        {/* CARDS */}
        <div className={styles.cards}>
          {/* CARD 1 */}
          <motion.div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 itemProp="name">Protección como Activo Empresarial</h3>
            <p itemProp="description">
              En Colombia, tu marca es un activo intangible clave. Registrar tu
              marca en Bogotá te permite proteger legalmente tu inversión y
              asegurar su uso exclusivo en todo el territorio colombiano.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 itemProp="name">Exclusividad Legal ante la SIC</h3>
            <p itemProp="description">
              Obtener el registro ante la SIC en Colombia te otorga derechos
              exclusivos sobre tu marca, evitando que terceros la utilicen o la
              registren.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className={styles.card}
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/Offer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 itemProp="name">Crecimiento desde Bogotá a Colombia</h3>
            <p itemProp="description">
              Registrar tu marca te permite escalar tu negocio desde Bogotá
              hacia todo Colombia con una base legal sólida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
