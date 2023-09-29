import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import service from "../../baseURL";

const ItemsList = () => {
    const [getItems,setGetItems]=useState([])
    
    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await service.get("items/get-items",{
                    
                });
                console.log(response);
                setGetItems(response)
            } catch (error) {
                
                console.log(error.response.data.data);
            }
        };
        
        getItems();
        
    }, []);
    // console.log({getItems})



    // We pass the data via props
    
    // Setting up a delete Handler

    const deleteItemHandler = (itemName) => {
        console.log(itemName)

        try {
            service.get("items/delete-item/:id",{}).then(
                () => {
                    const newList = getItems.filter((el) => el.itemName !== itemName)
                    setGetItems(newList);
                }
            )
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="md:ml-4 ">
            {
                getItems.data?.data?.length > 0 && getItems.data?.data?.map((item) => (
                    <div className="border-b-[#F6F8FA] border-b-2 pb-4" key={item.id}>
                    <ItemCard 
                        name={item.name}
                        quantity={item.quantity}
                        notes={item.notes}
                        ondelete={deleteItemHandler}
                    />
                    </div>
                ))
            }
        </div>
    )

}

export default ItemsList;

