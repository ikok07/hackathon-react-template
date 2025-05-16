import {useMutation, useQuery} from "@tanstack/react-query";
import {useMemo} from "react";
import {SignInButton, SignUpButton, useClerk, UserButton} from "@clerk/clerk-react";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton.tsx";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import {makeBackendRequest} from "@/utils/make-backend-request.ts";
import Home from "@/components/Home.tsx";

export default function HomePage() {
    const {userObject} = useAppUser();

    const {data, isLoading: isLoadingTest, error} = useQuery({
        queryFn: () => makeBackendRequest({
            method: "get",
            url: "https://dummyjson.com/test"
        }),
        queryKey: ["test"],
    });

    const {data: mutationData, mutate, isPending, error: mutationError} = useMutation({
        mutationFn: () => makeBackendRequest({
            method: "post",
            url: "http://backend-url.com",
            data: {
                title: "Test"
            },
            opts: {
                headers: {
                    headerTest: "header-test"
                }
            }
        })
    });

    const isLoading = useMemo(() => isPending || isLoadingTest, [isPending, isLoadingTest]);

    return <>
        <div className="flex gap-4 mx-40">
            {userObject.isSignedIn ?
                <Home/>:
                <>
                    <SignInButton>
                        <SecondaryButton>Влизане</SecondaryButton>
                    </SignInButton>
                    <SignUpButton>
                        <SecondaryButton>Регистрация</SecondaryButton>
                    </SignUpButton>
                </>
            }


        </div>
    </>
}