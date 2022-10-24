import '../ItemListConteiner/ItemListContainer'
import './item.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'





const Item = ({ titulo, precio, imagen, id}) => {
    return (
        
        <div id='card' className="card"  key={id}>
        <img id='img' src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
           
          <p className="card-text">${precio}</p>
          <Link  to={`/detail/${id}`} id='botonc' className="btn btn-dark">Ver mas</Link>
        </div>
      </div>
        
    )
}

export default Item