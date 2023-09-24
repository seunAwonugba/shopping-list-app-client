import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";

const UserAccountPage = () => {

    // we have information about the user here  
    // Add the Logout buttons 
    // Name 
    // Previous list


    //if user is signed in , show form to add list

    // display list on side with user 

    return (

        <div className="m-10 items-centercontainer grid grid-cols-2 gap-3">
            <ItemsForm />
            <ItemsList />
        </div>
    )

}

export default UserAccountPage;
