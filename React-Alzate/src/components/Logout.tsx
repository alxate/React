import React from 'react';

const Logout: React.FC = () => {
  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    alert('Sesión cerrada');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default Logout;
