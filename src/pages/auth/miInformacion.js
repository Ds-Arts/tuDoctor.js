import React from "react";
import { Link } from "react-router-dom";
import "../../css/information.css";
import APIInvoke from '../../utils/APIInvoke';

const Information = () => {
    return ( 
<div>
  <div className="container">
    <header>
      <span>Bienvenido, Usuario</span>
      <Link to={"/dashboard"} className="logout-btn">Inicio</Link>
      <Link href="informacion" className="logout-btn">Mi informacion</Link>
      <Link href="/" className="logout-btn">Cerrar Sesión</Link>
    </header>
    <section className="box">
        <img src="/perfil.jpg" width={180} alt="Imagen de perfil" />
      <h1>Información personal</h1>
      <ul>
        <li>Nombre:</li>
        <li>Eps:</li>
        <li>Teléfono:</li>
        <li>Número de identificación:</li>
        <li>Email:</li>
        <li>Contraseña:</li>
        <Link href="#" className="logout">Editar perfil</Link>
      </ul>
    </section>
  </div>
</div>

    );
}
 
export default Information;