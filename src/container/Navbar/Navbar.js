import {useState} from "react";
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "../../assets/e-commerce-icon.jpg";
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
import Button from "../../component/Button/Button"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {useAllCategories , useBackDrop} from "../../context/ProductsContext"
import {useHistory} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Navbar() {
    const {category , setCategory,categories} = useAllCategories();
    const {showBackDrop , setShowBackDrop} = useBackDrop();
    const {auth , setAuth} = useAuthContext();
    const [searchInfo , setSearchInfo] = useState("")

    const notify = () => toast("Logout Successfully");

    let history = useHistory();
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        if(selectedCategory !== "category")
       history.push("/Products/"+ selectedCategory);        
    };
    const menuToggleHandler = () => {
        setShowBackDrop(pervState => !pervState);
    }
    const logoutHandler = () => {
        notify();
        setAuth({});
    }
    let AuthButton = (
        <Link to="/login">
        <div className="navbar__btns--btn">
            <Button inNav>Login</Button>
        </div>
    </Link>
    )
    if(auth.userName) {
        AuthButton = (
            <div className="navbar__btns--btn">
            <Button clicked={logoutHandler} inNav>Logout</Button>
        </div>
        )
    }
    const searchInfoHandler = (event) => {
        setSearchInfo(event.target.value)
    }
    const searchHandler = () => {
        setCategory(searchInfo);
        history.push("/Products/"+ searchInfo);        

    }
    return (
        <nav className="navbar">
             <ToastContainer />
                <div onClick={menuToggleHandler} className="navbar__menu" >
                    <MenuIcon />
                </div>
            <Link to="/">
            <div className="navbar__Icon">
               <img className="navbar__icon--img"
                    src={Icon}/>
            </div>
            </Link>

            <div className="navbar__input">
                <SearchIcon />
                <input 
                type="text" className="navbar__input--input"
                 placeholder="Search Category..." value={searchInfo} onChange={searchInfoHandler} />
                 <Button inNav clicked={searchHandler} >Search</Button>
            </div>
            <div className="navbar__btns">
            <Link to="/Products">
                <div className="navbar__btns--btn">
                  <Button  inNav>products</Button>
                </div>
            </Link>
            <div className="navbar__btns--btn">
                    <FormControl >
                            <NativeSelect
                            value={category}
                            onChange={handleCategoryChange}
                            name="age"
                            className="navbar__btns--dropdown"
                            >
                            <option className="navbar__btns--dropdown--optons" value="category">Category</option>
                            {categories?.map((category,idx) =>
                            <option className="navbar__btns--dropdown--optons" value={category} key={idx} >
                                    {category}</option> )}
                            </NativeSelect>
                        </FormControl>
                    </div>
               {AuthButton}
            </div>
            
        </nav>
    )
}

export default Navbar
