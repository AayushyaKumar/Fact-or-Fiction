
import React from "react"
export default function Signup() {
  return (
    <div>
     <form action="">
        <label >
            Name:
            <input type="text" />
        </label>
        <br />
        <label >
            Email:
            <input type="email" />
        </label>
        <br />
        <label>
            Password:
            <input type="password" />
        </label>
        <label>
            Confirm Password
            <input type="password" />
        </label>

     </form>

    </div>
  )
}

