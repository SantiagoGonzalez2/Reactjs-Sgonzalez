import './detalle.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ id, titulo, precio, img, descripcion }) => {


    const productToAdd = {id, precio}

    console.log(productToAdd)
       
   

  
    const handleOnAdd = () => {
        console.log('se agrego al carrito')
        
          }
     return (
        <div id="detalle" className="card">
        <img  src={img} alt='fotito'/> 
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{precio}</p>
          <p className="card-text">{descripcion}</p>
          <button id='botonc' className="btn btn-dark">Comprar</button>
          <ItemCount onAdd={handleOnAdd}/>
        </div>
      </div>
     )}


export default ItemDetail