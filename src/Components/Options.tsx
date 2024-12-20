// import React from 'react'

import { Link } from "react-router-dom";

function Options() {
  return (
    <>
      <div className="w-full h-max flex items-center justify-center">
        <div className="w-10/12 max-w-screen-xl px-4 py-2 bg-green-700 text-white">
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer py-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 fill-current" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
            </summary>
            <div className="absolute z-10 top-full left-0 w-full bg-green flex flex-col space-y-2 p-4">
              <Link to="/" className="block py-1 hover:bg-green-700">
                Home
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                Engineering
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                General Aptitude
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                Computer
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                GK
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                ITI
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                Previous Exams
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                CBSE 12
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                CBSE 11
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                CBSE 10
              </Link>
              <Link to="/" className="block py-1 hover:bg-green-700">
                CBSE 9
              </Link>
            </div>
          </details>

          <div className="hidden md:flex space-x-4 items-center justify-start overflow-x-auto">
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              Engineering
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              General Aptitude
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              Computer
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              GK
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              ITI
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              Previous Exams
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              CBSE 12
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              CBSE 11
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              CBSE 10
            </Link>
            <Link
              to="/"
              className="flex-shrink-0 whitespace-nowrap hover:text-gray-200 transition-colors"
            >
              CBSE 9
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
