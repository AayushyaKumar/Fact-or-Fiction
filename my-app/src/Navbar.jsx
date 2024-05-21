import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white-800 py-2 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black flex justify-left text-2xl ">
          FACT OR FICTION
        </h1>
        <div className="flex items-center space-x-14">
          <button className=" bg-violet-500 text-black py-1.5  px-7 rounded hover:bg-violet-700">
            Sign Up
          </button>
          <button className=" bg-violet-500 text-black py-1.5 px-7 rounded hover:bg-violet-700">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
