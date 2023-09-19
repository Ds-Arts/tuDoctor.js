import React, { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Recover = () => {
  // Estado para los datos del usuario
  const [usuario, setUsuario] = useState({
    id: cookies.get("id"),
    numIdentidadPa: cookies.get("numIdentificacionPa"),
    nombrePa: cookies.get("nombrePa"),
    apellidoPa: cookies.get("apellidoPa"),
    epsPa: cookies.get("epsPa"),
    numeroPa: cookies.get("numeroPa"),
    email: cookies.get("email"),
  });

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizar el estado del usuario con los nuevos valores
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualizar las cookies con los nuevos datos del usuario
    cookies.set("id", usuario.id, { path: "/" });
    cookies.set("numIdentificacionPa", usuario.numIdentidadPa, { path: "/" });
    cookies.set("nombrePa", usuario.nombrePa, { path: "/" });
    cookies.set("apellidoPa", usuario.apellidoPa, { path: "/" });
    cookies.set("epsPa", usuario.epsPa, { path: "/" });
    cookies.set("numeroPa", usuario.numeroPa, { path: "/" });
    cookies.set("email", usuario.email, { path: "/" });
    // Puedes agregar más cookies si es necesario

    alert("Datos actualizados correctamente");
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>
              <b>Actualizar Datos</b>
            </h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nombrePa"
                  id="nombre"
                  placeholder="Nombre"
                  value={usuario.nombrePa}
                  onChange={handleChange}
                />

              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="apellidoPa"
                  id="apellido"
                  placeholder="Apellido"
                  value={usuario.apellidoPa}
                  onChange={handleChange}
                />

              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="epsPa"
                  id="eps"
                  placeholder="Eps"
                  value={usuario.epsPa}
                  onChange={handleChange}
                />

              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="numeroPa"
                  id="numero"
                  placeholder="Numero"
                  value={usuario.numeroPa}
                  onChange={handleChange}
                />

              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="numIdentificacionPa"
                  id="numIdentificacion"
                  placeholder="NunIdentificacion"
                  value={usuario.numIdentidadPa}
                  onChange={handleChange}
                />

              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={usuario.email}
                  onChange={handleChange}
                />

              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;
