"use client";

import styles from "../styles/SuccessCases.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrademark,
  faLightbulb,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function SuccessCases() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Casos de éxito en registro de marcas en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Experiencia comprobada en registro de marcas, patentes y diseños
          industriales en Colombia ante la SIC para empresas en Bogotá.
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
          Casos de Éxito en Registro de Marcas y Patentes en Bogotá, Colombia
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hemos acompañado a emprendedores, startups y empresas en Bogotá y toda
          Colombia en la protección legal de sus marcas, patentes y diseños
          industriales ante la Superintendencia de Industria y Comercio (SIC),
          logrando resultados sólidos y ventajas competitivas en el mercado
          colombiano.
        </motion.p>

        <div className={styles.grid}>
          {/* ITEM 1 */}
          <motion.div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faTrademark} />
            </motion.div>

            <div>
              <h3 itemProp="name">Registro de Marcas Exitoso en Bogotá</h3>

              <p itemProp="description">
                Acompañamos a empresas en Bogotá y Colombia en el registro de
                marcas ante la SIC, logrando exclusividad legal y
                posicionamiento sólido en el mercado nacional.
              </p>
            </div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faLightbulb} />
            </motion.div>

            <div>
              <h3 itemProp="name">Patentes Gestionadas en Colombia</h3>

              <p itemProp="description">
                Protegemos innovaciones tecnológicas desde Bogotá mediante
                solicitudes de patentes ante la SIC en Colombia, garantizando
                seguridad jurídica y ventaja competitiva.
              </p>
            </div>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            className={styles.card}
            itemScope
            itemType="https://schema.org/CreativeWork"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faIndustry} />
            </motion.div>

            <div>
              <h3 itemProp="name">
                Protección de Diseños Industriales en Colombia
              </h3>

              <p itemProp="description">
                Defendemos la identidad visual de productos en el mercado
                colombiano, asegurando su registro ante la SIC y protección
                frente a imitaciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
