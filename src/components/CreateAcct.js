import React, { Fragment, useState } from "react";
import bgImage from "../Image/imag1.jpg";
import success from "../Image/successIcon.svg";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const CreateAcct = () => {
  const [error, setError] = useState("");
  const history = useNavigate();
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
   setShowModal(true)
  };

  const goToLogin =()=>{
    history('/login')
  }
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
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
                className="bg-[#669F2A] text-white px-4 py-2 rounded-lg hover:bg-green-700 "
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
    <Modal isVisible={showModal} onClose={() => closeModal()}>
        <div className="p-4 flex justify-between flex-col items-center">
          <img
            src={success}
            alt="error&Success"
            width="92px"
            height="92px"
            className="max-w-[100%]"
          />
          <h5 className="text-2xl font-semibold max-w-[456px] text-center sm:mt-3">
            Account Created 
          </h5>
          <p className="text-base font-normal max-w-[456px] text-center mt-2 sm:mb-4">
            Congratulations! You have successfully created an account.
          </p>
          
          <button onClick={goToLogin}
            className="w-full mb-4 h-auto flex items-center text-center 
            justify-center gap-3 py-3  md:py-4 md:px-4 px-4 text-base
            sm:max-w-[456px] bg-[#669F2A] text-[#E6EFFD] rounded-full mt-2"
          >
            <span className="font-semibold text-base text-[#FFFFFF]">Proceed to Login </span>
          </button>
          <button
              onClick={() => closeModal()}
              className="w-full mb-4 h-auto flex items-center text-center 
            justify-center gap-3 py-3  md:py-4 md:px-4 px-4 text-base
            sm:max-w-[456px] bg-none text-[#669F2A] rounded-full mt-2"
            >
              <span className="font-semibold text-base">Not now</span>
            </button>
        </div>
      </Modal>
      </Fragment>
  );
};

export default CreateAcct;
