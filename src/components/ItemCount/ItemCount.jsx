import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const agregarCarrito = () => {
        console.log(count)
    }
    return (
        <div className="item-count">
            <div className="buttoms">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount