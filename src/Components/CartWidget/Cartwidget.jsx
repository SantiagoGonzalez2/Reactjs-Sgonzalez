import carrito from "../../imagenes/carrito.png";
import './Cartwidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Cartwidget = () => {

   const {  totalQuantity } = useContext(CartContext) 

   const quantity =  totalQuantity

    return (
        <div className="carrocontador">
            
                <img id="carro" src={carrito} alt="carrito" />
                <br />
                <span id="contador1">{quantity}</span>
                </div>
          
            
            


        
        
    );
 }

 export default Cartwidget;