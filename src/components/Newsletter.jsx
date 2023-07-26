import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Newsletter = () => {
  return (
    <section className="w-full h-[50vh] bg-biceBlue text-white p-3 flex flex-col justify-center items-center font-urbanist">
      <h1 className="text-4xl font-bold tracking-wider my-5">
        <label htmlFor="email">Newsletter</label>
      </h1>
      <div className="w-2/3 flex">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-3 py-1 outline-0 text-black font-bold rounded-tl-sm rounded-bl-sm"
          id="email"
        />
        <button className="bg-white text-black rounded-tr-sm rounded-br-sm border-l-[2px] hover-and-scale">
          <AiOutlineSend className="text-4xl px-2" />
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
