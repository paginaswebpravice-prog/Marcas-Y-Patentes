"use client";

import styles from "../styles/SmartInvestment.module.css";

export default function SmartInvestment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Inversión Inteligente: Protegiendo tu Propiedad Intelectual en
          Colombia
        </h2>

        <p className={styles.description}>
          Registrar tus activos intelectuales ante la SIC no es un gasto: es el
          cimiento para construir un negocio sólido, escalable y con una ventaja
          competitiva real en Bogotá y toda Colombia.
        </p>

        {/* CARDS */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>🛡️</div>
            <h3>Viabilidad Asegurada</h3>
            <p>
              Evita litigios ante la SIC y blinda tu inversión desde el primer
              día frente a competidores locales.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>👑</div>
            <h3>Exclusividad en el Mercado</h3>
            <p>
              Posiciónate en el mercado bogotano y nacional con activos únicos
              protegidos por la ley colombiana.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>⚖️</div>
            <h3>Monopolio Legal</h3>
            <p>
              Impide que terceros usen tus marcas o invenciones sin
              autorización, respaldado por la normativa de la SIC.
            </p>
          </div>
        </div>

        {/* CÍRCULOS */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.circle80}>
              <span>80%</span>
            </div>

            <h4>Reducción de conflictos</h4>

            <p>
              Las PYMEs colombianas con marcas registradas ante la SIC reducen
              litigios comerciales hasta en un 80%.
            </p>
          </div>

          <div className={styles.stat}>
            <div className={styles.circleFull}>
              <span>3x</span>
            </div>

            <h4>Mayor valoración</h4>

            <p>
              Los negocios en Bogotá con IP registrada se valoran hasta 3 veces
              más en rondas de inversión.
            </p>
          </div>

          <div className={styles.stat}>
            <div className={styles.circle95}>
              <span>95%</span>
            </div>

            <h4>Tasa de éxito</h4>

            <p>
              De nuestros registros gestionados ante la SIC y bajo el Protocolo
              de Madrid o tratados PCT para alcance global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
