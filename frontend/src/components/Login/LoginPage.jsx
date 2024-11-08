import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../images/logo_.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send POST request to the backend for login
      const response = await axios.post('http://localhost:8000/api/v1/users/login', { email, password });

      // Store JWT token in localStorage for session persistence
      localStorage.setItem('jwtToken', response.data.token);

      // Redirect to the homepage or user dashboard after successful login
      navigate("/home"); // Adjust this based on your app's routes
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-dark">
      <div className="flex justify-center bg-white w-[900px] flex-wrap">
        <div className="flex flex-col items-center justify-center w-[50%] p-12">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-gray-600 my-2 font-semibold">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 rounded-3xl border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medium"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-600 my-2 font-semibold">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 rounded-3xl border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medium"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full px-3 py-2 rounded-3xl text-white bg-medium hover:bg-dark"
              >
                Sign in
              </button>
            </form>

            {error && <p className="mt-4 text-center text-red-500">{error}</p>}

            <p className="mt-4 text-center text-gray-500">
              Don't have an account yet?{" "}
              <Link to="/register" className="text-medium hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        <div className="w-[50%] bg-gradient-to-r from-dark to-gray-500 flex justify-center items-center flex-col text-center p-10 text-white">
          <h1 className="text-3xl mb-6 font-semibold">Sign In to your account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!</p>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
