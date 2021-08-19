import './App.css';
import Navbar from './container/Navbar/Navbar';
import Banner from './container/Banner/Banner';
import CategoryRows from './container/CategoryRows/CategoryRows';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FullProduct from './component/FullProduct/FullProduct';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router >
          <nav className="app__navbar">
            <Navbar />
          </nav>
      <Switch>
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
      <Footer />
  </Router>
  );
}

export default App;
