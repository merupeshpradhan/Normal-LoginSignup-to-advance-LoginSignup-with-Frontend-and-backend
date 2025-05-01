import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending:", { name, email, phone, password });
    axios
      .post("http://localhost:4000/api/v1/user/register", {
        name,
        email,
        phone,
        password,
      })
      .then((result) => {
        console.log(result);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-green-200 h-[100vh] flex justify-center items-center">
      <div className=" bg-lime-400 rounded-lg w-[23%] ">
        <p className="flex justify-center mt-5 font-semibold text-2xl text-black">
          Signup
        </p>
        <form className="px-5 mt-5" onSubmit={handleSubmit}>
          <p className="font-serif text-black tracking-wider">Full Name</p>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="border-2 border-white w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline-3 hover:border-lime-400  hover:outline-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p className="font-serif text-black tracking-wider mt-3">Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="border-2 border-white w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline-3 hover:border-lime-400  hover:outline-black"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className="font-serif text-black tracking-wider mt-3">Phone</p>
          <input
            type="text"
            placeholder="Enter Phone number"
            className="border-2 border-white w-full mt-1 p-2 rounded-md outline-0 font-stretch-expanded hover:outline-3 hover:border-lime-400  hover:outline-black"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <p className="font-serif text-black mt-3 tracking-wider">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="border-2 border-white w-full p-2 rounded-md outline-0 font-stretch-expanded  hover:outline-3 hover:border-lime-400  hover:outline-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-cyan-600 w-full p-2 font-semibold text-white mt-5 tracking-wider rounded-xl text-xl cursor-pointer hover:bg-cyan-500"
            >
              Create account
            </button>
          </div>
        </form>
        <div className="p-4 mt-3">
          <hr className="border-green-100" />
          <div className="pt-2 flex justify-center mt-3">
            <Link
              to="/"
              className="bg-green-600 text-white font-semibold w-2/3 text-center text-xl p-2 rounded-xl hover:bg-green-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
