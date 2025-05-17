import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import UserCredits from "@/components/UserCredits.tsx";
import {Outlet} from "react-router";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


export default function Home() {
    const currDate = new Date().toLocaleDateString("en-US")
    const {userObject, dbUser} = useAppUser();

    const {data: customerVisitsCount, isLoading, error} = useQuery({
        queryFn: async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/customer-visits/${userObject.user?.id}`, {
                headers: {
                    Authorization: import.meta.env.VITE_BACKEND_API_KEY!
                }
            });
            console.log(data.data)
            return data.data.length;
        },
        queryKey: [`customer-visits-${userObject.user?.id ?? "no-user"}`]
    });

    return (
        <div className="container lg:mx-46 md:mx:hidden px-4 sm:px-6 md:px-8 py-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold mb-1">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
                <UserCredits/>
            </div>
            <p className="text-gray-400 mb-4">Today: {currDate} Visits this month: {customerVisitsCount}</p>
            <div className="border-t-2 border-b-2 border-gray-200 py-4 mb-4"><LoyaltyCard/></div>
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
            <Outlet/>
        </div>
    );
}
