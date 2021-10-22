
function Florecitas(props) {
    return (
      <li >
       
      <div > 
        <img  className="imagenPequeña" src={props.imagen} alt={props.tipoFlor} />
      </div>
     
      <span>{props.tipoFlor}</span>
      </li>
    );
  }
  export default Florecitas;