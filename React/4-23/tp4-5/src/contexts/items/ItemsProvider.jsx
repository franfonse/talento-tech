import { useState } from 'react';
import ItemsContext from './ItemsContext';

function ItemsProvider({ children }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function getItems() {
        setLoading(true);
        fetch('https://682001ec72e59f922ef795ef.mockapi.io/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <ItemsContext.Provider
            value={{ items, getItems, loading, error }}
        >
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider;
