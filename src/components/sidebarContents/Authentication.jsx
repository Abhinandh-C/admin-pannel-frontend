import React, { useState } from 'react';
import Axios from '../Axios/axios'; // Axios instance configured with baseURL
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleValidation = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('/login', { email, password }, {headers:{
        'Content-Type':'application/json'
      }, withCredentials: true });


      // Assuming backend responds with { token: "..." } or { user, token }
      if (response.status === 200) {
        const { token, user } = response.data;

        // Store token in localStorage or sessionStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Navigate to protected route
        navigate('/home');
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      if (error.response && error.response.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleValidation} className="p-4 bg-white rounded shadow" style={{ minWidth: '300px' }}>
        <h4 className="mb-3 text-center">Admin Login</h4>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Authentication;
