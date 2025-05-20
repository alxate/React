import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReturnPage.css";

const ReturnPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className="return-home-btn" onClick={() => navigate("/")}>
      ← Volver al inicio
    </button>
  );
};

export default ReturnPage;