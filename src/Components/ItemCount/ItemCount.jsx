import React from "react"
import { useState } from 'react';
import './ItemCount.css';

let stock = 10

function ItemCount ({onAdd})  {

    
// const [contador, setContador] = useState('0')

const [quantity, setQuantity] = useState(0);
  
const increase = ()=> {
  if (quantity < stock){
    setQuantity(quantity + 1);
  }
}
const decrease = ()=> {
  if (quantity > 1){
    setQuantity(quantity - 1);
  }
}

    return (
        <div id="contador">
            <button id='botoncito' onClick={increase}>+</button>
            <p id='numero'>{quantity}</p>
            <button id='botoncito' onClick={decrease}>-</button>
            <br />
            <button id='agregar' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;