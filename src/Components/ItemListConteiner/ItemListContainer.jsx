import './ItemListContainer.css';
import './itemList.jsx';
import { getProducts } from '../../misProductos.js'
import { useState } from 'react';
import { useEffect } from 'react';
import Item from './Item';

const ItemListContainer =({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

   
    if(loading) {
        return <h1>Loading...</h1>
    }

    return  (
        <div>
            <h1>{greeting}</h1>
            
            <Item products={products} />
            
        </div>
    )
}

export default ItemListContainer