const Header = () =>{
    return(
        
        <header>
            <ul className="navbar" >

                <figure>
                    <img src="Media/iconoFlor.png" alt="Imagen" className="Logo" />
                </figure>

                <li>
                    <button class="button mainButton ">Crear Nuevo Post</button>
                </li>
                <li>
                    <div class="buscar ">
                        <input placeholder="Buscar una Flor" />
                        <i class="fas fa-search button iconoBusqueda "></i>
                    </div>
                </li>
                <li><button class="button secondaryButton">Login</button></li>
                <li><button class="button mainButton">Registro</button></li>
            </ul>

        </header>
       
    )
}
export default Header;