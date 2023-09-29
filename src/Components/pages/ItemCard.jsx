import React, { useState } from "react";
import testImg from "../../assets/images/trouser.jpg";
import service from "../../baseURL";
import EditModal from "../SupportUtils/EditModal";

const ItemCard = ({ id, name, quantity, notes, ondelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const itemEditHandler = async (data) => {
    try {
      await service.patch(`/items/update-item/${id}`, {
        ...data,
      });
      setModalOpen(false);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (isEditing) {
    return (
      <EditModal
        isOpen={openModal}
        onClose={closeModal}
        onSave={itemEditHandler}
        currentItem={{
          name,
          quantity,
          notes,
        }}
      />
    );
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
            <h2 className="font-bold text-2xl">{name}</h2>

            <p className="py-1 px-2 rounded-xl bg-gray-200 text-gray-500 text-sm">
              {quantity} items
            </p>
          </div>
          <p className="w-80">{notes}</p>
          <div className="mt-8 gap-2 flex justify-between">
            <button
              onClick={() => setIsEditing(true)}
              className="flex px-4 py-3 bg-gray-100"
            >
              Edit
            </button>

            <button
              onClick={ondelete}
              className="flex px-4 py-3 bg-red-200 rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
