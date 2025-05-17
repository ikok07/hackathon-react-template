// components/DiscountItems.tsx

interface Discount {
  id: number;
  title: string;
  subtitle: string;
  percent: number;
  expires: string;
  image: string;
}

const dummyDiscounts: Discount[] = [
  {
    id: 1,
    title: "10% Off Drinks",
    subtitle: "Valid on all beverage items",
    percent: 10,
    expires: "Jun 05, 2025",
    image: "/bottled-water.png",
  },
  {
    id: 2,
    title: "15% Off Snacks",
    subtitle: "All snack items included",
    percent: 15,
    expires: "Jun 10, 2025",
    image: "/bottled-water.png",
  },
  {
    id: 3,
    title: "20% Off Desserts",
    subtitle: "Sweet treats only",
    percent: 20,
    expires: "Jun 15, 2025",
    image: "/bottled-water.png",
  },
];

type Props = { searchTerm: string };

export default function DiscountItems({ searchTerm }: Props) {
  const items = dummyDiscounts.filter(d =>
      d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(d => (
            <div
                key={d.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col"
            >
              <img
                  src={d.image}
                  alt={d.title}
                  className="h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-medium mb-1">{d.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{d.subtitle}</p>
              <div className="mt-auto">
            <span className="text-3xl font-bold text-[#0059b9]">
              {d.percent}%
            </span>
                <p className="text-gray-400 text-xs mb-4">
                  until {d.expires}
                </p>
                <button className="w-full bg-accent text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Use Now
                </button>
              </div>
            </div>
        ))}
      </div>
  );
}
