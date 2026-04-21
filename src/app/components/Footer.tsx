"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* ================= LEFT ================= */}
          <div className={styles.contactBox}>
            <h2>Información de Contacto</h2>

            <p>
              <FontAwesomeIcon icon={faPhone} /> Teléfono: (601) 3099331
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              info.pravice@abogadosespecialistas.com.co
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} /> Lunes a Viernes, 8:00am -
              6:00pm
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className={styles.formBox}>
            <h2>Envíanos un Mensaje</h2>

            <p>
              Cuéntanos tu caso y nuestro equipo en Bogotá te responderá en
              menos de 24 horas hábiles.
            </p>

            <ul>
              <li>→ Describe tu caso legal o necesidad</li>
              <li>→ Un especialista te contactará</li>
              <li>→ Recibe asesoría inicial</li>
            </ul>

            <button className={styles.button}>Enviar Consulta</button>
          </div>
        </div>

        {/* ================= SUB FOOTER ================= */}
        <div className={styles.subFooter}>
          <div className={styles.subContainer}>
            <p>
              © {new Date().getFullYear()} PRAVICE Abogados. Todos los derechos
              reservados.
            </p>

            <div className={styles.legalLinks}>
              <a href="/politica-privacidad">Política de Privacidad</a>
              <a href="/terminos-condiciones">Términos y Condiciones</a>
              <a href="/cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
