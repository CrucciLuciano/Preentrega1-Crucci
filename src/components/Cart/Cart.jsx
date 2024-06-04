import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {
    const { cart, clearCart, deleteProdId, allPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to="/">Ver productos</Link>
            </div>
        )
    }
    return (
        <div className="conteiner">
            <h1>Carrito compras</h1>
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className="card" >
                        <h3>{productCart.name}</h3>
                        <h4>Cantidad: {productCart.quantity}</h4>
                        <img src={productCart.image} />
                        <button className="cardButton" onClick={() => deleteProdId(productCart.id)}>Borrar</button>
                    </div>
                ))
            }
            <h2>Total de la Compra: ${allPrice()}</h2>
            <Link to="/checkout" >Terminar Compra</Link>
            <button className="deleteButton" onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart