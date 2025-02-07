import React from 'react'
import carlogo from './carlogo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const UserNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info sticky-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src={carlogo} style={{ opacity: 0.5, height: 40, width: 80 }} alt=""
            />
            <a className="navbar-brand" style={{ color: 'white', marginLeft: '10px' }}>
              Easy Ride
            </a>
          </div>
          <div className="d-flex ms-auto">
           {/* <Link to='/cardpage'> <button className="btn btn-outline-warning me-2">
              <FaShoppingCart style={{height:"25px"}}/>
            </button></Link> */}
           <Link to='/'> <button className="btn btn-outline-warning" type="submit">
              Logout
            </button></Link>
          </div>
        </div>
      </nav>



    </>
  )
}

export default UserNav