import { NavLink } from 'react-router-dom';
import './Nav.css';
import useUser from '../../contexts/user/user';

function Nav() {
    const { user } = useUser();

    return (
        <nav>
            <ul>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'home active' : 'home'}>Home</NavLink>
                <NavLink to="/products" end className={({ isActive }) => isActive ? 'products active' : 'products'}>Products</NavLink>
                { user && <NavLink to="/cart" end className={({ isActive }) => isActive ? 'cart active' : 'cart'}>Cart</NavLink>}
                <NavLink to="/about" end className={({ isActive }) => isActive ? 'about active' : 'about'}>About</NavLink>
                <NavLink to="/contact" end className={({ isActive }) => isActive ? 'contact active' : 'contact'}>Contact</NavLink>
            </ul>
        </nav>
    )
}

export default Nav;
