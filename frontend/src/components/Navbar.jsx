<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_.png";

=======
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { LocationContext } from "../context/LocationContext";
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useContext(LocationContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-dark">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white focus:bg-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/host"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white  focus:bg-gray-700"
                >
                  Become A Host
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white  focus:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white  focus:bg-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-medium p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-medium  focus:bg-gray-700"
            >
              Login
            </Link>

            {/* Profile dropdown */}
            <div className="relative ml-3 ">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-medium text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {dropdown && (
                <div
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
=======
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-3 py-2 rounded-md text-[18px]"
                : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[18px] transition-all duration-200"
            }
          >
            Contact
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
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
    </nav>
  );
};

export default Navbar;
