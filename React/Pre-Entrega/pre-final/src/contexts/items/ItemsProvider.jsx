import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsContext from "./ItemsContext";

function ItemsProvider({ children }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const [errorItems, setErrorItems] = useState("");
    const [errorItem, setErrorItem] = useState("");
    const navigate = useNavigate();

    function getItems() {
        setLoading(true);
        fetch('https://682001ec72e59f922ef795ef.mockapi.io/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch((e) => {
                setErrorItems(e);
            })
            .finally(() => {
                setLoading(false);
            });

        return items;
    }

    function getItem(id) {
        setLoading(true);
        fetch(`https://682001ec72e59f922ef795ef.mockapi.io/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
            .catch((e) => {
                setErrorItem(e);
            })
            .finally(() => {
                setLoading(false);
            });

        return item;
    }

    function viewItem(id) {
        navigate(`/item/${id}`);
    }


    return (
        <ItemsContext.Provider
            value={{ items, item, getItems, loading, errorItems, viewItem, getItem, errorItem }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider;
