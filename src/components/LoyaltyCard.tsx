function LoyaltyCard() {
    const userName = "John Doe";
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const expDate = oneYearLater.toLocaleDateString("en-US");
    const currDate = new Date().toLocaleDateString("en-US");
    const status = expDate > currDate ? "Active" : "Expired";
    return (
        <div>
            <p>{userName}’s Loyalty Card</p>
            <p>Expiry Date: {expDate}</p>
            <p>Status: {status}</p>
        </div>
    );
}

export default LoyaltyCard;