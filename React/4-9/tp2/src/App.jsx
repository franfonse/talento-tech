import './App.css'
import Card from './components/Card/Card';
import ListItems from './components/ListItems/ListItems';
import ButtonColor from './components/ButtonColor/ButtonColor';

function App() {

  // const items = ['Manzanas', 'Peras', 'Naranjas'];

  return (
    <>
    {/* <ListItems items={items}/> */}
    {/* <div class="cards">
      <Card title="New offer" desc="This is the new deal." buttonText="Accept" buttonColor="green"/>
      <Card title="Old offer" desc="This is the old deal." buttonText="Cancel" buttonColor="red"/>
    </div> */}
    <ButtonColor color="green"/>
    <ButtonColor color="blue"/>
    </>
  )
}

export default App
