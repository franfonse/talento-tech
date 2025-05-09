import { createContext } from "react";

const CartContext = createContext(
    // {
    //     CHOOSE TO NOT WORK LIKE THIS
    //     cart: [],
    //     addToCart: () => { },
    //     removeFromCart: () => { },
    //     clearCart: () => { },
    //     getQty: () => { }
    // }
);

export default CartContext;
