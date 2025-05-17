import {SidebarProvider} from "@/components/ui/shadcn/sidebar/sidebar-provider.tsx"
import {SidebarTrigger} from "@/components/ui/shadcn/sidebar/sidebar"

import {AppSidebar} from "@/components/ui/shadcn/sidebar/app-sidebar.tsx"
import {Outlet, useNavigate} from "react-router";
import {useAppUser} from "@/hooks/auth/useAppUser.ts";
import { useEffect } from "react";

export default function SideBarPage() {
    const navigate = useNavigate();
    const {userObject, isLoading} = useAppUser();

    useEffect(() => {
        if (isLoading) return;

        if (!userObject.user) navigate("/sign-in");
    }, [isLoading])

    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <main>
                    <SidebarTrigger/>
                </main>
            </SidebarProvider>
            <Outlet/>
        </div>
    )
}
