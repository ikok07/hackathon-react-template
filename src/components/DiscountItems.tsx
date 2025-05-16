import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";

const discountItems= [
    {
        id: 1,
        title: "10% Off Drinks",
        description: "Valid on all beverage items",
        image: "/bottled-water.png",
        cta: "Use Now",
    },
    {
        id: 2,
        title: "10% Off Drinks",
        description: "Valid on all beverage items",
        image: "/bottled-water.png",
        cta: "Use Now",
    },
    {
        id: 3,
        title: "10% Off Drinks",
        description: "Valid on all beverage items",
        image: "/bottled-water.png",
        cta: "Use Now",
    },
    {
        id: 4,
        title: "10% Off Drinks",
        description: "Valid on all beverage items",
        image: "/bottled-water.png",
        cta: "Use Now",
    },
];



function DiscountItems() {
    return (
        <div>
            <DiscountItem items={discountItems} />
        </div>
    );
}

function DiscountItem({items}: {items: typeof discountItems}){
    return <>
        {items.map((item) => (
            <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <PrimaryButton>Use Now</PrimaryButton>
            </div>
        ))}
    </>
}

export default DiscountItems;