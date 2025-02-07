import React, { useContext } from 'react';
import { CartContext } from './CardContext.js';
import './CarList.css';
import Footer from './Footer.js';
import carlogo from './carlogo.png'
import car1 from '../Images/car1.png';
import car2 from '../Images/car2.png';
import car4 from '../Images/car4.png';
import car5 from '../Images/car5.png';
import car6 from '../Images/car6.png';
import car7 from '../Images/car7.png';
import car8 from '../Images/car8.png';
import car9 from '../Images/car9.png';
import car10 from '../Images/car10.png';
import car11 from '../Images/car14.png';
import car12 from '../Images/car15.png';
import car13 from '../Images/car13.jpg';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";

const CarList = () => {
  const { addToCart, cart } = useContext(CartContext);

  const cars = [
    {
      id: 1,
      name: 'Car Model 1',
      price: 3000,
      img: car1,
      description: "It have lower ground clearance compared to SUVs,contributes to better aerodynamics and handling.",
    },
    {
      id: 2,
      name: 'Car Model 2',
      price: 5000,
      img: car2,
      description: "Provide a high level of comfort with premium materials, spacious interiors to ensure a serene driving experience.",
    },
    {
      id: 3,
      name: 'Car Model 3',
      price: 7000,
      img: car13,
      description: "Multi-zone climate control, heated and ventilated seats, power-adjustable seats with memory functions.",
    },
    {
      id: 4,
      name: 'Car Model 4',
      price: 9000,
      img: car4,
      description: "Advanced assistance systems such as adaptive cruise control, automatic emergency braking,360-degree camera system.",
    },
    {
      id: 5,
      name: 'Car Model 5',
      price: 5000,
      img: car5,
      description: "Presenting a stylish and modern exterior and interior design that reflects the premium nature of the vehicle.",
    },
    {
      id: 6,
      name: 'Car Model 6',
      price: 3000,
      img: car6,
      description: "Incorporating advanced safety features such as multiple airbags,driver assistance technologies to overall safety.",
    },
    {
      id: 7,
      name: 'Car Model 7',
      price: 4000,
      img: car7,
      description: "Providing modern technological features such as driver-assistance systems to enhance the driving experience.",
    },
    {
      id: 8,
      name: 'Car Model 8',
      price: 7500,
      img: car8,
      description: "State-of-the-art systems like adaptive cruise control, and massage seats enhance both safety and comfort on the road.",
    },
    {
      id: 9,
      name: 'Car Model 9',
      price: 9000,
      img: car9,
      description: "Cars come equipped with advanced features like GPS navigation and Bluetooth connectivity for a smoother journey.",
    },
    {
      id: 10,
      name: 'Car Model 10',
      price: 6000,
      img: car10,
      description: "High-end features such as ventilated seats, panoramic sunroofs, and premium sound systems your driving experience.",
    },
    {
      id: 11,
      name: 'Car Model 11',
      price: 5000,
      img: car11,
      description: "Innovative features like adaptive headlights, parking assist,wireless charging pads make every journey seamless.",
    }, {
      id: 12,
      name: 'Car Model 12',
      price: 7000,
      img: car12,
      description: "Modern luxuries like Wi-Fi hotspots, real-time traffic updates, smartphone integration convenience at your fingertips.",
    }
  ];
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
                 <Link to='/cardpage'><button className="btn btn-outline-warning me-2">
                  <FaShoppingCart />
                   <span className="badge bg-danger">{cart.length}</span> 
                 </button></Link>
                 <Link to='/'> <button className="btn btn-outline-warning" type="submit" style={{height:"55px"}}>
                    Logout
                  </button></Link>
                </div>
              </div>
            </nav>


            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
  <Link to='/bikelist'>
    <button className="btn btn-outline-primary" style={{ padding: '10px' }}>
      <GrFormNext size={40} />
    </button>
  </Link>
</div>
    




     

      <div className="container">
        <div className="row align-items-center">
          <div className="col" style={{ border: "1px solid black", borderRadius: "10px", padding: "10px" }}>
            <h5>
              Experience the freedom of the open road with our premium car rental service, perfect for exploring your city or embarking on scenic road trips. Choose from a wide selection of well-maintained vehicles designed for comfort, performance, and style. With flexible plans, affordable rates, and 24/7 support, every drive becomes a hassle-free journey.
            </h5>
          </div>
        </div>
      </div>


      <div className='container'>
        <h3 style={{ textAlign: 'center', marginTop: "20px", marginBottom: "20px" }}>Available Cars</h3>
      </div>

      <div className="container" >
        <div className="row" style={{ marginBottom: '20px' }}>
          {cars.map((car) => (
            <div className="col" key={car.id} style={{ marginBottom: '20px' }}>
              <div className="card wrapper" style={{ width: '18rem' }}>
                <img src={car.img} className="card-img-top" alt={car.name} style={{ height: '171px', width: '400px' }} />
                <div className="card-body">
                  <p className="card-text" style={{ color: 'black' }}>
                    {car.description}
                  </p>
                  <p className="card-text price" style={{ textAlign: 'center' }}>
                    Price: &#8377; {car.price}/hr
                  </p>
                  <button className="btn btn-primary" onClick={() => addToCart(car)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>


  )
}

export default CarList