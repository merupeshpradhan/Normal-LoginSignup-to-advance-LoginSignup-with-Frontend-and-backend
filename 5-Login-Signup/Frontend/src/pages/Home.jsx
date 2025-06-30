import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Faild to parse user data");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const userLogout = (e) => {
    axios
      .post("http://localhost:4000/api/v1/users/logout")
      .then((res) => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log("Logout error 😒", err);
        alert("Somthing went wrong for logout 😒");
      });
  };

  return (
    <div className="h-[100vh] bg-green-300 flex flex-col justify-center items-center">
      <div className="text-2xl text-yellow-700 font-bold tracking-wider">
        Welcome {user?.fullName || "User"} 😍
      </div>
      <div className="mt-[20px]">
        <button
          className="bg-red-500 hover:bg-red-600 px-[25px] py-[7px] rounded-lg text-white font-semibold tracking-wider"
          onClick={userLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
