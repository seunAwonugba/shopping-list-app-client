import React, { useState } from "react";

const EditModal = ({ isOpen, onClose, onSave, currentItem }) => {
  const [editedItem, setEditedItem] = useState(currentItem);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className={`modal ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="modal-dialog bg-white rounded shadow-lg w-96 mx-auto p-6">
        <div className="modal-content">
          <div className="modal-header border-b pb-2 mb-4 flex justify-between items-center">
            <h5 className="modal-title text-xl font-bold">Edit Item</h5>
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300"
                id="name"
                name="name"
                value={editedItem.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity
              </label>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300"
                id="quantity"
                name="quantity"
                value={editedItem.quantity}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Notes
              </label>
              <input
                type="text"
                className="form-input w-full rounded-md border-gray-300"
                id="notes"
                name="notes"
                value={editedItem.notes}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="modal-footer border-t pt-2 mt-4 flex justify-end">
            <button
              type="button"
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn bg-blue-500 text-white hover:bg-blue-700 ml-2"
              onClick={() => onSave(editedItem)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
