import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userSignup = () => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/login", { email, password })
      .then((res) => {
        console.log("User register sucessfully!", res);

        alert("You reguster sucessfully 😍");

        navigate("/login");

        setFirstName("");
        setMiddleName("");
        setLastName("");
        setDOB("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("Please send all detials of your", err);
        alert("Please send all detials of your 🙄");
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-red-50">
      <div className="border border-red-400 rounded-sm shadow-xs shadow-red-300 p-2 w-[70%]">
        <div className="mt-[px] flex justify-center">
          <h2 className="tracking-widest font-bold text-red-600">Login</h2>
        </div>
        <div className="mt-[10%]">
          <form onSubmit={userSignup} className="flex flex-col items-center">
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px]"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="text"
              placeholder="Middle name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="date"
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="email"
              placeholder="Email"
              value={password}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[90%] h-[35px] mt-[15px]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-[15px] border rounded w-[35%] h-[34px] font-semibold tracking-wider text-white bg-red-500 hover:bg-red-600 cursor-pointer">
              Signup
            </button>
          </form>
          <hr className="mt-[15px]" />
          <Link to="/" className="flex justify-center">
            <button className="mt-[15px] w-full h-[34px] rounded-sm text-white font-semibold tracking-widest bg-green-500 hover:bg-green-600 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
