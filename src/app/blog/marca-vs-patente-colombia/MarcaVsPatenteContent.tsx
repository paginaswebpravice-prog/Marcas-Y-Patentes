"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function MarcaVsPatenteContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Diferencia entre marca y patente en Colombia: ¿Cuál necesitas?</h1>

        <p>
          En Colombia, especialmente en ciudades como <strong>Bogotá</strong>,
          es muy común que emprendedores confundan el registro de una marca con
          el de una patente. Aunque ambos hacen parte de la propiedad
          intelectual, cumplen funciones completamente diferentes.
        </p>

        <p>
          Entender esta diferencia es clave para proteger correctamente tu
          negocio ante la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong> y
          evitar errores que pueden costarte dinero, tiempo y oportunidades.
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* 1 */}
        <h2>¿Qué es una marca en Colombia?</h2>
        <p>
          Una marca es un signo distintivo que permite identificar productos o
          servicios en el mercado. Puede estar compuesta por un nombre,
          logotipo, colores, sonidos o una combinación de estos elementos.
        </p>

        <p>
          Registrar una marca te da el derecho exclusivo de uso en Colombia,
          evitando que terceros utilicen signos similares que puedan generar
          confusión.
        </p>

        <ul>
          <li>Protege tu identidad comercial</li>
          <li>Fortalece tu posicionamiento de marca</li>
          <li>Aumenta el valor de tu empresa</li>
        </ul>

        {/* 2 */}
        <h2>¿Qué es una patente en Colombia?</h2>
        <p>
          Una patente protege una invención, es decir, una solución técnica
          nueva a un problema específico.
        </p>

        <p>
          Esto incluye productos, procesos o tecnologías innovadoras que cumplan
          requisitos como novedad, nivel inventivo y aplicación industrial.
        </p>

        <ul>
          <li>Protege innovación tecnológica</li>
          <li>Otorga exclusividad de explotación</li>
          <li>Permite licenciar o vender la invención</li>
        </ul>

        {/* 3 */}
        <h2>Diferencias clave entre marca y patente</h2>
        <p>
          Aunque ambas figuras pertenecen a la propiedad intelectual, su enfoque
          es completamente distinto:
        </p>

        <ul>
          <li>La marca protege identidad comercial</li>
          <li>La patente protege innovación técnica</li>
          <li>La marca puede renovarse indefinidamente</li>
          <li>La patente tiene duración limitada (20 años aprox.)</li>
        </ul>

        <p>
          Confundir estos conceptos puede llevar a proteger mal tu negocio o no
          protegerlo en absoluto.
        </p>

        {/* 4 */}
        <h2>¿Cuándo debes registrar una marca?</h2>
        <p>
          Debes registrar una marca si tienes un negocio, emprendimiento o
          proyecto comercial en Colombia.
        </p>

        <p>
          Es especialmente importante en mercados competitivos como Bogotá,
          donde la diferenciación es clave.
        </p>

        <ul>
          <li>Si tienes nombre comercial</li>
          <li>Si tienes logo o identidad visual</li>
          <li>Si quieres evitar que otros usen tu marca</li>
        </ul>

        {/* 5 */}
        <h2>¿Cuándo debes registrar una patente?</h2>
        <p>
          Debes registrar una patente si desarrollaste una solución innovadora o
          tecnología propia.
        </p>

        <ul>
          <li>Startups tecnológicas</li>
          <li>Desarrollos industriales</li>
          <li>Productos innovadores</li>
        </ul>

        <p>
          Este tipo de protección es clave para atraer inversión y evitar copia
          de tu innovación.
        </p>

        {/* 6 */}
        <h2>¿Se pueden registrar marca y patente al mismo tiempo?</h2>
        <p>
          Sí. De hecho, es una estrategia muy común en empresas en crecimiento.
        </p>

        <p>
          Por ejemplo, puedes proteger tu tecnología con una patente y tu marca
          comercial con un registro marcario.
        </p>

        <p>
          Esto permite una protección integral del negocio tanto a nivel técnico
          como comercial.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>¿No sabes qué necesitas?</h3>
          <p>
            Analizamos tu caso en Bogotá y te asesoramos para elegir la mejor
            estrategia de protección ante la SIC.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Recibir asesoría gratuita
          </a>
        </div>

        {/* FAQ */}
        <div className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <div>
            <h3>¿Qué es mejor, marca o patente?</h3>
            <p>
              Depende de tu negocio. La marca protege tu identidad y la patente
              protege innovación.
            </p>
          </div>

          <div>
            <h3>¿Se pueden registrar ambas?</h3>
            <p>
              Sí, es una estrategia común para proteger completamente un
              negocio.
            </p>
          </div>

          <div>
            <h3>¿Dónde se registran?</h3>
            <p>Ambos procesos se realizan ante la SIC en Colombia.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
