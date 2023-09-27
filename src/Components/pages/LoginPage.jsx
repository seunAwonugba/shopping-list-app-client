import { Link } from "react-router-dom";


const LoginPage = () => {


    function handleLoginSubmit(event) {
        event.preventDefault();
        //add more code here
    }

    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">
                    Welcome to the Login Page. 
                </h1>
                <p class="leading-relaxed mt-4">
                    Please provide the details you used to register on the platform
                    to login in into your account. We wish you a great experience
                    on the platform
                </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="relative mb-4">
                        <label for="Email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Login
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        Don't have an account yet ? <Link className="underline text-black" to={'/register'}>Register</Link>
                    </p>
                </form>
                
            </div>
        </div>
    </section>
    )

}


export default LoginPage;
