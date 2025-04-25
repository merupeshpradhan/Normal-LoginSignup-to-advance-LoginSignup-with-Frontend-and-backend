import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-green-200 h-[100vh] flex justify-center items-center">
      <div className=" bg-amber-300 rounded-lg w-1/5 ">
        <p className="flex justify-center mt-5 font-semibold text-2xl text-cyan-500">
          Login
        </p>
        <form className="px-5 mt-5">
          <p className="font-serif text-black tracking-wider">Email</p>
          <input
            type="text"
            className="border w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline hover:outline-cyan-500 hover:border-cyan-500"
          />
          <p className="font-serif text-black mt-3 tracking-wider">Password</p>
          <input
            type="password"
            className="border w-full p-2 rounded-md outline-0 font-stretch-expanded  hover:outline hover:outline-cyan-500 hover:border-cyan-500"
          />
          <div className="flex justify-center">
            <button className="bg-cyan-600 w-full p-2 font-semibold text-white mt-5 tracking-wider rounded-xl text-xl cursor-pointer hover:bg-cyan-500">
              Login
            </button>
          </div>
        </form>
        <div className="p-4 mt-3">
          <hr className="border-green-100" />
          <div className="pt-2 flex justify-center mt-3">
            <Link
              to="/signup"
              className="bg-green-600 text-white font-semibold w-2/3 text-center text-xl p-2 rounded-xl hover:bg-green-500"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
