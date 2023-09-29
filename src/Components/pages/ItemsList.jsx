import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import service from "../../baseURL";

const ItemsList = () => {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await service.get("items/get-items", {});
        setGetItems(response);
      } catch (error) {
        console.log(error.response.data.data);
      }
    };

    fetchItems();
  }, []);

  // Setting up a delete Handler
  const deleteItemHandler = async (id) => {
    try {
      await service.delete(`items/delete-item/${id}`);
      alert("Item has been successfully deleted");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="md:ml-4 ">
      {getItems.data?.data?.length > 0 &&
        getItems.data?.data?.map((item) => (
          <div className="border-b-[#F6F8FA] border-b-2 pb-4" key={item.id}>
            <ItemCard {...item} ondelete={() => deleteItemHandler(item.id)} />
          </div>
        ))}
    </div>
  );
};

export default ItemsList;
