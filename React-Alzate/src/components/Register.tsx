import React from 'react';

const Register: React.FC = () => {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
