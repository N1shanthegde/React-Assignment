// import React from 'react'
import { Link } from 'react-router-dom';

function MainBody() {
  return (
    <>
      <div className="w-full flex justify-center my-4">
        <div className="relative w-10/12 flex flex-col md:flex-row md:h-screen">
          <ul className="w-full md:w-1/2 md:absolute md:left-0">
            <li className="py-5">
              <Link to="/quiz" className="text-blue-700 hover:underline">
                Simple Interest
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Percentage
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Time and Work
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Volume and Surface Area
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Problems on Trains
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Alligation or Mixture
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Area
              </Link>
            </li>
          </ul>
          <ul className="w-full md:w-1/2 md:absolute md:left-1/2">
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Profit and Loss
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Time and Distance
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Problems on H.C.F and L.C.M
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Compound Interest
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Pipes and Cistern
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Boats and Streams
              </Link>
            </li>
            <li className="py-5">
              <Link to="" className="text-blue-700 hover:underline">
                Height and Distance
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainBody;
