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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userSignup = async (e) => {
    e.preventDefault();

    if (!avatar) {
      alert("Please select an avatar photo (required)");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("avatar", avatar);
      formData.append("extraPhoto", extraPhoto);
      formData.append("firstName", firstName.trim());
      formData.append("middleName", middleName.trim());
      formData.append("lastName", lastName.trim());
      formData.append("DOB", DOB.trim());
      formData.append("email", email.trim());
      formData.append("password", password.trim());

      const res = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("User register sucessfully!", res);

      alert("You registerd sucessfully 😍");

      navigate("/");

      setAvatar("");
      setAvtarPreview("");
      setExtraPhoto("");
      setextraPhotoPreview("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDOB("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoading(false);

      console.log(
        "Please send all detials of your",
        error.response?.data?.message || error.message
      );
      alert("Oops! Something went wrong. Please check and complete all your details. 🙄");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-red-50">
      <div className="border border-red-400 rounded-sm shadow-xl shadow-red-300 p-2 w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] xl:pb-4">
        <div className="flex justify-center">
          <h2 className="tracking-widest font-extrabold text-lg italic text-red-600">
            Signup
          </h2>
        </div>
        <div className="mt-[5%]">
          <form onSubmit={userSignup} className="flex flex-col items-center">
            <div className="flex justify-between w-full pl-[10%] pr-[10%]">
              <div className="flex flex-col items-center">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avtar Preview"
                    className="w-20 h-[80px] xl:w-32 xl:h-[130px] lg:w-[140px] lg:h-[130px] md:w-[130px] md:h-[130px] rounded-full"
                  />
                ) : (
                  <div className="w-20 h-[80px] xl:w-[150px] xl:h-[150px] lg:w-[140px] lg:h-[140px] rounded-full border md:w-[130px] md:h-[130px] font-bold border-gray-400 flex items-center justify-center text-[9px] xl:text-xs lg:text-xs md:text-xs text-gray-500 mb-2">
                    Avatar Image
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("avtarImgInput").click()
                  }
                  className="bg-yellow-30 text-white bg-indigo-500 font-semibold md:font-bold tracking-widest text-sm md:text-lg py-[6px] xl:px-[12px] xl:py-[5px] xl:mt-[9px] rounded mt-[10px] md:mt-[13px] lg:mt-[15px] cursor-pointer w-full"
                >
                  <p className="text-[8px] xl:text-[12px] px-[5px] xl:px-[5px]">
                    {avatar ? "Change a photo" : "Choose a photo"}
                  </p>
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
                    alt="extra photo Preview"
                    className="w-22 h-[80px] xl:w-[250px] xl:h-[130px] lg:w-[250px] lg:h-[130px] md:w-[220px] md:h-[130px] rounded-md"
                  />
                ) : (
                  <div className="w-20 h-[80px] xl:h-[145px] lg:w-[250px] lg:h-[140px] md:w-[220px] md:h-[130px] rounded border font-bold border-gray-400 flex items-center justify-center text-[10px] xl:text-xs lg:text-xs md:text-xs text-gray-500 mb-2">
                    Cover Image
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("extraImgInput").click()
                  }
                  className="bg-yellow-30 text-white bg-indigo-500 font-semibold md:font-bold tracking-widest text-sm md:text-lg py-[6px] xl:px-[12px] xl:py-[5px] xl:mt-[9px] rounded mt-[10px] md:mt-[13px] lg:mt-[15px] cursor-pointer"
                >
                  <p className="text-[8px] xl:text-[12px] px-[5px] xl:px-[5px]">
                    {extraPhoto ? "Change a photo" : "Choose a photo"}
                  </p>
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
            <div className="flex justify-between xl:w-[85%] md:w-[95%]">
              <input
                className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="border rounded-sm pl-2 w-[85%] ml-[20px] xl:ml-[50px] md:ml-[50px] lg:ml-[50px] xl:w-[90%] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="text"
                placeholder="Middle name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="flex justify-between xl:w-[85%] lg:w-[80%] md:w-[95%] ">
              <input
                className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="border rounded-sm pl-2 w-[85%] xl:w-[90%] ml-[20px] xl:ml-[50px] lg:ml-[50px] md:ml-[50px] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="date"
                placeholder="DOB"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className="flex justify-between xl:w-[85%] md:w-[95%]">
              <input
                className="border rounded-sm pl-2 w-[85%] xl:w-[90%] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border rounded-sm pl-2 w-[85%] xl:w-[90%] ml-[20px] xl:ml-[50px] lg:ml-[50px md:ml-[50px] text-[13px] xl:text-[16px] lg:text-lg  tracking-wider h-[29px] lg:h-[35px] mt-[15px]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="mt-[15px] xl:mt-[25px] border rounded w-[35%] xl:w-[28%] h-[34px] xl:h-[40px] font-semibold tracking-wider text-white bg-red-500 hover:bg-red-600 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Processing...😊" : "Signup"}
            </button>
          </form>
          <hr className="mt-[15px] xl:mt-[25px]" />
          <Link to="/" className="flex justify-center">
            <button className="mt-[15px] w-full h-[34px] xl:h-[40px] rounded-sm text-white font-semibold tracking-widest bg-green-500 hover:bg-green-600 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
