import { Link, useNavigate} from "react-router-dom";
import fun from "../../assets/images/fun.jpg";
import {  useState } from "react";

const LoginPage = () => {
  // const [redirect,setRedirect] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    
      // Reset form data after successful submission
     setFormData({
        email: '',
        password: '',
        
      });
     
      //redirect to /account
     
    
  }
  const history = useNavigate();

 const gotoAcct =()=>{
  history('/account')
 }
  


  return (
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col sm:flex-row flex-wrap items-center ">
        <div className="flex flex-col flex-1">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Welcome, Login to shop ...
          </h1>

          <img src={fun} alt="" className="max-w-full w-[450px]" />
        </div>
        <div className="flex-1 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5" >
            Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="relative mb-4">
              <label for="Email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={gotoAcct} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Don't have an account yet ?{" "}
              <Link className="underline text-black" to={"/register"}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
    
  );
};

export default LoginPage;
