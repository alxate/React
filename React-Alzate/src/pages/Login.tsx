import React, { useState } from "react";
import "./Login.css";
import ReturnPage from "../pages/ReturnPage";
import { validarEmail, validarPassword } from "../utils/validaciones";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const emailError = validarEmail(email);
    const passwordError = validarPassword(password);

    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("¡Inicio de sesión exitoso!");
      // Aquí puedes limpiar el formulario o redirigir
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card-new">
        <header className="login-header-new">
          <h1 className="login-title-new">Iniciar sesión</h1>
          <p className="login-subtitle-new">
            Ingresa a tu cuenta para acceder a todos los servicios.
          </p>
        </header>
        <form className="login-form-new" onSubmit={handleSubmit} noValidate>
          <label className="login-label-new">Correo electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="login-input-new"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <div className="login-error">{errors.email}</div>}
          <label className="login-label-new">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input-new"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && <div className="login-error">{errors.password}</div>}
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