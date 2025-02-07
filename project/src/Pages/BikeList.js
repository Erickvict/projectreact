import React, { useContext } from 'react';
import { CartContext } from './CardContext.js';
import Footer from './Footer.js';
import carlogo from './carlogo.png'
import './BikeList.css';
import bike1 from '../Images/bike1.png';
import bike2 from '../Images/bike2.png';
import bike3 from '../Images/bike3.png';
import bike4 from '../Images/bike4.png';
import bike5 from '../Images/bike5.png';
import bike6 from '../Images/bike6.png';
import bike7 from '../Images/bike7.png';
import bike8 from '../Images/bike8.png';
import bike9 from '../Images/bike9.png';
import bike10 from '../Images/bike10.png';
import bike11 from '../Images/bike11.png';
import bike12 from '../Images/bike12.png';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";



const BikeList = () => {
   const { addToCart, cart } = useContext(CartContext);

  const bikes=[
      {
        id: 1,
        name: 'Bike Model 1',
        price: 1500,
        img: bike12,
        description: "Basic comfort and convenience features, good fuel economy, suitable for city and highway driving.",
      },
      {
        id: 2,
        name: 'Bike Model 2',
        price: 2000,
        img: bike11,
        description: "Interchangeable parts, adjustable foot pegs, and customizable offer a personalized riding experience.",
      },
      {
        id: 3,
        name: 'Bike Model 3',
        price: 3000,
        img: bike10,
        description: "Trail-ready features like knobby tires, skid plates, and long-travel suspensions make more enjoyable.",
      },
      {
        id: 4,
        name: 'Bike Model 4',
        price: 4000,
        img: bike4,
        description: "Electric drivetrains, regenerative braking, and energy-efficient lighting combine sustainability with performance.",
      },
      {
        id: 5,
        name: 'Bike Model 5',
        price: 6000,
        img: bike5,
        description: "Rain modes, waterproof electronics, and heated seats ensure comfort and performance in any weather.",
      },
      {
        id: 6,
        name: 'Bike Model 6',
        price: 6000,
        img: bike6,
        description: "Smart helmets, integrated cameras, and voice-activated controls make modern biking smarter than ever.",
      },
      {
        id: 7,
        name: 'Bike Model 7',
        price: 5000,
        img: bike7,
        description: "Heads-up displays, biometric monitoring, and AI-powered diagnostics provide a futuristic and personalized riding experience.",
      },
      {
        id: 8,
        name: 'Bike Model 8',
        price: 5000,
        img: bike8,
        description: "High-end components like quick shifters, slipper clutches, and fully adjustable suspensions elevate riding performance.",
      },
      {
        id: 9,
        name: 'Bike Model 9',
        price: 3000,
        img: bike9,
        description: "Touring-friendly features like saddle bags, large fuel tanks, and windshields ensure comfort on extended rides.",
      },
      {
        id: 10,
        name: 'Bike Model 10',
        price: 1500,
        img: bike3,
        description: "Scooters with electric start,optimized engine tuning offer excellent fuel efficiency and responsive performance.",
      },
      {
        id: 11,
        name: 'Bike Model 11',
        price: 3000,
        img: bike2,
        description: "Premium details such as LED lighting, aerodynamic fairings, and custom paint jobs blend style with functionality.",
      }, {
        id: 12,
        name: 'Bike Model 12',
        price: 6500,
        img: bike1,
        description: "Advanced features like ABS, traction control, and cornering lights enhance safety and control on every ride.",
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

 <Link to='/carlist'><button className="btn btn-outline-primary" style={{ padding: '10px' }}>
        <IoIosArrowBack size={40} role='button' />
      </button></Link>



      <div className="container">
        <div className="row align-items-center">
          <div className="col" style={{ border: "1px solid black", borderRadius: "10px", padding: "10px" }}>
            <h5>
              Experience the freedom of the open road with our premium bike rental service, perfect for exploring your city or embarking on scenic road trips. Choose from a wide selection of well-maintained vehicles designed for comfort, performance, and style. With flexible plans, affordable rates, and 24/7 support, every drive becomes a hassle-free journey.
            </h5>
          </div>
        </div>
      </div>


      <div className='container'>
        <h3 style={{ textAlign: 'center', marginTop: "20px", marginBottom: "20px" }}>Available Bikes</h3>
      </div>


      <div className="container" >
        <div className="row" style={{ marginBottom: '20px' }}>
          {bikes.map((bike) => (
            <div className="col" key={bike.id} style={{ marginBottom: '20px' }}>
              <div className="card wrapper" style={{ width: '18rem' }}>
                <img src={bike.img} className="card-img-top" alt={bike.name} style={{ height: '171px', width: '400px' }} />
                <div className="card-body">
                  <p className="card-text" style={{ color: 'black' }}>
                    {bike.description}
                  </p>
                  <p className="card-text price" style={{ textAlign: 'center' }}>
                    Price: &#8377; {bike.price}/hr
                  </p>
                  <button className="btn btn-primary" onClick={() => addToCart(bike)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>






















































































      {/* <div className='container' style={{ marginBottom: "20px" }}>

        <div className='row'>
          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike12} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>  Basic comfort and convenience features, good fuel economy,
                suitable for city and highway driving.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 1500/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike11} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Interchangeable parts, adjustable foot pegs, and customizable offer a personalized riding experience.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 2000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike10} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>  Trail-ready features like knobby tires, skid plates, and long-travel suspensions make more enjoyable.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 3000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='container' style={{ marginBottom: "20px" }}>
        <div className='row'>
          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike4} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Electric drivetrains, regenerative braking, and energy-efficient lighting combine sustainability with performance.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 4000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike5} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>Rain modes, waterproof electronics, and heated seats ensure comfort and performance in any weather.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 6000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike6} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Smart helmets, integrated cameras, and voice-activated controls make modern biking smarter than ever.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 6000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container' style={{ marginBottom: "20px" }}>
        <div className='row'>
          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike7} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Heads-up displays, biometric monitoring, and AI-powered diagnostics provide a futuristic and personalized riding experience.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 5000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike8} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>High-end components like quick shifters, slipper clutches, and fully adjustable suspensions elevate riding performance.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 5000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike9} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>Touring-friendly features like saddle bags, large fuel tanks, and windshields ensure comfort on extended rides.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 3000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container' style={{ marginBottom: "20px" }}>
        <div className='row'>
          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike3} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Scooters with electric start,optimized engine tuning offer excellent fuel efficiency and responsive performance.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 1500/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike2} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Premium details such as LED lighting, aerodynamic fairings, and custom paint jobs blend style with functionality.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 3000/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card wrapper" style={{ width: '18rem' }}>
              <img src={bike1} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}> Advanced features like ABS, traction control, and cornering lights enhance safety and control on every ride.</p>
                <p class="card-text price" style={{ textAlign: "center" }}>Price: &#8377; 6500/hr</p>
                <p class="buy-now-button">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  )
}

export default BikeList