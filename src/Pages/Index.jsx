import Florecitas from "Components/Florecitas";
import geranios from "Media/Flores_Geranios.jpg";
import cartuchos from "Media/Cartuchos.jpg";
import girasol from "Media/Girasol.png";
import { Link } from "react-router-dom";


function Index() {
    return (

        <div>
            <h1>Esto es un titulo Section 1</h1>

            <a href="./hola.html"> link a Hola</a>

            <h1>Tipos de Flores</h1>
            <ul className=" contenedorDivsFlex">

                <Link to='/Girasol'>
                    <Florecitas tipoFlor="girasol" imagen={girasol} />
                </Link>
                <Link to='/Geranios'>
                    <Florecitas tipoFlor="geranios" imagen={geranios} />
                </Link>
                <Link to='/Cartucho'>
                    <Florecitas tipoFlor="Cartucho" imagen={cartuchos} />
                </Link>

            </ul>
        </div>
    )
}
export default Index;