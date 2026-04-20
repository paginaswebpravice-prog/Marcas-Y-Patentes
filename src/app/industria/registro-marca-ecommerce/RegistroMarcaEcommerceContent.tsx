"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistroMarcaEcommerceContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.title}>
          Registro de marca en Colombia: guía completa para proteger tu negocio
        </h1>

        <p className={styles.paragraph}>
          El <strong>registro de marca en Colombia</strong> es uno de los pasos
          más importantes para proteger tu negocio, especialmente si tienes un
          emprendimiento, empresa o ecommerce en crecimiento. En ciudades como{" "}
          <strong>Bogotá</strong>, donde la competencia es alta, registrar tu
          marca ante la Superintendencia de Industria y Comercio (SIC) te
          permite diferenciarte y evitar que terceros utilicen tu nombre,
          identidad o reputación.
        </p>

        <p className={styles.paragraph}>
          Muchas empresas cometen el error de invertir en marketing, redes
          sociales y posicionamiento sin haber protegido su marca. Esto puede
          generar riesgos legales y pérdidas económicas si alguien más registra
          un nombre similar o igual antes que tú.
        </p>

        <div className={styles.note}>
          Registrar tu marca no es solo un trámite legal: es una decisión
          estratégica para proteger tu crecimiento y asegurar tu posicionamiento
          en el mercado colombiano.
        </div>

        <h2 className={styles.subtitle}>
          ¿Por qué es importante registrar una marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          Registrar una marca en Colombia te otorga derechos exclusivos sobre el
          uso de tu nombre, logo o signo distintivo en todo el territorio
          nacional. Esto significa que puedes impedir que otras personas o
          empresas utilicen una marca similar en el mismo sector.
        </p>

        <ul className={styles.list}>
          <li>
            <strong>Protección legal:</strong> evitas que terceros usen tu marca
            sin autorización.
          </li>
          <li>
            <strong>Derecho exclusivo:</strong> uso exclusivo en tu actividad
            comercial.
          </li>
          <li>
            <strong>Valor empresarial:</strong> tu marca se convierte en un
            activo intangible.
          </li>
          <li>
            <strong>Confianza:</strong> mayor credibilidad frente a clientes y
            aliados.
          </li>
          <li>
            <strong>Defensa legal:</strong> puedes actuar contra imitaciones o
            plagios.
          </li>
        </ul>

        <h2 className={styles.subtitle}>
          ¿Qué se puede registrar como marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          En Colombia puedes registrar diferentes tipos de marcas dependiendo de
          tu negocio. Esto incluye nombres comerciales, logos, slogans e incluso
          combinaciones de elementos gráficos y textuales.
        </p>

        <ul className={styles.list}>
          <li>Nombres de empresa o emprendimiento</li>
          <li>Logotipos o símbolos</li>
          <li>Slogans o frases comerciales</li>
          <li>Marcas mixtas (nombre + imagen)</li>
        </ul>

        <h2 className={styles.subtitle}>
          Proceso de registro de marca en Colombia paso a paso
        </h2>

        <p className={styles.paragraph}>
          El trámite de registro de marca ante la SIC en Colombia tiene varias
          etapas. Entender este proceso te ayudará a evitar errores y aumentar
          la probabilidad de aprobación.
        </p>

        <ol className={styles.orderedList}>
          <li>
            <strong>Búsqueda de antecedentes:</strong> verificar si la marca ya
            existe o es similar a otra registrada.
          </li>
          <li>
            <strong>Solicitud:</strong> presentación formal ante la SIC con los
            datos de la marca y su clasificación.
          </li>
          <li>
            <strong>Publicación:</strong> la solicitud se publica para posibles
            oposiciones de terceros.
          </li>
          <li>
            <strong>Evaluación:</strong> la SIC analiza si la marca cumple los
            requisitos legales.
          </li>
          <li>
            <strong>Resolución:</strong> aprobación o negación del registro.
          </li>
        </ol>

        <div className={styles.note}>
          Consejo clave: una mala elección de la clase o una marca muy similar a
          otra existente puede hacer que pierdas tiempo y dinero en el proceso.
        </div>

        <h2 className={styles.subtitle}>
          ¿Cuánto cuesta registrar una marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          El costo del registro de marca en Colombia depende de las tasas
          oficiales de la SIC y del tipo de marca que desees registrar. Además,
          si decides hacerlo con asesoría legal, debes considerar honorarios
          profesionales.
        </p>

        <p className={styles.paragraph}>
          Aunque algunas personas intentan hacer el proceso por su cuenta,
          contar con asesoría puede evitar errores que lleven al rechazo de la
          marca o a conflictos legales en el futuro.
        </p>

        <h2 className={styles.subtitle}>
          Errores comunes al registrar una marca en Colombia
        </h2>

        <ul className={styles.list}>
          <li>No hacer búsqueda previa de antecedentes</li>
          <li>Elegir nombres genéricos o poco distintivos</li>
          <li>Registrar en una clase incorrecta</li>
          <li>No responder a oposiciones o requerimientos</li>
          <li>No proteger el logo junto con el nombre</li>
        </ul>

        <h2 className={styles.subtitle}>
          Registro de marca para ecommerce en Colombia
        </h2>

        <p className={styles.paragraph}>
          Si tienes un <strong>ecommerce en Colombia</strong>, registrar tu
          marca es aún más importante. En el entorno digital, donde la
          competencia es global, proteger tu nombre evita que otras tiendas
          utilicen tu identidad o confundan a tus clientes.
        </p>

        <p className={styles.paragraph}>
          Además, plataformas digitales y marketplaces suelen exigir que tengas
          derechos sobre tu marca para protegerla frente a terceros.
        </p>

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Registra tu marca con asesoría profesional
          </strong>

          <p className={styles.paragraph}>
            Evita errores, reduce riesgos y aumenta las probabilidades de éxito
            en el registro de tu marca en Colombia. Recibe acompañamiento paso a
            paso durante todo el proceso.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Asesoría por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
