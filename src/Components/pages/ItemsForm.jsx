import { useState } from "react";
// import testImg from '../../assets/images/trouser.jpg'
// import axios from "axios";
// import baseurl from "../../baseURL";
// import service from "../../baseURL";
// import { useParams} from "react-router;"

const ItemsForm = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  //list item creation

  async function createShoppingItem(event) {
    event.preventDefault();
    // console.log(baseurl)
    // try {
    //   // const response = await baseurl.post('/user/sign-up,')
    //   const response = await service.post("/user/sign-up", {
    //     firstName: "Fatimah",
    //     lastName: "Shalewa",
    //     email: "kkjjj@gmail.com",
    //     password: "Ayodele",
    //     phoneNumber: "1234567",
    //   });
    //   console.log(response.data);
    // } catch (e) {
    //   //   alert("Item creation failed. ");
    //   console.log(e);
    // }
  }
  //   createShoppingItem();
  return (
    <form onSubmit={createShoppingItem}>
      <div className="py-3 px-4">
        <label>Item Name</label>
        <input
          type="text"
          className="w-full border my-2 py-2 px-2 rounded-2xl"
          value={itemName}
          onChange={(ev) => setItemName(ev.target.value)}
        />
      </div>
      <div className="py-3 px-4">
        <label>Quantity</label>
        <input
          type="number"
          className="w-full border my-2 py-2 px-2 rounded-2xl"
          value={quantity}
          onChange={(ev) => setQuantity(ev.target.value)}
        />
      </div>
      <div className="py-3 px-4">
        <label>Notes</label>
        <textarea
          type="text"
          className="block h-20 border"
          value={notes}
          onChange={(ev) => setNotes(ev.target.value)}
        />
      </div>
      <button className="py-2 px-2 bg-red-500 text-white rounded-2xl">
        Add to list
      </button>
    </form>
  );
};

export default ItemsForm;
