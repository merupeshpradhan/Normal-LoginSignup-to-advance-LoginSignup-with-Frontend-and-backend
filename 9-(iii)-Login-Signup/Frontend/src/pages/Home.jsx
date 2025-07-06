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
        <div className="flex justify-center">
          <img src={user?.avatar} className="w-[30%] rounded" />
          <img src={user?.extraPhoto} className="w-[30%] ml-[20px]"/>
        </div>
        <h3 className="text-2xl font-semibold tracking-wider text-yellow-800 mt-[10px]">
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
