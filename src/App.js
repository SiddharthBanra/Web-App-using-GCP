
import './App.css';
import Homepage from './pages/Homepage';


import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Productinfo from './pages/Productinfo';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Cartpage from './pages/Cartpage';
import './stylesheets/layout.css';
import './stylesheets/products.css';
import './stylesheets/authentication.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/login' exact element={<Loginpage />} />
          <Route path='/register' exact element={<Registerpage />} />
          <Route path='/product' exact element={<Productinfo />} />
          <Route path='/cart' exact element={<Cartpage />} />

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
