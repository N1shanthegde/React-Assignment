// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/mcqlogo.png";
function NavBar() {
  return (
    <nav className="w-full h-20 flex items-center justify-center">
      <div className="w-10/12 h-4/5 flex items-center justify-between max-sm:justify-center">
        <div className="w-80 h-4/5 ">
          <Link to="/"><img
            src={logo}
            alt="MCQ-QUESTIONS"
            className="flex items-center h-full"
          /></Link>
        </div>
        <div className="w-80 h-3/5 m-2 bg-current flex items-center max-sm:hidden">
          
          
          <input type="text" className="w-11/12 h-full pl-3 outline-0 border rounded-sm" placeholder="Search here..."/>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
