import React from 'react';
import carlogo from '../Pages/carlogo.png';
import { Link } from 'react-router-dom';
const UserDetails = () => {
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
                 <Link to='/'> <button className="btn btn-outline-warning" type="submit">
                    Logout
                  </button></Link>
                </div>
              </div>
            </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          backgroundColor: "#f0f8ff",
        }}
      >
        <div style={{ width: "80%" }}>
          <h3 style={{ textAlign: "center" }}>Booking Details</h3>
          <div className="container" style={{ backgroundColor: "aqua", padding: "20px", borderRadius: "8px" }}>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="fullname"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput2" className="form-label">
                    D.O.B
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput2"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput3" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput4" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput4"
                    placeholder="PhoneNumber"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ backgroundColor: "aqua", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput5" className="form-label">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput5"
                    placeholder="fullname"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput6" className="form-label">
                    Guardian Ph.No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput6"
                    placeholder="PhoneNumber"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput7" className="form-label">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput7"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput8" className="form-label">
                    Driving License No:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput8"
                    required
                  />
                </div>
              </div>
            </div>
          </div>



          <div className="container" style={{ backgroundColor: "aqua", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput5" className="form-label">
                    Rental Start Date
                  </label>
                  <input
                   type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput5"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput6" className="form-label" >
                   Rental End Date
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput6"
                    
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput7" className="form-label">
                   Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput7"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput8" className="form-label">
                  Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput8"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
           <Link to='/cardpage'> <button style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "4px" }} type="button" class="btn btn-danger">Cancel</button></Link>
            <button style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "4px",marginLeft:"10px" }} type="button" class="btn btn-warning">Next</button>
          </div>
        </div>
      </div>












    </>
  )
}

export default UserDetails