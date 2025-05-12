import './Items.css';
import { useEffect } from 'react';
import useCart from '../../contexts/cart/cart';
import useItems from '../../contexts/items/items';
import Loader from '../../components/Loader/Loader';

function Items() {

    const { addToCart, getQty } = useCart();
    const { items, getItems, loading, errorItems, viewItem } = useItems();

    useEffect(() => {
        if (items.length === 0) {
            getItems();
        }
    }, [getItems, items.length]);

    return loading ?
        <Loader /> :
        errorItems ?
            <div className='error'>
                <h2>There was an error while fetching data!</h2>
                <p>{errorItems}</p>
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
                                    <td className='item-det' onClick={() => viewItem(item.id)}>{item.name}</td>
                                    <td className='item-det' onClick={() => viewItem(item.id)}>{item.desc}</td>
                                    <td className='item-det' onClick={() => viewItem(item.id)}>${item.price}</td>
                                    <td><button className='btn btn-add' onClick={() => addToCart(item)}>Add</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <br />

                <p>Your cart has {getQty()} items.</p>
            </>
}

export default Items;
