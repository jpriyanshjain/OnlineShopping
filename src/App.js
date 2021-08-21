import './App.css';
import {lazy ,Suspense} from"react"
import Navbar from './container/Navbar/Navbar';
import Banner from './container/Banner/Banner';
import CategoryRows from './container/CategoryRows/CategoryRows';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import FullProduct from './component/FullProduct/FullProduct';
import Footer from './component/Footer/Footer';
import AllProducts from "./container/AllProducts/AllProducts"
// import Signup from './component/auth/Signup/Signup';
import {useBackDrop} from "./context/ProductsContext";
import { Backdrop }  from '@material-ui/core';
import SideDrawer from './container/SideDrawer/SideDrawer';

const Login = lazy(() => import("./component/auth/Login/Login"))
const Signup = lazy(() => import("./component/auth/Signup/Signup"))
const FullProduct = lazy(() => import( './component/FullProduct/FullProduct'))

function App() {
  const {showBackDrop , setShowBackDrop}  = useBackDrop();
  return (
    <>
    <Router >
    <Backdrop className="app__backdrop" open={showBackDrop} onClick={( ) => setShowBackDrop(false)} >
            <SideDrawer />
          </Backdrop>
          <nav className="app__navbar">
            <Navbar />
          </nav>
          <Suspense fallback={<p className="app__Loading">Loading...</p>}>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Products/:category"  >
          <AllProducts />
        </Route>
        <Route  path="/Products" exact >
          <AllProducts />
        </Route>
        <Route path="/product/:id">
          <FullProduct />
        </Route>
        <Route path="/" exact>
              <div className="app__banner">
                <Banner />
              </div>
              <CategoryRows />
        </Route>          
      </Switch> 
      </Suspense>
      <Footer />
  </Router>
  </>
  );
}

export default App;
