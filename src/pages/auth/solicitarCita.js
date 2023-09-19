import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from '../../utils/APIInvoke';

const Solicitar = () => {
  const [usuario, setUsuario] = useState({
    fecha: '',
    hora: '',
    tipo: '', // Cambiado de 'tipo' a 'Tipo' para que coincida con el estado
    docFk: '',
  });

  // Agrega un estado para almacenar los tipos de solicitud disponibles
  useEffect(()=> {
    
    const obtenerCitas = async () =>{
      try{
        const response =await APIInvoke.invokeGET("/Solicitud");
        if(response){
          setCitas(response)
        }
      }catch(error){
        console.error("error al obtener las solicitudes",error);
      }
    };

obtenerCitas();
},[])
const [citas,setCitas] = useState([]);
  const { fecha, hora, tipo, docFk } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    document.getElementById("fecha").focus();
  }, []);


  const crearcuenta = async () => {
    const data = {
      fecha: usuario.fecha,
      hora: usuario.hora,
      tipo: usuario.tipo,
      docFk: usuario.docFk
    }
    const response = await APIInvoke.invokePOST('/Solicitud', data);
    console.log(response);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    crearcuenta();
    alert('Cita solicitada exitosamente');
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1><b>Solicitar cita</b></h1>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                <input
                    type="date"
                    className="form-control"
                    name="fecha"
                    id="fecha"
                    placeholder="Fecha"
                    value={fecha}
                    onChange={onChange}
                    required
                    />
                </div>
              <div className="input-group mb-3">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  id="hora"
                  placeholder="Hora"
                  value={hora}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <select
                    className="form-control"
                    name="tipo"
                    id="tipo"
                    value={tipo}
                    onChange={onChange}
                    required
                    >
                    <option value="">Seleccionar Tipo de Solicitud</option>
                    {citas.slice(0, 2).map((cita) => (
                        <option key={cita.id} value={cita.tipo}>
                                {cita.tipo}
                        </option>
                        ))}
                </select>
                </div>
              {/* Selector de médico basado en el tipo seleccionado */}
              <div className="input-group mb-3">
                <select
                    className="form-control"
                    name="docFk"
                    id="docFk"
                    value={docFk}
                    onChange={onChange}
                    required
                    >
                    <option value="">Seleccionar medico encargado</option>
                    {citas.slice(0, 2).map((cita) => (
                        <option key={cita.id} value={cita.docFk}>
                                {cita.docFk}
                        </option>
                        ))}
                </select>
                </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Solicitar Cita
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solicitar;
