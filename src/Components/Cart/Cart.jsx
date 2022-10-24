import React from "react"
import { CartContext }from '../../context/CartContext.jsx'
import { useContext } from "react"
import './Cart.css'





const Cart = () => {
const  { cart, removeItem, getTotal, clearCart } = useContext(CartContext)

console.log(cart, 'llego?' ) 
    


return(
   <div>
     


    {
        cart.map(prod => (

        

   
        <div className="itemCart">

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
    <button className="generator2"> Precio total: $ {getTotal(cart)}</button>
    <button className="generator3" onClick={() => clearCart(cart)}>Vaciar el carrito</button>
    
   </div>
   
)

}


export default Cart