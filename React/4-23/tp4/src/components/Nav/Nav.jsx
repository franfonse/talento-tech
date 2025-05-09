import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <NavLink to="/" end className={({isActive}) => isActive ? 'home active': 'home'}>Home</NavLink>
                <NavLink to="/items" end className={({isActive}) => isActive ? 'items active': 'items'}>Shopping</NavLink>
                <NavLink to="/my-items" end className={({isActive}) => isActive ? 'my-items active': 'my-items'}>My items</NavLink>
            </ul>
        </nav>
    )
}

export default Nav;
