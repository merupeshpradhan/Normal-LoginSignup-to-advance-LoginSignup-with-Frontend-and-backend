import React from "react";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="font-bold flex justify-center w-full h-[100vh] bg-indigo-500">
      <div className="text-white content-center">
        <div className="w-[20vw] sm:w-[25vw] h-1/2 sm:h-[60%] border rounded-2xl border-indigo-300">
          <div className="">
            <p className="flex justify-center mt-2 text-2xl font-semibold">Login</p>
          </div>
          <div className="mt-15">
            <div className="flex justify-center">
              <input
                type="email"
                className="border-1 px-5 py-1 w-[80%] rounded-sm"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="password"
                className="border-1 px-5 py-1 w-[80%] rounded-sm mt-8"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-25 h-8 mt-9 rounded-sm bg-blue-500">
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <hr className="mt-10 w-[98%]" />
            </div>
            <div className="">

            <Link className="flex justify-center mt-7">
              <button className="bg-red-500 hover:bg-red-400 w-[95%] rounded-sm p-3">Register</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
