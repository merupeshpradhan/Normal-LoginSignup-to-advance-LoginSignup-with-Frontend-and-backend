import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/login", { email, password })
      .then((res) => {
        console.log("User login successfully", res.data);

        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));

        alert("welcome to our website user 😍");

        navigate("/home");

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(
          "Please provide correct email and password 🙄",
          err.response?.data?.message || err.message
        );
        alert("Please provide correct email and password 🙄");
      });
  };

  return (
    <div className="h-[100vh] bg-green-50 flex justify-center items-center">
      <div className="border border-green-300 rounded-lg h-[40%] w-[25%] shadow-lg shadow-green-400 p-3">
        <div className="flex justify-center">
          <h1 className="text-xl text-yellow-600 font-extrabold tracking-wider italic">
            Login
          </h1>
        </div>
        <form
          className=" mt-[50px] flex flex-col justify-center items-center"
          onSubmit={userLogin}
        >
          <input
            className="border rounded-md w-[70%] px-[10px] py-[6px] font-semibold tracking-wider"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border rounded-md w-[70%] px-[10px] py-[6px] font-semibold tracking-wider mt-5"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="mt-[7%] bg-green-500 hover:bg-green-600 rounded-sm w-[30%] h-[40px] font-bold text-white tracking-wider cursor-pointer">
            Login
          </button>
        </form>
        <hr className="mt-[5%]" />
        <Link
          to="/signup"
          className="flex justify-center mt-[4%] bg-red-500 p-[6px] rounded-sm hover:bg-red-600 text-white text-lg font-bold tracking-wider"
        >
          <button className="">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
