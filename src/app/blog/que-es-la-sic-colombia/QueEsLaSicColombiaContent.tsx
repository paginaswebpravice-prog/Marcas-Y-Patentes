"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaSicContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>¿Qué es la SIC en Colombia y cómo protege tu marca?</h1>

        <p>
          Si tienes un negocio en <strong>Bogotá</strong> o en cualquier parte
          de <strong>Colombia</strong>, entender el rol de la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong> no es
          opcional: es clave para proteger tu marca y evitar problemas legales.
        </p>

        <p>
          Esta entidad es la encargada de regular el mercado, proteger la libre
          competencia y administrar todo lo relacionado con{" "}
          <strong>propiedad industrial</strong>, incluyendo marcas y patentes.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* INTRO SEO */}
        <div className={styles.highlightBox}>
          <p>
            👉 En pocas palabras: si quieres que tu marca sea realmente tuya en
            Colombia, necesitas pasar por la SIC.
          </p>
        </div>

        {/* 1 */}
        <h2>¿Qué es la SIC en Colombia?</h2>
        <p>
          La SIC es una entidad del Estado colombiano encargada de supervisar y
          regular aspectos clave del mercado, especialmente en temas de:
        </p>

        <ul>
          <li>Propiedad industrial (marcas, patentes)</li>
          <li>Protección al consumidor</li>
          <li>Libre competencia</li>
          <li>Protección de datos personales</li>
        </ul>

        <p>
          Es, en la práctica, la autoridad que decide si tu marca puede
          registrarse o no en Colombia.
        </p>

        {/* 2 */}
        <h2>¿Por qué es tan importante la SIC para tu negocio?</h2>
        <p>
          Muchas empresas en Bogotá subestiman el impacto de esta entidad hasta
          que enfrentan un problema legal o un rechazo de marca.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Protección legal</h3>
            <p>Evita que terceros usen tu marca sin autorización.</p>
          </div>

          <div className={styles.card}>
            <h3>Seguridad jurídica</h3>
            <p>Tu negocio opera con respaldo legal en Colombia.</p>
          </div>

          <div className={styles.card}>
            <h3>Valor de marca</h3>
            <p>Tu marca se convierte en un activo comercial.</p>
          </div>
        </div>

        {/* 3 */}
        <h2>¿Cómo protege la SIC tu marca?</h2>
        <p>
          La protección inicia cuando registras tu marca. A partir de ese
          momento:
        </p>

        <ul>
          <li>Tienes exclusividad de uso en Colombia</li>
          <li>Puedes impedir registros similares</li>
          <li>Puedes iniciar acciones legales</li>
        </ul>

        <p>
          Sin registro, tu marca no tiene protección real, aunque la estés
          usando.
        </p>

        {/* 4 */}
        <h2>Proceso para registrar una marca ante la SIC</h2>
        <p>
          El proceso no es automático. Tiene varias etapas que pueden afectar el
          resultado:
        </p>

        <div className={styles.steps}>
          <div>
            <span>1</span>
            <p>Búsqueda de antecedentes</p>
          </div>
          <div>
            <span>2</span>
            <p>Solicitud de registro</p>
          </div>
          <div>
            <span>3</span>
            <p>Publicación en la Gaceta</p>
          </div>
          <div>
            <span>4</span>
            <p>Oposiciones de terceros</p>
          </div>
          <div>
            <span>5</span>
            <p>Examen de fondo</p>
          </div>
          <div>
            <span>6</span>
            <p>Decisión final</p>
          </div>
        </div>

        <p className={styles.note}>
          ⚠️ Un error en cualquiera de estas etapas puede terminar en rechazo.
        </p>

        {/* 5 */}
        <h2>¿Qué pasa si no registras tu marca?</h2>
        <p>
          Este es uno de los mayores errores en Colombia. Si no registras tu
          marca:
        </p>

        <ul>
          <li>Otra persona puede registrarla antes</li>
          <li>Puedes perder tu identidad comercial</li>
          <li>Podrías tener que cambiar tu nombre</li>
        </ul>

        {/* 6 */}
        <h2>¿La SIC protege automáticamente todas las marcas?</h2>
        <p>
          No. La SIC solo protege las marcas que han sido registradas
          correctamente.
        </p>

        <p>
          Esto significa que usar una marca no te da derechos legales si no está
          registrada.
        </p>

        {/* 7 */}
        <h2>Importancia para empresas en Bogotá</h2>
        <p>
          En mercados altamente competitivos como Bogotá, registrar tu marca no
          es solo protección, es estrategia.
        </p>

        <ul>
          <li>Diferenciación en el mercado</li>
          <li>Confianza del cliente</li>
          <li>Facilidad para escalar el negocio</li>
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Protege tu marca ante la SIC correctamente</h3>
          <p>
            Analizamos tu caso y te ayudamos a registrar tu marca en Colombia
            sin errores y con mayor probabilidad de éxito.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría gratuita
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <div>
            <h3>¿Qué significa SIC?</h3>
            <p>
              Es la Superintendencia de Industria y Comercio, autoridad en
              propiedad industrial en Colombia.
            </p>
          </div>

          <div>
            <h3>¿Es obligatorio registrar una marca?</h3>
            <p>
              No, pero es la única forma de tener protección legal real en
              Colombia.
            </p>
          </div>

          <div>
            <h3>¿Cuánto tarda el proceso?</h3>
            <p>Entre 6 y 12 meses dependiendo del caso.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
