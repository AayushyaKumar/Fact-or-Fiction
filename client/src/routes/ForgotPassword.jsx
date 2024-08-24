import {useState} from "react"
import axios from "axios"

function ForgotPassword() {

   const[input,setInput] = useState('')
   const [output,setOutput]= useState('')
   
    const handleSubmit=async(e)=>{
try{
       e.preventDefault()
      const response = await axios.post(`${import.meta.env.VITE_PORT}forgotPassword`,{
        input
       
      })
localStorage.setItem("resetToken", response.data.resetToken)
      setOutput(response.data.message)
      console.log(response.data)
    
  }catch({name,message}){
    setOutput("Oops 😔 ! Something went very wrong ....")
    console.log(name+"\n" + message)
  }}
  return (
    <div className="p-10 flex flex-col  justify-center items-center ">
      <h1 className="dark:text-white  font-extrabold mb-8 text-2xl "> Forgotten Password ?  Don&apos;t Worry💡</h1>
      <h2 className="dark:text-white font-semibold mb-6">Give email to send a verification link to access your account</h2>
      {output?<p className="font-bold dark:text-violet-600 mb-6 p-6 mt-2">{output}</p>: <form action="" className="flex flex-col  justify-center  items-center" onSubmit={handleSubmit}>
        <input type="email" id="email" value={input} className="border-2 border-slate-400 rounded-3xl p-4 w-0.9 placeholder-slate-700 font-bold" placeholder="Enter your email"
        onChange={(e)=>setInput(e.target.value)}
         required />
        <button type="submit" className=" rounded-3xl text-slate-200 p-4 m-8 w-1/2  font-semibold transform transition duration-300 ease-in-out hover:scale-105 hover:bg-violet-700 hover:rounded-3xl hover:text-white bg-violet-600  "> Submit</button>
      </form>}
      

    </div>
  )
}

export default ForgotPassword




