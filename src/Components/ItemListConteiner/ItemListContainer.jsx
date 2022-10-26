import './ItemListContainer.css';
import '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { useParams } from 'react-router-dom'
import { MrMiyagi } from '@uiball/loaders';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'







const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    

    useEffect(() => {
        setLoading(true)

        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products' );
       
       
        if(category){
        const queryFilter = query(queryCollection, where('category','==', category))
        getDocs(queryFilter)
        .then(res => setProducts(res.docs.map (product => ({id: product.id, ...product.data()}) )))
        .finally(() => {
            setLoading(false)
        })

        }
        
        
        else{
            getDocs(queryCollection)
            .then(res => setProducts(res.docs.map (product => ({id: product.id, ...product.data()}) )))
            .finally(() => {
                setLoading(false)
            })
    
        }
       

      
    }, [category])

    if (loading) {
        return (
            <div className='spinner'>


                <MrMiyagi
                    size={60}

                    speed={1}

                    color='#71C40A'
                    className='spinner'

                />


            </div>)
    }

    return (
        <div id='lista2' className='animate__animated animate__backInRight'>
            <h1 className='tituloP'>{greeting}</h1>
            <div id='listad'>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer