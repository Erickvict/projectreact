// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import './Login.css';
// import { Link,useNavigate } from 'react-router-dom';


// const Login = () => {


//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//       email: '',
//       password: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//       setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };







//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//         .post('http://localhost:8000/login', credentials)
//         .then((res) => {
//             console.log(res.data);
//             navigate('/userhome'); // Redirect to the user home page upon successful login
//         })
//         .catch((err) => {
//             console.error(err.response?.data || err.message);
//             setError(err.response?.data?.message || 'Login failed');
//         });
// };












//   return (
//     <>
//       <div className='one'>
//         <div class="d-flex justify-content-center align-items-center vh-100 main" >
//           <div class="card p-4 shadow" style={{ width: 500 }}>
//             <h3 class="text-center">LOGIN</h3>
//             <p class="text-center d-flex justify-content-center">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//               </svg>
//             </p>
//             {error && <div className="alert alert-danger">{error}</div>}

//             <form onSubmit={handleLogin}>
//               <div class="mb-3">
//                 <label for="username" class="form-label" style={{ display: "flex", alignitems: "center", gap: "0.5rem" }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
//                     <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
//                   </svg>
//                   Email
//                 </label>
//                 <input type="text" name='email' value={credentials.email}  onChange={handleChange} class="form-control" placeholder="Username" />

//               </div>
//               <div class="mb-3">
//                 <label for="password" class="form-label" style={{ display: "flex", alignitems: "center", gap: "0.5rem" }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
//                     <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
//                   </svg>Password
//                 </label>
//                 <input type="password" name='password' value={credentials.password}  onChange={handleChange} class="form-control" placeholder="Password" required />
//               </div>
//               <div class="mb-3">
//                 <a href="#" class="text-decoration-none">Forgot Password?</a>
//               </div>
//              <button type="submit" class="btn btn-primary w-100 mb-2">Login</button>
//               <p class="text-center">OR</p>
//               <Link to='/'><button type="button" class="btn btn-secondary w-100 mb-2">Back to Main Page</button></Link>
//                <Link to='/signup'><button type="button" class="btn btn-outline-primary w-100 mb-2">Need an Account? Create One</button></Link>
//               <button type="button" class="btn btn-outline-secondary w-100">If you are an Admin? Click Here</button>
//             </form>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Login




import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To store error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error
    setError(null);

    const loginData = { email, password };

    axios
      .post('http://localhost:8000/login', loginData)
      .then((res) => {
        console.log('Login successful:', res.data);
        navigate('/userhome');
      })
      .catch((err) => {
        // Handle backend errors (e.g., invalid credentials)
        if (err.response) {
          // Extract error message from backend response
          setError(err.response.data.message || 'Login failed');
        } else {
          setError('Server error');
        }
      });
  };

  return (
    <div className='one'>
      <div className="d-flex justify-content-center align-items-center vh-100 main">
        <div className="card p-4 shadow" style={{ width: 500 }}>
          <h3 className="text-center">LOGIN</h3>

          <p className="text-center d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </p>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Email</label>
              <input
                type="email"
                id="username"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
            <p className="text-center">OR</p>
            <Link to='/signup'>
              <button type="button" className="btn btn-outline-primary w-100 mb-2">Need an Account? Create One</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
