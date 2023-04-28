import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <div className="App">
        
          <NavBar/>
            <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/Checkout" element={<Checkout/>}/>
            </Routes>
          
          
          
        
    </div>
    
  );
}



export default App;
