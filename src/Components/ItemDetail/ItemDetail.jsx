import './detalle.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'






const ItemDetail = ({ id, titulo, precio, img, descripcion, category, stock }) => {

  const { addItem } = useContext(CartContext)

  
  


  const handleOnAdd = (quantity) => {
    const productToAdd = { id, precio, category, quantity, stock, titulo }

    addItem(productToAdd)
   

    console.log(productToAdd)
   
  }




  return (
    <div >
      <div id="detalle" className="card">
        <img id='fotitod' src={img} alt='fotito' />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{precio}</p>
          <p className="card-text">{descripcion}</p>
          <p> Disponible:{stock}</p>
          <ItemCount onAdd={handleOnAdd}  stock={stock} />
          
        </div>
      </div>
    </div>
  )
}


export default ItemDetail