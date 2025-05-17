interface ActivityItem {
    id: number;
    text: string;
    date: string;
    price?: number;
    points: number;
    orderNumber?: string;
}

const recentActivityItems: ActivityItem[] = [
    {
        id: 1023,
        text: "Order #1023 completed",
        date: "May 15, 2025",
        price: 45.00,
        points: 50
    },
    {
        id: 2,
        text: "Top-Up - Added 500 pts",
        date: "May 10, 2025",
        points: 500
    },
    {
        id: 1018,
        text: "Order #1018 - Redeemed 100 pts",
        date: "May 08, 2025",
        orderNumber: "1018",
        points: -100
    }
];

function RecentActivityItem({ item }: { item: ActivityItem }) {
    const isPositive = item.points > 0;
    const pointsText = isPositive ? `+${item.points}pts` : `${item.points}`;
    const pointsClass = isPositive ? "text-green-500" : "text-red-500";
    
    return (
        <div className="border-2 border-gray-200 rounded-lg p-4 mb-4 mr-4">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-medium">{item.text}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.date}{item.price ? ` • $${item.price.toFixed(2)}` : ''}</p>
                    {item.orderNumber && <p className="text-gray-500 text-sm"></p>}
                </div>
                <span className={`font-medium ${pointsClass}`}>{pointsText}</span>
            </div>
        </div>
    );
}

export default function RecentActivityItems() {
    return (
        <div>
            {recentActivityItems.map(item => (
                <RecentActivityItem key={item.id} item={item} />
            ))}
        </div>
    );
}