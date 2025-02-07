import React from 'react'
import carlogo from '../Components/carlogo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-info sticky-top">
       <div className="container-fluid">
       <img src={carlogo} style={{opacity:1,height:40,width:80,opacity:0.5}} alt=""/>
         <a className="navbar-brand" style={{color:'white'}} > Easy Ride </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse " id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <Link to="/" className="text-decoration-none">
             <li className="nav-item">
             <a class="nav-link active" aria-current="page">Home</a>
             </li>
            </Link>

             <Link to="/services" className="text-decoration-none">
             <li className="nav-item">
               <a  className="nav-link active"  href="#">Services</a>
             </li>
             </Link>
             <Link to="/contact" className="text-decoration-none">
             <li className="nav-item ">
              <a  className="nav-link active"  href="#">Contact</a>
             </li>
             </Link>
           </ul>
           <form className="d-flex" role="search">
            <Link to='/login'>
           <button className="btn btn-outline-warning" type="submit">Login</button></Link>
           <Link to='/signup'>
             <button className="btn btn-outline-warning" type="submit">SignUp</button></Link>
           </form>
         </div>
       </div>
     </nav>
   
    </>
  )
}

export default Navbar