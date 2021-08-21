import "./SideDrawer.css"
import {Link , useHistory} from "react-router-dom";
import {useAllCategories} from "../../context/ProductsContext";
import {useAuthContext} from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SideDrawer() {
    const {category , setCategory,categories} = useAllCategories();
    let history = useHistory();
    const{auth,setAuth} = useAuthContext();
    const handleCategoryChange = (category) => {
        console.log(category);
        setCategory(category);
       history.push("/Products/"+category );        
    };
    const linkStyle = { color: 'inherit', textDecoration: 'none'};
    var authInfo = (
        <Link to="/login"  style={linkStyle} >
            <div className="sideDrawer__contents">
                <p>Login</p>
            </div>
        </Link>
    );
    const notify = () => toast("Logout Successfully");

    const logoutHandler = () => {
        notify();
        setAuth({});
    }
    if(auth.userName){
        authInfo = (
            <div onClick={logoutHandler} className="sideDrawer__contents">
            <p>Logout</p>
        </div>
        ) 
    }
    return (
        <div className="sideDrawer">
            <ToastContainer />
            <Link to="/Products"  style={linkStyle} >
                <div className="sideDrawer__contents">
                  <p>Products</p>
                </div>
            </Link>
            <div className="sideDrawer__category">
                <p className="sideDrawer__contents sideDrawer__category--title">Categories</p>
                    <div className="sideDrawer__categories">
                        {categories?.map((category,idx) => <p key={category+idx}
                        onClick={() => handleCategoryChange(category) }
                         className="sideDrawer__catedories--category">{category}</p> ) }
                    </div>
            </div>
                {authInfo}

        </div>
    )
}

export default SideDrawer
