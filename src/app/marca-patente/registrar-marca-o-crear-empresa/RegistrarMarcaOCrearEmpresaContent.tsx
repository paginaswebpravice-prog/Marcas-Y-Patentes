"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegistrarMarcaOCrearEmpresaContent() {
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
          ¿Registrar marca o crear empresa en Colombia?
        </h1>

        <p className={styles.paragraph}>
          Uno de los errores más comunes de los emprendedores en Colombia es no
          saber si deben registrar primero su marca o crear su empresa. Esta
          decisión tiene implicaciones legales importantes en el crecimiento del
          negocio.
        </p>

        <p className={styles.paragraph}>
          En ciudades como Bogotá, esta duda es frecuente al iniciar procesos de
          formalización empresarial ante entidades como la{" "}
        </p>

        {/* DIFERENCIA */}
        <h2 className={styles.subtitle}>
          Diferencia entre registrar marca y crear empresa
        </h2>

        <ul className={styles.list}>
          <li>
            <strong>Crear empresa:</strong> formaliza la actividad económica
            ante la Cámara de Comercio.
          </li>
          <li>
            <strong>Registrar marca:</strong> protege el nombre, logo o
            identidad comercial ante la SIC.
          </li>
          <li>
            La empresa permite operar legalmente, la marca protege tu identidad.
          </li>
          <li>Son procesos diferentes y no dependen uno del otro.</li>
        </ul>

        {/* ORDEN RECOMENDADO */}
        <h2 className={styles.subtitle}>
          ¿Qué es mejor hacer primero en Colombia?
        </h2>

        <p className={styles.paragraph}>
          En la mayoría de casos, se recomienda definir primero la marca antes
          de constituir la empresa, ya que esto evita conflictos de nombre,
          duplicidades o problemas de identidad comercial.
        </p>

        {/* RIESGOS */}
        <h2 className={styles.subtitle}>
          Riesgos de no definir correctamente el orden
        </h2>

        <ul className={styles.list}>
          <li>Perder el nombre de tu negocio</li>
          <li>Problemas legales por marcas similares</li>
          <li>Rebranding costoso después de constituir empresa</li>
          <li>Confusión en el mercado</li>
        </ul>

        {/* EJEMPLO */}
        <h2 className={styles.subtitle}>Ejemplo práctico en Colombia</h2>

        <p className={styles.paragraph}>
          Un emprendedor en Bogotá crea una empresa llamada “Andino Tech SAS”,
          pero luego descubre que el nombre “Andino Tech” ya está registrado
          como marca ante la SIC, obligándolo a cambiar su identidad comercial.
        </p>

        {/* RECOMENDACIÓN */}
        <h2 className={styles.subtitle}>Recomendación legal</h2>

        <p className={styles.paragraph}>
          Antes de crear tu empresa o iniciar operaciones, realiza una
          verificación de disponibilidad de marca en Colombia para asegurar que
          tu identidad comercial esté protegida desde el inicio.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Evita errores al iniciar tu negocio en Colombia
          </strong>

          <p className={styles.paragraph}>
            Te asesoramos en el proceso de registro de marca y creación de
            empresa para que tomes la mejor decisión legal desde el inicio.
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
