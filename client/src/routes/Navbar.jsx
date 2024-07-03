import React from "react";
import { Link,NavLink} from "react-router-dom";
export default function Navbar (){
  return (
  
    <nav className="bg-white-800 py-2 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black flex justify-left text-2xl ">
        🔎 FACT OR FICTION
        </h1>
        <div className="flex items-center space-x-14">
        {/* <Link to="signup" className=" bg-violet-500 text-black py-1.5  px-7 rounded hover:bg-violet-700">
          {/* <button > */}
            {/* Sign Up */}
          {/* </button> */}
          {/* </Link> */} 
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <button>
          <NavLink to="/signup"
           className={({isActive}) =>` hover:bg-violet-700 hover:text-white font-bold py-1.5  px-7 rounded ${isActive ? "bg-violet-600 text-white" : " border-2 border-violet-600"}   lg:hover:bg-transparent lg:border-0  lg:p-0`}>
            Sign Up
            
          </NavLink></button></li>
          
          </ul>
        </div>
      </div>
     
    </nav>
     
  );
};


