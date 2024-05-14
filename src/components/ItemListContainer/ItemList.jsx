import Item from "./Item"
import "./item.css"

const ItemList = ({ products }) => {
    return (
        <div className="cards_container">
            {
                products.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ItemList