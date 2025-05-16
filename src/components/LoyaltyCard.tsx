import {useAppUser} from "@/hooks/auth/useAppUser.ts";

function LoyaltyCard() {
    const oneYearLater = new Date();
    const { userObject } = useAppUser();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const expDate = oneYearLater.toLocaleDateString("en-US");
    const currDate = new Date().toLocaleDateString("en-US");
    const status = expDate > currDate ? "Active" : "Expired";
    return (
        <div className="grid lg:grid-cols-2 lg:px-12 lg:py-32 lg:border-t lg:border-b border-gray-200 md:border-t:hidden md:border-b:hidden md:grid-cols-1">
            <div className="bg-[linear-gradient(90deg,_#E86464_3.37%,_#609CDB_48.56%,_#1D93E7_100%)] mx-2 px-12 py-12 rounded-md shadow-md sm:rounded-md">
                <h1 className="text-white">Loyalty Card</h1>
                <p>Expiry Date: {expDate}</p>
                <p>Status: {status}</p>
            </div>
            <div className="mt-8 mb-12">
                <p className="text-xl font-semibold">{userObject.user?.firstName ?? "Guest"}’s Loyalty Card</p>
                <p className="font-semibold text-gray-400">Expiry Date: {expDate}</p>
                <p>Status: <span className="text-green-500">{status}</span></p>
            </div>
        </div>
    );
}

export default LoyaltyCard;