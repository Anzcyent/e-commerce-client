import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full font-urbanist p-3 bg-darkBlue text-white flex items-center justify-evenly relative">
      <h1 className="font-bold lg:w-1/6 w-1/2 flex justify-center sm:text-2xl text-lg">
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

      <div className="lg:flex hidden w-1/6 justify-center">
        <a href="#" className="mr-5">
          REGISTER
        </a>
        <a href="#">LOGIN</a>
      </div>

      <AiOutlineMenu onClick={() => setOpenMenu(prev => !prev)} className="w-1/2 lg:hidden text-lg hover-and-scale" />

      {/* RESPONSIVE MENU */}
      {openMenu && (
        <div className="lg:hidden absolute bg-lightBlue right-0 top-[100%] w-1/2 h-[40vh] flex flex-col p-3 text-sm flip">
          <a href="#" className="mb-5 hover-and-scale">
            REGISTER
          </a>
          <a href="#" className="hover-and-scale">
            LOGIN
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
