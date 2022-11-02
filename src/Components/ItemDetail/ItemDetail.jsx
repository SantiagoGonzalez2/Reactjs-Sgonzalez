import './detalle.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'






const ItemDetail = ({ id, titulo, precio, img, descripcion, category, stock }) => {

  const { addItem } = useContext(CartContext)





  const handleOnAdd = (quantity) => {
    const productToAdd = { id, precio, category, quantity, stock, titulo, img }

    addItem(productToAdd)


   

  }




  return (
    <div >

      <div className="itemCart1">

        <img id='fotitod' src={img} alt='fotito' />

      
        <ul className='listDetail'>
        <h1 className="titleDetail">
          {titulo}
        </h1>
          <li className="elementDetail">Valor: $ {precio}</li>


          <li className="elementDetail">Stock = {stock}</li>
          <li className="elementDetail">Detalle: {descripcion}.</li>

         


        </ul>
        <ItemCount className="cont" onAdd={handleOnAdd} stock={stock} />

      </div>


    </div>
  )
}


export default ItemDetail