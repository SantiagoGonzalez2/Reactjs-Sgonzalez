import React from "react"
import { CartContext }from '../../context/CartContext.jsx'
import { useContext } from "react"
import './Cart.css';
import swal from "sweetalert";
import { Link } from "react-router-dom";






const Cart = (props) => {
const  { cart, removeItem, getTotal, clearCart } = useContext(CartContext)




const alert = () =>{
   swal({
     title:"Ha vaciado el carrito por completo", 
     text:"Tan laucha es? gaste unos pesitos",
     icon: "warning",
    }) }
 
  


return(
   <div>
     


    {
        cart.map(prod =>  (

        

   
        <div className="itemCart" key={prod.id}>

           <h1 className="title">
            {prod.titulo}
            </h1>
            <ul>
          <li className="element1">  ${prod.precio}</li>
          
        <li className="element1">  Cantidad = {prod.quantity}</li>
        <li className="element1">Stock = {prod.stock}</li>
        <button  className="generator1" onClick={() => removeItem(prod.id)}>remover</button>
        
        </ul>

        </div>

        

      

      

         
         
        ))
        
    }
    <button className="generator">Generar orden</button>
    <Link to={'/products'} className="generator4">Volver a la tienda</Link>
    <button className="generator2"> Precio total: $ {getTotal(cart)}</button>
    <button className="generator3" onClick={() =>{ clearCart(cart); alert()}}>Vaciar el carrito</button>
    
   </div>
   
)

}


export default Cart