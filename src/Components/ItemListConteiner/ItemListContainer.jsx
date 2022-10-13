import './ItemListContainer.css';
import '../ItemList/ItemList';
import { getProducts } from '../../asyncMock.js'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../asyncMock.js';


const ItemListContainer =({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = category ? getProductsByCategory : getProducts
        asyncFunction(category).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
     }, [category])
   
    if(loading) {
        return <div id='spinner' className="d-flex justify-content-center">
        <div id='spinner' className="spinner-border" role="status">
         
        </div>
      </div>
    }

    return  (
        <div id='lista2' className='animate__animated animate__backInRight'>
            <h1 className='tituloP'>{greeting}</h1>
            <div id='listad'>
            <ItemList  products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer