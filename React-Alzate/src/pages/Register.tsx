import React from "react";
import "./Register.css";
import ReturnPage from "../pages/ReturnPage";

const Register: React.FC = () => {
  return (
    <div className="register-bg">
      <div className="register-card-new">
        <header className="register-header-new">
          <h1 className="register-title-new">Crear cuenta</h1>
          <p className="register-subtitle-new">
            Únete a nuestra comunidad y accede a todos los servicios.
          </p>
        </header>
        <form className="register-form-new">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="register-input-new"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="register-input-new"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="register-input-new"
            required
          />
          <button type="submit" className="register-btn-new">
            Registrarse
          </button>
        </form>
        <footer className="register-footer-new">
          ¿Ya tienes cuenta?
          <a href="/login">Inicia sesión</a>
        </footer>
        <ReturnPage/>
      </div>
    </div>
  );
};

export default Register;