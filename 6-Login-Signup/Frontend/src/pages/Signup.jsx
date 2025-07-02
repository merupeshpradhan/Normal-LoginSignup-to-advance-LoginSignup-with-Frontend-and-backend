import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/signup", {
        firstName,
        lastName,
        DOB,
        email,
        password,
      })
      .then((res) => {
        console.log("user you register succefully 😍");
        alert("Dear user you register 😍");

        navigate("/");

        setFirstName("");
        setLastName("");
        setDOB("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(
          "Somthing went wrong please provide all thing correct 😒",
          err
        );
        alert("Somthing going error you did not sending your detials 😒");
      });
  };

  return (
    <div className="bg-red-50 h-[100vh] flex justify-center items-center">
      <div className="border border-red-400 shadow-xl shadow-red-400 rounded-xl w-[80%] xl:w-[25%] lg:w-[40%] md:w-[50%] p-[5px]">
        <div className="flex justify-center md:mt-2">
          <h2 className="italic font-medium tracking-wider text-red-600 text-xl md:text-lg">
            Sign Up
          </h2>
        </div>
        <form
          onSubmit={userRegister}
          className="mt-[6%] xl:mt-[10%] lg:mt-[8%] md:mt-[6%] mb-[5%]"
        >
          <div className="flex flex-col justify-center items-center">
            <input
              className="border rounded w-[80%] xl:w-[80%] lg:w-[90%] md:w-[90%] pl-2 py-[5px] xl:py-[12px] lg:py-[9px] md:py-[7px] focus:outline-green-600 text-sm md:text-[12px] tracking-wider font-semibold"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="border rounded w-[80%] xl:w-[80%] lg:w-[90%] md:w-[90%] pl-2 py-[5px] xl:py-[12px] lg:py-[9px] md:py-[7px] mt-[20px] focus:outline-green-600 text-sm md:text-[12px] tracking-wider font-semibold"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              className="border rounded w-[80%] xl:w-[80%] lg:w-[90%] md:w-[90%] pl-2 py-[5px] xl:py-[12px] lg:py-[9px] md:py-[7px] mt-[20px] focus:outline-green-600 text-sm md:text-[12px] tracking-wider font-semibold"
              placeholder="DOB"
              type="date"
              value={DOB}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
            <input
              className="border rounded w-[80%] xl:w-[80%] lg:w-[90%] md:w-[90%] pl-2 py-[5px] xl:py-[12px] lg:py-[9px] md:py-[7px] mt-[20px] focus:outline-green-600 text-sm md:text-[12px] tracking-wider font-semibold"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border rounded w-[80%] xl:w-[80%] lg:w-[90%] md:w-[90%] pl-2 py-[5px] xl:py-[12px] lg:py-[9px] md:py-[7px] mt-[20px] focus:outline-green-600 text-sm md:text-[12px] tracking-wider font-semibold"
              placeholder="Set a password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center mt-[30px] lg:mt-[30px] md:mt-[25px] mb-[35px] md:mb-[15px] lg:mb-[20px]">
            <button className="bg-red-500 hover:bg-red-600 font-semibold w-[40%] md:w-[35%] h-[35px] lg:h-[40px]  xl:h-[40px] md:h-[35px] rounded tracking-wider text-white cursor-pointer text-[15px]">
              Sign Up
            </button>
          </div>
          <hr />
          <Link to="/" className="flex justify-center ">
            <button className="bg-green-500 hover:bg-green-600 font-semibold mt-[7%] md:mt-[4%] w-[95%] h-[35px] xl:h-[40px] lg:h-[40px] md:h-[35px] rounded tracking-wider text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
