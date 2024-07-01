
import React from "react"
export default function Signup() {
  return (
    <div>
    <form className="p-6 flex flex-col justify-center">
    <div className="flex flex-col">
        <label for="name" className="hidden">
            Full Name
        </label>
        <input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
    </div>

    <div className="flex flex-col mt-2">
        <label for="email" className="hidden">
            Email
        </label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
    </div>

    <div className="flex flex-col mt-2">
        <label for="password" className="hidden">
          Password
        </label>
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
    </div>
    <div className="flex flex-col mt-2">
        <label for="password" className="hidden">
           Password
        </label>
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
    </div>

    <button
        type="submit"
        className="md:w-32 bg-violet-600  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-violet-700 transition ease-in-out duration-300"
    >
        Create Account
    </button>
</form>
</div>
  )
}

