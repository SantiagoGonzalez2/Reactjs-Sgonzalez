import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log( productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

   
    if(loading) {
        return <div id='spinner' className="d-flex justify-content-center">
        <div id='spinner' className="spinner-border" role="status">
         
        </div>
      </div>
    }
    return (
        <div>
            <ItemDetail  {...products} />

        </div>
    )
}

export default ItemDetailContainer