import { useState,useEffect } from 'react';
import Product from "../../../component/Product/Product"
import "./ItemsRow.css"
import {useHistory } from "react-router-dom"
import axios from "../../../axios"

function ItemsRow({category} ) {
    const [products , setProducts] = useState([]);
    let history = useHistory();
    useEffect(() =>{
            const getCategories = async () => {
                await axios.get(`category/${category}`)
                .then(res=>setProducts(res.data))
            }
            getCategories();
    },[category]);
    const produckClickHandler = ( id) => {
        history.push("/product/" + id)
    }
      
    return (
        <div className="itemsRow">
            <h2 className="itemsRow__Title">{category}</h2>
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
