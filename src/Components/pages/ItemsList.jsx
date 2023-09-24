import { TestData } from "./DataSample";
import ItemCard from "./ItemCard.jsx";

const ItemsList = () => {

    return (
        <div>
            {
                TestData && TestData.map((item) => (
                    <ItemCard 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        notes={item.notes}
                    />
                ))
            }
        </div>
    )

}

export default ItemsList;

