import axios from 'axios'
import { useState,useEffect } from 'react';
import Product from "../../../component/Product/Product"
import "./ItemsRow.css"
import {useHistory } from "react-router-dom"

function ItemsRow({category} ) {
    const [products , setProducts] = useState([]);
    let history = useHistory()
    useEffect(() =>{
        axios({
            method: "GET",
            url : `https://fakestoreapi.com/products/category/${category}`,
        }).then(res => {setProducts(res.data)
            // console.log(res.data);
        });
    },[category]);
    const produckClickHandler = ( id) => {
        history.push("/product/" + id)

    }
  
    return (
        <div className="itemsRow">
            <h2 className="itemsRow__Title">{category}</h2>
            {/* container */}
            <div className="itemsRow__products">
                {
                    products?.map( (product,idx) => (
                        <div className="itemsRow__product" onClick={ ()=>produckClickHandler(product.id)} key={idx}>
                        <Product productItem={product} />
                      </div>
                    ))
                }
            </div>


        </div>
    )
}

export default ItemsRow
