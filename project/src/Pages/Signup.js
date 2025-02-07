// import React, { useState } from 'react'
// import './Login.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { emailValidation,passwordValidation } from '../Validation/regex';
// const Signup = () => {

// const[formdata,setFormdata]=useState({
//     fullname:"",
//     email:"",
//     password:"",
// })
// const [errorMessage,seterrorMessage]=useState("");



// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata({ ...formdata, [name]: value });

//     // Clear error message dynamically if the input becomes valid
//     if (name === 'email' && emailValidation(value)) {
//       seterrorMessage('');
//     }
//     if (name === 'password' && passwordValidation(value)) {
//       seterrorMessage('');
//     }

//   };


// const handleSubmit=(e)=>
// {
//     e.preventDefault();
//     axios.post("http://localhost:6000/add",values)
//     .then(res=>console.log(res).catch(err=>console.log(err))
//     )
//     if(!emailValidation(formdata.email))
//         return seterrorMessage('Please enter valid email id');
//     if(!passwordValidation(formdata.password))
//         return seterrorMessage('Please should contain minimum 8 character with uppercase,lowercase,numbers and special characters');
    
    
// }

//     return (
//         <>
//             <div className='one'>
//                 <div class="d-flex justify-content-center align-items-center vh-100 main">
//                     <div class="card p-4 shadow" style={{ width: 450 }}>
//                         <h3 class="text-center">Save your Account Now</h3>

//                         <p class="text-center d-flex justify-content-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                             </svg>
//                         </p>
//                         {errorMessage.length>0 && <div style={{marginBottom:"5px",color:"red"}}>{errorMessage}</div>}
//                         <form onSubmit={handleSubmit}>
//                             <div class="mb-3">
//                                 <label for="username" class="form-label" style={{ display: "flex", alignitems: "center", gap: "0.5rem" }}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//                                         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//                                         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
//                                     </svg>Fullname
//                                 </label>
//                                 <input type="text"  name="fullname" class="form-control" placeholder="Fullname"  onChange={handleChange}/>
//                             </div>

//                             <div class="mb-3">
//                                 <label for="username" class="form-label" style={{ display: "flex", alignitems: "center", gap: "0.5rem" }}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
//                                         <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
//                                     </svg> Email
//                                 </label>
//                                 <input type="text" name="email" onChange={handleChange} class="form-control" placeholder="Email"  />
//                             </div>



//                             <div class="mb-3">
//                                 <label for="username" class="form-label" style={{ display: "flex", alignitems: "center", gap: "0.5rem" }}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
//                                         <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
//                                     </svg> Password
//                                 </label>
//                                 <input type="password"  name="password"  onChange={handleChange} class="form-control" placeholder="Password"  />
//                             </div>

//                            <button type="submit" class="btn btn-primary w-100 mb-2">SignUp</button>

//                             <Link to='/login'><button type="button" class="btn btn-secondary w-100 mb-2">Already have an Account</button></Link>
//                              <Link to='/'><button type="button" class="btn btn-outline-primary w-100 mb-2">Back to Main Page</button></Link>

//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Signup







import React, { useState} from 'react';
import './Login.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

const Signup = () => {
    const [formdata, setFormdata] = useState({
        fullname: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
   const handleChange=(e)=>
   {
    setFormdata({...formdata,[e.target.name]:e.target.value})
   }
   

   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/add", {
        full_name: formdata.fullname,
        email_id: formdata.email,
        password: formdata.password,
    })
   .then((res)=>{
    console.log(res.data);
    navigate('/login');
   })
    
    .catch(err => console.error('Error:', err.response?.data || err.message));
};



    return (
        <div className='one'>
            <div className="d-flex justify-content-center align-items-center vh-100 main">
                <div className="card p-4 shadow" style={{ width: 450 }}>
                    <h3 className="text-center">Save your Account Now</h3>

                    <p className="text-center d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">
                                Fullname
                            </label>
                            <input type="text" name="fullname" className="form-control" placeholder="Fullname" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="text" name="email" className="form-control" placeholder="Email" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-2">SignUp</button>

                        <Link to='/login'><button type="button" className="btn btn-secondary w-100 mb-2">Already have an Account</button></Link>
                        <Link to='/'><button type="button" className="btn btn-outline-primary w-100 mb-2">Back to Main Page</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
