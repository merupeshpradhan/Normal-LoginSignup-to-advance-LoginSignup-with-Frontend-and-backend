import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/register", {
        avatar,
        firstName,
        middleName,
        lastName,
        DOB,
        email,
        password,
      })
      .then((res) => {
        console.log("User login successfully 😍", res.data);

        alert("Wellcome greate user for login this side 😍");
        navigate("/");

        setFirstName("");
        setMiddleName("");
        setLastName("");
        setDOB("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error("Please provide your all detials 🙄", err);
        alert("Please provide your all detials 🙄");
      });
  };

  return (
    <div className="bg-red-50 h-[100vh] flex justify-center items-center">
      <div className="border border-red-300 rounded-md p-2 shadow-xl shadow-red-400 w-[85%] md:w-[45%] lg:w-[35%] xl:w-[23%] pb-5">
        <div className="flex justify-center">
          <h3 className="md:text-xl text-base font-bold italic tracking-wider text-red-600">
            Sign Up
          </h3>
        </div>
        <form onSubmit={userLogin}>
          <div className="mt-[20px] xl:mt-[24px] lg:mt-24px md:mt-[24px] flex flex-col items-center">
          <div className=""></div>
            <div className="flex flex-col items-center md:flex md:items-center w-[95%]">
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] xl:font-semibold lg:font-semibold md:font-semibold tracking-widest focus:outline-yellow-400"
                placeholder="First name"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] mt-[15px] xl:font-semibold lg:font-semibold md:font-semibold tracking-widest focus:outline-yellow-400"
                placeholder="Middle Name"
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
            </div>
            <div className="mt-[15px] flex flex-col items-center w-[95%]">
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] xl:font-semibold lg:font-semibold md:font-semibold xl:tracking-widest lg:tracking-widest md:tracking-widest focus:outline-yellow-600"
                placeholder="Last name"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] mt-[15px] xl:font-semibold lg:font-semibold md:font-semibold tracking-widest focus:outline-yellow-400"
                placeholder="DOB"
                type="date"
                value={DOB}
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
              />
            </div>
            <div className="mt-[15px] flex flex-col items-center w-[95%]">
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] xl:font-semibold lg:font-semibold md:font-semibold xl:tracking-widest lg:tracking-widest md:tracking-widest focus:outline-yellow-600"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="border rounded-sm pl-2 text-sm py-[5px] w-[95%] h-[33px] md:h-[37px] xl:h-[39px] mt-[15px] xl:font-semibold lg:font-semibold md:font-semibold tracking-widest focus:outline-yellow-400"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 mt-5 w-[30%] h-[32px] md:h-[37px] xl:h-[39px] rounded-lg font-semibold tracking-wider text-white xl:text-md text-sm md:text-[15px] cursor-pointer">
              Sign Up
            </button>
          </div>
        </form>
        <hr className="mt-5 w-full" />
        <div className="flex justify-center">
          <Link
            to="/"
            className="flex justify-center items-center bg-green-500 hover:bg-green-600 mt-5 w-[93%] h-[32px] md:h-[37px] xl:h-[42px] rounded-lg font-semibold tracking-wider text-white xl:text-lg text-sm md:text-[15px]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
