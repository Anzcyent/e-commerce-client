import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] gradientBg flex justify-center items-center font-urbanist">
      <form className="sm:w-1/2 w-2/3 bg-white rounded-md p-3 flex flex-col">
        <div className="flex justify-between text-darkBlue text-2xl">
          <h1 className="font-bold ">REGISTER</h1>
          <small onClick={() => navigate("/")} className="hover-and-scale">
            <AiOutlineArrowLeft />
          </small>
        </div>

        <div className="flex flex-col items-center mt-5">
          <input
            type="text"
            placeholder="Username"
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
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

          <input
            type="password"
            placeholder="Confirm Password"
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
        </div>

        <small className="text-center">
          Already have an account?{" "}
          <span className="text-lightBlue hover-and-scale">Login</span>
        </small>

        <button className="bg-lightBlue self-center text-white sm:p-3 p-2 mt-5 hover-and-scale">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Register;
