// import Button from "../../component/UI/Button/Button"
import "./Product.css"

function Product({productItem}) {
    return (
        <div className="product">
            <div className="product__image" >
            <img src ={productItem.image} className="product__image--img" alt="Image" />
            </div>
            <hr/>
            <div className="product__description">
                <h5 className="product__description--title" >{productItem.title}</h5>
                <p className="product__description--price">
                  Price :  $<strong>{productItem.price}</strong>
                </p>
            </div>
         
        </div>
    )
}

export default Product
