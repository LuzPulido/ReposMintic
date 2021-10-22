import Florecitas from "Components/Florecitas";
import girasol from "Media/Girasol.png";


function Girasol (){
    return(
      <div>
        
        <h3>Esta es la página de información sobre girasol</h3>

        <ul className=" contenedorDivsFlex">
            <Florecitas  tipoFlor="girasol"  imagen={girasol}/>
        </ul>
       
      </div>
      
    )
}
export default Girasol;