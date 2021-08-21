import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axios from "../../axios";
import "./FullProduct.css"
import Button from "../../component/Button/Button"

function FullProduct() {
    let prams = useParams();
    const [product, setProduct] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(() =>{
        const getCategories = async () => {
            await axios.get(prams.id)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            });
        }
        getCategories();
    },[prams.id]);
    let ProductBody = <p className="fullproduct__loading">Loading...</p>;
    if(!loading){
       ProductBody = (
     <div className="fullProduct__des">
           <div className="fullProduct__des--img">
              <img src={product.image}  alt="image"/>
           </div>
           <div className="fullProduct__des--body">
               <h3 className="fullProduct__des--title">{product.title}</h3>
               <p className="fullProduct__des--description">
                   {product.description}</p>
               <p className="fullProduct__des--price">
                   Price :  <strong>$ {product.price}</strong></p>
                     <div className="fullProduct__button_container">
                        <Button>Buy Now</Button>     
                     </div>   
           </div>
    </div>
       )
    }
    return(
        <div className="fullProduct">
            {ProductBody}
        </div>
         )
}

export default FullProduct
