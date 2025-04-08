import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import Home from '../pages/Home'; // ejemplo de una página protegida

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
