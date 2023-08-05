import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import { Badge } from "../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "../utils/fetch";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quantity } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer);

  return (
    <nav className="w-full font-urbanist p-3 bg-darkBlue text-white flex items-center justify-evenly relative">
      <h1
        onClick={() => navigate("/")}
        className="hover-and-scale font-bold lg:w-1/6 w-1/2 flex justify-center sm:text-2xl text-lg"
      >
        ShopEazy
      </h1>

      <div className="w-4/6 flex justify-center items-center text-black lg:flex hidden">
        <input
          type="text"
          className="w-2/3 outline-0 p-2"
          placeholder="Search..."
        />
        <button className="p-2 text-2xl bg-yellow hover-and-scale">
          <FcSearch />
        </button>
      </div>

      {user._id ? (
        <div className="lg:flex hidden w-1/6 justify-center items-center">
          <span className="mr-5 hover-and-scale" onClick={() => navigate("/orders")}>@{user.username}</span>
          <AiOutlineLogout
            onClick={() => dispatch(fetchLogout())}
            title="logout"
            className="mr-5 hover-and-scale"
          />
          <Link to="/cart" className="relative hover-and-scale">
            <AiOutlineShoppingCart />
            <Badge>{quantity}</Badge>
          </Link>
        </div>
      ) : (
        <div className="lg:flex hidden w-1/6 justify-center items-center">
          <Link to="/register" className="mr-5 hover-and-scale">
            REGISTER
          </Link>
          <Link to="/login" className="mr-5 hover-and-scale">
            LOGIN
          </Link>
          <Link to="/cart" className="relative hover-and-scale">
            <AiOutlineShoppingCart />
            <Badge>{quantity}</Badge>
          </Link>
        </div>
      )}

      <AiOutlineMenu
        onClick={() => setOpenMenu((prev) => !prev)}
        className="w-1/2 lg:hidden text-lg hover-and-scale"
      />

      {/* RESPONSIVE MENU */}
      {openMenu && user._id ? (
        <div className="lg:hidden absolute bg-lightBlue right-0 top-[100%] w-1/2 h-[40vh] flex flex-col justify-center items-center font-bold p-3 text-sm flip z-20">
          <span className="mb-5 hover-and-scale" onClick={() => navigate("/orders")}>@{user.username}</span>
          <AiOutlineLogout
            onClick={() => dispatch(fetchLogout())}
            title="logout"
            className=" mb-5 hover-and-scale"
          />
          <Link to="/cart" className="relative hover-and-scale">
            <AiOutlineShoppingCart />
            <Badge>{quantity}</Badge>
          </Link>
        </div>
      ) : openMenu && !user._id && (
        <div className="lg:hidden absolute bg-lightBlue right-0 top-[100%] w-1/2 h-[40vh] flex flex-col justify-center items-center font-bold p-3 text-sm flip z-20">
          <Link to="/register" className="mb-5 hover-and-scale">
            REGISTER
          </Link>
          <Link to="/login" className="mb-5 hover-and-scale">
            LOGIN
          </Link>
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart />
            <Badge>{quantity}</Badge>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
