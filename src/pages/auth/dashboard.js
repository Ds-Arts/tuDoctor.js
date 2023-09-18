import React from "react";
import { Link } from "react-router-dom";
import "../../css/styles.css";
const Dashboard = () => {
  return (
<div>
  <div>
    <header>
      <div className="container">
        {/* Nombre de usuario y enlace para cerrar sesión */}
        <span>Bienvenido, Usuario</span>
        <Link to={"/dashboard"} className="logout-btn">Inicio</Link>
        <Link to={"/informacion"} className="logout-btn">Mi informacion</Link>
        <Link to={"/"} className="logout-btn">Cerrar Sesión</Link>
      </div>
    </header>
    <div>
      <div className="container">
        {/* Título de la sección de citas disponibles */}
        <h1>Citas Disponibles</h1>
        {/* Cuadros de citas disponibles (puedes replicar estos cuadros según sea necesario) */}
        <div className="cita-card">
          <h2>Cita 1</h2>
          <p>Fecha: 01/01/2024</p>
          <p>Hora: 10:00 AM</p>
          <Link to={"#"} className="logout">Pedir cita</Link>
        </div>
        <div className="cita-card">
          <h2>Cita 2</h2>
          <p>Fecha: 02/01/2024</p>
          <p>Hora: 11:30 AM</p>
          <Link to={"#"} className="logout">Pedir cita</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  );

}


export default Dashboard;