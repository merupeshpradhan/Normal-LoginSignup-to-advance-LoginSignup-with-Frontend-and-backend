import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/users/register", {
        fullName,
        email,
        dateOfBirth,
        password,
      })
      .then((res) => {
        console.log("Register Successfully", res);
        alert("User Registered Successfully!");

        setFullName("");
        setEmail("");
        setDateOfBirth("");
        setPassword("");

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
         alert("Please write all");
      });
  };

  return (
    <div className="bg-red-200 h-[100vh] flex justify-center items-center">
      <div className="border-2 w-[17vw] border-white p-2 rounded-2xl">
        <h3 className="flex justify-center text-2xl mb-5 font-bold tracking-widest">
          Signup
        </h3>
        <form
          className="flex justify-center flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="Fullname">
            <p className="font-medium">Full Name</p>
            <input
              type="text"
              className="border-2 border-white w-full focus:border-green-500 focus:outline-none rounded-sm px-2 overflow-none py-1 mt-1"
              placeholder="Enter Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="DOB mt-2 flex justify-center items-center">
            <p className="font-medium pr-2">DOB</p>
            <input
              type="date"
              className="border-2 border-white w-full focus:border-green-500 focus:outline-none rounded-sm px-2 overflow-none py-1 mt-1"
              placeholder="Enter DOB"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className="Email mt-2">
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
          <button className="mt-5 mb-2 px-5 py-2 rounded-xl bg-green-500 hover:bg-green-400 font-medium tracking-widest">
            Register
          </button>
        </form>
        <hr c className="text-black mt-2"/>
        <div className="">
          <Link to={"/"}>
            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-white font-bold">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
