import {NavLink} from "react-router";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";

function PaymentSuccessfulPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="/paymentsucc.svg" alt="error_not_found" width="400" height="400" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
                <p className="mb-2 text-gray-600">You can return to the home page using the button below.</p>
                <NavLink to={'/'}>
                    <PrimaryButton>Home</PrimaryButton>
                </NavLink>
            </div>
        </div>
    );
}

export default PaymentSuccessfulPage;