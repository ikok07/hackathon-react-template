function LoyaltyCardPage() {
    const userName = "John Doe";
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const expDate = oneYearLater.toLocaleDateString("bg-BG");
    const currDate = new Date().toLocaleDateString("bg-BG");
    const status = expDate > currDate ? "Active" : "Expired";
    return (
        <div>
            <h2>My Loyalty Card</h2>
            <p>{userName}’s Loyalty Card</p>
            <p>Expiry Date: {expDate}</p>
            <p>Status: {status}</p>
        </div>
    );
}

export default LoyaltyCardPage;