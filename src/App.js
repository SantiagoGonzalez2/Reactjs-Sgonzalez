
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer.jsx';



function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting={"Proximamente"}/>
      
    </div>
  );
}

export default App;
