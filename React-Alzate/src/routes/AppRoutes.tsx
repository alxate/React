import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ServicioMecanico from "../pages/ServicioMecanico";
import ConsultarVehiculo from "../pages/ConsultarVehiculo";
import PinturaLatoneria from "../pages/PinturaLatoneria";
import DiagnosticoScaner from "../pages/DiagnosticoScaner"; // ejemplo de una página protegida

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/servicio-mecanico" element={<ServicioMecanico />} />
      <Route path="/consultar-vehiculo" element={<ConsultarVehiculo />} />
      <Route path="/pintura-latoneria" element={<PinturaLatoneria />} />
      <Route path="/diagnostico-scaner" element={<DiagnosticoScaner />} />
    </Routes>
  );
};

export default AppRoutes;
