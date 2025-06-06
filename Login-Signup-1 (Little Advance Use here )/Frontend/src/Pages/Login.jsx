import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("Login Success", res.data);
        const user = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      })
      .catch((err) => {
        console.log("Login faild:", err.response?.data?.message || err.message);
        alert(err.response?.data?.message || "Login faild");
      });
  };

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center bg-violet-200">
        <div className="border-2 border-white rounded-2xl w-[25vw]">
          <p className="flex justify-center p-5 text-2xl font-bold">Login</p>
          <div className=" flex justify-center">
            <form className="pt-5 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center">
                <div className="email w-full px-5">
                  <p className="pr-3 font-semibold mb-2">Email</p>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="border-2 border-black px-3 py-2 w-full rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="password  w-full px-5">
                  <p className="pr-3 font-semibold mt-3 mb-2">Password</p>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-2 border-black px-3 py-2 w-full rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2.5 mt-5 mb-5 w-2/5 rounded-xl text-white font-bold tracking-widest">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <hr className="bg-red-300 w-[90%]" />
          </div>
          <div className=" flex justify-center">
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-500 px-4 py-2 mt-5 mb-5 rounded-xl text-white text-center font-bold w-[90%] tracking-widest"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
