// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import Order from './pages/Order';
import OrderDetail from './pages/OrderDetail';

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route path="/products/">
          <ProductList></ProductList>
        </Route>
        <Route path="/product/:id">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="/cart">
          {
            !user ? <Redirect to="/" /> : <Cart></Cart>
          }
        </Route>
        <Route path="/success">
          <Success></Success>
        </Route>
        <Route path="/orders">
          <Order></Order>
        </Route>
        <Route path="/order/:id">
          <OrderDetail></OrderDetail>
        </Route>
        <Route path="/login">
          {
            user ? <Redirect to="/" /> : <Login></Login>
          }
        </Route>
        <Route path="/profile/:id">
          {
            !user ? <Redirect to="/" /> : <Profile></Profile>
          }
        </Route>
        <Route path="/register">
          {
            user ? <Redirect to="/" /> : <Register></Register>
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
