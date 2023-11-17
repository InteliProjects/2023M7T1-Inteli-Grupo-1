import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { ToastContainer } from 'react-toastify';
import Login from "../pages/Login/Login";
import Confirm from "../pages/ConfirmEmail/Confirm";
import ConfirmRegistration from "../pages/ConfirmRegistration/ConfirmRegistration";
import Congrats from "../pages/Congrats/Congrats"
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery"
import 'react-toastify/dist/ReactToastify.css';
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import Cart from "../pages/Cart/Cart";
import Catalog from "../pages/Catalog";
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import NewRegister from "../pages/NewRegister"
import { AuthProvider } from "../contexts/AuthContext";
import Orders from "../pages/Orders";
import AddAddress from "../pages/AddAddress";

// definição de cada rota da aplicação e a sua respectiva page
export default function Router() {

    return (
        <BrowserRouter>
        <AuthProvider>
            <GlobalStyle />
            <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Catalog />} />
                        <Route path="/pswrd-recovery" element={<PasswordRecovery />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/confirm-email" element={<Confirm />} />
                        <Route path="/confirm-registration" element={<ConfirmRegistration />} />
                        <Route path="/congrats" element={<Congrats />} />
                        <Route path="/product" element={<ProductDetails />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/register" element={<NewRegister />} />
                        <Route path="/track-order/:id" element={<TrackOrder />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/add-address" element={<AddAddress />} />
                    </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}