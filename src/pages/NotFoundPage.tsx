import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";
import {NavLink} from "react-router";

function NotFoundPage() {
    return (
        <div>
            <img src="/error_not_found.svg" alt="error_not_found"/>
            <h1>Page not found</h1>
            <p>You can return to the home page using the button below.</p>
            <NavLink to={'/'}>
                <PrimaryButton>Home</PrimaryButton>
            </NavLink>
        </div>

    );
}

export default NotFoundPage;