"use client";

import styles from "../styles/Experience.module.css";

const data = [
  {
    number: 1,
    title: "Más de 130 Años de Experiencia",
    text: "Referentes desde 1891, con presencia y reconocimiento global en propiedad industrial y apoyo al emprendedor bogotano.",
  },
  {
    number: 2,
    title: "Equipo de Expertos ante la SIC",
    text: "Abogados y especialistas certificados en propiedad industrial ante la Superintendencia de Industria y Comercio (SIC) y organismos internacionales.",
  },
  {
    number: 3,
    title: "Garantía de Registro en Colombia",
    text: "Si tu marca no es concedida ante la SIC, la solicitamos de nuevo sin costo adicional. Garantía por escrito para tu PYME.",
  },
  {
    number: 4,
    title: "Enfoque para la Empresa Colombiana",
    text: "Adaptamos soluciones a las necesidades específicas de tu sector, potenciando el crecimiento de empresas y emprendedores colombianos.",
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Experiencia que Marca la Diferencia: Tu Seguridad Jurídica en Colombia
        </h2>

        <p className={styles.description}>
          Más de un siglo de trayectoria y un equipo de élite respaldan cada
          expediente que gestionamos desde Bogotá para todo el mercado nacional
          y latinoamericano. Tu confianza es nuestra mayor responsabilidad.
        </p>

        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.number} className={styles.card}>
              <div className={styles.line}></div>

              <div className={styles.circle}>{item.number}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
