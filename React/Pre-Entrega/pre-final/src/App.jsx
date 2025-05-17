import "./App.css";
import ItemsProvider from "./contexts/items/ItemsProvider";
import CartProvider from "./contexts/cart/CartProvider";
import Header from "./components/shared/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/shared/Footer/Footer";
import AuthProvider from "./contexts/auth/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ItemsProvider>
          <CartProvider>
            <Header />
            <div className="main-container">
              <AppRoutes />
            </div>
            <Footer />
          </CartProvider>
        </ItemsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
