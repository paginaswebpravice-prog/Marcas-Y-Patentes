"use client";

import Image from "next/image";
import styles from "../styles/WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Por Qué Elegirnos? Tu Aliado Estratégico en Propiedad Intelectual en
          Bogotá
        </h2>

        <div className={styles.grid}>
          {/* CARD AZUL */}
          <div className={styles.card}>
            <div>
              <h3>Visión Empresarial Local</h3>
              <p>
                Ofrecemos soluciones jurídicas integrales, diseñadas
                específicamente para el dinámico ecosistema emprendedor de
                Bogotá y toda Colombia.
              </p>
            </div>

            <div>
              <h3>Alcance Nacional e Internacional</h3>
              <p>
                Gestionamos tus activos de propiedad industrial ante la SIC y
                expandimos tu protección a través del sistema de Madrid y el
                PCT.
              </p>
            </div>
          </div>

          {/* TEXTO CENTRAL */}
          <div className={styles.content}>
            <p className={styles.description}>
              Resultados Comprobados en el Mercado Colombiano
            </p>

            <p className={styles.text}>
              Emprendedores bogotanos y PYMEs nacionales confían en nosotros
              para blindar sus creaciones y activos más valiosos.
            </p>

            <div className={styles.stats}>
              <div>
                <h3>Años de..</h3>
                <p>En el mercado nacional</p>
              </div>

              <div>
                <h3>Clientes..</h3>
                <p>Empresas y PYMEs</p>
              </div>

              <div>
                <h3>Países d...</h3>
                <p>Vía OMPI y PCT</p>
              </div>
            </div>
          </div>

          {/* IMAGEN */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/negocios.jpg"
              alt="Acuerdo empresarial internacional"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
