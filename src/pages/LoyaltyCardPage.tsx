import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";

function LoyaltyCardPage() {
    return (
        <div className="container lg:mx-40 md:mx:hidden px-4 sm:px-6 md:px-8 py-6">
            <h2 className="text-2xl font-semibold mb-4">My Loyalty Card</h2>
            <div className="border-t border-b border-gray-200 py-4">
                <LoyaltyCard/>
            </div>
            <RecentActivity/>
        </div>
    );
}

export default LoyaltyCardPage;