import './ItemListContainer'
import './item.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const Item = ({ titulo, precio, imagen }) => {
    return (
        
        <div id='card' className="card">
        <img id='img' src={imagen} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{precio}</p>
          <button id='botonc' className="btn btn-dark">Comprar</button>
        </div>
      </div>
        
    )
}

export default Item