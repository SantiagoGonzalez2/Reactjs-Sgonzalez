import React from "react"
import { useState } from 'react';
import './ItemCount.css';
import { Link } from "react-router-dom";




const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)



  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }


  }

  const [buttonText, setButtonText] = useState("Agregar al carro");

 
  


  return (
    <div id="contador">
      <button className="btn btn-dark" id='button' onClick={increment}>+</button>
      <p id='numero'>{quantity}</p>
      <button className="btn btn-dark" id='button' onClick={decrement} >-</button>
      <br />
    


      <button className="btn btn-dark" id='button'  onClick={() =>{ onAdd(quantity); setButtonText("Elemento agregado,vacie el carro para volver a agregar");  }}>{buttonText}</button>

      <Link to={'/cart'} className="btn btn-dark" id='button'  >Ir al carrito</Link>

 
 
  


    </div>
  )
}

export default ItemCount;


