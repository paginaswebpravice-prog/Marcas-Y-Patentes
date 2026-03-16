"use client";

import Image from "next/image";
import styles from "../styles/SuccessCases.module.css";

export default function SuccessCases() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Casos de Éxito: Protegiendo la Innovación en Colombia
        </h2>

        <p className={styles.description}>
          Cada proyecto de nuestros clientes en Bogotá y el resto del país es
          una historia de esfuerzo y creatividad. Nuestra misión es garantizar
          que esa historia cuente con el respaldo legal ante la Superintendencia
          de Industria y Comercio (SIC) y los sistemas internacionales como el
          PCT o el Sistema de Madrid.
        </p>

        <div className={styles.grid}>
          {/* ITEM 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src="/icons/marcas.jpg"
                alt="Registro de marcas"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3>Marcas que Conquistan el Mercado Colombiano</h3>

              <p>
                Ayudamos a emprendedores bogotanos y PYMEs colombianas a
                asegurar su identidad ante la SIC, obteniendo exclusividad y
                reconocimiento sólido para competir en el mercado nacional y
                latinoamericano.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src="/icons/patentes.jpg"
                alt="Registro de patentes"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3>Patentes que Impulsan el Futuro del País</h3>

              <p>
                Protegemos invenciones disruptivas desde nuestra sede en Bogotá,
                gestionando registros ante la SIC y brindando acompañamiento
                estratégico en solicitudes internacionales vía OMPI para
                asegurar el beneficio del innovador.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src="/icons/disenos.jpg"
                alt="Diseños industriales"
                width={60}
                height={60}
              />
            </div>

            <div>
              <h3>Diseños Industriales con Sello Local</h3>

              <p>
                Salvaguardamos la creatividad y estética de productos
                colombianos innovadores frente a copias no autorizadas,
                garantizando que su valor único prevalezca en el entorno
                comercial del país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
