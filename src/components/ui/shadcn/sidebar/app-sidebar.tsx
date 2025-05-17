import {PercentIcon, Home, CreditCard, Search, Settings, UserPen} from "lucide-react"
import {useAppState} from "@/state/app.state.tsx";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader, SidebarFooter
} from "@/components/ui/shadcn/sidebar/sidebar.tsx"
import {NavLink} from 'react-router'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from "@/components/ui/shadcn/dropdown-menu.tsx";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";
import DropdownMenuItemRow from "@/components/ui/dropdown/DropdownMenuItemRow.tsx";
import {IoExit} from "react-icons/io5";
import {Button} from "@/components/ui/shadcn/button.tsx";
import {useClerk, UserButton} from "@clerk/clerk-react";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";


// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    // {
    //     title: "Cards",
    //     url: "cards",
    //     icon: CreditCard,
    // },
    {
        title: "Discounts",
        url: "discounts",
        icon: PercentIcon,
    },
]

export function AppSidebar() {
    const {activePage, setActivePage} = useAppState();
    const clerk = useClerk();
    const {userObject} = useAppUser();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader><img src="/logo.png" alt="logo" width={100} height={100}/></SidebarHeader>
                    <SidebarGroupContent className="mt-4">
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className={item.title === activePage ? "text-blue-500" : ""}
                                >
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}
                                                 onClick={() => setActivePage(item.title)}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                {userObject.isSignedIn ? <UserButton showName={true}/> : <DropdownMenu>
                    <DropdownMenuTrigger>
                        <SidebarMenuButton>
                            <UserPen/>
                            <a href="#">
                                <span>Profile</span>
                            </a>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItemRow
                                type="button"
                                Icon={IoExit}
                                label="Добавяне на профил"
                                onClick={() => mutate()}
                                iconClassName="text-red-400 group-hover:text-red-500 dark:group-hover:text-red-500"
                                isLoading={false}
                            />
                            <DropdownMenuItemRow
                                type="button"
                                Icon={IoExit}
                                label="Влизане"
                                onClick={() => clerk.openSignIn({})}
                                iconClassName="text-red-400 group-hover:text-red-500 dark:group-hover:text-red-500"
                                isLoading={false}
                            />
                            <DropdownMenuItemRow
                                type="button"
                                Icon={IoExit}
                                label="Регистрация"
                                onClick={() => clerk.openSignUp({})}
                                iconClassName="text-red-400 group-hover:text-red-500 dark:group-hover:text-red-500"
                                isLoading={false}
                            />
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>}
            </SidebarFooter>
        </Sidebar>
    )
}
