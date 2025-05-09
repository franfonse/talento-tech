import { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add an item (or bump quantity)
  // ASK WHY OLD SOLUTIONS DOESN'T WORK
  function addToCart(item) {

    setCart((prev) => {
      const ix = prev.findIndex(i => i.id === item.id);

      if (ix < 0) {
        return [...prev, { ...item, quantity: 1 }];
      } else {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
    });
  };

  function getQty() {
    return cart.reduce((sum, i) => sum + i.quantity, 0);
  }

  // Remove every instance of an item by id
  const removeFromCart = id =>
    setCart(prev => prev.filter(item => item.id !== id));

  // Empty the entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
