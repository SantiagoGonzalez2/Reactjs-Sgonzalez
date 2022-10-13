import Item from '../Item/Item.jsx';
import '../ItemListConteiner/ItemListContainer.jsx';
import './ItemList.css'


const ItemList = ({ products }) => {
    
    return (
        <div id='lista3'>
            { products.map(prod => < Item key={prod.id} id={prod.id} titulo={prod.titulo} precio={prod.precio} imagen={prod.img} category={prod.category} stock={prod.stock}/>)}
          
        </div>
    )
}

export default ItemList