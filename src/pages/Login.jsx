import React from "react";

const Login = () => {
  return (
    <div className="w-[100vw] h-[100vh] gradientBg flex justify-center items-center font-urbanist">
      <form className="sm:w-1/2 w-2/3 bg-white rounded-md p-3 flex flex-col">
        <h1 className="font-bold text-2xl text-center text-darkBlue">LOGIN</h1>

        <div className="flex flex-col items-center mt-5">
          <input
            type="email"
            placeholder="Email"
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
        </div>

        <small className="text-center">Don't you have an account? <span className="text-lightBlue hover-and-scale">Register</span></small>

        <button className="bg-lightBlue self-center text-white sm:p-3 p-2 mt-5">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
