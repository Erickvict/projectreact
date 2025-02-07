import React from "react";
import Home from "./Pages/Home.js";
import Navbar from './Components/Navbar.js';
import Services from './Pages/Services.js';
import Contact from './Pages/Contact.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import {Routes,Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CartProvider } from "./Pages/CardContext.js";
import BikeList from "./Pages/BikeList.js";
import CarList from "./Pages/CarList.js";
import UserHome from "./Pages/UserHome.js";
import CardPage from "./Pages/CardPage.js";
import UserDetails from "./Pages/UserDetails.js";





function App() {

   const location = useLocation();

   const hideNavbarRoutes = ['/login', '/signup','/userhome','/carlist','/bikelist','/cart','/cardpage','/userdetails'];




  return (
    <>
      <CartProvider>
       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/bikelist" element={<BikeList />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/userdetails" element={<UserDetails/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>  
      </CartProvider>
     
      
      
    
      
   
    
           
      
    </>
  );
}

export default App;
