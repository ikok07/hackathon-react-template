const recentActivityItems = [
    {
        id: 5678,
        text: "Order #1212 Completed",
        date: new Date(),
        price: 45,
    },
    {
        id: 5674,
        text: "Order #1232 Completed",
        date: new Date(),
        price: 30,
    },
];

function RecentActivityItem({ items }: { items: typeof recentActivityItems }) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className="border-2 p-4 border-gray-200 mt-4 rounded-md ">
                    <p>{item.text}</p>
                    <p>{item.date.toLocaleString()}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default function RecentActivityItems() {
    return (
        <div>
            <RecentActivityItem items={recentActivityItems} />
        </div>
    );
}