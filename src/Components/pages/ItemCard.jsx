import React, { useState, useEffect } from "react";
import testImg from "../../assets/images/trouser.jpg";
import service from "../../baseURL";
import EditModal from '../SupportUtils/EditModal';

const ItemCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const itemEditHandler = async() => {
    try {
      const response = await service.patch(`/items/update-item/${props.itemId}`, {...editedItem})
      // console.log('**** New Response ****')
      // console.log(response.data)
      setModalOpen(false)
      setIsEditing(false)

    } catch(error) {
      console.log(error)
    }
  }


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveChanges = (editedItem) => {
    // Handle saving changes to the server
    setModalOpen(false);
    setIsEditing(false);
  };

  const [editedItem, setEditedItem] = useState({
    name: props.name,
    quantity: props.quantity,
    notes: props.notes,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };


  if(isEditing){
    return (
      <EditModal
        isOpen={openModal}
        onClose={closeModal}
        onSave={saveChanges}
        currentItem={
          {
            name: props.name,
            quantity: props.quantity,
            notes: props.notes
          }
        }
       />
    )
  }


  return (
    <div className="max-h-screen">
      <div className="flex gap-4 mt-4">
        <div>
          <img
            className="w-32 h-32 object-cover rounded-2xl"
            src={testImg}
            alt=""
          />
        </div>
        <div className="h-40 gap-1 max-w-xs">
          <div className="flex justify-between">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedItem.name}
                onChange={handleInputChange}
                className="font-bold text-2xl"
              />
            ) : (
              <h2 className="font-bold text-2xl">{props.name}</h2>
            )}
            <p className="py-1 px-2 rounded-xl bg-gray-200 text-gray-500 text-sm">
              {props.quantity} items
            </p>
          </div>
          <p className="w-80">
            {isEditing ? (
              <input
                type="text"
                name="notes"
                value={editedItem.notes}
                onChange={handleInputChange}
              />
            ) : (
              props.notes
            )}
          </p>
          <div className="mt-8 gap-2 flex justify-between">
            {isEditing ? (
              <button 
                onClick={itemEditHandler} 
                className="flex px-4 py-3 bg-gray-100">
                Save
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(true)} 
                className="flex px-4 py-3 bg-gray-100">
                Edit
              </button>
            )}
            <button
              onClick= {props.ondelete}
              className="flex px-4 py-3 bg-red-200 rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ItemCard;
