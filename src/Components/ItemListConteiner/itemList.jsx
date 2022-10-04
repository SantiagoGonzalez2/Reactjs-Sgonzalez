import Item from './Item.jsx';
import './ItemListContainer.jsx';
import './ItemList.css'

const ItemList = ({ products }) => {
    
    return (
        <div id='lista3'>
            { products.map(prod => < Item key={prod.id} titulo={prod.titulo} precio={prod.precio} imagen={prod.img}/>)}
        </div>
    )
}

export default ItemList