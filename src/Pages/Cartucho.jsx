import Florecitas from "Components/Florecitas";
import cartuchos from "Media/Cartuchos.jpg";
import {Link} from "react-router-dom"; 

function Cartucho (){
    return(
      <div>Esta es la página de información sobre cartuchos
      <ul className="contenedorDivsFlex">
        <Florecitas  tipoFlor="cartucho" imagen={cartuchos}/>
      </ul>
         <Link to="/Otros"> Otros </Link>
      </div>
      
    )
}
export default Cartucho;