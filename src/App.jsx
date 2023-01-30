//El return será lo que se muestra en pantalla
//Siempre hay que retornar un elemento en el nivel más alto
//<> </> fragment
//Antes del return es buen lugar para crear una función o una validación
import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header."
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes]=useState(INITIAL);
  const[paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
     localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)

  }

  return (
    <div className="container mx-auto mt-20">
      <Header  
      />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes} 
        paciente={paciente}
        setPaciente={setPaciente}
        
        />
        <ListadoPacientes   
        pacientes={pacientes}
        setPaciente ={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>



    </div>
  )
}

export default App
