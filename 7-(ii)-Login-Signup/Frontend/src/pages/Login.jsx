import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/login", { email, password })
      .then((res) => {
        console.log("User login successfully 😍", res.data);

        const user = res.data.data;
        console.log("user going to localStorage", user);
        localStorage.setItem("user", JSON.stringify(user));

        alert("Wellcome greate user for login this side 😍");
        navigate("/home");

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error("User did not give correct email and password 🙄", err);
        alert("Please provide correct email and password 🙄");
      });
  };

  return (
    <div className="bg-green-50 h-[100vh] flex justify-center items-center">
      <div className="border border-green-300 rounded-md p-2 shadow-xl shadow-green-400 w-[70%] md:w-[45%] lg:w-[35%] xl:w-[20%] pb-5">
        <div className="flex justify-center">
          <h3 className="md:text-xl text-base font-semibold italic tracking-wider text-blue-600">
            Login
          </h3>
        </div>
        <form onSubmit={userLogin}>
          <div className="mt-[24px] xl:mt-[30px] md:mt-[20px] flex flex-col items-center">
            <input
              className="border rounded-sm pl-2 text-sm xl:text-base py-[5px] w-[85%] h-[33px] md:h-[37px] xl:h-[39px] font-semibold tracking-widest focus:outline-green-400"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border rounded-sm pl-2 text-sm xl:text-base py-[5px] w-[85%] h-[33px] md:h-[37px] xl:h-[39px] font-semibold tracking-widest mt-[12px] xl:mt-[15px] focus:outline-green-400"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-green-500 hover:bg-green-600 mt-5 w-[45%] h-[32px] md:h-[37px] xl:h-[42px] rounded-lg font-semibold tracking-wider text-white xl:text-lg text-sm md:text-[15px]">
              Login
            </button>
          </div>
        </form>
        <hr className="mt-5 w-full" />
        <div className="flex justify-center">
          <Link
            to="/signup"
            className="flex justify-center items-center bg-red-500 hover:bg-red-600 mt-5 w-[93%] h-[32px] md:h-[37px] xl:h-[42px] rounded-lg font-semibold tracking-wider text-white xl:text-lg text-sm md:text-[15px]"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
