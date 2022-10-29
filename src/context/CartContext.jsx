import { useState, useEffect, createContext } from "react"
import swal from "sweetalert"




export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    

    useEffect(() => {
        
   
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
        // eslint-disable-next-line
    }, [cart])  

    const addItem = (productToAdd) => {
      
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            const alert = () =>{
                swal({
                  title:"Producto agregado.", 
                  text:"En el carrito podra finalizar la compra.",
                  icon: "success"
                 }) }
                 alert()
        } else {
            const alert = () =>{
                swal({
                  title:"Producto ya agregado", 
                  text:"Vacie el carrito para agregar mas del mismo item",
                  icon: "warning",
                 }) }
                 alert()
        }
    }
   
       

       

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
       
       
  
        
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }
    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu = prod.quantity * prod.precio
        })
  
        return accu
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, getTotal, clearCart,getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}