"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RenovacionPatenteContent() {
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
          Renovación de patente en Colombia: protege tu invención
        </h1>

        <p className={styles.paragraph}>
          La renovación o mantenimiento de una patente en Colombia es un paso
          esencial para conservar la protección legal de una invención. En el
          sistema de propiedad industrial administrado por la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>, las
          patentes requieren cumplimiento de obligaciones periódicas.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, muchos inventores pierden sus derechos por
          desconocer los plazos de mantenimiento o pago de anualidades.
        </p>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué es importante mantener una patente?
        </h2>

        <ul className={styles.list}>
          <li>Conservas la exclusividad de tu invención</li>
          <li>Evitas que terceros exploten tu tecnología</li>
          <li>Proteges el valor comercial de tu innovación</li>
          <li>Mantienes vigentes tus derechos en Colombia</li>
        </ul>

        {/* DURACIÓN */}
        <h2 className={styles.subtitle}>
          ¿Cuánto dura una patente en Colombia?
        </h2>

        <p className={styles.paragraph}>
          Las patentes de invención en Colombia tienen una vigencia de hasta 20
          años, contados desde la fecha de solicitud, siempre que se paguen las
          anualidades correspondientes.
        </p>

        {/* MANTENIMIENTO */}
        <h2 className={styles.subtitle}>
          ¿Cómo se mantiene una patente activa?
        </h2>

        <ol className={styles.orderedList}>
          <li>Pago de anualidades ante la SIC</li>
          <li>Seguimiento de fechas de vencimiento</li>
          <li>Mantenimiento administrativo del registro</li>
          <li>Renovación de obligaciones periódicas</li>
        </ol>

        {/* RIESGOS */}
        <h2 className={styles.subtitle}>Riesgos de no mantener tu patente</h2>

        <ul className={styles.list}>
          <li>Pérdida de protección legal</li>
          <li>Explotación libre por terceros</li>
          <li>Desvalorización de la innovación</li>
          <li>Imposibilidad de defensa legal</li>
        </ul>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Un inventor en Bogotá deja de pagar las anualidades de su patente.
          Meses después, pierde la protección y su tecnología puede ser usada
          por competidores sin consecuencias legales.
        </p>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Es fundamental llevar un control estricto de vencimientos y pagos de
          anualidades para evitar la pérdida de derechos sobre la patente en
          Colombia.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            No pierdas la protección de tu patente
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a mantener tu patente en Colombia activa y protegida
            ante la SIC sin riesgos legales.
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
