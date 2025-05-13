import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <img
          src="src/assets/images/Titulo-Home.png"
          alt="Título de Pintumec, especialistas en mecánica y pintura automotriz"
          className={styles.headerImage}
        />
        <p className={styles.subtitle}>Tu taller de confianza en mecánica y pintura automotriz</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2>Nuestros Servicios</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mantenimiento Preventivo</h3>
              <p className={styles.cardText}>
                Mantén tu vehículo en óptimas condiciones con nuestros servicios preventivos.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Reparaciones Mecánicas</h3>
              <p className={styles.cardText}>
                Soluciones rápidas y efectivas para cualquier problema mecánico.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Pintura Automotriz</h3>
              <p className={styles.cardText}>
                Dale a tu vehículo un acabado impecable con nuestros servicios de pintura.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Diagnóstico Computarizado</h3>
              <p className={styles.cardText}>
                Detecta problemas con precisión gracias a nuestra tecnología avanzada.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.cta}>
          <h2>¿Listo para comenzar?</h2>
          <p>Regístrate o inicia sesión para gestionar tus servicios y agendar tu cita.</p>
          <div className={styles.ctaButtons}>
            <Link to="/register">
              <button className={`${styles.button} ${styles.primary}`}>Crear Cuenta</button>
            </Link>
            <Link to="/login">
              <button className={`${styles.button} ${styles.secondary}`}>Iniciar Sesión</button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Pintumec. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;