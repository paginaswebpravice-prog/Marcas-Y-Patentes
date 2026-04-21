"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CostoMarcaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          ¿Cuánto cuesta registrar una marca en Colombia en 2025? Guía completa
        </h1>

        <p>
          Registrar una marca en Colombia es una inversión clave para proteger
          tu negocio. Sin embargo, muchas empresas en Bogotá y otras ciudades no
          tienen claro cuánto cuesta realmente este proceso ante la
          Superintendencia de Industria y Comercio (SIC).
        </p>

        <p>
          En esta guía te explicamos todos los costos involucrados, desde las
          tasas oficiales hasta los gastos adicionales que pueden surgir.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* SECCION 1 */}
        <h2>Costos oficiales de la SIC en Colombia</h2>
        <p>
          El costo base del registro de marca en Colombia está definido por las
          tasas oficiales de la SIC.
        </p>

        <ul>
          <li>Solicitud de registro de marca</li>
          <li>Examen de forma y fondo</li>
          <li>Publicación en la gaceta</li>
        </ul>

        <p>
          Estos valores pueden variar cada año, por lo que es importante
          consultar las tarifas actualizadas en 2025.
        </p>

        {/* SECCION 2 */}
        <h2>Costo por clases de marca</h2>
        <p>
          El precio depende directamente del número de clases en las que
          registres tu marca según la Clasificación de Niza.
        </p>

        <ul>
          <li>1 clase → costo base</li>
          <li>2 o más clases → costo adicional por cada una</li>
        </ul>

        <p>
          Elegir correctamente la clase evita pagar de más o quedar sin
          protección legal.
        </p>

        {/* SECCION 3 */}
        <h2>Honorarios de abogados o asesores</h2>
        <p>
          Aunque puedes registrar tu marca por tu cuenta, muchas empresas en
          Colombia prefieren contratar asesoría legal.
        </p>

        <ul>
          <li>Análisis de viabilidad</li>
          <li>Búsqueda de antecedentes</li>
          <li>Presentación correcta de la solicitud</li>
          <li>Respuesta a requerimientos de la SIC</li>
        </ul>

        <p>
          Esto aumenta las probabilidades de éxito y evita errores costosos.
        </p>

        {/* SECCION 4 */}
        <h2>Costos adicionales que pueden surgir</h2>
        <p>Durante el proceso de registro pueden aparecer gastos extra:</p>

        <ul>
          <li>Oposiciones de terceros</li>
          <li>Correcciones de la solicitud</li>
          <li>Recursos legales</li>
        </ul>

        <p>
          Estos costos no siempre ocurren, pero es importante tenerlos en
          cuenta.
        </p>

        {/* SECCION 5 */}
        <h2>¿Es caro registrar una marca en Colombia?</h2>
        <p>
          Más que un gasto, registrar una marca es una inversión estratégica.
        </p>

        <ul>
          <li>Protege tu identidad comercial</li>
          <li>Evita problemas legales</li>
          <li>Aumenta el valor de tu empresa</li>
        </ul>

        <p>
          En mercados competitivos como Bogotá, no registrar tu marca puede
          salir mucho más costoso a largo plazo.
        </p>

        {/* SECCION 6 */}
        <h2>Cómo reducir costos al registrar tu marca</h2>

        <ul>
          <li>Elegir correctamente la clase desde el inicio</li>
          <li>Realizar una búsqueda previa</li>
          <li>Evitar errores en la solicitud</li>
          <li>Contar con asesoría profesional</li>
        </ul>

        <p>
          Una buena estrategia puede ahorrarte tiempo, dinero y problemas
          legales.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Obtén el costo exacto para tu marca</h3>
          <p>
            Analizamos tu caso y te damos un presupuesto claro para registrar tu
            marca en Colombia sin riesgos ni costos ocultos.
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
          <h2>Preguntas frecuentes sobre costos de marca</h2>

          <div>
            <h3>¿Cuánto cuesta registrar una marca en 2025?</h3>
            <p>
              Depende de las tasas de la SIC, el número de clases y si utilizas
              asesoría legal.
            </p>
          </div>

          <div>
            <h3>¿Se paga una sola vez?</h3>
            <p>
              El pago principal se realiza al inicio, aunque pueden existir
              costos adicionales durante el proceso.
            </p>
          </div>

          <div>
            <h3>¿Cuánto dura el registro?</h3>
            <p>
              Tiene una vigencia de 10 años y puede renovarse indefinidamente.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
