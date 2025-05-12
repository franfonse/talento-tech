import './Cart.css';
import useCart from '../../contexts/cart/cart';

function Cart() {

    const { cart, clearCart, getTotalCart, getTotalItem, removeFromCart } = useCart();

    return (
        <>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <th>My items</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total item/s</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${getTotalItem(item.id)}</td>
                                <td><button className='btn btn-remove' onClick={() => removeFromCart(item.id)}>Remove</button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td><strong>Total cart</strong></td>
                        <td><strong>${getTotalCart()}</strong></td>
                    </tr>
                </tbody>
            </table>

            {
                cart.length === 0 ?
                    <h4 className="h4-empty">Your shopping cart is empty</h4> :
                    <button className='btn btn-clear' onClick={() => clearCart()}>Clear cart</button>
            }

        </>
    )

}

export default Cart;
