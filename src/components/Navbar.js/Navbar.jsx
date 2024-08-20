import "./Navbar.css"
import CartWidget from "../Cart/CartWidget";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <p>DRIVE NOW</p>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">RANGE ROVER</a>
                    </li>
                    <li>
                        <a href="#">FERRARI</a>
                    </li>
                    <li>
                        <a href="#">MERCEDES BENZ</a>
                    </li>
                    <li>
                        <a href="#">BMW</a>
                    </li>
                </ul>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default Navbar;