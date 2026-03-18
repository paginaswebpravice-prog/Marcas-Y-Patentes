"use client";

import styles from "../styles/Process.module.css";

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
        <h2 className={styles.title}>
          Cómo Registrar una Marca en Bogotá y Colombia Paso a Paso
        </h2>

        <p className={styles.description}>
          Te acompañamos en todo el proceso de registro de marca en Colombia
          desde Bogotá, garantizando un trámite claro, seguro y alineado con los
          requisitos de la Superintendencia de Industria y Comercio (SIC).
        </p>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={styles.step}
              itemProp="step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className={styles.arrow}>{step.number}</div>

              <h3 itemProp="name">{step.title}</h3>

              <p itemProp="text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
