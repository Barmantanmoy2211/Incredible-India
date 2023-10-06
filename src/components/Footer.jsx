// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto bg-[#f9fafb] max-w-full bg-opacity-75 grid">
      <div className="flex flex-col md:flex-row items-center justify-between text-black-500 h-20 ">
        <p className="mb-4 md:mb-0 md:text-xl mx-96">Travel with Us</p>

        <div className="flex mx-96">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About us
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-purple-500 to-pink-500 h-12 max-w-full flex items-center justify-center my-2">
        <p className="text-white items-center text-lg text-center">
          &copy; {new Date().getFullYear()} Indian Heritage and Culture
        </p>
      </div>
    </footer>
  );
}

export default Footer;
