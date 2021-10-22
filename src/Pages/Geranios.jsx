import Florecitas from "Components/Florecitas";
import geranios from "Media/Geranio.png";
import { Link } from "react-router-dom";


function Geranios() {
  return (

      <div>
        <h2>Esta es la página de información sobre Geranios</h2>
        <ul className="contenedorDivsFlex">
          <Florecitas tipoFlor="geranios" imagen={geranios} />
          <Link to="/Otros"> Otros </Link>
        </ul>
        
      </div>
  
  )
}
export default Geranios;