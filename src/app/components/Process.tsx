"use client";

import styles from "../styles/Process.module.css";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Asesoría Legal en Bogotá y Colombia",
    text: "Analizamos la viabilidad de tu marca o patente en Colombia ante la Superintendencia de Industria y Comercio (SIC), con enfoque en empresas en Bogotá.",
  },
  {
    number: 2,
    title: "Estrategia de Registro de Marca en Colombia",
    text: "Diseñamos una estrategia legal para proteger tu marca en Bogotá y todo Colombia, adaptada a emprendedores, PYMEs y empresas.",
  },
  {
    number: 3,
    title: "Trámite ante la SIC en Colombia",
    text: "Gestionamos el proceso completo de registro de marca o patente ante la SIC en Colombia, asegurando cumplimiento legal y seguimiento continuo.",
  },
  {
    number: 4,
    title: "Protección y Vigilancia en Colombia",
    text: "Defendemos tus derechos de propiedad intelectual en Colombia y realizamos vigilancia para evitar usos indebidos de tu marca en el mercado.",
  },
];

export default function Process() {
  return (
    <section
      className={styles.section}
      id="process"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Proceso para registrar una marca en Bogotá Colombia
        </h2>
        <p itemProp="description">
          Paso a paso para el registro de marcas en Colombia ante la SIC,
          enfocado en empresas y emprendedores en Bogotá.
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
          Cómo Registrar una Marca en Bogotá y Colombia Paso a Paso
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Te acompañamos en todo el proceso de registro de marca en Colombia
          desde Bogotá, garantizando un trámite claro, seguro y alineado con los
          requisitos de la Superintendencia de Industria y Comercio (SIC).
        </motion.p>

        {/* STEPS */}
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              itemProp="step"
              itemScope
              itemType="https://schema.org/HowToStep"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15, // efecto escalonado
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              {/* NUMBER */}
              <motion.div
                className={styles.arrow}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                {step.number}
              </motion.div>

              {/* TITLE */}
              <h3 itemProp="name">{step.title}</h3>

              {/* TEXT */}
              <p itemProp="text">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
