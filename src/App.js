
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer.jsx';
import ItemCount from './Components/ItemCount/ItemCount.jsx'




function App() {
 
  const handleOnAdd = () => {
console.log('se agrego al carrito')

  }
  
  
  
  return (
    
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Proximamente"}> </ItemListContainer>
      <ItemCount onAdd={handleOnAdd}/>
      
    </div>
  );
}

export default App;
