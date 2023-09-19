import React, { Fragment } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import CrearCuenta from "../pages/auth/crearcuenta";
import Recover from "../pages/auth/recover-password";
import Dashboard from "../pages/auth/dashboard";
import Information from "../pages/auth/miInformacion";
import Solicitar from "../pages/auth/solicitarCita";

function App() {
  return (
  <Fragment>
  <Router>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/crearcuenta" exact element={<CrearCuenta/>}/>
      <Route path="/recover" exact element={<Recover/>}/>
      <Route path="/dashboard" exact element={<Dashboard/>}/>
      <Route path="/informacion" exact element={<Information/>}/>
      <Route path="/solicitar" exact element={<Solicitar/>}/>
    </Routes>
  </Router>
  </Fragment>
  );
}

export default App;
