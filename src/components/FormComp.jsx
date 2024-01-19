import { useState, useEffect } from "react";
import { ErrorComp } from  './ErrorComp';

export const FormComp = ( { pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }
  }, [paciente])

  // generar un ID unico
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
        console.log('Hay campos vacios')
        setError(true)
        return
    } 
    setError(false)

    //objeto de pacientes
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo REgistro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    
    // Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-2 mt-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-2 text-center  mb-4">
          Añade Pacientes y {" "}
          <span className="color-1 font-bold text-xl">Administralos</span>
        </p>


        <form 
          onSubmit= {handleSubmit}
          className="bg-white shadow-sm rounded-md py-5 px-5  border-1"
        >

          { error &&  <ErrorComp><p>¡ Todos los campos son obligatorios !</p></ErrorComp> }

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}            
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
            id="email"
            type="email" 
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}            
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
            />
          </div>          

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}            
            />
          </div>      

          <div className="mb-5">
          <input 
            type="submit" 
            className="bg-color-1 text-align-center p-3 text-white uppercase font-bold cursor-pointer transition-all rounded-md"  
            value= { paciente.id ? 'Actualizar' : ' Agregar Paciente' }
          />
          </div>

        </form>
    </div>

  )
}
