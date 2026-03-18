"use client";

import styles from "../styles/SmartInvestment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCrown,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

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
        <h2 className={styles.title}>
          Inversión Inteligente en Propiedad Intelectual en Bogotá, Colombia
        </h2>

        <p className={styles.description}>
          Registrar tu marca o patente en Colombia ante la Superintendencia de
          Industria y Comercio (SIC) no es un gasto, es una inversión
          estratégica que protege tu negocio en Bogotá y fortalece tu posición
          en el mercado colombiano.
        </p>

        {/* CARDS */}
        <div
          className={styles.cards}
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3 itemProp="name">Protección Legal en Colombia</h3>
            <p itemProp="description">
              Evita conflictos legales en Bogotá y Colombia registrando tu marca
              ante la SIC desde el inicio, reduciendo riesgos frente a
              competidores.
            </p>
          </div>

          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCrown} />
            </div>
            <h3 itemProp="name">Exclusividad en el Mercado Colombiano</h3>
            <p itemProp="description">
              Obtén derechos exclusivos sobre tu marca en Colombia y posiciona
              tu negocio en Bogotá con respaldo legal sólido.
            </p>
          </div>

          <div
            className={styles.card}
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h3 itemProp="name">Defensa Jurídica ante la SIC</h3>
            <p itemProp="description">
              Protege tus activos frente a usos indebidos en Colombia con el
              respaldo de la normativa vigente y procesos ante la SIC.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.circle80}>
              <span>80%</span>
            </div>

            <h4>Menos conflictos legales en Colombia</h4>

            <p>
              Las empresas en Bogotá con marcas registradas ante la SIC reducen
              significativamente disputas legales en el mercado colombiano.
            </p>
          </div>

          <div className={styles.stat}>
            <div className={styles.circleFull}>
              <span>3x</span>
            </div>

            <h4>Mayor valor empresarial</h4>

            <p>
              Las empresas en Colombia con propiedad intelectual protegida
              aumentan su valoración en procesos de inversión y expansión.
            </p>
          </div>

          <div className={styles.stat}>
            <div className={styles.circle95}>
              <span>95%</span>
            </div>

            <h4>Alta tasa de éxito en registros</h4>

            <p>
              Experiencia en procesos ante la SIC en Bogotá y Colombia con altos
              niveles de aprobación en registros de marcas y patentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
