import {useAllCategories} from "../../context/ProductsContext"
import ItemsRow from "./ItemsRow/ItemsRow";

function ItemRows() {
    const {categories} = useAllCategories(); 
    
    return (
        <div className="itemRows">
            {
                categories?.map((category,idx) => (
                    <div key={idx} className="itemRows__row">
                        <ItemsRow category={category} />
                    </div>
                ))
            }
            
        </div>
    )
}

export default ItemRows
