import { Link } from "react-router-dom";
import shoppingImage from "../../assets/images/shopping_index.jpg"


const IndexPage = () => {

    return (

        <section className=" max-h-screen text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <div className="max-h-screen rounded-full">
                        <img className="object-cover object-center rounded" alt="hero" src={shoppingImage} />
                    </div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Welcome to Oga Shopping Center
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Feel free to login and create you shopping list my Friend. 
                        Always remember we got you covered at Baba Oga shopping center. 
                        Welcome Home. 
                    </p>
                    <div className="flex justify-center">
                        <Link to={"/login"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            </section>








       
    )

}


export default IndexPage;


