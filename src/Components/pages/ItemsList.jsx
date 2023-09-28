import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import service from "../../baseURL";

const ItemsList = () => {
    const [getItems,setGetItems]=useState([])
    
    // useEffect(()=>{
    //     try {
    //         const response = await service.get("/user/sign-up", {
    //             name: itemName,
    //             quantity: quantity,
    //             notes: notes,
              
    //         });
    //         console.log(response.data);
    //       } catch (e) {
           
    //         console.log(e);
    //       }
    // })
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
    console.log({getItems})
    return (
        <div className="md:ml-4 ">
            {
                getItems.data?.data?.length > 0 && getItems.data?.data?.map((item) => (
                    <div className="border-b-[#F6F8FA] border-b-2 pb-4">
                    <ItemCard 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        notes={item.notes}
                    />
                    </div>
                ))
            }
        </div>
    )

}

export default ItemsList;

