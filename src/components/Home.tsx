import Tip from "@/components/Tip.tsx";
import RecentActivity from "@/components/RecentActivity.tsx";


function Home() {
const currDate = new Date().toLocaleDateString("bg-BG")


    return (
        <div>
            <h2>Hi, John Doe</h2>
            <p>Today: {currDate} Visits this month: 12</p>
            {/*TODO <LoyaltyCard/>*/}
            <Tip text={`Earn double points on all purchases! Visit the "My Card" section to learn more`}/>
            <RecentActivity/>
        </div>
    );
}

export default Home;