import {useMutation, useQuery} from "@tanstack/react-query";
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
import {useMemo, useState} from "react";
import {handleParse, trackErrors} from "@/utils/handleInputValidation.ts";
import {z} from "zod";
import {NavLink} from "react-router";

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
            return data.data;
        },
        queryKey: [`profile-balances-${userObject.user?.id ?? "no-user"}`],
        enabled: !!userObject.user
    })

    const totalPrice = useMemo(() => {
        if (!inputCredits || isNaN(+inputCredits)) return undefined;
        const total = +inputCredits * import.meta.env.VITE_SINGLE_CREDIT_PRICE_EUR;
        return total - (+inputCredits > 100 ? 0.03 * total : 0);
    }, [inputCredits])

    const payUrl = useMemo(() => {
        if (!userObject.user) return undefined;
        const params = new URLSearchParams();
        params.append("userId", userObject.user.id);
        params.append("returnUrl", `${import.meta.env.VITE_WEB_BASE_URL}/`)
        params.append("cancelUrl", `${import.meta.env.VITE_WEB_BASE_URL}/paymentsucc`)
        params.append("customerEmail",userObject.user.emailAddresses[0].emailAddress);
        params.append("firstName", userObject.user.firstName ?? "");
        params.append("lastName", userObject.user.lastName ?? "");
        params.append("phone", userObject.user.phoneNumbers[0].phoneNumber);
        params.append("country","BGR")
        params.append("city", "Stara Zagora")
        params.append("zipCode", "6000")
        params.append("address", "bul. Ruski 82")
        params.append("amount", inputCredits ?? "")
        console.log("PARAMS:", params);
        return `${import.meta.env.VITE_BACKEND_URL}/api/v1/pospoints/buy?${params.toString()}`
    }, [userObject]);
    console.log(payUrl)
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="flex gap-1">
                        <p>{credits?.amount_credits ?? 0}</p> <img src="/credits.svg" alt='credits' width={20}
                                                                   height={20}/>
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

                    <div>
                        <label className="text-lg text-primary/70">Total price:</label>
                        <h3 className="text-xl font-bold text-accent">
                            {!totalPrice ? "-" : `${totalPrice.toFixed(2)} EUR ${+inputCredits! > 80 ? "(-3%)" : ""}`}
                        </h3>
                    </div>

                    {payUrl && <NavLink to={payUrl} className="w-full">
                        <PrimaryButton
                            className="w-full"
                            disabled={errors.length > 0}
                        >
                            Pay
                        </PrimaryButton>
                    </NavLink>}
                </DialogContent>
            </Dialog>
        </>
    );
}
