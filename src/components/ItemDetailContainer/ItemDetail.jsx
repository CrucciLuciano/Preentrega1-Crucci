import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {

    const { addProductCart } = useContext(CartContext)

    const addProduct = (count) => {
        //estructuramos el nuevo producto al carrito
        const productCart = { ...product, quantity: count }
        addProductCart(productCart)
    }

    return (
        <div className="card">
            <img src={product.image} style={{ width: "30%" }} />
            <h1>{product.name}</h1>
            <p className="price">$ {product.price}</p>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} addProduct={addProduct} />
        </div>
    )
}

export default ItemDetail