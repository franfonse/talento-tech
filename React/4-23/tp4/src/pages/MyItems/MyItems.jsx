import './MyItems.css';
import useCart from '../../contexts/cart/cart';

function MyItems() {

    const { cart, clearCart } = useCart();

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
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {cart.length === 0 ? <h4 className="h4-empty">Your shopping cart is empty</h4> : <button className='btn btn-clear' onClick={() => clearCart()}>Clear cart</button>}

        </>
    )

}

export default MyItems;
