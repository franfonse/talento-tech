import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Items from '../pages/Items/Items';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Item from '../pages/Item/Item';
import Cart from '../pages/Cart/Cart';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/items' element={<Items/>}/>
            <Route path='/item/:id' element={<Item/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;
