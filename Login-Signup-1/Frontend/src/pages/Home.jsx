import axios from "axios";
import React, { useEffect, useState } from "react";
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
        console.error("Failed to parse user data:");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = (e) => {
    axios
      .post("http://localhost:4000/api/v1/users/logout")
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  return (
    <div className="h-[100vh] bg-green-300 flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold text-violet-500">
        Hello {user?.fullName || "User"}
      </h1>
      <button
        className="bg-red-700 hover:bg-red-500 px-5 py-2 rounded-2xl mt-5 text-white font-bold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
