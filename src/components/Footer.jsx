import React from "react";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col p-3 font-urbanist min-h-[20.07rem] w-full items-center">
      <div className="flex justify-center items-center p-2 md:w-1/3 w-full h-full">
        <h4 className="font-bold md:text-4xl text-2xl">LOGO</h4>
      </div>

      <div className="p-2 md:w-1/3 w-full flex flex-col justify-evenly md:mt-0 mt-5">
        <h5 className="font-bold md:text-2xl text-lg mb-3">Contact Us</h5>

        <ul className="h-full md:text-base text-sm">
          <li className="flex">
            <AiFillPhone className="mr-2" /> +90 546 717 74 21{" "}
          </li>
          <li className="flex">
            <AiOutlineMail className="mr-2" /> ozcancihan714@gmail.com{" "}
          </li>
          <li className="flex mt-3">
            <a
              href="https://github.com/Anzcyent"
              className="hover-and-scale mr-5"
              target="_blank"
            >
              <AiFillGithub className="md:text-4xl text-2xl" />
            </a>
            <a
              href="https://instagram.com/Anzcyent"
              className="hover-and-scale mr-5"
              target="_blank"
            >
              <AiFillInstagram
                className="md:text-4xl text-2xl"
                style={{ color: "#ff3475" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/cihan-özcan-27a94a284/"
              className="hover-and-scale"
              target="_blank"
            >
              <AiFillLinkedin
                className="md:text-4xl text-2xl"
                style={{ color: "#0a66c2" }}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="p-2 md:w-1/3 w-full flex flex-col justify-evenly h-full md:mt-0 mt-5">
        <h5 className="font-bold md:text-2xl text-lg mb-3">About Us</h5>

        <p className="h-full md:text-base text-sm">
          ShopEazy is your ultimate destination for a seamless online shopping
          experience. Discover a wide range of top-quality products at
          unbeatable prices. Our mission is to provide excellent customer
          service and ensure your satisfaction with every purchase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
