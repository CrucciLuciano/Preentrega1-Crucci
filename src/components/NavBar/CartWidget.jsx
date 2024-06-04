import { ImCart } from "react-icons/im";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()

    return (
        <Link to="/cart">
            <ImCart color={quantity >= 1 ? "Red" : "Blue"} size={50} />
            <p> {quantity >= 1 && quantity} </p>
        </Link>
    )
}

export default CartWidget