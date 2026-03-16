"use client";

import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Inicio", id: "hero" },
    { name: "Servicios", id: "services" },
    { name: "Proceso", id: "process" },
    { name: "Experiencia", id: "experience" },
    { name: "Casos", id: "success-cases" },
    { name: "Inversión", id: "investment" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const handleClick = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      {/* ================= TOPBAR ================= */}

      <div className={styles.topbar}>
        <div className={styles.topbarContainer}>
          <div className={styles.topLeft}>
            <span>
              <FontAwesomeIcon icon={faPhone} /> +57 300 000 0000
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} /> Bogotá - Colombia
            </span>
          </div>

          <div className={styles.topRight}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <div className={styles.navbar}>
        <nav className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={75} height={70} priority />
          </div>

          {/* LINKS */}

          <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <button onClick={() => handleScroll(section.id)}>
                  {section.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}

          <button className={styles.ctaButton} onClick={handleClick}>
            PROGRAME UNA CONSULTA
          </button>

          {/* HAMBURGER */}

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
