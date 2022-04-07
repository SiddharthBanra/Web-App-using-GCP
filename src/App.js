
import './App.css';
import Homepage from './pages/Homepage';


import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

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
      <ToastContainer />
      <BrowserRouter>

        <Routes>
          <Route path='/' element={
            <ProtectedRoutes>
              <Homepage />
            </ProtectedRoutes>
          } />

          

          <Route path='/cart' exact element={
            <ProtectedRoutes>
              <Cartpage />
            </ProtectedRoutes>} />


            <Route path='/login' exact element={<Loginpage />} />
          
          <Route path='/register' exact element={<Registerpage />} />

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};