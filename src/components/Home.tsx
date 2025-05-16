import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";
import LoyaltyCard from "@/components/LoyaltyCard.tsx";


function Home() {
const currDate = new Date().toLocaleDateString("en-US")


    return (
        <div>
            <h2>Hi, John Doe</h2>
            <p>Today: {currDate} Visits this month: 12</p>
            <LoyaltyCard/>
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
        </div>
    );
}

export default Home;