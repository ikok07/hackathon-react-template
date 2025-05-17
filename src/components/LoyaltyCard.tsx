import {useAppUser} from "@/hooks/auth/useAppUser.ts";

function LoyaltyCard() {
    const { userObject } = useAppUser();
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const expDate = oneYearLater.toLocaleDateString("en-US");
    const firstName = userObject.user?.firstName || "John";
    const lastName = userObject.user?.lastName || "Doe";
    const status = "Active";
    
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 py-8 gap-6">
            {/* Card */}
            <div className="flex justify-center">
                <div className="bg-[linear-gradient(90deg,_#000_3.37%,_#1D93E7_100%)] w-full max-w-sm rounded-lg shadow-lg p-6 text-white relative overflow-hidden">
                    <div><img src="/logo-light.svg" alt="logo-light" width={100} height={100}/></div>
                    <h2 className="text-xl font-semibold mt-3 mb-6">Loyalty Card</h2>
                    <div className="my-8">
                        <p className="text-xl tracking-wider">**** **** **** 1234</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-8">
                        <div>
                            <p className="uppercase font-bold">{firstName} {lastName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs">Valid Thru</p>
                            <p>05/26</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card Info */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{firstName} {lastName}'s Loyalty Card</h3>
                <p className="text-gray-500 mt-1">Expiry Date: {expDate}</p>
                <p className="mt-2">Status: <span className="text-green-500 font-medium">{status}</span></p>
            </div>
        </div>
    );
}

export default LoyaltyCard;