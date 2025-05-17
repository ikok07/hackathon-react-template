import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";

function HomePage() {
    const currDate = new Date().toLocaleDateString("en-US")
    const {userObject,dbUser} = useAppUser();
    const visitsThisMonth = 12;
    console.log(dbUser);
    return (
        <div className="container lg:mx-40 md:mx:hidden px-4 sm:px-6 md:px-8 py-6">
            <h1 className="text-2xl font-semibold mb-1">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
            <p className="text-gray-400 mb-4">Today: {currDate} Visits this month: {visitsThisMonth}</p>
            <div className="border-t border-b border-gray-200 py-4">
                <LoyaltyCard/>
            </div>
            <RecentActivity/>
        </div>
    );
}

export default HomePage;