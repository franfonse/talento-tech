import './App.css';
import EquipoTalentoLab from "./components/EquipoTalentoLab/EquipoTalentoLab";
import TarjetaProyecto from "./components/TarjetaProyecto/TarjetaProyecto";
import GaleriaIntereses from "./components/GaleriaIntereses/GaleriaIntereses";

function App() {

  // const team = [
  //   { name: 'Silvia', role: 'Product Owner', img: 'https://via.placeholder.com/100' },
  //   { name: 'Luis', role: 'Diseñador UX/UI', img: 'https://via.placeholder.com/100' },
  //   { name: 'Matías', role: 'Desarrolelador', img: 'https://via.placeholder.com/100' },
  //   { name: 'Sabrina', role: 'Desarroleladora', img: 'https://via.placeholder.com/100' }
  // ];
  const interests = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <div className="main-container">
        {/* <EquipoTalentoLab team={team} /> */}
        {/* <TarjetaProyecto title="Plataforma de Gestión" desc="Una herramienta para optimizar la gestión de equipos." buttonText="Explorar proyecto"/> */}
        <GaleriaIntereses interests={interests}/>
      </div>
    </>
  )
}

export default App
