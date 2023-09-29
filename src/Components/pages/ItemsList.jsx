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
    const editedDataHandler = () => {

    }



    // Setting up a delete Handler
    const deleteItemHandler = async(id) => {
        // ev.preventDefault();

        console.log(id)
        // axios.delete('/delete-items/'+id).then(response => {
        //     let {data} = response;

        // })
        try {
            // console.log('Are you deleting')
           const item2Del = await service.delete(`items/delete-items/${id}`)
           console.log(item2Del)
            // .then(
            //     () => {
            //         const newList = getItems.filter((el) => el.id !== id)
            //         setGetItems(newList);
            //     }
            //)
        } catch (e) {
            console.log(e.message)
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
                        onedit={editedDataHandler}
                        ondelete={() => deleteItemHandler(item.id)}
                    />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsList;

