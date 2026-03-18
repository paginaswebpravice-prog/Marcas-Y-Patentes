"use client";

import Image from "next/image";
import styles from "../styles/CallToAction.module.css";

export default function CallToAction() {
  return (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO HIDDEN */}
      <div style={{ display: "none" }}>
        <h2 itemProp="name">
          Abogados de marcas en Bogotá Colombia - Asesoría legal
        </h2>
        <p itemProp="description">
          Asesoría legal en Bogotá para registro de marcas y patentes en
          Colombia ante la Superintendencia de Industria y Comercio (SIC).
        </p>
        <span itemProp="areaServed">Bogotá, Colombia</span>
      </div>

      <div className={styles.container}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Protege tu Marca en Bogotá y Colombia Hoy
          </h2>

          <p className={styles.description}>
            Evita riesgos legales y asegura la exclusividad de tu marca en
            Colombia. Nuestro equipo en Bogotá te guía en todo el proceso ante
            la Superintendencia de Industria y Comercio (SIC), garantizando un
            registro seguro y estratégico.
          </p>

          <div className={styles.infoBox}>
            <h3>Asesoría Legal en Bogotá</h3>
            <p>
              Agenda una consulta con abogados especializados en propiedad
              intelectual en Bogotá y comienza el registro de tu marca o patente
              en Colombia con respaldo profesional.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3>Registro de Marca ante la SIC</h3>
            <p>
              Gestionamos todo el proceso en Colombia: búsqueda de antecedentes,
              solicitud ante la SIC y acompañamiento hasta la concesión del
              registro.
            </p>
          </div>

          <div
            className={styles.buttons}
            itemScope
            itemType="https://schema.org/ContactAction"
          >
            <button className={styles.primaryBtn} itemProp="name">
              Solicitar Asesoría Gratuita en Bogotá
            </button>

            <button className={styles.secondaryBtn}>
              Ver Servicios de Propiedad Intelectual
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/meeting.jpg"
            alt="Asesoría legal en Bogotá Colombia registro de marcas"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
