import LoyaltyCard from "@/components/LoyaltyCard.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";

function LoyaltyCardPage() {
    return (
        <div>
            <h2>My Loyalty Card</h2>
            <LoyaltyCard/>
            <RecentActivity/>
        </div>
    );
}

export default LoyaltyCardPage;