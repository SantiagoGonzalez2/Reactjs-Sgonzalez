import { useState } from 'react';
import './ItemCount.css';



function ItemCount ({onAdd})  {

    
const [contador, setContador] = useState('0')

    return (
        <div id="contador">
            <button id='botoncito' onClick={() => setContador(Number(contador) +1)}>+</button>
            <p id='numero'>{contador}</p>
            <button id='botoncito' onClick={() => setContador(contador >= 1 ? Number(contador)-1 : null)}>-</button>
            <br />
            <button id='agregar' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;