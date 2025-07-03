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
        console.log("Somthing went to wrong to get user data");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const userLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/logout")
      .then((res) => {
        console.log("User you logout succefully! 🙄", res);
        alert("User you logout succefully! 🙄");

        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(
          "Somthing went wrong to logout 😒",
          err.response?.data?.message || err.message
        );
        alert("Somthing went wrong setup you that why its not logout 😒");
      });
  };

  return (
    <div className="bg-green-200 h-[100vh] flex flex-col justify-center items-center">
      <div className="text-xl font-semibold tracking-wider text-yellow-800 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src={user?.avatar}
            className="h-[30vh] border border-black w-[30vh] rounded-2xl"
          />
          <p className="mt-3 lg:text-xl xl:text-2xl">Welcome {user?.fullName || "User"} 😍</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          className="text-[15px] font-medium text-white tracking-wider cursor-pointer bg-red-500 w-[100px] h-[35px] md:w-[140px] md:h-[40px] md:text-[16px] xl:h-[42px] xl:text-[20px] rounded-md"
          onClick={userLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
