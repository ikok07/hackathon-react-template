// https://reactrouter.com/start/declarative/routing

import App from "@/App";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NestedExamplePage from "@/pages/NestedExamplePage.tsx";
import TestNestedComponent from "@/components/nested/TestNestedComponent.tsx";
import HomePage from "@/pages/HomePage.tsx";
import SignInPage from "@/pages/SignInPage.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";

export default function IndexRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />

                <Route path="/nested" element={<Navigate to="/nested/test" />} />
                <Route path="/nested" element={<NestedExamplePage />}>
                    <Route path="/nested/test" element={<TestNestedComponent />}/>
                </Route>

                <Route path="sign-in" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />

            </Route>
        </Routes>
    </BrowserRouter>
}