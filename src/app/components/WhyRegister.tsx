"use client";

import styles from "../styles/WhyRegister.module.css";

export default function WhyRegister() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Por Qué Registrar tu Marca ante la SIC es Vital?
        </h2>

        <p className={styles.description}>
          Tus creaciones en el mercado colombiano tienen un valor real.
          Registrarlas correctamente ante la Superintendencia de Industria y
          Comercio (SIC) no es un gasto, es la inversión estratégica más
          importante para tu empresa o emprendimiento bogotano.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Patrimonio Empresarial</h3>
            <p>
              En el dinámico ecosistema colombiano, tus marcas y patentes son
              activos esenciales que blindan tu inversión en innovación y
              branding frente a la competencia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Blindaje ante la SIC</h3>
            <p>
              Un registro sólido ante la SIC te otorga exclusividad legal en
              todo el territorio nacional, protegiendo tu negocio frente a
              imitaciones y competencia desleal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proyección Nacional e Internacional</h3>
            <p>
              Asegura la viabilidad de tus proyectos y escala tu marca desde
              Bogotá hacia el mercado latinoamericano mediante el sistema de
              Madrid y tratados PCT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
