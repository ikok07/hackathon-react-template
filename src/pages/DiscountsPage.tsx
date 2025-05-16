// pages/DiscountsPage.tsx
import { useState } from "react";
import DiscountItems from "@/components/DiscountItems";

export default function DiscountsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-6 max-w-7xl lg:mx-40 md:mx:hidden">
            <h1 className="text-2xl font-semibold mb-1">Available Discounts</h1>
            <p className="text-gray-600 mb-6">
                Tap “Use Now” to get the code or apply directly at checkout.
            </p>

            <div className="relative mb-8 max-w-sm">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                )}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    🔍
                </div>
            </div>

            <DiscountItems searchTerm={searchTerm} />
        </div>
    );
}
