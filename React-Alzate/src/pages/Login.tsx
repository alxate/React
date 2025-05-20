import React from "react";
import "./Login.css";
import ReturnPage from "../pages/ReturnPage";


const Login: React.FC = () => {
  return (
    <div className="login-bg">
      <div className="login-card-new">
        <header className="login-header-new">
          <h1 className="login-title-new">Iniciar sesión</h1>
          <p className="login-subtitle-new">
            Ingresa a tu cuenta para acceder a todos los servicios.
          </p>
        </header>
        <form className="login-form-new">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="login-input-new"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input-new"
            required
          />
          <button type="submit" className="login-btn-new">
            Iniciar sesión
          </button>
        </form>
        <footer className="login-footer-new">
          ¿No tienes cuenta?
          <a href="/register">Regístrate</a>
        </footer>
        <ReturnPage />
      </div>
    </div>
  );
};

export default Login;