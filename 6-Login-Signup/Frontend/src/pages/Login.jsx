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

        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));

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
      <div className="border border-green-500 rounded-xl shadow-xl shadow-green-400 w-[80%] md:w-[50%] lg:w-[40%] xl:w-[22%] p-[5px]">
        <div className="flex justify-center">
          <h2 className="mt-[10px] text-lg md:text-xl lg:text-2xl tracking-wider italic text-sky-600 font-bold">
            Login
          </h2>
        </div>
        <form onSubmit={userLogin}>
          <div className="mt-[8%] md:mt-[10%] lg:mt-[7%] flex flex-col items-center">
            <input
              className="border focus:outline-green-500 rounded w-[80%] py-[8px] lg:py-[10px] px-2 tracking-wider font-medium text-[13px] md:text-sm"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border focus:outline-green-500 rounded w-[80%] py-[8px] lg:py-[10px] xl:mt-[22px] px-2 tracking-wider font-medium mt-4 md:mt-5 text-[13px] text-sm"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-green-500 font-medium text-base w-[40%] md:w-[45%] h-[35px] md:h-[40px] mt-[20px] md:mt-[25px] xl:mt-[35px] rounded-md hover:bg-green-600 cursor-pointer text-white tracking-wider">
              Login
            </button>
          </div>
          <hr className="mt-[8%]" />
          <Link to="/signup" className="flex justify-center items-center">
            <button className="mt-[7%] mb-[5%] bg-red-500 hover:bg-red-600 rounded-md cursor-pointer w-[95%] py-[7px] lg:py-[9px] xl:py-[12px] tracking-wider text-white font-semibold text-shadow-md">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
