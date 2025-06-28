import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [villageName, setVillageName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/register", {
        fullName,
        motherName,
        fatherName,
        phoneNumber,
        villageName,
        email,
        password,
      })
      .then((res) => {
        console.log(
          fullName,
          motherName,
          fatherName,
          phoneNumber,
          villageName,
          email,
          password
        );

        console.log("Register successfully", res);
        alert("You register successfully!");

        setFullName("");
        setMotherName("");
        setFatherName("");
        setPhoneNumber("");
        setVillageName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert("Please write all thing");
      });
  };

  return (
    <div className="bg-red-50 h-[100vh] flex  justify-center items-center">
      <div className="border border-red-300 w-[30vw] h-[69%] shadow-xl shadow-red-300 rounded-xl p-2">
        <div className="flex justify-center pb-[58px]">
          <h1 className="text-red-400 font-bold tracking-widest text-xl">
            Signup
          </h1>
        </div>
        <div className=" mx-5 flex items-center">
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider mr-4"
            placeholder="Full name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider"
            placeholder="Mother Name"
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div className="mt-10 mx-5 flex items-center">
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider mr-4"
            placeholder="Father name"
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider"
            placeholder="Phone number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mt-10 mx-5 flex items-center">
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider mr-4"
            placeholder="Village name"
            type="text"
            value={villageName}
            onChange={(e) => setVillageName(e.target.value)}
          />
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-10 mx-20 flex items-center">
          <input
            className="border w-full rounded-sm py-2 px-5 tracking-wider mr-4"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="bg-red-500 hover:bg-red-600 px-10 py-3 rounded-xl text-white font-bold tracking-wider cursor-pointer"
            onClick={userRegister}
          >
            Register
          </button>
        </div>
        <hr className="mt-12" />
        <Link to={"/"}>
          <button className="bg-blue-500 hover:bg-blue-600 w-full py-2 mt-[32px] font-bold text-white tracking-wider rounded-xl cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
