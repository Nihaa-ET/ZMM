import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import App from '../App'
import SellerLogin from '../pages/SellerLogin'
import SellerSignup from '../pages/SellerSignup'
import SellerForgotPassword from '../pages/SellerForgotPassword'
import SellerResetPassword from '../pages/SellerResetPassword'
import RegisterOtp from '../pages/RegisterOtp'
import SellerDashBoard from '../pages/SellerDashBoard'
import DashboardOverview from '../pages/sellerDashboard/DashboardOverview'
import ProductMangeMent from '../pages/sellerDashboard/ProductMangeMent'
import OrderManagement from '../pages/sellerDashboard/OrderManagement'
import CustomerManagement from '../pages/sellerDashboard/CustomerManagement'
import PromotionsandDiscounts from '../pages/sellerDashboard/PromotionsandDiscounts'
import Settings from '../pages/sellerDashboard/Settings'
import Support from '../pages/sellerDashboard/Support'
import AllSellerDetails from '../pages/sellerDashboard/AllSellerDetails'
import AddSeller from '../pages/sellerDashboard/AddSeller'
import TrashedSellerDetails from '../components/TrashedSellerDetails'



const router = createBrowserRouter(
    [
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "seller-login",
                element : <SellerLogin />
            },

            {
                path : "seller-signup",
                element : <SellerSignup />
            },
           
            {
                path : "send-register-otp",
                element : <SellerSignup />
            },
            {
                path : "seller-forgot-password",
                element : <SellerForgotPassword />
            },
            {
                path : "seller-reset-password",
                element : <SellerResetPassword />
            },
            {
               path : "seller-register-otp-verify",
               element : <RegisterOtp />
            },
            {
                path : "seller-deshboard",
                element : <SellerDashBoard />,
                children : [
                    {
                        path : "all-seller",
                        element : <AllSellerDetails />
                    },
                    {
                        path : "add-seller",
                        element : <AddSeller />
                    },
                    {
                        path : "trash-seller-details",
                        element : <TrashedSellerDetails />
                    },
                    {
                        path : "dashboard-overview",
                        element : <DashboardOverview />
                    },
                    {
                        path : "product-management",
                        element : <ProductMangeMent />
                    },
                    {
                        path : "order-management",
                        element : <OrderManagement />
                    },
                    {
                        path : "customer-management",
                        element : <CustomerManagement />
                    },
                    {
                        path : "promotions-discounts",
                        element : <PromotionsandDiscounts />
                    },
                    {
                       path : "settings",
                       element : <Settings />
                    },
                    {
                        path : "support",
                        element : <Support />
                    }
                ]
                
            }
        ]
    }
 ]
)


export default router