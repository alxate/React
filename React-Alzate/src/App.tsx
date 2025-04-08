import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

const App: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Register />
      <Login />
      <Logout />
    </div>
  );
};

export default App;
