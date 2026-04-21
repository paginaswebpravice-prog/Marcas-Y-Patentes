"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RenovacionMarcaContent() {
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
          Renovación de marca en Colombia: cómo mantener tu protección legal
        </h1>

        <p className={styles.paragraph}>
          La renovación de marca en Colombia es un proceso obligatorio para
          mantener la protección legal otorgada por la Superintendencia de
          Industria y Comercio (SIC). Si no se renueva a tiempo, puedes perder
          los derechos sobre tu marca registrada.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, muchas empresas pierden sus marcas por no
          conocer los plazos de renovación o por descuidos administrativos.
        </p>

        {/* IMPORTANCIA */}
        <h2 className={styles.subtitle}>
          ¿Por qué es importante renovar tu marca?
        </h2>

        <ul className={styles.list}>
          <li>Mantienes la protección legal exclusiva</li>
          <li>Evitas que terceros registren tu marca</li>
          <li>Conservas el valor comercial de tu negocio</li>
          <li>Proteges tu identidad en el mercado colombiano</li>
        </ul>

        {/* PLAZO */}
        <h2 className={styles.subtitle}>
          ¿Cada cuánto se renueva una marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          Las marcas registradas en Colombia tienen una vigencia de 10 años,
          contados desde la fecha de concesión. Este registro puede renovarse
          indefinidamente por periodos iguales.
        </p>

        {/* PROCESO */}
        <h2 className={styles.subtitle}>
          Proceso de renovación de marca ante la SIC
        </h2>

        <ol className={styles.orderedList}>
          <li>Verificar la fecha de vencimiento del registro</li>
          <li>Presentar solicitud de renovación ante la SIC</li>
          <li>Pago de tasas oficiales correspondientes</li>
          <li>Confirmación de renovación del registro</li>
        </ol>

        {/* RIESGOS */}
        <h2 className={styles.subtitle}>¿Qué pasa si no renuevas tu marca?</h2>

        <ul className={styles.list}>
          <li>Pérdida del derecho exclusivo sobre la marca</li>
          <li>Posible registro por terceros</li>
          <li>Rebranding costoso y pérdida de reputación</li>
          <li>Riesgos legales en el mercado colombiano</li>
        </ul>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo en Colombia</h2>

        <p className={styles.paragraph}>
          Una empresa en Bogotá deja vencer su marca registrada. Meses después,
          un tercero la registra y obliga a la empresa original a cambiar su
          identidad comercial.
        </p>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Es recomendable llevar un control de vencimientos de marca y realizar
          la renovación con anticipación para evitar riesgos legales y pérdida
          de derechos en Colombia.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            No pierdas tu marca registrada
          </strong>

          <p className={styles.paragraph}>
            Te ayudamos a renovar tu marca en Colombia ante la SIC de forma
            segura, evitando errores y vencimientos.
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
