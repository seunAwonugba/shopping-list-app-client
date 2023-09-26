import { useState } from "react";
import axios from "axios";

const ItemsForm = () => {


    const [itemName,setItemName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [notes, setNotes] = useState('');


    const dataHandler = async(ev) => {
        ev.preventDefault();

        const itemData = {itemName, quantity, notes}

        // if (id) {
        //     //its an update to existing list
        //     await axios.put('/items',{id,...itemData})
        // } else {
        //     await axios.post('/items',itemData);

        // }
    }

    return (

    <div className="mx-auto">
        <div className="py-3 px-4">
            <label>Item Name</label>
            <input 
                type="text"
                className="w-full border my-2 py-2 px-2 rounded-2xl"
                value={itemName}
                onchange={ev => setItemName(ev.target.value)}
            />
        </div>
        <div className="py-3 px-4">
            <label>Quantity</label>
            <input 
                type="text"
                className="w-full border my-2 py-2 px-2 rounded-2xl"
                value={quantity}
                onchange={ev => setQuantity(ev.target.value)}
            />
        </div><div className="py-3 px-4">
            <label>Notes</label>
            <textarea 
                type="text"
                className="block h-20 border"
                value={notes}
                onchange={ev => setNotes(ev.target.value)}
            />
        </div>
        <button onClick={dataHandler} className="py-2 px-2 bg-red-500 text-white rounded-2xl">
            Add to list
        </button>
    </div>
    )

}

export default ItemsForm;