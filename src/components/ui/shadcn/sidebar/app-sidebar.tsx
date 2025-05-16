import {Calendar, Home, Inbox, Search, Settings} from "lucide-react"
import {useAppState} from "@/state/app.state.tsx";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader
} from "@/components/ui/shadcn/sidebar/sidebar.tsx"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Cards",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Discounts",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const {activePage, setActivePage} = useAppState();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader><img src="/logo.png" alt="logo" width={100} height={100}/></SidebarHeader>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className={item.title === activePage ? "text-blue-500" : ""}
                                >
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}
                                           onClick={() => setActivePage(item.title)} >
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
