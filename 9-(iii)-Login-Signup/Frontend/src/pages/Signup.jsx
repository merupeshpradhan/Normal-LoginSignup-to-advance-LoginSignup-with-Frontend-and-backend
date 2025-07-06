import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvtarPreview] = useState("");
  const [extraPhoto, setExtraPhoto] = useState("");
  const [extraPhotoPreview, setextraPhotoPreview] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userSignup = () => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("avatar", setAvatar);
      formData.append("extraPhoto", setExtraPhoto);
      formData.append("firstName", setFirstName);
      formData.append("middleName", setMiddleName);
      formData.append("lastName", setLastName);
      formData.append("DOB", setDOB);
      formData.append("email", setEmail);
      formData.append("password", setPassword);

      const res = axios.post(
        "http://localhost:4000/api/v1/users/login",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("User register sucessfully!", res);

      alert("You reguster sucessfully 😍");

      navigate("/login");

      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDOB("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Please send all detials of your", err);
      alert("Please send all detials of your 🙄");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-red-50">
      <div className="border border-red-400 rounded-sm shadow-xs shadow-red-300 p-2 w-[85%] lg:w-[95%] xl:w-[30%]">
        <div className="mt-[px] flex justify-center">
          <h2 className="tracking-widest font-bold text-red-600">Login</h2>
        </div>
        <div className="mt-[5%]">
          <form onSubmit={userSignup} className="flex flex-col items-center">
            <div className="flex justify-between w-full pl-[10%] pr-[10%]">
              <div className="flex flex-col items-center">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avtar Preview"
                    className="w-20 h-[80px] xl:w-32 xl:h-[110px] lg:w-32 lg:h-[110px] md:w-32 md:h-[110px] rounded-full"
                  />
                ) : (
                  <div className="w-20 h-[80px] xl:w-24 xl:h-[100px] rounded-full border border-gray-400 flex items-center justify-center text-xs text-gray-500 mb-2">
                    No Image
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("avtarImgInput").click()
                  }
                  className="bg-yellow-30 text-white bg-indigo-500 font-semibold tracking-widest text-sm py-[6px] xl:px-[30px] rounded mt-[15px] cursor-pointer w-full text-left"
                >
                  {avatar ? "Change photo" : "Choose photo"}
                </button>
                <input
                  className="hidden"
                  id="avtarImgInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setAvatar(file);
                    if (file) {
                      setAvtarPreview(URL.createObjectURL(file));
                    } else setAvtarPreview(null);
                  }}
                />
              </div>
              <div className="flex flex-col items-center">
                {extraPhotoPreview ? (
                  <img
                    src={extraPhotoPreview}
                    alt="Avtar Preview"
                    className="w-22 h-[80px] xl:w-36 xl:h-[110px] rounded-md"
                  />
                ) : (
                  <div className="w-20 h-[80px] md:w-32 md:h-[110px] rounded border border-gray-400 flex items-center justify-center text-xs text-gray-500 mb-2">
                    No Image
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("extraImgInput").click()
                  }
                  className="bg-yellow-30   text-white bg-indigo-500 font-semibold tracking-widest text-sm py-[6px] xl:px-[30px] rounded mt-[15px] cursor-pointer w-full text-left"
                >
                  {avatar ? "Change photo" : "Choose photo"}
                </button>
                <input
                  className="hidden"
                  id="extraImgInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setExtraPhoto(file);
                    if (file) {
                      setextraPhotoPreview(URL.createObjectURL(file));
                    } else setextraPhotoPreview(null);
                  }}
                />
              </div>
            </div>
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
              type="text"
              placeholder="Middle name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
              type="date"
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
              type="email"
              placeholder="Email"
              value={password}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-xl lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
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
