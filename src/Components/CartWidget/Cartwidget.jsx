import carrito from "../../imagenes/carrito.png";
import './Cartwidget.css';

export default function Cartwidget ()
 {
    return (
        <div className="carrocontador">
            
                <img id="carro" src={carrito} alt="carrito" />
                <br />
                <span>0</span>
                </div>
          
            
            


        
        
    );
 }