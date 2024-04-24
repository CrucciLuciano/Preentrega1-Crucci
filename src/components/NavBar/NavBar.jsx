import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div>
                <img style={{ width: "100px" }} src="public\logokfc.png" />
            </div>
            <ul>
                <li><a href="#">Patitas</a></li>
                <li><a href="#">Alitas</a></li>
                <li><a href="#">Hamburguesa</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar