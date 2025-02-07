import React from 'react';
import './UserHome.css';
import car1 from '../Images/car1.png';
import bike8 from '../Images/bike8.png';
import UserNav from './UserNav';
import { Link } from 'react-router-dom';

const UserHome = () => {
    return (
        <>
            <UserNav />
            <div className="custom-wrapper" style={{overflow:"hidden"}}>
                <div className="container-fluid center-screen">
                    <div className="container-custom">
                        <div className="row">
                        <h2 style={{ textAlign: "center" }}>Welcome Back</h2>
                            <div className="col-md-6 image-col">
                                <img src={car1} alt="Car" className="img-fluid" style={{ height: '400px', width: '400px' }} />
                                <Link to='/carlist' className="text-decoration-none"><h4>Buy a Car</h4></Link>
                            </div>
                            <div className="col-md-6 image-col">
                                <img src={bike8} alt="Bike" className="img-fluid" style={{ height: '400px', width: '400px' }} />
                                <Link to='/bikelist' className="text-decoration-none"><h4>Buy a Bike</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserHome