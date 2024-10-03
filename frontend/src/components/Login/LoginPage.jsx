import React from "react";
import { Link } from "react-router-dom";
import Logo from  '../../images/logo_.png';


function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-dark ">
      <div className="flex justify-center bg-white w-[900px] flex-wrap">
        <div className="flex flex-col items-center justify-center w-[50%] p-12">
          <div className="w-full max-w-md ">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>

            <form className="space-y-4">
              <div >
                <label htmlFor="email" className="block text-gray-600 my-2 font-semibold ">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2  rounded-3xl border-none bg-gray-100  focus:outline-none focus:ring-2 focus:ring-medium "
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password"  className="block text-gray-600 my-2 font-semibold">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2  rounded-3xl border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-medium"
                  placeholder="Enter your password"
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

            <p className="mt-4 text-center text-gray-500">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-medium hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[50%]  bg-gradient-to-r from-dark to-gray-500 flex justify-center items-center flex-col text-center p-10 text-white">
          <h1 className="text-3xl mb-6 font-semibold">Sign In your account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae!</p>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
