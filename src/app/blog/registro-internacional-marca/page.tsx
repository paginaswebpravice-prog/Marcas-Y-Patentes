"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistroInternacionalMarca() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          Registro de marca internacional desde Colombia
        </h1>
        <p itemProp="description">
          Aprende cómo registrar tu marca internacionalmente desde Colombia
          utilizando el Sistema de Madrid y proteger tu negocio a nivel global.
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
          Registro de marca internacional desde Colombia: protege tu marca a
          nivel global
        </h1>

        <p>
          Si tu empresa en Bogotá o Colombia busca expandirse a otros países,
          registrar tu marca internacionalmente es un paso fundamental. Gracias
          al Sistema de Madrid, puedes proteger tu marca en múltiples países con
          un solo trámite.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. ¿Qué es el registro internacional de marca?",
            text: (
              <>
                <p>
                  Es un mecanismo que permite proteger tu marca en varios países
                  mediante una única solicitud internacional.
                </p>
                <p>
                  En lugar de registrar tu marca país por país, puedes
                  centralizar el proceso y simplificar la gestión legal.
                </p>
              </>
            ),
          },
          {
            title: "2. ¿Qué es el Sistema de Madrid?",
            text: (
              <>
                <p>
                  El Sistema de Madrid es un tratado internacional administrado
                  por la OMPI que permite registrar marcas en más de 100 países.
                </p>
                <p>
                  Colombia hace parte de este sistema, lo que facilita a
                  empresas locales expandir su protección a nivel global.
                </p>
              </>
            ),
          },
          {
            title: "3. Requisitos para registrar tu marca internacionalmente",
            text: (
              <>
                <p>
                  Para acceder al registro internacional desde Colombia debes:
                </p>
                <p>
                  • Tener una marca registrada o en trámite ante la SIC <br />
                  • Ser persona natural o jurídica domiciliada en Colombia{" "}
                  <br />• Definir los países donde deseas protección
                </p>
              </>
            ),
          },
          {
            title: "4. Ventajas del registro internacional",
            text: (
              <>
                <p>
                  Registrar tu marca internacionalmente ofrece beneficios clave:
                </p>
                <p>
                  • Protección en múltiples países <br />
                  • Reducción de costos administrativos <br />
                  • Gestión centralizada <br />• Mayor valor de marca para
                  expansión global
                </p>
              </>
            ),
          },
          {
            title: "5. Costos del registro internacional",
            text: (
              <>
                <p>
                  El costo depende de los países seleccionados y las tasas
                  internacionales del sistema.
                </p>
                <p>
                  Aunque puede parecer elevado, es más eficiente que registrar
                  tu marca individualmente en cada país.
                </p>
              </>
            ),
          },
          {
            title: "6. ¿Cuándo deberías registrar tu marca internacionalmente?",
            text: (
              <>
                <p>Este proceso es ideal si:</p>
                <p>
                  • Planeas exportar productos o servicios <br />
                  • Tienes presencia digital global <br />
                  • Buscas atraer inversión internacional <br />• Tu marca tiene
                  potencial de expansión
                </p>
              </>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{item.title}</h2>
            {item.text}
          </motion.div>
        ))}

        {/* ================= CTA ================= */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Lleva tu marca de Colombia al mundo</h3>
          <p>
            Nuestro equipo en Bogotá te asesora en el registro internacional de
            tu marca mediante el Sistema de Madrid, asegurando una expansión
            segura y estratégica.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar asesoría internacional
          </motion.button>
        </motion.div>

        {/* ================= FAQ ================= */}
        <motion.div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Preguntas frecuentes</h2>

          {[
            {
              q: "¿Puedo registrar mi marca en varios países al mismo tiempo?",
              a: "Sí, mediante el Sistema de Madrid puedes solicitar protección en múltiples países con una sola solicitud.",
            },
            {
              q: "¿Necesito registrar primero mi marca en Colombia?",
              a: "Sí, es necesario tener una solicitud o registro base ante la SIC.",
            },
            {
              q: "¿Cuánto dura el registro internacional?",
              a: "Generalmente tiene una vigencia de 10 años y puede renovarse.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 itemProp="name">{faq.q}</h3>

              <p
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{faq.a}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </article>
  );
}
