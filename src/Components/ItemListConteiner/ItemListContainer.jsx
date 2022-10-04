import './ItemListContainer.css';
import './ItemList.jsx';
import { getProducts } from '../../misProductos.js'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';



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
        return <div id='spinner' className="d-flex justify-content-center">
        <div id='spinner' className="spinner-border" role="status">
         
        </div>
      </div>
    }

    return  (
        <div id='lista2' className='animate__animated animate__backInRight'>
            <h1>{greeting}</h1>
            <div id='listad'>
            <ItemList  products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer