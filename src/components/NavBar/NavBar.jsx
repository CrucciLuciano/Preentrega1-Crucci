import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" >
                <img style={{ width: "100px" }} src="\logokfc.png" />
            </Link>
            <ul>
                <Link to="/category/patitas" className="category">Patitas</Link>
                <Link to="/category/alitas" className="category">Alitas</Link>
                <Link to="/category/hamburguesa" className="category">Hamburguesa</Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar