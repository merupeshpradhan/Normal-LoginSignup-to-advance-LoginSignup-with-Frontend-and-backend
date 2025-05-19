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
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("user"); // Clean up corrupted data
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
    <div className="h-[100vh] flex flex-col justify-center items-center font-bold bg-yellow-700 text-white">
      <h1 className="text-2xl mb-3">Hello {user?.fullName || "Guest"}</h1>
      <button
        className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-400 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
