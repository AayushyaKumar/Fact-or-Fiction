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
          <NavLink to="/signup"
           className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
            Sign Up
            
          </NavLink>
        </div>
      </div>
     
    </nav>
     
  );
};


