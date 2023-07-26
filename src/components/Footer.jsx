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
    <footer className="font-urbanist h-[30vh] p-3">
      <div className="md:h-2/3 h-auto flex md:flex-row flex-col justify-center items-center">
        {/* LOGO */}
        <div className="flex items-center justify-center md:w-1/3 w-full h-full">
          <h4 className="md:text-4xl text-2xl font-bold">ShopEazy</h4>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col md:w-1/3 w-full h-full justify-center md:mt-0 mt-3">
          <h5 className="font-bold md:text-2xl md:text-lg text-base h-1/3">Contact Us</h5>

          <ul className="w-full h-2/3 md:mt-0 mt-2">
            <li className="flex items-center mb-3 md:text-base text-sm">
              <AiFillPhone className="mr-2" />
              <span>+90 546 717 74 21</span>
            </li>

            <li className="flex items-center mb-3 md:text-base text-sm">
              <AiOutlineMail className="mr-2" />
              <span>ozcancihan714@gmail.com</span>
            </li>

            <li className="flex">
              <a
                href="https://github.com/Anzcyent"
                target="_blank"
                className="hover-and-scale mr-3"
              >
                <AiFillGithub className="md:text-4xl text-2xl" />
              </a>

              <a
                href="https://instagram.com/Anzcyent"
                target="_blank"
                className="hover-and-scale mr-3"
              >
                <AiFillInstagram
                  className="md:text-4xl text-2xl"
                  style={{ color: "#fe4a0d" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/cihan-özcan-27a94a284/"
                target="_blank"
                className="hover-and-scale mr-3"
              >
                <AiFillLinkedin
                  className="md:text-4xl text-2xl "
                  style={{ color: "#0a66c2" }}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="md:w-1/3 w-full flex flex-col justify-center h-full md:mt-0 mt-5">
          <h5 className="font-bold md:text-2xl md:text-lg text-base h-1/3">About Us</h5>
          <p className="h-2/3 md:text-base text-sm md:mt-0 mt-2">
            <span className="font-semibold">ShopEazy</span> is your ultimate
            destination for a seamless online shopping experience. Discover a
            wide range of top-quality products at unbeatable prices. Our mission
            is to provide excellent customer service and ensure your
            satisfaction with every purchase.
          </p>
        </div>
      </div>
      
      <small className="md:h-1/3 h-auto flex lg:justify-center justify-start items-center mt-5">
        © 2023 All rights reserved. ShopEazy | Privacy Policy | Terms of Service
      </small>
    </footer>
  );
};

export default Footer;
