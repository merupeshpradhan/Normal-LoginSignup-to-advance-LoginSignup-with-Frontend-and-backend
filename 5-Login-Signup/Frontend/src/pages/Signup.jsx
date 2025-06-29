import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stateName, setStateName] = useState("");
  const [villageName, setVillageName] = useState("");
  const [distName, setDistName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-red-50 h-[100vh] flex justify-center items-center">
      <div className="border border-red-400 h-[70vh] w-[40vw] p-5 rounded-lg shadow-lg shadow-red-400">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold tracking-wider italic text-red-500">Signup</h1>
        </div>
        <form>
          <div className="mt-[50px] px-[20px] flex justify-center">
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Full name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md w-full"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-[20px] px-[20px] flex justify-center">
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md w-full"
              placeholder="State name"
              type="text"
              value={stateName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-[20px] px-[20px] flex justify-center">
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md mr-10 w-full"
              placeholder="Village name"
              type="text"
              value={villageName}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md w-full"
              placeholder="Dist name"
              type="text"
              value={distName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-[20px] px-[20px] flex justify-center">
            <input
              className="border p-2 w-[40%] font-semibold tracking-wider rounded-md mr-10 w-[70%]"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 px-[20px] py-[10px] rounded mt-[30px] text-white font-bold tracking-wider">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
