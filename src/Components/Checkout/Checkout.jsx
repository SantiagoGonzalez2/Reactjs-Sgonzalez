import './checkout.css'
import { CartContext } from '../../context/CartContext.jsx'
import { useContext } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where, documentId, writeBatch } from 'firebase/firestore';
import swal from "sweetalert";


import React from 'react';



const Checkout = () => {

    const { cart, getTotal, totalQuantity, clearCart } = useContext(CartContext)

  

   


    const generateOrder = async (e) => { 

       




        e.preventDefault();
    const db = getFirestore();
    
   
        const order = {
            comprador: {
                nombre: '',
                apellido:'',
                email:'',
                },
                Productos: cart.map(product => ({id: product.id, titulo:product.titulo, cantidad:product.quantity})),
               
                total: getTotal(cart)
    
    
            
    
            
        }

        const batch = writeBatch(db)

        const outOfStock = []
    
        const ids = cart.map(prod => prod.id)
    
        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        docs.forEach( doc =>{
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedtoCart = cart.find(prod => prod.id === doc.id )
            const prodQuantity = productAddedtoCart?.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, {stock: stockDb - prodQuantity})

            } else{
                outOfStock.push({id: doc.id, ...dataDoc})

            }
        })
       

        if(outOfStock.length === 0) {
            await batch.commit()

            const ordersCollection = collection(db, 'ordenes');
           const orderAdded= await addDoc(ordersCollection, order)

           console.log(orderAdded)
           const alert = () =>{
            swal({
              title:"Orden Creada.", 
              text:`El id de su orden es: ${orderAdded.id}`,
              icon: "success"
             }) }
    
          alert ()
          clearCart(cart)

           
            

        }else {
            console.log('productos fuera de stock')
        }
    
       
    }


   



   


    return (
        <div>








            <h1>Completa los datos para generar la orden.</h1>
            <form className="myForm">
                <div className='myForm1' >
                    <label  className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"   placeholder="Juanito Carlos Segundo " />
                    <label  className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"   placeholder="Telasube" />
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control"  id="exampleFormControlInput1" placeholder="tunombre@tucorreo.com" />
                </div>
                <div className="myForm1">
                    <h3>Pedido:</h3>
                    <ul className='myFormul'>
                        {cart.map(prod => {
                            return (
                                <div key={prod.id}>
                                    <li>{prod.titulo}</li>
                                    <li> {prod.quantity}</li>


                                </div>

                            )
                        })}


                        <li className='myFormsepar'>-------------------------------------------</li>
                        <li className='myFormli'>Cantidad de productos: {totalQuantity}</li>

                        <li className='myFormli'>Valor total: $ {getTotal(cart)} </li>

                    </ul>
                    <label  className="form-label">Comentarios sobre el pedido:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                
                <button className='myFormbutton' onClick={generateOrder}> GENERAR ORDEN</button>
            </form>

        </div>






    )



}

export default Checkout