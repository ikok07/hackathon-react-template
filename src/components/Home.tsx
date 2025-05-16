import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";


function Home() {
    const currDate = new Date().toLocaleDateString("en-US")
    const {userObject} = useAppUser();
    const visitsThisMonth = 12;


    return (
        <div>
            <h1 className="text-2xl font-semibold">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
            <p className="text-gray-400">Today: {currDate} Visits this month: {visitsThisMonth}</p>
            <LoyaltyCard/>
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
        </div>
    );
}

export default Home;