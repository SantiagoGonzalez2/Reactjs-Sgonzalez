
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {



  return (

    <div className="App">




      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/category/:category'element={<ItemListContainer/>}/>
          <Route path='/' element={<ItemListContainer greeting={"Productos"}> </ItemListContainer>}/>
            
            
          <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
        </Routes>
        

      </BrowserRouter>

    </div>
  );
}

export default App;
