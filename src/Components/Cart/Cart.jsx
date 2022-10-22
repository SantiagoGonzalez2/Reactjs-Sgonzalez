import React from "react"
import { CartContext }from '../../context/CartContext.jsx'
import { useContext } from "react"
import ItemCart from "../ItemCart/ItemCart.jsx"





const Cart = () => {
const  { cart } = useContext(CartContext)

console.log(cart, 'llego?' ) 
    


return(
   <div>
    {
        cart.map(prod => (
           <h1 style={{fontSize: "20px"}}>
            {prod.titulo}
           <br />
           ${prod.precio}
           <br />
          Productos seleccionados = {prod.quantity}
           </h1>
        ))
        
    }
    
   </div>
   
)

}


export default Cart