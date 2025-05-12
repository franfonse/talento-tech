import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/home" end className={({ isActive }) => isActive ? 'nav-home active' : 'nav-home'}>Home</NavLink></li>
                    <li><NavLink to="/items" end className={({ isActive }) => isActive ? 'nav-items active' : 'nav-items'}>Items</NavLink></li>
                    <li><NavLink to="/cart" end className={({ isActive }) => isActive ? 'nav-cart active' : 'nav-cart'}>Cart</NavLink></li>
                    <li><NavLink to="/about" end className={({ isActive }) => isActive ? 'nav-about active' : 'nav-about'}>About</NavLink></li>
                    <li><NavLink to="/contact" end className={({ isActive }) => isActive ? 'nav-contact active' : 'nav-contact'}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
