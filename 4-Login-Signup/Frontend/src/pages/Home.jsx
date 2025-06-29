import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Faild to parse user data: ");
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
        console.log("Logout Error: ", err);
      });
  };

  return (
    <div className="h-[100vh] bg-green-300 flex flex-col justify-center items-center">
      <div className="text-2xl text-blue-600 font-bold tracking-widest">
        Wellcome {user?.fullName || "User"}😊
      </div>
      <div className="mt-[20px]"></div>
      <button
        className="bg-red-500 text-white px-[25px] py-[8px] rounded-sm font-bold tracking-wider cursor-pointer"
        onClick={userLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
