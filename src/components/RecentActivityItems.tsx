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
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <p>{item.date.toLocaleString()}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </>
    );
}

export default function RecentActivityItems() {
    return (
        <div>
            <RecentActivityItem items={recentActivityItems} />
        </div>
    );
}