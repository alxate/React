import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.page}>
      {/*Boton para volver al Home*/}
      <div className="top-right">
        <Link to="/" className="home-button">
          Volver al Inicio
        </Link>
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <p className={styles.subtitle}>
          Accede a tu cuenta para gestionar tus servicios
        </p>
      </header>

      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Ingresa tu correo"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.button}>
              Iniciar Sesión
            </button>
            <Link to="/register" className={styles.link}>
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 Pintu-Mec. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Login;
