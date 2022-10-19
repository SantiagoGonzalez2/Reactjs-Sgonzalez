
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import { CartProvider } from './context/CartContext';






function App() {



  return (

    <div className="App" >

      
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer greeting={"Store"}> </ItemListContainer>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </div>
  );
}

export default App;
