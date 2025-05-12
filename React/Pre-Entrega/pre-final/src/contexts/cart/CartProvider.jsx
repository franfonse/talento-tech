import { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(item) {

        setCart((prev) => {
            const ix = prev.findIndex(i => i.id === item.id);

            if (ix < 0) {
                return [...prev, { ...item, quantity: 1 }];
            }
            return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
        });
    };

    function getQty() {
        return cart.reduce((sum, i) => sum + i.quantity, 0);
    }

    function removeFromCart(id) {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    function getTotalCart() {
        return cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    }

    function getTotalItem(id) {
        const items = cart.filter((item) => id === item.id);
        return items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, getQty, getTotalCart, getTotalItem }}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;
