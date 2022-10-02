import carrito from "../../imagenes/carrito.png";
import './Cartwidget.css';

 function Cartwidget ()
 {
    return (
        <div className="carrocontador">
            
                <img id="carro" src={carrito} alt="carrito" />
                <br />
                <span id="contador1">0</span>
                </div>
          
            
            


        
        
    );
 }

 export default Cartwidget;