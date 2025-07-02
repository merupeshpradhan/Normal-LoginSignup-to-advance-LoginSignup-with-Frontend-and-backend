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
      .post("http://localhost:4000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("User login succefully!😊");
        alert("Wellcome user to your intresting area 😊");

        navigate("/home");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("Please provide correct email and password 😒", err);
        alert("Please provide your correct email and password 😒");
      });
  };
  return (
    <div className="bg-green-50 h-[100vh] flex justify-center items-center">
      <div className="border border-green-500 rounded-xl shadow-xl shadow-green-400 w-[22vw] p-[5px]">
        <div className="flex justify-center">
          <h2 className="mt-[10px] text-xl tracking-wider italic text-sky-600 font-bold">
            Login
          </h2>
        </div>
        <form onSubmit={userLogin}>
          <div className=" mt-[15%] flex flex-col  items-center">
            <input
              className="border focus:outline-green-500 rounded w-[80%] py-[10px] px-2 tracking-wider font-medium text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border focus:outline-green-500 rounded w-[80%] py-[10px] px-2 tracking-wider font-medium mt-5 text-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-green-500 font-medium text-base w-[25%] h-[35px] mt-[25px] rounded-md hover:bg-green-600 cursor-pointer text-white tracking-wider">
              Login
            </button>
          </div>
          <hr className="mt-[12%]" />
          <Link to="/signup" className="flex justify-center items-center">
            <button className="mt-[7%] mb-[5%] bg-red-500 hover:bg-red-600 rounded-md cursor-pointer w-[95%] py-[9px] tracking-wider text-white font-semibold text-shadow-md">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
