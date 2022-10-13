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

const empty = () =>{
    setQuantity(quantity === 0)
}

    return (
        <div id="contador">
            <button className="btn btn-dark" id='button' onClick={decrease}>-</button>
            <p id='numero'>{quantity}</p>
            <button  className="btn btn-dark"id='button'onClick={increase} >+</button>
            <br />
            <button className="btn btn-dark" id='button' onClick={onAdd}>Agregar al carrito</button>
            <button className="btn btn-dark" id='button1'   onClick={empty}>Eliminar</button>
        </div>
    )
}

export default ItemCount;