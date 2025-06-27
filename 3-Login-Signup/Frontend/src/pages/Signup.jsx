import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    console.log({ fullName, motherName, fatherName, DOB, email, password });

    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/register", {
        fullName,
        motherName,
        fatherName,
        DOB,
        email,
        password,
      })
      .then((res) => {
        console.log("Register Successfully", res);
        alert("You register successfully!");

        setFullName("");
        setMotherName("");
        setFatherName("");
        setDOB("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert("Please write all");
      });
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-red-100">
      <div className="shadow-xl shadow-red-400 rounded-2xl border border-red-300 w-[20vw] h-[62vh] ">
        <div className="flex justify-center mt-3 font-bold">
          <h3 className="px-10 font-bold text-2xl text-red-500">Register</h3>
        </div>
        <div className="mt-10 px-3">
          <input
            placeholder="Full name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Mother name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Father name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="DOB"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="date"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Email"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Password"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-5 px-3 flex justify-center">
          <button
            className="bg-red-500 py-2 px-5 rounded-xl text-lg font-bold text-white tracking-widest hover:bg-red-600"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
        <hr className="mt-5" />
        <div className="mt-5 px-3 flex justify-center">
          <Link
            to={"/"}
            className="bg-green-500 py-2 px-5 rounded-xl text-lg font-bold text-center text-white tracking-widest hover:bg-green-600 w-full"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
