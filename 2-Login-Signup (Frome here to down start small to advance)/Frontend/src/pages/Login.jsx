import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("Login Success", res.data);
        alert("Welcome User");

        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      })
      .catch((error) => {
        console.log(
          "Login faild:",
          error.response?.data?.message || error.message
        );
        alert(error.response?.data?.message || "Login faild");
      });
  };

  return (
    <div className="bg-red-200 h-[100vh] flex justify-center items-center">
      <div className="border-2 w-[17vw] border-white p-2 rounded-2xl">
        <h3 className="flex justify-center text-2xl mb-5 font-bold tracking-widest">
          Login
        </h3>
        <form
          className="flex justify-center flex-col items-center"
          onSubmit={handleLogin}
        >
          <div className="Email">
            <p className="font-medium">Email</p>
            <input
              type="text"
              className="border-2 border-white w-full focus:border-green-500 focus:outline-none rounded-sm px-2 overflow-none py-1 mt-1"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="password mt-2">
            <p className="font-medium">Password</p>
            <input
              type="password"
              className="border-2 border-white w-full focus:border-green-500 focus:outline-none rounded-sm px-2 overflow-none py-1 mt-1"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="mt-5 mb-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium tracking-widest">
            Login
          </button>
        </form>
        <hr className="text-black mt-2" />
        <div className="py-2">
          <Link to={"/signup"}>
            <button className="mt-2 w-full bg-green-600 hover:bg-green-500 py-2 rounded-lg text-white font-bold">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
