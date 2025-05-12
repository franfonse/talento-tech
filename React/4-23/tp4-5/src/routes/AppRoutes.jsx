import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';
import Cart from '../pages/Cart/Cart';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;
