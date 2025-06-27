import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    console.log({ email, password });

    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("You Login Successfully", res.data);
        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        alert("Welcome user")
        navigate("/home");
      })
      .catch((err) => {
        console.log("Login faild:", err.response?.data?.message || err.message);
        alert(err.response?.data?.message || "Login faild");
      });
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-green-50 ">
      <div className="border border-green-400 w-[20vw] h-[42vh] rounded-2xl shadow-xl shadow-green-300">
        <div className="flex justify-center py-2 ">
          <h3 className="text-xl font-bold text-yellow-500 tracking-wider">
            Login
          </h3>
        </div>
        <div className="mt-5">
          <div className="px-5">
            <p className="mb-1 font-bold">Email</p>
            <input
              className="border rounded-md w-full h-9 pl-5 outline-0"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="px-5">
            <p className="mb-1 mt-2 font-bold">Password</p>
            <input
              className="border rounded-md w-full h-9 pl-5 outline-0"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-green-500 py-2 px-10 font-bold text-white rounded-md hover:bg-green-600"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="signup flex justify-center mt-5 px-1">
          <Link
            to="/signup"
            className="border w-full p-2 rounded-xl bg-red-500 hover:bg-red-600 tracking-widest text-white text-center font-bold text-base"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default login;
