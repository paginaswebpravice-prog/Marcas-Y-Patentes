"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RiesgosNoRegistrarMarcaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          ¿Qué pasa si no registras tu marca en Colombia? Riesgos que debes
          conocer
        </h1>

        <p>
          En <strong>Bogotá</strong> y en todo Colombia, miles de emprendedores
          inician negocios sin registrar su marca, creyendo que no es necesario
          en las primeras etapas.
        </p>

        <p>
          Sin embargo, esta decisión puede convertirse en uno de los errores más
          costosos, ya que expone tu empresa a{" "}
          <strong>
            problemas legales, pérdida de clientes y riesgos financieros
          </strong>
          .
        </p>
      </motion.section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* INTRO */}
        <div className={styles.box}>
          <p>
            En Colombia, la propiedad sobre una marca no se obtiene por usarla,
            sino por registrarla ante la SIC. Esto cambia completamente las
            reglas del juego para cualquier negocio.
          </p>
        </div>

        {/* 1 */}
        <h2>1. Pérdida total del derecho sobre tu marca</h2>
        <p>
          A diferencia de lo que muchos creen, en Colombia no gana quien usa la
          marca primero, sino quien la registra.
        </p>

        <p>
          Esto significa que otra persona puede registrar legalmente tu marca y
          obligarte a dejar de usarla, incluso si llevas años trabajando con
          ella.
        </p>

        <div className={styles.highlight}>
          ⚠️ Puedes perder tu negocio sin previo aviso si alguien registra tu
          marca primero.
        </div>

        {/* 2 */}
        <h2>2. Demandas legales y sanciones económicas</h2>
        <p>
          Si utilizas una marca registrada por un tercero, puedes enfrentar
          acciones legales por infracción marcaria.
        </p>

        <ul>
          <li>Demandas civiles</li>
          <li>Multas económicas</li>
          <li>Retiro inmediato del mercado</li>
          <li>Bloqueo de redes sociales o páginas web</li>
        </ul>

        <p>
          En muchos casos, estos conflictos pueden llevar a la quiebra de
          pequeñas empresas.
        </p>

        {/* 3 */}
        <h2>3. Pérdida total de tu inversión en marketing</h2>
        <p>
          Todo lo que inviertes en posicionamiento puede desaparecer si debes
          cambiar de marca:
        </p>

        <ul>
          <li>Logo y diseño visual</li>
          <li>Página web y dominio</li>
          <li>Publicidad en redes sociales</li>
          <li>Reconocimiento de marca</li>
        </ul>

        <p>
          Esto no solo implica dinero perdido, sino también tiempo y reputación.
        </p>

        {/* 4 */}
        <h2>4. Falta de exclusividad en el mercado</h2>
        <p>
          Si no registras tu marca, cualquier persona puede usar un nombre igual
          o similar en Colombia.
        </p>

        <p>
          Esto genera confusión en los clientes y debilita tu posicionamiento en
          el mercado.
        </p>

        {/* 5 */}
        <h2>5. Dificultades para escalar tu negocio</h2>
        <p>
          Una empresa sin marca registrada tiene menos valor comercial y más
          limitaciones para crecer.
        </p>

        <ul>
          <li>Dificultad para conseguir inversionistas</li>
          <li>Problemas para franquiciar o licenciar</li>
          <li>Limitaciones para expandirse internacionalmente</li>
        </ul>

        <div className={styles.box}>
          Una marca registrada es un activo intangible que aumenta el valor de
          tu empresa.
        </div>

        {/* 6 */}
        <h2>6. Riesgos en internet y redes sociales</h2>
        <p>
          En el entorno digital, no registrar tu marca también tiene
          consecuencias graves.
        </p>

        <ul>
          <li>Pérdida del dominio web</li>
          <li>Conflictos en redes sociales</li>
          <li>Suplantación de marca</li>
        </ul>

        <p>
          Incluso pueden quitarte tu presencia digital si otro titular tiene el
          registro legal.
        </p>

        {/* 7 */}
        <h2>7. No puedes defender legalmente tu marca</h2>
        <p>
          Sin registro, no tienes herramientas jurídicas fuertes para actuar
          contra terceros que usen tu marca.
        </p>

        <p>
          Esto te deja completamente expuesto frente a competidores y copias.
        </p>

        {/* 8 */}
        <h2>8. Riesgo de tener que empezar desde cero</h2>
        <p>
          Muchos negocios en Bogotá han tenido que cambiar su nombre después de
          años de trabajo por no registrar su marca.
        </p>

        <div className={styles.highlight}>
          🔥 Cambiar de marca puede significar perder clientes, reputación y
          posicionamiento.
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Evita estos riesgos y protege tu marca hoy</h3>
          <p>
            Te ayudamos a registrar tu marca en Colombia de forma rápida y
            segura, evitando errores legales desde el inicio.
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
            <h3>¿Puedo usar una marca sin registrarla?</h3>
            <p>
              Sí, pero no tendrás protección legal y otra persona puede
              registrarla primero.
            </p>
          </div>

          <div>
            <h3>¿Qué pasa si alguien registra mi marca?</h3>
            <p>
              Podrías perder el derecho de uso y enfrentar procesos legales.
            </p>
          </div>

          <div>
            <h3>¿Registrar una marca evita problemas?</h3>
            <p>
              Sí, te otorga exclusividad y herramientas legales para proteger tu
              negocio.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
