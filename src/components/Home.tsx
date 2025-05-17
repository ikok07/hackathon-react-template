import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import {useEffect, useState} from "react";
import UserCredits from "@/components/UserCredits.tsx";
import {Outlet} from "react-router";


export default function Home() {
    const currDate = new Date().toLocaleDateString("en-US")
    const {userObject, dbUser} = useAppUser();
    const [customerVisits, setCustomerVisits] = useState<number>(0);
    useEffect(() => {
        async function fetchVisits() {
            try {
                const res = await fetch(`/api/v1/customer-visits/${userObject.user?.id}`);
                const json = await res.json();

                const userProfileId = userObject.user?.id;

                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                const filtered = json.data.filter((entry: any) => {
                    const enterDate = new Date(entry.date_enter * 1000);
                    return (
                        entry.profile_id === userProfileId &&
                        enterDate.getMonth() === currentMonth &&
                        enterDate.getFullYear() === currentYear
                    );
                });

                setCustomerVisits(filtered.length);
            } catch (err) {
                console.error("Error fetching visit data:", err);
            }
        }

        fetchVisits();
    }, [dbUser, userObject]);

    return (
        <div className="container lg:mx-46 md:mx:hidden px-4 sm:px-6 md:px-8 py-6">
            <h1 className="text-2xl font-semibold mb-1">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
            <p className="text-gray-400 mb-4">Today: {currDate} Visits this month: {customerVisits}</p>
            <UserCredits/>
            <div className="border-t-2 border-b-2 border-gray-200 py-4"><LoyaltyCard/></div>
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
            <Outlet/>
        </div>
    );
}
