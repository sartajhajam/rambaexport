import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      <img src={assets.logo} alt="logo" className="w-36 " />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dopdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 min-w-5 filter invert"
          />
          <span className="absolute right-[-5px] bottom-[-5px] flex items-center justify-center text-white bg-black w-4 h-4 rounded-full text-[8px] font-bold">
            10
          </span>
        </Link>
        {/* for mobile screen */}
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screens */}
      {visible && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setVisible(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-4 cursor-pointer border-b"
              >
                <img
                  className="h-4 rotate-180" 
                  src={assets.dropdown_icon} 
                  alt=""
                />
                <p className="text-gray-700 font-medium">Back</p>
              </div>
              
              <div className="flex flex-col flex-1">
                <NavLink 
                  className="py-3 px-6 border-b text-gray-700 hover:bg-gray-50 transition-colors" 
                  to="/"
                  onClick={() => setVisible(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  className="py-3 px-6 border-b text-gray-700 hover:bg-gray-50 transition-colors" 
                  to="/collection"
                  onClick={() => setVisible(false)}
                >
                  Collection
                </NavLink>
                <NavLink 
                  className="py-3 px-6 border-b text-gray-700 hover:bg-gray-50 transition-colors" 
                  to="/about"
                  onClick={() => setVisible(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  className="py-3 px-6 border-b text-gray-700 hover:bg-gray-50 transition-colors" 
                  to="/contact"
                  onClick={() => setVisible(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
