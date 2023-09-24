import React, { useState } from "react";
import bgImage from "../../assets/images/imag1.jpg"

const CreateAcctPage = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
     // Reset form data after successful submission
     setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setError("");
  };
  return (
    <div
      className="h-auto w-auto bg-cover bg-center bg-no-repeat overflow-hidden bg-[#D8D8E4]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex flex-col my-[30px]">
        <div className="flex justify-center p-[20px]">
          <div className="bg-[#fff] py-[37px] px-[28px] border rounded-2xl">
            <h2 className="mt-7 leading-8 font-semibold p-0 text-[18px] sm:text-[32px]">
              Welcome 👋,Please Enter your full details
            </h2>
            <p className="py-[14px] text-[18px]">
              Tell us a little bit about you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-2 my-[10px] text-left justify-center">
                <div className="flex items-center  gap-2">
                  <label className='w-[150px]'>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    required
                  />
                </div>
                <div className="flex items-center  gap-2">
                  <label className='w-[150px]'>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className='w-[150px]'>Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className='w-[150px]'>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className='w-[150px]'>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 "
              >
                Create Account
              </button>
              </div>
            </form>
            <div className="my-3 text-red-400">{error}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcctPage;
