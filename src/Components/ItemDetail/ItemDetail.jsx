import './detalle.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ id, titulo, precio, img, descripcion, category }) => {


    const productToAdd = {id, precio, category}

    console.log(productToAdd)
       
   

  
    const handleOnAdd = () => {
        console.log('se agrego al carrito')
        
          }
     return (
      <div >
        <div id="detalle" className="card">
        <img id='fotitod'  src={img} alt='fotito'/> 
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{precio}</p>
          <p className="card-text">{descripcion}</p>
          <ItemCount onAdd={handleOnAdd}/>
        </div>
      </div>
      </div>
     )}


export default ItemDetail