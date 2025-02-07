import React from 'react'
import "./Home.css";
import './CarList.css';
import { Carousel } from 'bootstrap';
import Footer from './Footer.js';
import bike1 from '../Images/bike1.png';
import car1 from '../Images/car1.png';
import bike2 from '../Images/bike2.png';
import car2 from '../Images/car2.png';
import bike3 from '../Images/bike3.png';
import car3 from '../Images/car3.png';
import bike4 from '../Images/bike4.png';
import car4 from '../Images/car4.png';
import bike5 from '../Images/bike5.png';
import car5 from '../Images/car5.png';
import bike6 from '../Images/bike6.png';
import car6 from '../Images/car6.png';
import bike7 from '../Images/bike7.png';
import car7 from '../Images/car7.png';
import carmain from './carmain.jpg';
import bike45 from '../Images/bike45.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <>

{/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bike1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={car1}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={bike2}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={car2}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={bike45}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={car3}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={bike4}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={car4}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={bike5}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={car5}  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


            <div className='container' style={{ marginTop: "30px", marginBottom: "40px" }}>
                <div className='row'>
                    <div className='col '>
                        <div className='main mainh'>
                            <h1>Easy and <span style={{ color: "red" }}>Fast Way</span> to Rent your Car/Bike </h1>
                            <Link to='/signup'><button className='btn btn-success'>Book Now</button></Link>
                        </div>
                    </div>
                    <div className='col wrapper'>
                        <img src={carmain} className="carmain " alt='' />
                    </div>
                </div>

            </div>

            {/* latestInventory */}

            <div className='container' style={{ marginTop: "30px" }}>
                <h3 style={{ textAlign: 'center' }}>Latest Inventory</h3>
            </div>
            <div className='container' style={{ marginTop: "30px" }}>
                <div className='row'>
                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={bike3} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}> Enjoy unmatched agility with lightweight frames designed for smooth handling and maneuverability.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={car3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}> Provide a high level of comfort premium materials and spacious interiors to serene driving experience.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem', height: "100%" }}>
                            <img src={bike5} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}> Efficient systems like fuel injection, lightweight and optimized engine fuel economy without compromising power.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container' style={{ marginTop: "30px" }}>
                <div className='row'>
                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={car7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Enjoy smooth rides on all terrains with advanced suspension systems for superior stability and handling.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={bike6} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Eco-Friendly Options: Reduce emissions with electric bikes offering quiet performance and sustainable energy.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={car4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Advanced assistance systems such as adaptive cruise control, automatic emergency braking,360-degree camera system.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='container' style={{ marginTop: "30px" }}>
                <div className='row'>
                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem', height: "100%" }}>
                            <img src={bike2} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Off-Road Excellence: Conquer challenging terrains with precision-engineered suspension for off-road adventures.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem' }}>
                            <img src={car2} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Presenting a stylish and modern exterior that reflects the premium with attention to detail and craftsmanship.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card wrapper" style={{ width: '18rem', height: "100%" }}>
                            <img src={bike7} class="card-img-top" alt="..." style={{ height: '171px', width: '400px' }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "black" }}>Ergonomic Comfort: Ride comfortably with seats and handlebars tailored for long journeys and optimal posture.</p>
                                <Link to='/signup'> <p class="buy-now-button">Buy Now</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container" style={{ marginTop: "40px" }} >
                <div className="row">
                    <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                        Why <span style={{ color: "red" }}>Choose us</span>
                    </h3>
                </div>

                <div className="row text-center">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.502a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.503-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.507l-4.146 4.147a.5.5 0 0 1-.508-.508L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mt-3">24 Hour Support</h3>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16">
                                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mt-3">Best Price</h3>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.507L5.354 7.854a.5.5 0 1 1-.508-.508l3-3a.5.5 0 0 1 .508 0l3 3a.5.5 0 0 1-.508.508L8.5 5.507z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mt-3">Verified License</h3>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.508.508L7.293 8l-2.647 2.646a.5.5 0 0 0 .508.508L8 8.507l2.646 2.647a.5.5 0 0 0 .508-.508L8.507 8l2.647-2.646a.5.5 0 0 0-.508-.508L8 7.293z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mt-3">Cancellation Free</h3>
                        </div>
                    </div>
                </div>
            </div>


            {/* achievements */}


            <div className="container" style={{ marginTop: "40px" }}>
                <div className="row">
                    <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                        <span style={{ color: "red" }}>Achievements</span>
                    </h3>
                </div>

                <div className="row text-center">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <h3 style={{ fontWeight: 'Bold' }}>4000+</h3>
                        </div>
                        <div>
                            <h5 className="mt-3">Active Member</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <h3 style={{ fontWeight: 'Bold' }}>3000+</h3>
                        </div>
                        <div>
                            <h5 className="mt-3">Car colors</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <h3 style={{ fontWeight: 'Bold' }}>6000+</h3>
                        </div>
                        <div>
                            <h5 className="mt-3">Car Model</h5>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="phone" style={{ width: '100px', margin: '0 auto' }}>
                            <h3 style={{ fontWeight: 'Bold' }}>3000+</h3>
                        </div>
                        <div>
                            <h5 className="mt-3">10K Positive Rating</h5>
                        </div>
                    </div>
                </div>
            </div>


        <Footer/>


        </>
    )
}

export default Home