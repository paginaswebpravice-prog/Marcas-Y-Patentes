"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RiesgosNoRegistrarMarca() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          ¿Qué pasa si no registras tu marca en Colombia?
        </h1>
        <p itemProp="description">
          Descubre los riesgos legales y comerciales de no registrar tu marca en
          Colombia y cómo proteger tu negocio ante la SIC.
        </p>
        <span itemProp="author">Firma de abogados en Bogotá</span>
        <span itemProp="publisher">PRAVICE Abogados</span>
      </div>

      {/* ================= HERO ================= */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>
          ¿Qué pasa si no registras tu marca en Colombia? Riesgos que debes
          conocer
        </h1>

        <p>
          No registrar tu marca en Colombia puede parecer un ahorro al inicio,
          pero en realidad expone tu negocio a riesgos legales y pérdidas
          económicas. En Bogotá y todo el país, muchas empresas han tenido que
          cambiar su marca o enfrentar conflictos por no protegerla a tiempo.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>1. Pérdida del derecho sobre tu marca</h2>
          <p>
            En Colombia, el derecho sobre una marca lo obtiene quien la
            registra, no quien la usa primero. Esto significa que otra empresa
            podría registrar tu marca ante la SIC y obligarte a dejar de usarla.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>2. Riesgo de demandas legales</h2>
          <p>
            Si utilizas una marca que ya está registrada por otra empresa en
            Colombia, podrías enfrentar acciones legales, sanciones económicas e
            incluso la obligación de retirar productos o servicios del mercado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>3. Pérdida de inversión en branding</h2>
          <p>
            Todo el dinero invertido en publicidad, diseño y posicionamiento de
            tu marca puede perderse si debes cambiarla por no haberla registrado
            a tiempo en Colombia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>4. Falta de exclusividad en el mercado</h2>
          <p>
            Sin registro ante la SIC, cualquier persona en Colombia puede usar
            un nombre igual o similar al tuyo, afectando tu reputación y
            generando confusión entre tus clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>5. Dificultades para crecer o invertir</h2>
          <p>
            Las empresas en Bogotá y Colombia que no tienen su marca registrada
            suelen tener menos valor comercial y más dificultades para atraer
            inversionistas o expandirse.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Evita estos riesgos y protege tu marca hoy</h3>
          <p>
            Nuestro equipo en Bogotá te ayuda a registrar tu marca en Colombia
            ante la SIC de forma segura, evitando errores y protegiendo tu
            inversión desde el inicio.
          </p>
          <button>Solicitar asesoría gratuita</button>
        </motion.div>

        {/* ================= FAQ ================= */}
        <motion.div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Preguntas frecuentes</h2>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              ¿Puedo usar una marca sin registrarla en Colombia?
            </h3>
            <p
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">
                Sí, pero no tendrás protección legal. Otra persona podría
                registrarla y obligarte a dejar de usarla.
              </span>
            </p>
          </div>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              ¿Qué hago si alguien registra mi marca primero?
            </h3>
            <p
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">
                Puedes intentar oponerte o iniciar acciones legales, pero el
                proceso puede ser costoso y no siempre exitoso.
              </span>
            </p>
          </div>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 itemProp="name">
              ¿Registrar una marca realmente evita problemas?
            </h3>
            <p
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">
                Sí, el registro ante la SIC te otorga derechos exclusivos en
                Colombia y te permite defender legalmente tu marca.
              </span>
            </p>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
