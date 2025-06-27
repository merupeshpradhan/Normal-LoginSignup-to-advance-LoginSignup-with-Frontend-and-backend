import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failded to parse user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    axios
      .post("http://localhost:4000/api/v1/users/logout")
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout Error: ", error);
      });
  };

  return (
    <div className="bg-lime-500 h-[100vh] flex flex-col justify-center items-center">
      <div className="text-5xl font-extrabold tracking-widest text-center text-fuchsia-500">
        wellcome {user?.fullName || "Guest"}
      </div>
      <div className="mt-15">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-10 py-3 font-bold rounded-2xl text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
