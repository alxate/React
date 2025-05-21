import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConsultarVehiculo.css";
import ReturnPage from "../pages/ReturnPage";

const ConsultarVehiculo: React.FC = () => {
  // Simulación de usuario autenticado (cámbialo a true para probar)
  const [isLogged, setIsLogged] = useState(false);

  const [placa, setPlaca] = useState("");
  const [resultado, setResultado] = useState<any>(null);

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    setResultado({
      placa,
      estado: "En taller",
      historial: [
        { fecha: "2025-05-20", servicio: "Cambio de aceite" },
        { fecha: "2025-04-10", servicio: "Alineación y balanceo" },
        { fecha: "2025-03-01", servicio: "Revisión general" },
      ],
    });
  };

  const handleDescargar = () => {
    alert("Descarga de historial (simulada)");
  };

  const handleContacto = () => {
    alert("Contacto rápido con el taller (simulado)");
  };

  return (
    <div className="consultar-bg">
      <div className="consultar-dashboard">
        <div className="consultar-card">
          <h1 className="consultar-title">Consultar Vehículo</h1>
          {!isLogged ? (
            <div>
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#d72a1c",
                  fontWeight: "bold",
                }}
              >
                Debes estar registrado e iniciar sesión para consultar tu
                vehículo.
              </p>
              <Link to="/login">
                <button className="consultar-btn">Iniciar Sesión</button>
              </Link>
              <Link to="/register">
                <button className="consultar-btn">Registrarse</button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleBuscar} style={{ marginBottom: "2rem" }}>
              <input
                type="text"
                placeholder="Ingresa la placa"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                className="consultar-input"
                required
              />
              <button type="submit" className="consultar-btn">
                Buscar
              </button>
            </form>
          )}
        </div>
        {isLogged && resultado && (
          <div className="consultar-result">
            <h2>Placa: {resultado.placa}</h2>
            <p>
              Estado actual: <b>{resultado.estado}</b>
            </p>
            <h3 style={{ marginTop: "1.5rem" }}>Historial de servicios:</h3>
            <ul className="consultar-historial">
              {resultado.historial.map((item: any, idx: number) => (
                <li key={idx}>
                  {item.fecha}: {item.servicio}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <button onClick={handleDescargar} className="consultar-btn">
                Descargar historial
              </button>
              <button onClick={handleContacto} className="consultar-btn">
                Contactar taller
              </button>
            </div>
          </div>
        )}
      </div>
      <ReturnPage />
    </div>
  );
};

export default ConsultarVehiculo;
