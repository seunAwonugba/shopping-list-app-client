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

        <div className="mt-6 gap-8 justify-between grid grid-cols-1 md:grid-cols-[1fr_2fr]">
            <ItemsForm />
            <ItemsList />
        </div>
    )

}

export default UserAccountPage;
