import React, { useState } from 'react';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-black md:h-16 flex justify-between items-center p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center w-full md:w-auto">
          <div className="md:hidden mr-4">
            <button
              onClick={toggleNav}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="text-2xl font-bold text-white">
            <img src="../public/img/logo.png" className="h-14 w-auto" alt="Logo" />
          </div>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-6 transition-all duration-500 ease-in-out ${
            isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } w-full md:w-auto overflow-hidden md:opacity-100 md:max-h-none`}
        >
          <ul className="md:flex md:space-x-6 mt-4 md:mt-0 mr-5  font-semibold">
            <li className="my-2 md:my-0">
              <a href="#" className="text-white hover:text-blue-400">Home</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white hover:text-blue-400">About</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white hover:text-blue-400">Education</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white hover:text-blue-400">Skills</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-white hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
