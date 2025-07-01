import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        setuser(JSON.parse(userData));
      } catch (error) {
        console.log("Something went wrong to get user details");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const userLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/users/logout")
      .then((res) => {
        console.log("Logout successfully", res);

        localStorage.removeItem("user");

        alert("Logout successfully 🤦‍♂️");

        setuser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(
          "Something went wrong to logout 😒",
          err.response?.data?.message || err.message
        );
        alert("Something went wrong to logout 😒");
      });
  };

  return (
    <div className="bg-green-300 h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold tracking-wider text-yellow-800">
        Welcome {user?.fullName || "User"} 😍
      </h2>
      <button
        className="bg-red-500 mt-[20px] px-[30px] py-[7px] rounded-xl font-semibold text-white hover:bg-red-600 cursor-pointer"
        onClick={userLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
