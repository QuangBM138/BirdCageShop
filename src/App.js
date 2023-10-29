import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CopyWriter from "./components/footer/CopyWriter";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";
import { Products_Cage } from "./data/Cages";
import Adress from "./components/address/Address";
import UserProfile from "./components/userProfile/UserProfile";
import CustomCage from "./components/customCage/CustomCage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import CreateAccount from "./components/createAccount/CreateAccount";
import LoginPage from "./pages/LoginPage";
import DetailOrder from "./components/detailOrder/DetailOrder";
import ManageOrder from "./components/manageOrder/ManageOrder";
import Payment from "./components/payment/Payment";
import Login from "./components/login/Login";
import CompareProductsPage from "./pages/CompareProductsPage";
import Address from "./components/address/Address";
import EditAddress from "./components/editAddress/EditAddress";
import AddNewAddress from "./components/addNewAddress/AddNewAddress";
import EditProfile from "./components/userProfile/editProfile/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import UseToken from "./components/handleToken/UseToken";
import NotFound from "./pages/NotFound";
function App() {
  const { getToken } = UseToken()
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log("pathname: ", pathname);
  return (
    <div className="App" style={{ background: "#fff" }}>
      <Header></Header>
      <Routes>
        <Route path="/detail/:id" element={<ProductDetailPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/manageorder"
          element={
            <ProtectedRoute page="profile" user={getToken} >
              <ManageOrder />
            </ProtectedRoute>
          } />


        <Route path="/detailorder"
          element={
            <ProtectedRoute page="profile" user={getToken} >
              <DetailOrder />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/user">
          <Route
            index={true}
            element={
              <ProtectedRoute page="profile" user={getToken}>
                <UserProfile />
              </ProtectedRoute>
            }
          >
          </Route>
          <Route
            index={false}
            path="manageorder"
            element={
              <ProtectedRoute page="profile" user={getToken} >
                <ManageOrder />
              </ProtectedRoute>
            }
          />
          <Route
            index={false}
            path="editprofile"
            element={
              <ProtectedRoute page="profile" user={getToken} >
                <EditProfile />
              </ProtectedRoute>
            }>
          </Route>

          <Route index={false} path="address">
            <Route
              index={true}
              element={
                <ProtectedRoute page="profile" user={getToken} >
                  <Address />
                </ProtectedRoute>
              }
            >

            </Route>
            <Route
              index={false}
              path="editaddress"
              element={
                <ProtectedRoute page="profile" user={getToken} >
                  <EditAddress />
                </ProtectedRoute>
              }
            >
            </Route>
            <Route
              path="addnewaddress"
              index={false}
              element={
                <ProtectedRoute page="profile" user={getToken} >
                  <AddNewAddress />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route
          path="/payment"
          element={
            <ProtectedRoute page="payment" user={getToken}>
              <Payment />
            </ProtectedRoute>
          }>

        </Route>
        <Route
          path="/login" exact
          element={
            <ProtectedRoute page="login" user={getToken}>
              <Login />
            </ProtectedRoute>
          }>
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="compare/:cageId1/:cageId2" element={<CompareProductsPage />} />
        <Route path="/customcage" element={<CustomCage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>



      <Footer></Footer>
    </div>
  );
}

export default App;
