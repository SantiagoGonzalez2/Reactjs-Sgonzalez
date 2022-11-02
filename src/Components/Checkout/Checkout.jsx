import './checkout.css'
import { CartContext } from '../../context/CartContext.jsx'
import { useContext } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where, documentId, writeBatch } from 'firebase/firestore';
import swal from "sweetalert";
import React from 'react';
import { useState } from 'react';







const Checkout = () => {

    const { cart, getTotal, totalQuantity, clearCart } = useContext(CartContext)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [coments, setComents] = useState('')
    const [email1, setEmail1] = useState('')





   const eValidate = (e) => {
    e.preventDefault()
   }












    const generateOrder = async (e) => {






        e.preventDefault();
        const db = getFirestore();


        if (!name && !email && !lastName )
        {
            const alert = () => {
                swal({
                    title: "Don anonimato, complete los datos.",
                    text: `Es necesario completar los campos para enviar la orden.`,
                    icon: "warning"
                })
            }

            alert()
        }
    else {
    
    




        const order = {
            comprador: {
                nombre: name,
                apellido: lastName,
                email: email,
                comentarios: coments,
            },
            Productos: cart.map(product => ({ id: product.id, titulo: product.titulo, cantidad: product.quantity })),

            total: getTotal(cart)





        }


        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedtoCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedtoCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })

            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })

            }
        })


        if (outOfStock.length === 0) {
            await batch.commit()

            const ordersCollection = collection(db, 'ordenes');
            const orderAdded = await addDoc(ordersCollection, order)


            const alert = () => {
                swal({
                    title: "Orden Creada.",
                    text: `El id de su orden es: ${orderAdded.id}`,
                    icon: "success"
                })
            }

            alert()
            clearCart(cart)




        } else {
            const alert = () => {
                swal({
                    title: "Sin Stock",

                    icon: "warning"
                })
            }

            alert()



        }

    }


}








    return (
        <div>








            <h1>Completa los datos para generar la orden.</h1>
            <form className="myForm">
                <div className='myForm1' >
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juanito Carlos Segundo " />
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Telasube" />
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="tunombre@tucorreo.com" />
                    <label className="form-label">Confirme email</label>
                    <input type="email" className="form-control"  id="exampleFormControlInput1" value={email1}  onChange={(e) => setEmail1(e.target.value)} placeholder="tunombre@tucorreo.com---como arriba" />
                    <label className="form-label">Comentarios sobre el pedido:</label>
                    <textarea className="form-control" value={coments} onChange={(e) => setComents(e.target.value)} id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <div className="myForm1">
                    <h3>Pedido:</h3>
                    <ul className='myFormul'>
                        {cart.map(prod => {
                            return (
                                <div  key={prod.id}>
                                    <li>{prod.titulo}</li>
                                    <li> {prod.quantity}</li>
                                    <p className='break'>----------------------------------------</p>


                                </div>

                            )
                        })}


                       
                        <li className='myFormli'>Cantidad de productos: {totalQuantity}</li>

                        <li className='myFormli'>Valor total: $ {getTotal(cart)} </li>

                    </ul>

                </div>

                { email === email1 ?



                <button className='myFormbutton' onClick={generateOrder}> GENERAR ORDEN</button>

              :  <button className='myFormbutton' onClick={eValidate} style={{background: 'red'}} > Los emails no coinciden </button>

            }



            </form>

        </div>






    )










}

export default Checkout