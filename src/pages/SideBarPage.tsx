import {SidebarProvider} from "@/components/ui/shadcn/sidebar/sidebar-provider.tsx"
import {SidebarTrigger} from "@/components/ui/shadcn/sidebar/sidebar"

import {AppSidebar} from "@/components/ui/shadcn/sidebar/app-sidebar.tsx"
import {Outlet} from "react-router";

export default function SideBarPage() {
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
