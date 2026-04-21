"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistroInternacionalMarcaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Registro de marca internacional desde Colombia: protege tu marca a
          nivel global
        </h1>

        <p>
          Si tienes un negocio en <strong>Bogotá</strong> o en cualquier parte
          de Colombia, expandirte a mercados internacionales implica proteger tu
          marca fuera del país.
        </p>

        <p>
          Registrar tu marca internacionalmente no solo evita que terceros la
          copien, sino que también aumenta el valor de tu empresa y facilita la
          expansión global.
        </p>

        <div className={styles.highlightBox}>
          🌎 Si vendes online, exportas o tienes presencia digital, ya estás en
          un entorno internacional (aunque no lo notes).
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* 1 */}
        <h2>¿Qué es el registro internacional de marca?</h2>
        <p>
          Es un mecanismo que permite extender la protección legal de tu marca a
          varios países mediante una sola solicitud.
        </p>

        <p>
          Sin este registro, tu marca solo está protegida en Colombia, lo que
          significa que terceros podrían registrarla en otros países y limitar
          tu expansión.
        </p>

        <ul>
          <li>Protección jurídica en múltiples territorios</li>
          <li>Control sobre tu marca a nivel global</li>
          <li>Reducción de riesgos legales</li>
        </ul>

        {/* 2 */}
        <h2>¿Qué es el Sistema de Madrid?</h2>
        <p>
          El Sistema de Madrid es un tratado internacional administrado por la
          OMPI que permite registrar marcas en más de 100 países con un solo
          trámite.
        </p>

        <p>
          Colombia hace parte de este sistema, lo que facilita a empresas
          locales internacionalizar su marca de forma eficiente.
        </p>

        <div className={styles.tipBox}>
          💡 No es un “registro global único”, sino una solicitud centralizada
          que luego es evaluada por cada país.
        </div>

        <ul>
          <li>Una sola solicitud</li>
          <li>Un solo idioma</li>
          <li>Gestión centralizada</li>
        </ul>

        {/* 3 */}
        <h2>Requisitos para registrar tu marca internacionalmente</h2>
        <p>Para iniciar el proceso desde Colombia necesitas:</p>

        <ul>
          <li>Tener una marca registrada o en trámite ante la SIC</li>
          <li>Ser titular domiciliado en Colombia</li>
          <li>Definir los países donde deseas protección</li>
        </ul>

        <div className={styles.warningBox}>
          ⚠️ Tu solicitud internacional depende de tu registro base en Colombia
          durante los primeros 5 años.
        </div>

        {/* 4 */}
        <h2>Ventajas del registro internacional</h2>
        <p>
          Registrar tu marca internacionalmente te da ventajas competitivas
          clave:
        </p>

        <ul>
          <li>Protección en múltiples países</li>
          <li>Reducción de costos frente a registros individuales</li>
          <li>Mayor valor de marca (branding global)</li>
          <li>Facilidad para expandir tu negocio</li>
        </ul>

        <p>
          Además, mejora la percepción de tu empresa frente a inversionistas y
          socios internacionales.
        </p>

        {/* 5 */}
        <h2>Costos del registro internacional</h2>
        <p>El costo depende de factores como:</p>

        <ul>
          <li>Cantidad de países seleccionados</li>
          <li>Tipo de marca</li>
          <li>Tasas internacionales</li>
        </ul>

        <p>
          Aunque puede parecer una inversión alta, suele ser más económico que
          registrar tu marca país por país.
        </p>

        {/* 6 */}
        <h2>Errores comunes al registrar una marca internacional</h2>
        <ul>
          <li>No elegir correctamente los países</li>
          <li>No analizar riesgos en cada mercado</li>
          <li>Depender de una marca débil en Colombia</li>
          <li>No responder objeciones internacionales</li>
        </ul>

        {/* 7 */}
        <h2>¿Cuándo deberías registrar tu marca internacionalmente?</h2>
        <p>Este proceso es ideal si:</p>

        <ul>
          <li>Exportas productos o servicios</li>
          <li>Vendes por internet a otros países</li>
          <li>Planeas expandirte internacionalmente</li>
          <li>Tu marca tiene potencial global</li>
        </ul>

        <div className={styles.highlightBox}>
          🚀 Mientras más temprano registres tu marca internacionalmente, menor
          será el riesgo de perderla en otros países.
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Lleva tu marca de Colombia al mundo</h3>
          <p>
            Te asesoramos en todo el proceso de registro internacional mediante
            el Sistema de Madrid para asegurar una expansión legal, segura y
            estratégica.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría internacional
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <div>
            <h3>¿Puedo registrar mi marca en varios países al mismo tiempo?</h3>
            <p>
              Sí, mediante el Sistema de Madrid puedes solicitar protección en
              múltiples países con una sola solicitud.
            </p>
          </div>

          <div>
            <h3>¿Necesito registrar primero mi marca en Colombia?</h3>
            <p>Sí, necesitas una solicitud o registro base ante la SIC.</p>
          </div>

          <div>
            <h3>¿Cuánto dura el registro internacional?</h3>
            <p>Generalmente tiene una vigencia de 10 años renovables.</p>
          </div>

          <div>
            <h3>¿Qué pasa si no registro mi marca internacionalmente?</h3>
            <p>
              Podrías perder el derecho de uso en otros países si un tercero la
              registra primero.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
