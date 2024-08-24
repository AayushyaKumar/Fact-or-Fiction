
import {useState} from "react"
import axios from "axios";
export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
 const [signupStatus,setSignupStatus]=useState("")
     const handleSubmit = async (e) => {
      e.preventDefault();
    
     
      if (name.trim() === '') {
        setSignupStatus('Please enter your name.');
        return;
      }
    
      if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
        setSignupStatus('Please enter a valid email address.');
        return;
      }
    
      if (password.trim() === '') {
        setSignupStatus('Please enter a password.');
        return;
      }
    
      if (password !== confirmPassword) {
        setSignupStatus('Passwords do not match.');
        return;
      }
    
      try {
        const response = await axios.post(`${import.meta.env.VITE_PORT}signup`, {
          name,
          email,
          password,
          confirmPassword
        });
    
        if (response.data) {
          setSignupStatus('Account created successfully!');
          return response.data.status;
          // Optionally, redirect to a success page or dashboard
        
      } }catch ({message}) {
        console.error(message); // Log the error for debugging
        setSignupStatus('An error occurred during signup. Please try again. '+ message);
      }
    };
    
    
  return (
    <div className="flex items-center justify-center p-14">
    <form className="w-100" onSubmit={handleSubmit}>
    <div className="">
        <label htmlFor="name" className="hidden">
            Full Name
        </label>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
            className=" mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
    </div>

    <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">
            Email
        </label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="flex flex-col mt-2">
        <label htmlFor="password" className="hidden">
          Password
        </label>
        <input
            type="password"
            name="password"
           
            value={password}
            placeholder="Enter Password"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
        />
    </div>
    <div className="flex flex-col mt-2">
        <label htmlFor="password" className="hidden">
          Confirm Password
        </label>
        <input
            type="Password"
            name="Confirmpassword"
          
            value={confirmPassword}
            placeholder="Confirm Password"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
    </div>
<div className=" flex items-center justify-center ">
    <button
        type="submit"
        className=" w-full  bg-violet-600  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-violet-900 transition ease-in-out duration-300"
        
    >
        Create Account
    </button></div>
</form>
{signupStatus && <p className="signup-status">{signupStatus}</p>}
</div>
  )
}


