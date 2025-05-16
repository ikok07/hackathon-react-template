import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";

function LoyaltyCardPage() {
    return (
        <div className="mx-8">
            <h2 className="text-2xl font-semibold mb-4">My Loyalty Card</h2>
            <LoyaltyCard/>
            <RecentActivity/>
        </div>
    );
}

export default LoyaltyCardPage;