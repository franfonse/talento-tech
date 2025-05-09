import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';
import Items from '../pages/Items/Items';
import MyItems from '../pages/MyItems/MyItems';
import NotFound from '../pages/NotFound/NotFound';

function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/items" element={<Items />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default AppRoutes;
