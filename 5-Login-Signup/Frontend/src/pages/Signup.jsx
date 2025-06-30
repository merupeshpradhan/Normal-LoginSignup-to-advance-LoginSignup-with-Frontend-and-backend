import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stateName, setStateName] = useState("");
  const [villageName, setVillageName] = useState("");
  const [distName, setDistName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/register", {
        firstName,
        lastName,
        email,
        stateName,
        villageName,
        distName,
        password,
      })
      .then((res) => {
        console.log("Welcome You user for coming our website");

        alert("Welcome You user for coming our website 😍");

        navigate("/");

        setFirstName("");
        setLastName("");
        setEmail("");
        setStateName("");
        setDistName("");
        setVillageName("");
        setPassword("");
      })
      .catch((err) => {
        console.log("Signup faild", err);
        alert("Please Write all things 🙄");
      });
  };

  return (
    <div className="bg-red-50 h-[100vh] flex justify-center items-center">
      <div className="border border-red-400 h-[70vh] w-[40vw] p-5 rounded-lg shadow-lg shadow-red-400">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold tracking-wider italic text-red-500">
            Signup
          </h1>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mt-[50px] px-[20px] flex justify-center">
            <input
              className="border p-2 font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Full name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="border p-2 font-semibold tracking-wider rounded-md w-full"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-[40px] px-[20px] flex justify-center">
            <input
              className="border p-2 font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border p-2 font-semibold tracking-wider rounded-md w-full"
              placeholder="State name"
              type="text"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
          </div>
          <div className="mt-[40px] px-[20px] flex justify-center">
            <input
              className="border p-2 font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Dist name"
              type="text"
              value={distName}
              onChange={(e) => setDistName(e.target.value)}
            />
            <input
              className="border p-2 font-semibold tracking-wider rounded-md w-full"
              placeholder="Village name"
              type="text"
              value={villageName}
              onChange={(e) => setVillageName(e.target.value)}
            />
          </div>
          <div className="mt-[40px] px-[20px] flex justify-center">
            <input
              className="border p-2  font-semibold tracking-wider rounded-md mr-10 w-[70%]"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 px-[45px] py-[10px] rounded-sm mt-[33px] text-white font-bold tracking-wider"
            >
              Sign Up
            </button>
          </div>
        </form>
        <hr className="mt-[43px]" />
        <Link to="/" className="mt-[35px] flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 w-[90%] py-[10px] rounded-sm text-lg font-bold text-white tracking-wider">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
