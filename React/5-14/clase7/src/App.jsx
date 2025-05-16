import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';

function App() {

  return (
    <>
    <Header/>
    <div className="main-container">
      <AppRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default App
