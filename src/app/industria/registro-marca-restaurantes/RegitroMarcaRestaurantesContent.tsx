"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RegistroMarcaRestaurantesContent() {
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
          Registro de marca para restaurantes en Colombia: protege el nombre de
          tu negocio
        </h1>

        <p className={styles.paragraph}>
          Si tienes un restaurante en Colombia, registrar tu marca es una de las
          decisiones más importantes para proteger tu negocio. En ciudades como{" "}
          <strong>Bogotá</strong>, donde cada día surgen nuevos restaurantes,
          evitar que otros utilicen tu nombre, logo o concepto es clave para tu
          crecimiento.
        </p>

        <p className={styles.paragraph}>
          El <strong>registro de marca para restaurantes</strong> ante la
          Superintendencia de Industria y Comercio (SIC) te permite tener el uso
          exclusivo de tu nombre comercial y defenderlo legalmente en caso de
          imitaciones o competencia desleal.
        </p>

        <div className={styles.note}>
          Muchos restaurantes pierden su nombre después de posicionarse porque
          nunca lo registraron. No esperes a que alguien más lo haga primero.
        </div>

        <h2 className={styles.subtitle}>
          ¿Por qué registrar la marca de tu restaurante?
        </h2>

        <p className={styles.paragraph}>
          Tu marca es lo que hace que los clientes te recuerden, te recomienden
          y regresen. Sin registro, cualquier persona podría usar un nombre
          similar y aprovechar tu reputación.
        </p>

        <ul className={styles.list}>
          <li>
            <strong>Protección del nombre:</strong> evita copias o imitaciones.
          </li>
          <li>
            <strong>Exclusividad:</strong> uso único en tu categoría comercial.
          </li>
          <li>
            <strong>Valor de marca:</strong> aumenta el valor de tu restaurante.
          </li>
          <li>
            <strong>Expansión:</strong> ideal si planeas franquiciar o abrir más
            sedes.
          </li>
          <li>
            <strong>Confianza:</strong> mayor credibilidad frente a clientes.
          </li>
        </ul>

        <h2 className={styles.subtitle}>¿Qué puedes registrar como marca?</h2>

        <p className={styles.paragraph}>
          En el sector gastronómico puedes proteger diferentes elementos de tu
          restaurante para evitar que sean utilizados por terceros.
        </p>

        <ul className={styles.list}>
          <li>Nombre del restaurante</li>
          <li>Logotipo o imagen</li>
          <li>Slogan o frase comercial</li>
          <li>Marca mixta (nombre + logo)</li>
        </ul>

        <h2 className={styles.subtitle}>
          Proceso de registro de marca para restaurantes en Colombia
        </h2>

        <ol className={styles.orderedList}>
          <li>
            <strong>Búsqueda de antecedentes:</strong> validar que el nombre
            esté disponible.
          </li>
          <li>
            <strong>Solicitud ante la SIC:</strong> registro formal de la marca.
          </li>
          <li>
            <strong>Publicación:</strong> terceros pueden presentar oposición.
          </li>
          <li>
            <strong>Evaluación:</strong> análisis legal por parte de la SIC.
          </li>
          <li>
            <strong>Aprobación:</strong> obtienes el derecho exclusivo de uso.
          </li>
        </ol>

        <div className={styles.note}>
          Elegir correctamente la clase (clasificación de tu restaurante) es
          clave para evitar rechazos o problemas legales.
        </div>

        <h2 className={styles.subtitle}>
          Errores comunes en restaurantes al registrar su marca
        </h2>

        <ul className={styles.list}>
          <li>No registrar la marca desde el inicio</li>
          <li>Usar nombres genéricos o poco distintivos</li>
          <li>No verificar antecedentes</li>
          <li>No proteger el logo junto con el nombre</li>
          <li>Esperar a tener éxito para registrar</li>
        </ul>

        <h2 className={styles.subtitle}>
          ¿Cuánto cuesta registrar una marca en Colombia?
        </h2>

        <p className={styles.paragraph}>
          El costo depende de las tasas de la SIC y del tipo de marca. También
          puede incluir honorarios si decides hacerlo con asesoría legal para
          aumentar la probabilidad de aprobación.
        </p>

        <p className={styles.paragraph}>
          Invertir en el registro de marca es mucho más económico que enfrentar
          un conflicto legal o perder tu identidad comercial.
        </p>

        <h2 className={styles.subtitle}>
          Registro de marca para restaurantes en Bogotá
        </h2>

        <p className={styles.paragraph}>
          En Bogotá, donde la oferta gastronómica es altamente competitiva,
          registrar tu marca te permite diferenciarte y proteger tu concepto.
          Esto es especialmente importante si manejas domicilios, redes sociales
          o presencia en plataformas digitales.
        </p>

        <p className={styles.paragraph}>
          Muchos restaurantes exitosos en Colombia han construido su crecimiento
          sobre una marca sólida y protegida legalmente.
        </p>

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Protege el nombre de tu restaurante hoy
          </strong>

          <p className={styles.paragraph}>
            Recibe asesoría para registrar tu marca en Colombia sin errores y
            con mayor probabilidad de aprobación. Te acompañamos en todo el
            proceso.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Registrar mi marca
          </a>
        </div>
      </motion.div>
    </section>
  );
}
