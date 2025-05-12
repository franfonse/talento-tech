import { useContext } from 'react';
import ItemsContext from './ItemsContext';

function useItems() {
    return useContext(ItemsContext);
}

export default useItems;
