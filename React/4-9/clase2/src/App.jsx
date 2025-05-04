import ListUsers from "./components/ListUsers";
import Hello from './components/Hello'
import User from './components/User';
import ListItems from './components/ListItems';

function App() {

  // const usuario = {
  //   name: "Francisco",
  //   age: 30
  // }

  // const names = ["Francisco", "Juana", "Nicolas", "Sofia"];

  const items = [
    {
      id: 1,
      name: "mouse",
      price: 2500,
      img: "https://picsum.photos/200/150/?random=1"
    },
    {
      id: 2,
      name: "monitor",
      price: 400000,
      img: "https://picsum.photos/200/150/?random=2"
    },
    {
      id: 3,
      name: "keyboard",
      price: 150000,
      img: "https://picsum.photos/200/150/?random=3"
    },
  ];

  return (
    <>
    {/* <Hello name="Francisco"/> */}
    {/* <ListUsers/> */}
    {/* <User info={usuario}/> */}
    <h1>List of Items</h1>
    <ListItems items={items}/>
    </>
  )
}

export default App
