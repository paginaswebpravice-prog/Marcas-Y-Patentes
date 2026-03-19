"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function MarcaVsPatenteColombia() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">
          Diferencia entre marca y patente en Colombia
        </h1>
        <p itemProp="description">
          Aprende cuándo registrar una marca o una patente en Colombia y cuál
          conviene más según tu negocio ante la SIC.
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
        <h1>Diferencia entre marca y patente en Colombia: ¿Cuál necesitas?</h1>

        <p>
          Muchas empresas en Bogotá y Colombia confunden el registro de marca
          con el de patente. Aunque ambos protegen activos importantes, cumplen
          funciones completamente diferentes. Aquí te explicamos sus diferencias
          y cuándo debes usar cada uno.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. ¿Qué es una marca en Colombia?",
            text: (
              <>
                <p>
                  Una marca es un signo distintivo que identifica productos o
                  servicios en el mercado. Puede ser un nombre, logo, slogan o
                  combinación de estos.
                </p>
                <p>
                  Registrar una marca ante la SIC te otorga exclusividad para
                  usarla en Colombia y proteger tu identidad comercial.
                </p>
              </>
            ),
          },
          {
            title: "2. ¿Qué es una patente en Colombia?",
            text: (
              <>
                <p>
                  Una patente protege una invención, es decir, una solución
                  técnica nueva a un problema.
                </p>
                <p>
                  Aplica para productos, procesos o tecnologías innovadoras y
                  otorga derechos exclusivos de explotación en Colombia.
                </p>
              </>
            ),
          },
          {
            title: "3. Diferencias clave entre marca y patente",
            text: (
              <>
                <p>
                  Aunque ambas forman parte de la propiedad intelectual en
                  Colombia, tienen diferencias claras:
                </p>
                <p>
                  • La marca protege identidad comercial <br />
                  • La patente protege innovación tecnológica <br />
                  • La marca puede durar indefinidamente (renovable) <br />• La
                  patente tiene duración limitada (generalmente 20 años)
                </p>
              </>
            ),
          },
          {
            title: "4. ¿Cuándo registrar una marca?",
            text: (
              <>
                <p>
                  Debes registrar una marca si tienes un negocio en Bogotá o
                  Colombia y quieres proteger tu nombre, logo o identidad frente
                  a competidores.
                </p>
                <p>
                  Es esencial para posicionamiento, reputación y crecimiento en
                  el mercado.
                </p>
              </>
            ),
          },
          {
            title: "5. ¿Cuándo registrar una patente?",
            text: (
              <>
                <p>
                  Debes registrar una patente si desarrollaste un producto o
                  tecnología innovadora que deseas proteger legalmente.
                </p>
                <p>
                  Es clave para startups, empresas tecnológicas y proyectos de
                  innovación en Colombia.
                </p>
              </>
            ),
          },
          {
            title: "6. ¿Se pueden registrar ambas?",
            text: (
              <>
                <p>
                  Sí. Muchas empresas en Colombia registran tanto su marca como
                  sus patentes para proteger completamente su negocio.
                </p>
                <p>
                  Por ejemplo, una empresa puede patentar su tecnología y al
                  mismo tiempo registrar su marca comercial.
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
          <h3>¿No sabes si necesitas marca o patente?</h3>
          <p>
            Nuestro equipo en Bogotá analiza tu caso y te orienta para proteger
            correctamente tu negocio en Colombia ante la SIC.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Recibir asesoría personalizada
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
              q: "¿Qué es mejor, marca o patente?",
              a: "Depende de tu negocio. Si quieres proteger tu nombre o logo, necesitas una marca. Si tienes una invención, necesitas una patente.",
            },
            {
              q: "¿Puedo registrar una marca y una patente al mismo tiempo?",
              a: "Sí, muchas empresas en Colombia protegen tanto su identidad como su innovación.",
            },
            {
              q: "¿La marca y la patente se registran en la misma entidad?",
              a: "Sí, ambos trámites se realizan ante la Superintendencia de Industria y Comercio (SIC) en Colombia.",
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
