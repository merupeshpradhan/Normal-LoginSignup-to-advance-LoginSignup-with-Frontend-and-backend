import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/signup", { email, password })
      .then((res) => {
        console.log("User login succefully!", res);

        alert("Welcome user for your usefull area 😋❤️");

        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/home");

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("User did not send correct email and password",err);
        alert("Please provide correct email and password 🙄");
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-green-50">
      <div className="border border-green-400 rounded-sm shadow-xs shadow-green-300 p-2 w-[70%]">
        <div className="mt-[px] flex justify-center">
          <h2 className="tracking-widest font-bold text-blue-600">Login</h2>
        </div>
        <div className="mt-[10%]">
          <form onSubmit={userLogin} className="flex flex-col items-center">
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-[15px] border rounded w-[35%] h-[34px] font-semibold tracking-wider text-white bg-green-500 hover:bg-green-600 cursor-pointer">
              Login
            </button>
          </form>
          <hr className="mt-[15px]" />
          <Link to="/signup" className="flex justify-center">
            <button className="mt-[15px] w-full h-[34px] rounded-sm text-white font-semibold tracking-widest bg-red-500 hover:bg-red-600 cursor-pointer">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
