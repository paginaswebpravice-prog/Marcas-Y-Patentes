"use client";

import styles from "../styles/SmartInvestment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCrown,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function SmartInvestment() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Registro de marcas y propiedad intelectual en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Servicios legales en Bogotá especializados en registro de marcas,
          patentes y protección de propiedad intelectual en Colombia ante la
          SIC.
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
          Inversión Inteligente en Propiedad Intelectual en Bogotá, Colombia
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Registrar tu marca o patente en Colombia ante la Superintendencia de
          Industria y Comercio (SIC) no es un gasto, es una inversión
          estratégica que protege tu negocio en Bogotá y fortalece tu posición
          en el mercado colombiano.
        </motion.p>

        {/* CARDS */}
        <div
          className={styles.cards}
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          {[faShieldAlt, faCrown, faScaleBalanced].map((icon, index) => {
            const titles = [
              "Protección Legal en Colombia",
              "Exclusividad en el Mercado Colombiano",
              "Defensa Jurídica ante la SIC",
            ];

            const texts = [
              "Evita conflictos legales en Bogotá y Colombia registrando tu marca ante la SIC desde el inicio, reduciendo riesgos frente a competidores.",
              "Obtén derechos exclusivos sobre tu marca en Colombia y posiciona tu negocio en Bogotá con respaldo legal sólido.",
              "Protege tus activos frente a usos indebidos en Colombia con el respaldo de la normativa vigente y procesos ante la SIC.",
            ];

            return (
              <motion.div
                key={index}
                className={styles.card}
                itemScope
                itemType="https://schema.org/Offer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    scale: 1.2,
                    rotate: index % 2 === 0 ? 5 : -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.div>

                <h3 itemProp="name">{titles[index]}</h3>

                <p itemProp="description">{texts[index]}</p>
              </motion.div>
            );
          })}
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          {/* STAT 1 */}
          <motion.div
            className={styles.stat}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.circle80}
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>80%</span>
            </motion.div>

            <h4>Menos conflictos legales en Colombia</h4>

            <p>
              Las empresas en Bogotá con marcas registradas ante la SIC reducen
              significativamente disputas legales en el mercado colombiano.
            </p>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            className={styles.stat}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.circleFull}
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>3x</span>
            </motion.div>

            <h4>Mayor valor empresarial</h4>

            <p>
              Las empresas en Colombia con propiedad intelectual protegida
              aumentan su valoración en procesos de inversión y expansión.
            </p>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            className={styles.stat}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.circle95}
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>95%</span>
            </motion.div>

            <h4>Alta tasa de éxito en registros</h4>

            <p>
              Experiencia en procesos ante la SIC en Bogotá y Colombia con altos
              niveles de aprobación en registros de marcas y patentes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
