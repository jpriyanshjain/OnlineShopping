import "./AllProducts.css";
import {useParams} from "react-router-dom"
import axios from "../../axios"
import { useEffect,useState } from "react";
import Product from "../../component/Product/Product" 
import {useHistory} from "react-router-dom"

function AllProducts() {
        let prams = useParams();
        const [products , setProducts] = useState([]);
        const [error, setError] = useState(false);
        let history = useHistory();
        useEffect(() => {
            setError(false)
            if(prams.category)
                axios.get("/category/"+prams.category)
                .then(res=> {
                    if(res.data.length === 0) 
                        setError(true);
                     else{   
                    setProducts(res.data)
                     }
                });
                else {
                    axios.get()
                .then(res=> setProducts(res.data));
                }
            },[prams]);
            
            const productClickedHandler = (id) => {
                history.push("/product/" + id);
            }
            const errorMessage = (
                <div class="allProducts__error" >
                    <h4 className="allProducts__error--text">NO Products, please Select different Category </h4>
                </div>
            )
    return (
        <div className="allProducts">
            {error && errorMessage }
         
           { !error && products.map(product => (
               <div key={product.id} onClick={() => productClickedHandler(product.id)} className="allProducts__product">
               <Product  productItem={product} />
               </div>
           ) )}     
        </div>
    )
}

export default AllProducts;
