import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../utils/fetch";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      dispatch(fetchRegister(data));
    }
  };

  return (
    <main className="w-[100vw] h-[100vh] gradientBg flex justify-center items-center font-urbanist">
      <form
        onSubmit={handleSubmit}
        className="sm:w-1/2 w-2/3 bg-white rounded-md p-3 flex flex-col"
      >
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
            name="username"
            onChange={handleChange}
            required
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required
            className="border outline-0 my-3 lg:w-1/2 w-full sm:p-3 p-2 sm:text-lg text-sm"
          />
        </div>

        {data.password !== data.confirmPassword && (
          <small className="text-center text-tomato">
            Passwords don't match
          </small>
        )}

        <small className="text-center">
          Already have an account?{" "}
          <span
            className="text-lightBlue hover-and-scale"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </small>

        <button className="bg-lightBlue self-center text-white sm:p-3 p-2 mt-5 hover-and-scale">
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Register;
