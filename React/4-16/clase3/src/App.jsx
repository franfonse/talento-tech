import './App.css';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {

  const user = "Francisco Fonseca";
  const type = "Admin";

  const [section, setSection] = useState("Home");

  const navItems = ["Home", "Gallery", "Contact"];

  // const imgs = [
  //   "https://picsum.photos/200/300?random=1",
  //   "https://picsum.photos/200/300?random=2",
  //   "https://picsum.photos/200/300?random=3"
  // ];

  const renderContent = () => {
    switch (section) {
      case "Home":
        return <Home></Home>
      case "Gallery":
        return <Gallery></Gallery>
      case "Contact":
        return <Contact></Contact>
      default:
        return <Home></Home>
    }
  };

  return (
    <>
    <div className='d-flex flex-column min-vh-100'>
      <Header type={type} user={user}></Header>
      <Nav items={navItems} onSelection={setSection}></Nav>
      <main className='flex-grow-1 p-3'>
        {renderContent()}
      </main>
    </div>
    </>
  )
}

export default App
