import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/styles.css";
import APIInvoke from '../../utils/APIInvoke';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Dashboard = () => {
  const [usuarios,setUsuarios] = useState([]);
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

 //obtener todos los medicos
  useEffect(()=> {
      
      const obtenerPacientes = async () =>{
        try{
          const response =await APIInvoke.invokeGET("/Medico");
          if(response){
            setUsuarios(response)
          }
        }catch(error){
          console.error("error al obtener los pacientes",error);
        }
      };

  obtenerPacientes();
},[])

//obtener las citas o solicitudes disponibles
const [citas,setCitas] = useState([]);
  
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

  return (
<div>
  <div>
    <header>
      <div className="container">
        {/* Nombre de usuario y enlace para cerrar sesión */}
        <span>Bienvenido, {usuarioActual.nombrePa} {usuarioActual.apellidoPa}</span>
        <Link to={"/dashboard"} className="logout-btn">Inicio</Link>
        <Link to={"/informacion"} className="logout-btn">Mi informacion</Link>
        <Link to={"/"} className="logout-btn">Cerrar Sesión</Link>
      </div>
    </header>
    <div>
      <div className="container">
        {/* Título de la sección de citas disponibles */}
        <h1>Medicos de la institucion</h1>
        {/* Cuadros de citas disponibles (puedes replicar estos cuadros según sea necesario) */}
        <div className="cita-card">
          <h2>Medicos</h2>
        {usuarios.map((usuario)=>(          
          <p key={usuario.id}>
          <strong>Nombre:</strong> {usuario.nombreDoc}  {usuario.apellidoDoc} <strong>Epecializacion:</strong>   {usuario.especializacion}</p>))}
        </div>
               {/* Título de la sección de citas disponibles */}
               <h1>Citas Agendadas</h1>
        {/* Cuadros de citas disponibles (puedes replicar estos cuadros según sea necesario) */}
        <div className="cita-card">
        {citas.map((cita)=>(          
          <p key={cita.id}>
          <strong>Fecha:</strong> {cita.fecha} <strong>Hora:</strong> {cita.hora} <strong>Doctor encargado:</strong>   {cita.docFk} <strong>Tipo:</strong> {cita.tipo}</p>))}
          <Link to={"/solicitar"} className="logout">Pedir cita</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  );

}


export default Dashboard;