import {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios"

export default function Login() {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[auth,setAuth] = useState("")
   const[badauth,setBadAuth]= useState("")
const handleLogin= async (e)=>{ 

  try{  
  e.preventDefault();

   const response = await axios.post(`${import.meta.env.VITE_PORT}login`, {
     email,
     password

   });

   if(response.data){
    setAuth("Logged In Successfully");
    localStorage.setItem('token',response.data.token)
    localStorage.setItem('username',response.data.user)
    
   }  




  }catch(error){
    setBadAuth("Something went wrong")
    console.log(error);
  }


}



  return ( 
    <>
  {/* {auth ? <h1>Loading</h1> && <Forms/> : [] */}
  
  <div className=" flex items-center justify-center p-14 flex-col" >
    <form className="p-6 " onSubmit={handleLogin}>
     
  <div>
  <label htmlFor="email address" className="hidden">
   
  </label>
   <input type="email" value={email} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" placeholder="you@example.com"
    onChange={(e) => setEmail(e.target.value)}
   />
</div>
<div>
  <label htmlFor=" password" className="hidden"></label>
  <input type="password"  value={password} placeholder="Enter Password" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
   onChange={(e) => setPassword(e.target.value)}
  />
</div>

<div  className=" bg-violet-600  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-violet-700 flex items-center justify-center" > 
<button >Log In</button>  </div>
    </form>
<div>
  {auth ? <p >{auth}</p>:<p>{badauth}</p> }
   </div>

<Link to="resetPassword"> 
   <p className="text-blue-500 underline ">Umm, forgot password ?</p>
    </Link>  
    {/* {auth && redirect('/forms')}   */}
   </div>
   {/* } */}
   </>
   
  )
 
}


