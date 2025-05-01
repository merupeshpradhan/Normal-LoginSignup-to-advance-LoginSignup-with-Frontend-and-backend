import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("Login Success", res.data);
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      })
      .catch((err) => {
        console.log("Login faild:", err.response?.data?.message || err.message);
        alert(err.response?.data?.message || "Login faild");
      });
  };
  return (
    <div className="bg-green-200 h-[100vh] flex justify-center items-center">
      <div className=" bg-lime-400 rounded-lg w-[23%]">
        <p className="flex justify-center mt-5 font-semibold text-2xl text-black">
          Login
        </p>
        <form className="px-5 mt-5" onSubmit={handleSubmit}>
          <p className="font-serif text-black tracking-wider">Email</p>
          <input
            type="text"
            className="border-2 border-white w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline-3 hover:border-lime-400  hover:outline-white"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className="font-serif text-black mt-3 tracking-wider">Password</p>
          <input
            type="password"
            className="border-2 border-white w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline-3 hover:border-lime-400  hover:outline-white"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex justify-center">
            <button className="bg-cyan-600 w-full p-2 font-semibold text-white mt-5 tracking-wider rounded-xl text-xl cursor-pointer hover:bg-cyan-500">
              Login
            </button>
          </div>
        </form>
        <div className="p-4 mt-3`">
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
