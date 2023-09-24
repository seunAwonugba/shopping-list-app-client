
const ItemsForm = () => {

    return (
    <form>
        <div className="relative mb-4">
            <label htmlFor="ItemName" className="leading-7 text-sm text-gray-600">Name </label>
            <input type="text" id="ItemName" name="ItemName" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
            <label htmlFor="quantity" className="leading-7 text-sm text-gray-600">Quantity</label>
            <input type="text" id="quantity" name="quantity" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
            <label htmlFor="notes" className="leading-7 text-sm text-gray-600">Item Notes</label>
            <input type="text" id="notes" name="notes" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Add Item
        </button>
           
        </form>
    )

}

export default ItemsForm;