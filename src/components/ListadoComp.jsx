import { PacienteComp } from "./PacienteComp";

export const ListadoComp = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 mt-5 mb-11" >

        {pacientes && pacientes.length ? (
          <>          
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-center mt-2  mb-4">
                Administra tus {" "}
                <span className="color-1 font-bold text-xl ">Pacientes y Citas</span>
              </p>
 

            <div className="md:h-screen md:overflow-y-scroll mx-2">
              { pacientes.map( paciente => (
                <PacienteComp 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente} 
                />
              ))
              }        
            </div>
          </>
          ) : (
            <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-center mt-2 mb-5">
              Comienza agregando pacientes {" "}
              <span className="text-indigo-600 font-bold text-xl ">y aparecerán en este lugar</span>
            </p>
            </>
          )
        }
        
    </div>
  )
}
