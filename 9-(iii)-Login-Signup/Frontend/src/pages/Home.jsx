import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        const paresdUser = JSON.stringify(userData);
        console.log("Parase user from localstorage", userData);
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
      .post("http://localhost:4000/api/v1/users/logout")
      .then((res) => {
        console.log("User clearly get out", res);
        alert("You logout sucessfully please come again to this area 🥰");

        navigate("/");
        setUser(null);
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
        <div className="w-[100%] flex ">
          <img src={user?.avatar} className="border h-[90px] w-[100%] rounded-full" />
          <img
            src={user?.avatar}
            className="border h-[90px] w-[100%] ml-[10%]"
          />
        </div>
        <h3 className="text-2xl font-semibold tracking-wider mt-[10px]">
          welcome {user?.userName || "User"} 😍
        </h3>
        <button
          onClick={userLogout}
          className="mt-[20px] border rounded w-[35%] h-[34px] font-semibold tracking-wider text-white bg-red-500 hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
