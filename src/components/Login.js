import React, { useState } from "react";
import loginimage from "../Image/shop.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication here (you would replace this with your actual authentication logic)
    const isValid = true; // Replace with actual authentication logic

    if (isValid) {
      setError("");
      //   handleLogin(formData.email);
    } else {
      setError("Invalid email or password");
      
    }
    setFormData({
        email: "",
        password: "",
      })
  };
  return (
    <div className=" w-full bg-[#E4B785] h-[100vh]">
      <div className="flex items-center justify-center">
        <div className="w-1/2  items-center justify-center hidden sm:flex">
          <img src={loginimage} alt="login" className="max-h-[100vh]" />
        </div>
        <div className="flex flex-col w-full m-8 sm:w-1/2 bg-[#fff] py-[37px] px-[28px]  border rounded-2xl  sm:max-w-[520px]">
          <h2 className="mt-7 leading-8 font-semibold p-0 text-[18px] sm:text-[32px]">
            Ready to shop 😊 ?
          </h2>
          <p className="py-[14px] text-[18px]">Kindly Log in to proceed.</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4 flex gap-2 items-center">
            <label className='w-[100px]'>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-6 flex gap-2 items-center">
            <label className='w-[100px]'>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-[#669F2A] text-white px-4 py-2 rounded-lg hover:bg-green-700 "
              >
                Log in
              </button>
            </div>
          </form>
          <div className="my-3 text-red-400">{error}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
