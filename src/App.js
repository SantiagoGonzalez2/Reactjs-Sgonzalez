
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart/Cart.jsx'







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
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </div>
  );
}

export default App;
