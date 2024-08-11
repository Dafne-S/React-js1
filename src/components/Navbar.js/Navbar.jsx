import "./Navbar.css"
import CartWidget from "../Cart/CartWidget";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <p>REACT</p>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">COCINA</a>
                    </li>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">PATIO</a>
                    </li>
                </ul>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default Navbar;