import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function LoyaltyCard() {
    const {userObject} = useAppUser();
    // const oneYearLater = new Date();
    // const currDate = new Date().toLocaleDateString("en-US")//string
    // oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);//num
    // const expDate = oneYearLater.toLocaleDateString("en-US");//string
    const firstName = userObject.user?.firstName || "John";
    const lastName = userObject.user?.lastName || "Doe";
    // const status = expDate > currDate ? "Active" : "Expired";


    const {data: loyaltyCard, isLoading, error}= useQuery({
        queryFn: async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/loyalty-cards/${userObject.user!.id}`, {
                headers: {
                    Authorization: import.meta.env.VITE_BACKEND_API_KEY!
                }
            });

            return data.data;
        },
        queryKey: [`loyalty-cards-${userObject.user?.id ?? "no-user"}`],
        enabled: !!userObject.user
    })

    const formattedDate = loyaltyCard ? new Date(loyaltyCard.expiry_date * 1000).toLocaleDateString("en-US") : "";
    const status = loyaltyCard && loyaltyCard.expiry_date * 1000 > Date.now() ? "Active" : "Expired";
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 py-8 gap-6">
            {/* Card */}
            <div className="flex justify-center">
                <div
                    className="bg-[linear-gradient(90deg,_#000_3.37%,_#1D93E7_100%)] w-full max-w-sm rounded-lg shadow-lg pb-6 px-6 text-white relative overflow-hidden">
                    <div className="grid grid-cols-2 gap-16 py-8">
                        <img src="/logo-light.svg" alt="logo-light" width={100} height={100}/>
                        <h2 className="text-xl font-semibold">Loyalty Card</h2>
                    </div>
                    {/*<div className="my-8">*/}
                    {/*    <p className="text-xl tracking-wider">{loyaltyCard.id}</p>*/}
                    {/*</div>*/}
                    <div className="flex justify-between items-end mt-8">
                        <div>
                            <p className="uppercase font-bold">{firstName} {lastName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs">Valid Thru</p>
                            <p>{formattedDate || "DD/MM/YYYY"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Info */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{firstName} {lastName}'s Loyalty Card</h3>
                <p className="text-gray-500 mt-1">Expiry Date: {formattedDate}</p>
                <p className="mt-2">Status: <span className="text-green-500 font-medium">{status}</span></p>
            </div>
        </div>
    );
}

export default LoyaltyCard;