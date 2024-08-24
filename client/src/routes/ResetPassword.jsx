// 1. First, made a "resetPassword/:token" route
// 2. Then validate that the token === to the token received in the email.
// 3. Then pass the token in the route params.
// 4. After doing so, render this route containing newPassword and confirmPassword fields
// 5. Render the password is updated message.
// 6. Redirect or navigate the user to the login page.
import {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
function ResetPassword() {
  const {resetToken} = useParams()
const[newPassword,setNewPasword]= useState('')
const [confirmNewPassword,setConfirmNewPassword]= useState('')
const [output,setOutput] = useState('')
const [reset,setReset]= useState(false)

useEffect(() => {
  
  if(resetToken === localStorage.getItem('resetToken') ) {
        
    setReset(true)
   
  }
 
}, [resetToken])



  const handleSubmit = async(e)=>{
    
    try{
 
e.preventDefault()
     
      const response = await axios.patch(`${import.meta.env.VITE_PORT}resetPassword/`,
        newPassword,
        confirmNewPassword,
      )

        setOutput(response.data)
      
    }catch({name,message}){
 console.log(name+"\n" + message)
    }
  }
  return (
  <div className="p-10">
    {reset? output ? <p> Password has been updated successfully</p> : <form action="" className="flex flex-col items-center justify-center p-4" onSubmit={handleSubmit}>
           <input type="password"   value={newPassword} placeholder="Enter New Password" required  className="border-2 border-gray-400 rounded-2xl mb-4 p-8" onChange={(e)=>{setNewPasword(e.target.value)}}/>
            <input type="password" value={confirmNewPassword} placeholder="Conirm New Password" required className="border-2 border-gray-400 rounded-2xl h-20 p-8" onChange={(e)=>{setConfirmNewPassword(e.target.value)}}/>

            <button className="bg-green-600 rounded-2xl  p-6 w-1/2  mt-4" > Reset Password </button>
       </form>
    : <h1>This page does not exist</h1>}
    </div>
  )
}

export default ResetPassword