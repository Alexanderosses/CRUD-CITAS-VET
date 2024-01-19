
export const PacienteComp = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;
    
    const handlerEliminar = () => {
      const respuesta = confirm('Deseas eliminar este paciente?');
      if(respuesta){
        eliminarPaciente(id)
      }
    }
  
    return (
    <div className="bg-white shadow-sm rounded-md py-5 px-5 mb-4 border-1">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
        <span className="font-normal normal-case">{ nombre }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
        <span className="font-normal normal-case">{ propietario }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
        <span className="font-normal normal-case">{ email }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {" "}
        <span className="font-normal normal-case">{ fecha }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
        <span className="font-normal normal-case">{ sintomas }</span>
        </p>

        <div className="flex mt-5">
          <button onClick={() => setPaciente(paciente)} type="button" className="me-5 py-2 px-10 bg-color-1 font-bold uppercase rounded-md text-white">Editar</button>
          <button onClick={handlerEliminar} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase rounded-md text-white">Eliminar</button>
        </div>
  </div>
  )
}
