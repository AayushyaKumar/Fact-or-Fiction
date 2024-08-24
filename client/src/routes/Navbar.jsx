import './../App.css'


import {ThemeCon} from "./../contexts/Theme"
import { useContext } from "react"
import { NavLink} from "react-router-dom";
export default function Navbar (){

  const aayu = useContext(ThemeCon)



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
  // const [darkMode, setDarkMode] = useState(false)
  // // const toggle=()=>{
  //   setDarkMode(!darkMode)
  //   // if(darkMode){
    //    document.documentElement.classList.add("dark")
    //   window.localStorage.theme ="dark"
     
    // }else{
    //   document.documentElement.classList.remove("dark")
    //   window.localStorage.theme ="light"
      
    // }
  // }  

  // useEffect(()=>{
  //   if(darkMode){
  //     document.documentElement.classList.add("dark")
  //   window.localStorage.theme ="dark"
    
  //  }else{
  //    document.documentElement.classList.remove("dark")
  //    window.localStorage.theme ="light"
     
  //  }
  // })

  
 
return (
  <div  className="dark:text-white"  >
    <nav className="bg-white-800  shadow-lg p-2"  >
      <div className="container mx-auto flex justify-between items-center">
        <h2 className= "dark:text-white text-2xl font-mono" >
        🔎 FACT OR FICTION
        </h2>
        <div className="flex items-center space-x-14">
        {/* <Link to="signup" className=" bg-violet-500 text-black py-1.5  px-7 rounded hover:bg-violet-700">
          {/* <button > */}
            {/* Sign Up */}
          {/* </button> */}
          {/* </Link> */} 
         <div>
          <button onClick={aayu.themeSwitch}>{aayu.theme==='light'? "🌜":"☀️"}</button>
         </div>
         { isLoggedIn? <ul><li className='text-blue-600 dark:text-white font-semibold'>
         Hello! 👋  {localStorage.getItem('username')}
          </li></ul>: <ul className="flex flex-row  font-medium   lg:flex-row lg:space-x-8 lg:mt-0  ">
          <li>
            <button>
          <NavLink to="/signup"
           className={({isActive}) =>` dark:text-white font-bold py-1.5  px-8 mr-5  rounded ${isActive ? "bg-violet-600 text-white border-2" : " bg-violet-500 "}   `}>
            Sign Up
            
          </NavLink></button></li>
          <li>
            {/* isLoggedIn ? <Navigate to="forms"/> :  */}
            <button>
          <NavLink to="/login"
           className={({isActive}) =>` hover:bg-violet-700 dark:text-white hover:text-white font-bold py-1.5  px-8    rounded ${isActive ? "border-2 bg-violet-600 text-white" : "  bg-violet-500 "}    `}>
            Log In
            
          </NavLink></button></li>

          
          </ul>}
         

        </div>
      </div>


     
    </nav>
 
     </div>
     
  );
}


