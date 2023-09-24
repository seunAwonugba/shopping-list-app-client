import { Link } from "react-router-dom";
import { useContext  } from "react";
import UserContext from '../SupportUtils/UserContext';

const Header = () => {

    const {user} = useContext(UserContext)
    return (
        <header>
            <Link to={"/"} className="">

            </Link> 


            <Link>


                {!!user && (
                    <div>
                        {user.name}
                    </div>
                )}
            </Link>



        </header>
    );

}


export default Header;