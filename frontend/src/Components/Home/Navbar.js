import React from "react";
import Auth0LoginButton from "../Auth0/Auth0LoginButton";

const Navbar = () => {
  return (
    <nav class="sticky w-full z-20 navbar bg-gray-100">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="DollarSense"
          />
          <span class="navbar-brand">DollarSense</span>
        </a>
        <div class="flex md:order-2">
          <Auth0LoginButton value="Login" />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
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
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 md:p-0 nav-links"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                class="block py-2 pl-3 pr-4 rounded md:p-0 nav-links"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                class="block py-2 pl-3 pr-4 rounded md:p-0 nav-links"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
