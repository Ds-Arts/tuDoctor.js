import { Link } from "react-router-dom";
import "../../css/information.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Information = () => {
  // Obtén la información del usuario logueado desde las cookies
  const usuarioActual = {
    id: cookies.get("id"),
    numIdentidadPa: cookies.get("numIdentidadPa"),
    nombrePa: cookies.get("nombrePa"),
    apellidoPa: cookies.get("apellidoPa"),
    tipoDocumentoPa: cookies.get("tipoDocumentoPa"),
    numeroPa: cookies.get("numeroPa"),
    epsPa: cookies.get("epsPa"),
    GeneroPa: cookies.get("GeneroPa"),
    email: cookies.get("email"),
  };

  return (
    <div>
      <div className="container">
        <header>
          <span>Bienvenido, {usuarioActual.nombrePa} {usuarioActual.apellidoPa}</span>
          <Link to={"/dashboard"} className="logout-btn">
            Inicio
          </Link>
          <Link to={"/informacion"} className="logout-btn">
            Mi información
          </Link>
          <Link to={"/"} className="logout-btn">
            Cerrar Sesión
          </Link>
        </header>
        <section className="box">
          <img src="/perfil.jpg" width={180} alt="Imagen de perfil" />
          <h1>Información personal</h1>
          <ul>
            <li>Nombre: {usuarioActual.nombrePa}</li>
            <li>Apellido: {usuarioActual.apellidoPa}</li>
            <li>Eps: {usuarioActual.epsPa}</li>
            <li>Teléfono: {usuarioActual.numeroPa}</li>
            <li>Número de identificación: {usuarioActual.numIdentidadPa}</li>
            <li>Email: {usuarioActual.email}</li>
            {/* Agrega aquí los otros campos de usuario si es necesario */}
          </ul>
          <Link to={"/recover"} className="logout">
            Editar perfil
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Information;