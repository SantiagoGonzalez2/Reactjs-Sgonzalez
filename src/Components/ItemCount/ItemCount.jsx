import React from "react"
import { useState, useContext } from 'react';
import './ItemCount.css';
import { Link } from "react-router-dom";
import swal from "sweetalert";



const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

 const alert = () =>{
  swal({
    title:"Producto agregado.", 
    text:"En el carrito podra finalizar la compra.",
    icon: "success"
   }) }

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
  // const empty = () => {
  //   setQuantity(quantity === 1)
  // }

  const [buttonText, setButtonText] = useState("Agregar al carro"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

 
  


  return (
    <div id="contador">
      <button className="btn btn-dark" id='button' onClick={increment}>+</button>
      <p id='numero'>{quantity}</p>
      <button className="btn btn-dark" id='button' onClick={decrement} >-</button>
      <br />
    


      <button className="btn btn-dark" id='button'  onClick={() =>{ onAdd(quantity); setButtonText("Elemento agregado"); alert() }}>{buttonText}</button>

      <Link to={'/cart'} className="btn btn-dark" id='button'  >Ir al carrito</Link>

 
 
  


    </div>
  )
}

export default ItemCount;


