import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import {useEffect, useState} from "react";


export default function Home() {
    const currDate = new Date().toLocaleDateString("en-US")
    const {userObject,dbUser} = useAppUser();
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
        <div>
            <h1 className="text-2xl font-semibold">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
            <p className="text-gray-400">Today: {currDate} Visits this month: {customerVisits}</p>
            <LoyaltyCard/>
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
        </div>
    );
}
