import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const { quantity } = useSelector((state) => state.cartReducer);
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

      <AiOutlineMenu
        onClick={() => setOpenMenu((prev) => !prev)}
        className="w-1/2 lg:hidden text-lg hover-and-scale"
      />

      {/* RESPONSIVE MENU */}
      {openMenu && (
        <div className="lg:hidden absolute bg-lightBlue right-0 top-[100%] w-1/2 h-[40vh] flex flex-col p-3 text-sm flip">
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
