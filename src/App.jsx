import { useState, useEffect } from "react";
import { FormComp } from "./components/FormComp";
import { HeaderComp } from "./components/HeaderComp";
import { ListadoComp } from "./components/ListadoComp";


export const App = () => {

  const [ pacientes, setPacientes ] = useState ([]);
  const [ paciente, setPaciente ] = useState({});

  //Obtenemos lo que se encuentre en Local Storage
  useEffect(() => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
      pacientesLS?.length > 0 && setPacientes(pacientesLS);
    }, []);

  //Guardaremos en LocalStorage
  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  //Eliminar Paciente
  const eliminarPaciente = id => {
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
      setPacientes(pacientesActualizados)
  };

  return (
    <div className="container mx-auto">
      <HeaderComp />
      <div className="mt-5 md:flex ">
        <FormComp 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />      
        <ListadoComp 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}