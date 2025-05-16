import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import CartProvider from "./contexts/cart/CartProvider";
import ItemsProvider from "./contexts/items/ItemsProvider";
import UserProvider from "./contexts/user/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <ItemsProvider>
          <CartProvider>
            <Header />
            <div className="main-container">
              <AppRoutes />
            </div>
            <Footer />
          </CartProvider>
        </ItemsProvider>
      </UserProvider>
    </>
  );
}

export default App;
