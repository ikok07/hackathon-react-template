// https://reactrouter.com/start/declarative/routing

import App from "@/App";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "@/pages/HomePage.tsx";
import SignInPage from "@/pages/SignInPage.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import NotFoundPage from '@/pages/NotFoundPage.tsx'
import SideBarPage from "@/pages/SideBarPage.tsx";
import DiscountsPage from "@/pages/DiscountsPage.tsx";
// import LoyaltyCardPage from "@/pages/LoyaltyCardPage.tsx";
import AdminDashBoardPage from "@/pages/AdminDashBoardPage.tsx";
import PaymentSuccessfulPage from "@/pages/PaymentSuccessfulPage.tsx";

export default function IndexRoutes() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path='admin' element={<AdminDashBoardPage/>}/>
                <Route path='/' element={<SideBarPage/>}>

                    <Route index element={<HomePage/>}/>
                    {/*<Route path="cards" element={<LoyaltyCardPage/>}/>*/}
                    <Route path="discounts" element={<DiscountsPage/>}/>
                    <Route path="paymentsucc" element={<PaymentSuccessfulPage/>}/>
                </Route>
                <Route path="sign-in" element={<SignInPage/>}/>
                <Route path="sign-up" element={<SignUpPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}