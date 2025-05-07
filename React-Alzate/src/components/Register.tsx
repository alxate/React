import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Importa el archivo CSS

const Register: React.FC = () => {
  return (
    <div className="register-page">
      {/*Boton para volver al Home*/}
      <div className="top-right">
        <Link to="/" className="home-button">
          Volver al Inicio
        </Link>
      </div>

      <header className="register-header">
        <h1 className="register-title">Crear Cuenta</h1>
        <p className="register-subtitle">
          Regístrate para comenzar a gestionar tus servicios
        </p>
      </header>

      <main className="register-main">
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Crea una contraseña"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirma tu contraseña"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="form-button">
              Registrarse
            </button>
            <Link to="/login" className="form-link">
              ¿Ya tienes cuenta? Inicia Sesión
            </Link>
          </div>
        </form>
      </main>

      <footer className="register-footer">
        <p className="footer-text">
          © 2025 Pintu-Mec. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Register;
