import React, { useState } from "react";
import "./Register.css";
import ReturnPage from "../pages/ReturnPage";
import {
  validarNombre,
  validarEmail,
  validarPassword,
} from "../utils/validaciones";
import googleIcon from '../assets/icons/google.png';
import facebookIcon from '../assets/icons/facebook.png';

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const nombreError = validarNombre(username);
    const emailError = validarEmail(email);
    const passwordError = validarPassword(password);

    if (nombreError) newErrors.username = nombreError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (password !== repeatPassword)
      newErrors.repeatPassword = "Las contraseñas no coinciden.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("¡Registro exitoso!");
      // Aquí puedes limpiar el formulario o redirigir
    }
  };

  const handleGoogleRegister = () => {
    alert("Registro con Google (simulado)");
  };

  const handleFacebookRegister = () => {
    alert("Registro con Facebook (simulado)");
  };

  return (
    <div className="register-bg">
      <div className="register-card-new">
        <header className="register-header-new">
          <h1 className="register-title-new">Crear cuenta</h1>
          <p className="register-subtitle-new">
            Únete a nuestra comunidad y accede a todos los servicios.
          </p>
        </header>
        <form className="register-form-new" onSubmit={handleSubmit} noValidate>
          <label className="register-label-new">Nombre completo</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="register-input-new"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <div className="register-error">{errors.username}</div>
          )}
          <label className="register-label-new">Correo electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="register-input-new"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="register-error">{errors.email}</div>}
          <label className="register-label-new">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className="register-input-new"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="register-error">{errors.password}</div>
          )}
          <label className="register-label-new">Repetir contraseña</label>
          <input
            type="password"
            placeholder="Repite la contraseña"
            className="register-input-new"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {errors.repeatPassword && (
            <div className="register-error">{errors.repeatPassword}</div>
          )}
          <button type="submit" className="register-btn-new">
            Registrarse
          </button>
        </form>
        <div className="register-social">
          <button
            className="register-btn-google"
            onClick={handleGoogleRegister}
          >
            <img
              src={googleIcon}
              alt="Google"
              style={{ width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }}
            />
            Registrarse con Google
          </button>
          <button
            className="register-btn-facebook"
            onClick={handleFacebookRegister}
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              style={{ width: 20, height: 20, marginRight: 8, verticalAlign: 'middle' }}
            />
            Registrarse con Facebook
          </button>
        </div>
        <footer className="register-footer-new">
          ¿Ya tienes cuenta?{" "}
          <a href="/login">Inicia sesión</a>
        </footer>
        <ReturnPage />
      </div>
    </div>
  );
};

export default Register;