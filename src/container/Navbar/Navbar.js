import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "../../assets/e-commerce-icon.jpg";
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
import Button from "../../component/Button/Button"
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function Navbar() {
    return (
        <nav className="navbar">
                <div className="navbar__menu" >
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
                 placeholder="Search ..." />
            </div>
            <div className="navbar__btns">
                    <div className="navbar__btns--btn">
                        <Button inNav>products</Button>
                    </div>
                    <div className="navbar__btns--btn">
                    <FormControl >
        <NativeSelect
          value="Category"
        //   onChange={handleChange}
          name="age"
          className="navbar__btns--dropdown"
        //   inputProps={{ 'aria-label': 'age' }}
        >
          <option value="Category">Category</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
                    </div>
                <Link to="/login">
                    <div className="navbar__btns--btn">
                        <Button inNav>Login</Button>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar
