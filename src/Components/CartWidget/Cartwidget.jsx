import carrito from "../../imagenes/carrito.png";
import './Cartwidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";


const Cartwidget = () => {
   
   const {  totalQuantity } = useContext(CartContext) 
   const quantity =  totalQuantity
   
   
  
    return (
        <div className="carrocontador">
           
           <Link to='/cart'> <img id="carro" src={carrito} alt="carrito" /> </Link>
                <br />
                <span id="contador1">{quantity}</span>
                
                </div>
               
            
            


        
        
    );
 }

 export default Cartwidget;