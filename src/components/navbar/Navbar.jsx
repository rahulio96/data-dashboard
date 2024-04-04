import navCSS from './Navbar.module.css'
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/"> Dashboard</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar