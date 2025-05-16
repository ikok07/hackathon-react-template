import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from "@/components/ui/shadcn/dropdown-menu.tsx";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";
import DropdownMenuItemRow from "@/components/ui/dropdown/DropdownMenuItemRow.tsx";
import {IoExit} from "react-icons/io5";
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
        <div className="flex justify-center items-center gap-4">
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


            {/*<DropdownMenu>*/}
            {/*    <DropdownMenuTrigger>*/}
            {/*        <PrimaryButton className="">Dropdown Menu</PrimaryButton>*/}
            {/*    </DropdownMenuTrigger>*/}
            {/*    <DropdownMenuContent>*/}
            {/*        <DropdownMenuGroup>*/}
            {/*            <DropdownMenuItemRow*/}
            {/*                type="button"*/}
            {/*                Icon={IoExit}*/}
            {/*                label="Добавяне на профил"*/}
            {/*                onClick={() => mutate()}*/}
            {/*                iconClassName="text-red-400 group-hover:text-red-500 dark:group-hover:text-red-500"*/}
            {/*                isLoading={false}*/}
            {/*            />*/}
            {/*        </DropdownMenuGroup>*/}
            {/*    </DropdownMenuContent>*/}
            {/*</DropdownMenu>*/}
        </div>
    </>
}