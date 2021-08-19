import React,{createContext , useContext,useState, useEffect } from "react";

const BannerProduct = createContext();
export const useBannerProduct = () => useContext(BannerProduct);


function ProductContextProvider ({children}){
    const [categories , setCategories] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
       const getCategories = async () => {
           await fetch('https://fakestoreapi.com/products/categories')
           .then(res=>res.json())
           .then(json=>setCategories(json))
       }
       getCategories();
     },[]);
     const value = {categories , setCategories}
    
    return (
        <BannerProduct.Provider value={value} >
            {children}
        </BannerProduct.Provider>
    )
}

export default ProductContextProvider;
