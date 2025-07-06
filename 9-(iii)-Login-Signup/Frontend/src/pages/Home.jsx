import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        const paresdUser = JSON.parse(userData);
        console.log("Parase user from localstorage", paresdUser);
        setUser(paresdUser);
      } catch (error) {
        console.log("Somthing went wrong to get user details", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const userLogout = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4000/api/v1/users/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log("User clearly logout", res);
        alert("You logout sucessfully please come again to this area 🥰");

        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(
          "Somthing going went wrong to logout 🙄",
          err.response?.data?.message || err.message
        );
        alert("Somthing going wrong to logout");
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-red-50">
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center mb-[20px]">
          <div className="flex items-center justify-between pl-[20px] px-[20px]">
            <img
              src={user?.avatar}
              className="w-[45%] lg:w-[35%] rounded-full border-2 border-black"
            />
            <img src={user?.extraPhoto} className="w-[45%] lg:w-[35%] rounded-xl" />
          </div>
          <h3 className="text-lg font-semibold xl:font-bol xl:text-2xl tracking-wider text-yellow-800 mt-[10px] ml-[10px] mr-[10px]">
            <div className="flex flex-col justify-center items-center">
              <p>welcome</p>
              <p>{user?.userName || "User"} 😍</p>
            </div>
          </h3>
        </div>

        <button
          onClick={userLogout}
          className="border rounded w-[35%] h-[34px] lg:h-[40px] md:w-[20%] lg:w-[17%] xl:w-[7%] font-semibold tracking-wider text-white bg-red-500 hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
