import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";
import {NavLink} from "react-router";

function NotFoundPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="/error_not_found.svg" alt="error_not_found"/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-2">Page not found </h1>
                <p className="mb-2 text-gray-600">You can return to the home page using the button below.</p>
                <NavLink to={'/'}>
                    <PrimaryButton>Home</PrimaryButton>
                </NavLink>
            </div>
        </div>

    );
}

export default NotFoundPage;