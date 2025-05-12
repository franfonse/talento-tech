import './Items.css';
import useCart from '../../contexts/cart/cart';
import { useEffect } from 'react';
import useItems from '../../contexts/items/items';

function Items() {

    const { addToCart, getQty } = useCart();
    const { items, getItems, loading, error } = useItems();

    useEffect(() => {
        if (items.length === 0) {
            getItems();
        }
    }, [getItems, items.length]);

    // const items = [
    //     {
    //         id: 1,
    //         name: 'Yogurt',
    //         desc: 'Kefir yogurt, mango flavour',
    //         price: 3.5
    //     },
    //     {
    //         id: 2,
    //         name: 'Cereal',
    //         desc: 'High Fiber',
    //         price: 3.6
    //     },
    //     {
    //         id: 3,
    //         name: 'Ground beef',
    //         desc: 'Organic',
    //         price: 5.99
    //     },
    //     {
    //         id: 4,
    //         name: 'Bananas',
    //         desc: 'Organic and cheap',
    //         price: 0.29
    //     },
    //     {
    //         id: 5,
    //         name: 'Pizza',
    //         desc: 'Parlano',
    //         price: 5.49
    //     },
    //     {
    //         id: 6,
    //         name: 'Potato fries',
    //         desc: 'Handsome-cut french style',
    //         price: 5
    //     },
    //     {
    //         id: 7,
    //         name: 'Orange, mango, and peach juice',
    //         desc: 'The nectar',
    //         price: 3.29
    //     }
    // ];

    return loading ?
        <div className="loader-overlay">
            <div className="loader"></div>
        </div> :
        error ?
            <div className='error'>
                <h2>There was an error while fetching data!</h2>
                <p>{error}</p>
            </div> :
            <>
                <table className='items-table'>
                    <thead>
                        <tr>
                            <th>Available items</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.desc}</td>
                                    <td>${item.price}</td>
                                    <td><button className='btn btn-add' onClick={() => addToCart(item)}>Add</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <br />
                <br />

                <p>Your cart has {getQty()} items.</p>
            </>

}

export default Items;
