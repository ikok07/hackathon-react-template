import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";

function LoyaltyCardPage() {
    return (
        <div className="mx-8 ">
            <h2 className="text-2xl font-semibold mb-4">My Loyalty Card</h2>
            <div className="lg:border-t-2 lg:border-b-2 border-gray-200 md:border-t:hidden md:border-b:hidden">
                <LoyaltyCard/>
            </div>
            <RecentActivity/>
        </div>
    );
}

export default LoyaltyCardPage;