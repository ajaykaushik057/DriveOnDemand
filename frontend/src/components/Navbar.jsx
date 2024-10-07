import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { LocationContext } from "../context/LocationContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useContext(LocationContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#243642] px-6 py-4 md:px-[100px]   left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white text-xl font-bold">DOD</div>

        <div className="hidden md:flex justify-center flex-1 ml-[150px] space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[18px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[18px] transition-all duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[18px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[18px] transition-all duration-200"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[18px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[18px] transition-all duration-200"
            }
          >
            About
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[22px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[22px] transition-all duration-200"
            }
          >
            <IoNotifications />
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[22px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[22px] transition-all duration-200"
            }
          >
            <FaUser />
          </NavLink>
          <p className="flex items-center gap-[10px] text-[#FF0000]">
            <FaLocationDot />
            {location.city}
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white bg-opacity-90 rounded-md">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block text-black bg-gray-200 px-4 py-3 rounded-md mb-1"
                : "block text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-md mb-1 transition-all duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block text-black bg-gray-200 px-4 py-3 rounded-md mb-1"
                : "block text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-md mb-1 transition-all duration-200"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block text-black bg-gray-200 px-4 py-3 rounded-md mb-1"
                : "block text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-md mb-1 transition-all duration-200"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notification"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block text-black bg-gray-200 px-4 py-3 rounded-md mb-1"
                : "block text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-md mb-1 transition-all duration-200"
            }
          >
            <IoNotifications />
          </NavLink>
          <NavLink
            to="/user"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block text-black bg-gray-200 px-4 py-3 rounded-md"
                : "block text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-md transition-all duration-200"
            }
          >
            <FaUser />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
