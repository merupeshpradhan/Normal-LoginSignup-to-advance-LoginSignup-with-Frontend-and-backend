function Signup() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="shadow-md rounded-2xl border border-red-400 w-[20vw] h-[55vh]">
        <div className="flex justify-center mt-3 font-bold">
          <h3 className="px-10 font-bold text-2xl text-red-500">Register</h3>
        </div>
        <div className="mt-10 px-3">
          <input
            placeholder="Full name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Mother name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Father name"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="DOB"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Email"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-3 px-3">
          <input
            placeholder="Password"
            className="border outline-0 pl-3 rounded-md w-full py-2"
            type="text"
          />
        </div>
        <div className="mt-5 px-3 flex justify-center">
          <button className="bg-red-500 py-2 px-15 rounded-xl text-lg font-bold text-white hover:bg-red-600">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
