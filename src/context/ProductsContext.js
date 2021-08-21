import React,{createContext , useContext,useState, useEffect } from "react";
import axios from "../axios";

const AllCategories = createContext();
export const useAllCategories = () => useContext(AllCategories);

const ShowBackDrop = createContext();
export const useBackDrop = () => useContext(ShowBackDrop)

function ProductContextProvider ({children}){
    const [categories , setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState("Category");
    const [showBackDrop , setShowBackDrop] = useState(false);
    useEffect(() => {
       const getCategories = async () => {
           await axios.get('categories')
           .then(res=>setCategories(res.data))
           .catch(err => setError(err))
       }
       getCategories();
     },[]);
     const categoryValue = {categories , setCategories,category, setCategory};
     const backDrop = {showBackDrop , setShowBackDrop};
    
    return (
        <AllCategories.Provider value={categoryValue} >
            <ShowBackDrop.Provider value={backDrop} >
            {children}
            </ShowBackDrop.Provider>
        </AllCategories.Provider>
    )
}

export default ProductContextProvider;
