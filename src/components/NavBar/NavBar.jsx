import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div>
                <img style={{ width: "100px" }} src="https://i.pinimg.com/originals/aa/92/89/aa9289de1ed2865bccd7c7457f246482.jpg" />
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