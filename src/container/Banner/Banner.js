import "./Banner.css";
import{useState, useEffect} from "react"
import {useBannerProduct} from "../../context/ProductsContext";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import axios from "axios";
import Button from "../../component/Button/Button";
import {useHistory} from "react-router-dom"


function Banner() {
    const [bannerItems,setBannerItems] = useState([]);
    const [itemNumber , setItemnumber] = useState(0);
    let history = useHistory();
    useEffect( () => {
        axios({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            params : { limit : 5}
        }).then((response) => {
            const products = response.data;
            setBannerItems(products);
        })
    },[]);
    const changeBannerRightHandler = () => {
        setItemnumber(pervItemNo => (pervItemNo+1)%5 )
    }
    
    const changeBannerLeftHandler = () => {
        if(itemNumber === 0)
        {setItemnumber(4);}
        else{
        setItemnumber(pervItemNo => (pervItemNo-1)%5)
        }
    }
    const fullProductDisplayHandler = (id) => {
        history.push("/product/" + id);
    }
    return (
        <div className="banner" >
                <div className=" banner__button" onClick={changeBannerLeftHandler} >
                    <KeyboardArrowLeftIcon />
                </div>          
               <div className="banner__item">
           <div className="banner__img">
               <img className="banner__img--image" src={bannerItems[itemNumber]?.image} alt ="image" />
           </div>
            <div className="banner__contents">
                <h3>{bannerItems[itemNumber]?.title}</h3>
                <p className="banner__contents--des">{bannerItems[itemNumber]?.description}</p>
                <div className="banner__contents--button">
                <Button clicked={() => fullProductDisplayHandler(bannerItems[itemNumber]?.id)} >Know More</Button>
                </div>
            </div>
               </div>
            <div className="banner__button banner__button--right " onClick={changeBannerRightHandler}>
                    <KeyboardArrowRightIcon  />
                </div>  
        </div>
    )
}

export default Banner
