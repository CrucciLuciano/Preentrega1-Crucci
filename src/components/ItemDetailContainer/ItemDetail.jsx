import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} style={{ width: "100%" }} />
            <h1>{product.name}</h1>
            <p className="price">$ {product.price}</p>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} />
        </div>
    )
}

export default ItemDetail