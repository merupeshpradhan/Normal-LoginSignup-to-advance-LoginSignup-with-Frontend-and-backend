import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userSignup = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("DOB", DOB);
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("User login successfully 😋", res.data);

      alert("Youser you succefuully register 😋");
      navigate("/");

      setAvatar("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDOB("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Please provide your all detials 🙄", error);
      alert("Please provide your all detials 🙄");
    }
  };

  return (
    <div className="bg-red-50 h-[100vh] flex justify-center items-center">
      <div className="border border-red-300 rounded-md p-2 shadow-xl shadow-red-400 w-[85%] md:w-[45%] lg:w-[35%] xl:w-[23%] pb-5">
        <div className="flex justify-center">
          <h3 className="md:text-xl text-base font-bold italic tracking-wider text-red-600">
            Sign Up
          </h3>
        </div>
        <form onSubmit={userSignup}>
          <div className="mt-[20px] xl:mt-[24px] lg:mt-24px md:mt-[24px] flex flex-col items-center">
            <div className="flex flex-col items-center">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avtar Preview"
                  className="w-28 rounded-full"
                />
              ) : (
                <div className="w-20 h-20 rounded-full border border-gray-400 flex items-center justify-center text-xs text-gray-500 mb-2">
                  No Image
                </div>
              )}
              <button
                type="button"
                onClick={() => document.getElementById("fileInput").click()}
                className="bg-yellow-30  text-white bg-indigo-500 font-semibold tracking-widest text-sm py-[6px] xl:px-[30px] rounded mt-[15px] cursor-pointer w-full text-left"
              >
                {avatar ? "Change photo" : "Choose photo"}
              </button>
              <input
                className="hidden"
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setAvatar(file);
                  if (file) {
                    setAvatarPreview(URL.createObjectURL(file));
                  } else {
                    setAvatarPreview(null);
                  }
                }}
              />
            </div>
            <div className="flex flex-col items-center md:flex md:items-center w-[95%] mt-[15px]">
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
