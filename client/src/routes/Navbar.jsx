import './../App.css'
import { useState } from 'react';
import { NavLink} from "react-router-dom";
export default function Navbar (){
  const isLoggedIn= window.localStorage.getItem('token')
  // useEffect(() => {

  //   if (localStorage.theme === "dark"){
  //     // setDarkMode(true)
  //     document.documentElement.classList.add("dark")
  //   }else{
  //     // setDarkMode(false)
  //     document.documentElement.classList.remove("dark")
  //   }
  // }, []);
  const [darkMode, setDarkMode] = useState(false)
  const toggle=()=>{
    setDarkMode(!darkMode)
    if(darkMode){
      localStorage.theme ="dark"
    }else{
      localStorage.theme ="light"
    }
  }  
 
return (
  <div  className={`${darkMode && "dark:bg-slate-800"}`}  >
    <nav className="bg-white-800  shadow-lg"  >
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="   flex justify-left text-2xl font-serif">
        🔎 FACT OR FICTION
        </h2>
        <div className="flex items-center space-x-14">
        {/* <Link to="signup" className=" bg-violet-500 text-black py-1.5  px-7 rounded hover:bg-violet-700">
          {/* <button > */}
            {/* Sign Up */}
          {/* </button> */}
          {/* </Link> */} 
         <div>
          <button onClick={toggle}>{darkMode? "🌚":"☀️"}</button>
         </div>
         { isLoggedIn? <ul><li className='text-blue-600 font-semibold'>
         Hello! 👋  {localStorage.getItem('username')}
          </li></ul>: <ul className="flex flex-row  font-medium   lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <button>
          <NavLink to="/signup"
           className={({isActive}) =>` font-bold py-1.5  px-8 mr-5  rounded ${isActive ? "bg-violet-500 text-white " : "border-2 border-violet-600 "}   `}>
            Sign Up
            
          </NavLink></button></li>
          <li>
            {/* isLoggedIn ? <Navigate to="forms"/> :  */}
            <button>
          <NavLink to="/login"
           className={({isActive}) =>` hover:bg-violet-700 hover:text-white font-bold py-1.5  px-8   rounded ${isActive ? "bg-violet-600 text-white" : " bg-violet-600"}    `}>
            Log In
            
          </NavLink></button></li>

          
          </ul>}
         

        </div>
      </div>


     
    </nav>
 
     </div>
     
  );
}


