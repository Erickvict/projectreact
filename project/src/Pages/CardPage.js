import React, { useContext } from 'react';
import { CartContext } from './CardContext.js';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import carlogo from '../Pages/carlogo.png';
import { FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
  const { cart, increment, decrement, removeItem } = useContext(CartContext);

  // Calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // // Handle Buy Now button click
  // const handleBuyNow = () => {
  //   const totalPrice = calculateTotalPrice();
  //   alert(`Thank you for your purchase! Total: ₹${totalPrice}`);
  //   // Additional logic for "Buy Now" action can go here (e.g., redirect to checkout)
  // };

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
                <Link to='/cardpage'> <button className="btn btn-outline-warning me-2">
                   <FaShoppingCart />
                                     <span className="badge bg-danger">{cart.length}</span> 
                                   </button></Link>
                <Link to='/'> <button className="btn btn-outline-warning" type="submit" style={{height:"55px"}}>
                   Logout
                 </button></Link>
               </div>
             </div>
           </nav>
      <Link to='/carlist'><button className="btn btn-outline-primary" style={{ padding: '10px' }}>
              <IoIosArrowBack size={40} role='button' />
            </button></Link>
      <div className="container mt-5">
        <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
        <div className="row">
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center' }}>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="col-12 col-md-4">
                <div className="card" style={{ marginBottom: '20px' }}>
                  <img src={item.img} className="card-img-top" alt={item.name} style={{ height: '171px', width: '400px' }}/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: &#8377; {item.price}</p>
                    <div>
                      <button class='bg-info' style={{  fontSize: "1.5rem",width: "40px",height: "40px",  borderRadius: "50%", border: "none",
      color: "white",
      margin: "0 5px",
      cursor: "pointer",
    }} onClick={() => decrement(item.id)}>-</button>
                      <span> Quantity: {item.quantity} </span>
                      <button class='bg-info'  style={{
      fontSize: "1.5rem",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "none",
      color: "white",
      margin: "0 5px",
      cursor: "pointer",
    }} onClick={() => increment(item.id)}>+</button>
                    </div>
                    <p className="card-text">Total: &#8377; {item.quantity * item.price}</p>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger">
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h4>Total Price: &#8377; {calculateTotalPrice()}</h4>
            <Link to='/userdetails'><button className="btn btn-success">
              Buy Now
            </button></Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
