"use client";

import Image from "next/image";
import styles from "../styles/CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            ¿Listo para Proteger tu Legado en Colombia?
          </h2>

          <p className={styles.description}>
            El momento de actuar es ahora. Asegura la competitividad de tu marca
            en el mercado de Bogotá y protege tu innovación ante la
            Superintendencia de Industria y Comercio (SIC) antes de que sea
            tarde.
          </p>

          <div className={styles.infoBox}>
            <h3>Asesoría Estratégica en Bogotá</h3>
            <p>
              Agenda una consulta con nuestro equipo en Bogotá y comienza el
              proceso de registro ante la SIC para blindar tu marca o patente en
              Colombia.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3>Expertos en Propiedad Industrial</h3>
            <p>
              Te acompañamos en todo el proceso: desde la búsqueda de
              antecedentes en la SIC hasta la expansión internacional mediante
              el PCT y el Sistema de Madrid.
            </p>
          </div>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Solicitar Asesoría Gratuita
            </button>

            <button className={styles.secondaryBtn}>
              Ver Todos los Servicios
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/meeting.jpg"
            alt="Asesoría empresarial en Bogotá"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
