import './App.css'
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AppRoutes from './routes/AppRoutes';
import CartProvider from './contexts/cart/CartProvider';

function App() {

  return (
    <>
      <CartProvider>
        <Header />
        <div className="main-container">
          <AppRoutes />
        </div>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
