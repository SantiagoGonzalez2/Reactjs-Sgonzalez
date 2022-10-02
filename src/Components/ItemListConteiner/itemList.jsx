import Item from './Item.jsx';

const itemList = ({ products }) => {
    
    return (
        <div>
            { products.map(prod => < Item key={prod.id} titulo={prod.titulo} precio={prod.precio}/>)}
        </div>
    )
}

export default itemList