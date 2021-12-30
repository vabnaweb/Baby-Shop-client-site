import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch, } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider/AuthProvider'
import Header from './Components/Common/Header/Header'
import Home from './Components/Home/Home/Home'
import Products from './Components/Products/Products';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import DashBoard from './Components/DashBoard/DashBoard/DashBoard'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import Login from './Components/Login/Login/Login'
import Register from './Components/Login/Register/Register'
import PaymentSystem from './Components/DashBoard/Pay/PaymentSystem';
import MyOrders from './Components/DashBoard/MyOrders/MyOrders';
import Review from './Components/DashBoard/Review/Review';
import ManageAllOrders from './Components/DashBoard/ManageAllOrders/ManageAllOrders';
import AddProducts from './Components/DashBoard/AddProducts/AddProducts';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/DashBoard/ManageProducts/ManageProducts';
import NotFound from './NotFound/NotFound';

import Footer from './Components/Common/Header/Footer/Footer';
function App() {
  return (
    <div>
      <AuthProvider>

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <PrivateRoute path="/order/:_id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/paymentsystem">
              <PaymentSystem></PaymentSystem>
            </Route>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>

            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>


    </div>
  );
}

export default App;
