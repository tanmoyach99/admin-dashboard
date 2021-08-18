import Home from "./components/Pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./components/Pages/UserList/UserList";
import User from "./components/Pages/user/User";
import NewUser from "./components/Pages/newUser/NewUser";
import ProductList from "./components/Pages/products/ProductList";
import Product from "./components/Pages/product/Product";
import NewProduct from "./components/Pages/newProduct/NewProduct";

function App() {
  return (
    <div>
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
