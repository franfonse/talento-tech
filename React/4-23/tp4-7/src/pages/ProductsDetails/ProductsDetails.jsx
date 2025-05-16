import './ProductsDetails.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../contexts/items/items';
import Loading from '../../components/Loading/Loading';

function ProductsDetails() {

    const { id } = useParams();
    const { item, getItem, errorItem, loading } = useItems();

    useEffect(() => {
        if (item.id != id) {
            getItem(id);
        }
    }, [getItem, id, item.id]);

    return loading ?
        <Loading /> :
        errorItem ?
            <h1>Prodcut with ID {id} not found!</h1> :
            <div className="product-detail">
                <h1>Product details</h1>
                <h2>{item.name}</h2>
                <p>ID: {item.id}</p>
                <p>{item.desc}</p>
                <p className="price">${item.price}</p>
            </div>;
}

export default ProductsDetails;
