import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenidos a HBM_Porcicultura </h1>
      <p className={styles.subtitle}>Gestión moderna para un futuro agropecuario más eficiente</p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Registro</h2>
          <p className={styles.cardText}>Crea una cuenta para comenzar a gestionar tus datos</p>
          <Link to="/register">
            <button>Ir a Registro</button>
          </Link>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Login</h2>
          <p className={styles.cardText}>Accede a tu cuenta si ya estás registrado</p>
          <Link to="/login">
            <button>Ir a Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;