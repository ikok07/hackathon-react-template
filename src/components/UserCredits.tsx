import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui//shadcn/dialog"
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";

export default function UserCredits() {
    // const userCredits= 25;
    const {userObject, dbUser} = useAppUser();
    const {data: credits, isLoading, error} = useQuery({
        queryFn: async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/profile-balances/${userObject.user!.id}`, {
                headers: {
                    Authorization: import.meta.env.VITE_BACKEND_API_KEY!
                }
            });
            console.log(data.data)
            return data.data;
        },
        queryKey: [`profile-balances-${userObject.user?.id ?? "no-user"}`],
        enabled: !!userObject.user
    })
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="flex gap-1">
                        <p>{credits?.amount_credits ?? 0}</p> <img src="/credits.svg" alt='credits' width={20} height={20}/>
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add POS Coins</DialogTitle>
                        <DialogDescription>
                            <PrimaryButton>+</PrimaryButton>
                            <span>0</span>
                            <PrimaryButton>-</PrimaryButton>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
