import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
