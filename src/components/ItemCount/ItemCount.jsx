import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleAddToCart = () => {
        addProduct(count)
    }
    return (
        <div className="item-count">
            <div className="buttoms">
                <button onClick={handleClickDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleClickIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount