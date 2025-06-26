function login() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border border-green-400 w-[20vw] h-[45vh] rounded-2xl shadow">
        <div className="flex justify-center py-2 ">
          <h3 className="text-xl font-bold text-yellow-500 tracking-wider">Login</h3>
        </div>
        <div className="mt-8">
          <div className="px-5">
            <p className="mb-1 font-bold">Email</p>
            <input
              className="border rounded-md w-full h-9 pl-5 outline-0"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="px-5">
            <p className="mb-1 mt-2 font-bold">Password</p>
            <input
              className="border rounded-md w-full h-9 pl-5 outline-0"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-7">
            <button className="bg-green-500 py-2 px-10 font-bold text-white rounded-md hover:bg-green-600">Login</button>
          </div>
        </div>
        <hr className="mt-6"/>
        <div className="signup flex justify-center mt-6 px-1">
          <button className="border w-full p-2 rounded-xl bg-red-500 hover:bg-red-600 tracking-widest text-white font-bold text-base">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default login;
