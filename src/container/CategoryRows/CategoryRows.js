import {useBannerProduct} from "../../context/ProductsContext"
import ItemsRow from "./ItemsRow/ItemsRow";

function ItemRows() {
    const {categories} = useBannerProduct(); 
    
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
