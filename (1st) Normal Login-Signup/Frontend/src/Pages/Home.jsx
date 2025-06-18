import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [user, SetUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      SetUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = (e) => {
    axios
      .get("http://localhost:4000/api/v1/user/logout")
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  
  return (
    <div className="bg-fuchsia-400 h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white">
        Hello {user ? user.name : "Guest"}
      </h1>
      <button
        className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md mt-5 hover:bg-red-500"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
