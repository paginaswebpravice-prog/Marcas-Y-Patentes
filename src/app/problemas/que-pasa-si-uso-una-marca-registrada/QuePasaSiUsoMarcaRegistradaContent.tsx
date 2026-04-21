"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QuePasaSiUsoMarcaRegistradaContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.div
        className={`${styles.articleBlock} ${styles.card}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.title}>
          ¿Qué pasa si uso una marca registrada en Colombia?
        </h1>

        <p className={styles.paragraph}>
          Usar una marca registrada en Colombia sin autorización puede generar
          graves consecuencias legales. El titular de la marca tiene derechos
          exclusivos protegidos por la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, este tipo de conflictos es cada vez más común
          en negocios que no verifican previamente la disponibilidad de una
          marca.
        </p>

        {/* CONSECUENCIAS */}
        <h2 className={styles.subtitle}>
          Consecuencias de usar una marca registrada
        </h2>

        <ul className={styles.list}>
          <li>Demandas por infracción de propiedad industrial</li>
          <li>Orden de dejar de usar la marca inmediatamente</li>
          <li>Pago de indemnizaciones económicas</li>
          <li>Pérdida de identidad comercial</li>
        </ul>

        {/* LEGAL */}
        <h2 className={styles.subtitle}>
          ¿Es ilegal usar una marca registrada en Colombia?
        </h2>

        <p className={styles.paragraph}>
          No siempre constituye un delito penal, pero sí puede generar
          responsabilidad civil y administrativa por violación de derechos de
          propiedad industrial.
        </p>

        {/* DEMANDAS */}
        <h2 className={styles.subtitle}>
          ¿Te pueden demandar por usar una marca registrada?
        </h2>

        <p className={styles.paragraph}>
          Sí. El titular de la marca puede iniciar acciones legales para
          proteger sus derechos exclusivos y exigir el cese inmediato del uso.
        </p>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Un negocio en Bogotá usa un nombre similar a una marca registrada. El
          titular presenta una acción legal y el negocio debe cambiar su
          identidad comercial y pagar indemnización.
        </p>

        {/* PREVENCIÓN */}
        <h2 className={styles.subtitle}>¿Cómo evitar estos problemas?</h2>

        <ul className={styles.list}>
          <li>Verificar marcas antes de usar un nombre comercial</li>
          <li>Realizar búsqueda en la base de datos de la SIC</li>
          <li>Registrar tu propia marca lo antes posible</li>
          <li>Asesorarte legalmente antes de lanzar un negocio</li>
        </ul>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Nunca uses una marca sin verificar su estado legal en Colombia. La
          prevención es la mejor forma de evitar conflictos legales costosos.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Evita demandas por uso de marca
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a verificar si puedes usar una marca en Colombia sin
            riesgos legales ante la SIC.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Asesoría por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
