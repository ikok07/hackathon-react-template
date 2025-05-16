import RecentActivityItems from "@/components/RecentActivityItems.tsx";

function RecentActivity() {
    return (
        <div className="py-8">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <RecentActivityItems/>
        </div>
    );
}

export default RecentActivity;