"use client";

import styles from "../styles/Process.module.css";

const steps = [
  {
    number: 1,
    title: "Asesoramiento Estratégico",
    text: "Analizamos la viabilidad de tu marca o patente ante la Superintendencia de Industria y Comercio (SIC) y definimos tus necesidades.",
  },
  {
    number: 2,
    title: "Estrategia de Propiedad Industrial",
    text: "Diseñamos el plan de protección ideal para emprendedores, PYMEs y empresas líderes en el mercado colombiano.",
  },
  {
    number: 3,
    title: "Tramitación ante la SIC y el Mundo",
    text: "Gestionamos tu registro en Colombia y expandimos tus activos mediante el PCT y el Sistema de Madrid (OMPI/WIPO).",
  },
  {
    number: 4,
    title: "Defensa y Vigilancia",
    text: "Protegemos tus derechos en el territorio nacional y te acompañamos en la vigilancia activa de tus registros.",
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <h2 className={styles.title}>
          El Proceso Simplificado: De la Idea a la Protección en Colombia
        </h2>

        <p className={styles.description}>
          Nos encargamos de todo para que tú te centres en lo que mejor sabes
          hacer: crear e innovar desde Bogotá. Un camino claro, eficaz y sin
          sorpresas ante las autoridades nacionales e internacionales.
        </p>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.arrow}>{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
