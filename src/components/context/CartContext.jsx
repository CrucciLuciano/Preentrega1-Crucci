import { createContext, useState } from "react";

//Creamos un contexto de React 
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductCart = (newProduct) => {
        const condition = duplicateProd(newProduct.id)
        if (condition) {
            const prodUpdated = cart.map((prodCart) => {
                if (prodCart.id === newProduct.id) {
                    return { ...prodCart, quantity: prodCart.quantity + newProduct.quantity }
                } else {
                    return prodCart
                }
            })

            setCart(prodUpdated)
        } else {
            setCart([...cart, newProduct])
        }
    }

    const totalQuantity = () => {
        const totalQuantityProduct = cart.reduce((total, product) => total + product.quantity, 0)
        return totalQuantityProduct
    }

    const clearCart = () => {
        setCart([])
    }

    const duplicateProd = (idProd) => {
        const condition = cart.some((prodCart) => prodCart.id === idProd)
        return condition
    }

    const deleteProdId = (idProd) => {
        const prodFilter = cart.filter((cartProduct) => cartProduct.id !== idProd)
        setCart(prodFilter)
    }

    const allPrice = () => {
        const totalBuy = cart.reduce((total, prodCart) => total + (prodCart.price * prodCart.quantity), 0)
        return totalBuy
    }

    return (
        <CartContext.Provider value={{ cart, addProductCart, totalQuantity, clearCart, deleteProdId, allPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }