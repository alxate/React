import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img
          src="/assets/images/bandera-removebg-preview.png" // Ruta de la bandera de carreras
          alt="Bandera de carreras"
          className={styles.flag}
        />
        {/* Cambiamos el texto por el logo */}
        <img
          src="/assets/images/LOGO-SIN-FONDO.png" // Ruta correcta al archivo del logo
          alt="Pintu-Mec Logo"
          className={styles.logo}
        />
        {/* Botón de menú */}
        <button
          className={styles.menuButton}
          onClick={() => alert("Menú desplegable")}
        >
          ☰
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Pintura Automotriz</h3>
              <p className={styles.cardText}>
                Ofrecemos pintura de alta calidad para tu vehículo.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mecánica General</h3>
              <p className={styles.cardText}>
                Soluciones completas para el mantenimiento de tu auto.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Diagnóstico</h3>
              <p className={styles.cardText}>
                Equipos avanzados para detectar problemas en tu vehículo.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.sectionTitle}>¿Listo para comenzar?</h2>
          <div className={styles.ctaButtons}>
            <Link to="/register" className={styles.button}>
              Crear Cuenta
            </Link>
            <Link to="/login" className={styles.button}>
              Iniciar Sesión
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 Pintu-Mec. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
