import { TestData } from "./DataSample";
import ItemCard from "./ItemCard.jsx";

const ItemsList = () => {

    return (
        <div className="h-full md:ml-4 ">
            {
                TestData && TestData.map((item) => (
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

