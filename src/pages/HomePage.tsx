import Home from "@/components/Home";

function HomePage() {
    // const currDate = new Date().toLocaleDateString("en-US")
    // const {userObject,dbUser} = useAppUser();
    // const visitsThisMonth = 12;
    // console.log(dbUser);
    // return (
    //     <div className="container lg:mx-46 md:mx:hidden px-4 sm:px-6 md:px-8 py-6">
    //         <h1 className="text-2xl font-semibold mb-1">Hi, {userObject.user?.firstName ?? "Guest"}!</h1>
    //         <p className="text-gray-400 mb-4">Today: {currDate} Visits this month: {visitsThisMonth}</p>
    //         <div className="border-t-2 border-b-2 border-gray-200 py-4">
    //             <LoyaltyCard/>
    //         </div>
    //         <RecentActivity/>
    //     </div>
    // );
    return <Home/>
}

export default HomePage;