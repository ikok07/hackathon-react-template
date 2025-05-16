import DiscountItems from "@/components/DiscountItems.tsx";

function DiscountsPage() {
    return (
        <div>
            <h2>Available Discounts</h2>
            <p>Tap “Use Now” to get the code or apply directly at checkout.</p>
            <input type="text"/>
            <DiscountItems/>
        </div>
    );
}

export default DiscountsPage;