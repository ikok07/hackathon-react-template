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
import PrimaryInput from "@/components/ui/inputs/PrimaryInput.tsx";
import {useState} from "react";
import {handleParse, trackErrors} from "@/utils/handleInputValidation.ts";
import {z} from "zod";

export default function UserCredits() {
    const [inputCredits, setInputCredits] = useState<string | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
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
                <DialogContent className="text-left">
                    <DialogHeader>
                        <DialogTitle>Add POS Coins</DialogTitle>
                        <DialogDescription>
                            Buy Credits in order to save money later
                        </DialogDescription>
                    </DialogHeader>
                    <PrimaryInput
                        label="Amount"
                        placeholder="100"
                        value={inputCredits ?? ""}
                        onChange={(e) => setInputCredits(e.target.value)}
                        error={
                            handleParse({
                                type: "ignoreNull",
                                value: inputCredits ? +inputCredits : null,
                                validateCb: () => z.number({message: "Invalid number!"}).min(0, {message: "Minimal value: 0"}).max(10000, {message: "Max value: 10000"}).parse(inputCredits ? +inputCredits : null),
                                trackErrorsFunc: (id, action) => trackErrors(id, action, errors, setErrors),
                                errorId: "credits"
                            })
                        }
                    />
                    <PrimaryButton
                        onClick={() => {}}
                        disabled={errors.length > 0}
                    >
                        Pay
                    </PrimaryButton>
                </DialogContent>
            </Dialog>
        </>
    );
}
