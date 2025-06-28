import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/login", { email, password })
      .then((res) => {
        console.log("You Login Succeffuly", res.data);

        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));

        alert("Welcome User");
        navigate("/home");
      })
      .then((err) => {
        console.log(
          "Login faild: ",
          err.response?.data?.message || err.message
        );

        alert(
          err.response?.data?.message ||
            "Login faild Please provide correct email and password"
        );
      });
  };

  return (
    <div className="bg-green-50 h-[100vh] flex justify-center items-center">
      <div className="border border-green-300 p-2 w-[20vw] h-[42.5vh] rounded-xl shadow-xl shadow-green-300">
        <div className="flex justify-center">
          <h1 className="text-xl tracking-widest font-bold italic text-green-600">
            Login
          </h1>
        </div>
        <div className="mt-13 px-3">
          <input
            placeholder="Email"
            className="border-2 border-green-400 p-2 w-full rounded-sm outline-black"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5 px-3">
          <input
            placeholder="Password"
            className="border-2 border-green-400 p-2 w-full rounded-sm outline-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="px-8 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-bold text tracking-wider cursor-pointer text-white"
            onClick={userLogin}
          >
            Login
          </button>
        </div>
        <hr className="mt-9" />
        <Link to="/signup">
          <button className="mt-5 bg-red-500 w-full p-2 text-white cursor-pointer font-bold tracking-wider hover:bg-red-600 rounded-lg">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
