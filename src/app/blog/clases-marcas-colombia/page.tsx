"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ClasesMarcasColombia() {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ================= SEO ================= */}
      <div style={{ display: "none" }}>
        <h1 itemProp="headline">Clases de marcas según la SIC en Colombia</h1>
        <p itemProp="description">
          Aprende cómo funciona la clasificación de Niza en Colombia y elige
          correctamente la clase para registrar tu marca ante la SIC.
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
          Clases de marcas en Colombia: cómo elegir correctamente según la SIC
        </h1>

        <p>
          Al registrar una marca en Colombia, uno de los errores más comunes es
          elegir incorrectamente la clase. La Superintendencia de Industria y
          Comercio (SIC) utiliza la Clasificación de Niza, un sistema
          internacional que organiza productos y servicios en diferentes
          categorías.
        </p>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        {[
          {
            title: "1. ¿Qué es la Clasificación de Niza?",
            text: (
              <>
                <p>
                  Es un sistema internacional que clasifica productos y
                  servicios en 45 clases diferentes para el registro de marcas.
                </p>
                <p>
                  Las clases 1 a 34 corresponden a productos, mientras que las
                  clases 35 a 45 corresponden a servicios.
                </p>
              </>
            ),
          },
          {
            title: "2. ¿Por qué es importante elegir la clase correcta?",
            text: (
              <>
                <p>
                  Registrar tu marca en la clase adecuada garantiza que tengas
                  protección legal sobre tu actividad específica en Colombia.
                </p>
                <p>
                  Elegir mal puede dejar tu marca vulnerable frente a
                  competidores o incluso provocar el rechazo de tu solicitud
                  ante la SIC.
                </p>
              </>
            ),
          },
          {
            title: "3. Ejemplos de clases comunes en Colombia",
            text: (
              <>
                <p>Algunas clases frecuentes incluyen:</p>
                <p>
                  • Clase 25: Ropa, calzado y accesorios <br />
                  • Clase 35: Servicios comerciales y marketing <br />
                  • Clase 41: Educación y formación <br />
                  • Clase 42: Tecnología y software <br />• Clase 43:
                  Restaurantes y servicios de comida
                </p>
              </>
            ),
          },
          {
            title: "4. ¿Puedo registrar mi marca en varias clases?",
            text: (
              <>
                <p>
                  Sí. Si tu negocio abarca diferentes actividades, puedes
                  registrar tu marca en varias clases.
                </p>
                <p>
                  Sin embargo, cada clase adicional implica un costo extra en el
                  proceso ante la SIC.
                </p>
              </>
            ),
          },
          {
            title: "5. Errores comunes al elegir la clase",
            text: (
              <>
                <p>
                  Muchas empresas en Bogotá y Colombia cometen errores como:
                </p>
                <p>
                  • Elegir una clase muy general <br />
                  • No cubrir todas sus actividades <br />
                  • Confundir productos con servicios <br />• No planear
                  crecimiento futuro
                </p>
              </>
            ),
          },
          {
            title: "6. ¿Cómo elegir la clase correcta?",
            text: (
              <>
                <p>
                  Lo ideal es analizar tu modelo de negocio actual y futuro,
                  identificando todas las actividades que deseas proteger.
                </p>
                <p>
                  Contar con asesoría legal especializada te ayuda a evitar
                  errores y optimizar la protección de tu marca en Colombia.
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Elige la clase correcta desde el inicio</h3>
          <p>
            Nuestro equipo en Bogotá analiza tu negocio y define las clases
            adecuadas para registrar tu marca en Colombia sin errores ni riesgos
            legales.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar asesoría especializada
          </motion.button>
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

          {[
            {
              q: "¿Cuántas clases existen en Colombia?",
              a: "Existen 45 clases según la Clasificación de Niza: 34 de productos y 11 de servicios.",
            },
            {
              q: "¿Debo registrar mi marca en varias clases?",
              a: "Depende de tu negocio. Si tienes varias actividades, es recomendable cubrir todas las relevantes.",
            },
            {
              q: "¿Qué pasa si elijo mal la clase?",
              a: "Podrías quedar sin protección en tu actividad principal o incluso recibir un rechazo de la SIC.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
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
