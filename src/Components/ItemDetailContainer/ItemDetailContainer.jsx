import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MrMiyagi } from '@uiball/loaders'
import './spinner.css'





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
        return  <div className='spinner'>  <MrMiyagi
        size={60}
       
        speed={1}
        
        color= '#71C40A'
        className='spinner'
        
    />
    </div>
      
    }
    return (
        <div>
            <ItemDetail  {...products} />

        </div>
    )
}

export default ItemDetailContainer