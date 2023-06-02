import React from "react";
import Auth0LoginButton from "../Auth0/Auth0LoginButton";
import Auth0LogoutButton from "../Auth0/Auth0LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  // console.log("isAuthenticated=", isAuthenticated);
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="sticky w-full z-20 navbar bg-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/ddtzbznea/image/upload/v1685681143/Dollar__2_-removebg-preview_1_epcnw3.jpg"
            className="h-8 mr-2"
            alt="DollarSense"
          />
          <span className="navbar-brand text-[#fccc73] font-extrabold text-4xl">
            DollarSense
          </span>
        </a>
        <div className="flex md:order-2">
          <Auth0LoginButton value="Login" />
          <Auth0LogoutButton value="Logout" />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4
           border rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 font-serif"
          >
            <li>
              <a
                href="/"
                font-bold
                text-gray-500
                className="block py-2 pl-3 pr-4 md:p-0 nav-links"
                aria-current="page"
              >
                <span className=" font-bold text-[#341413]">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 rounded md:p-0 nav-links"
              >
                <span className=" font-bold text-[#341413]">About</span>
              </a>
            </li>
            {isAuthenticated && (
              <li>
                <a
                  href="/dashboard"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 nav-links"
                >
                  <span className=" font-bold text-[#341413]">Dashboard</span>
                </a>
              </li>
            )}

            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 rounded md:p-0 nav-links "
              >
                <span className=" font-bold text-[#341413]">Feedback</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
