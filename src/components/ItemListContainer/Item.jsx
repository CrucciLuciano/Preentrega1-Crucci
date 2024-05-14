import "./item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <Link to={"/detail/" + product.id} className="container">
            <div className="card">
                <div className="product">
                    <img className="img_product" src={product.image} />
                    <div className="detail">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item