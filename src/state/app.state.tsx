import {createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState} from "react";
import {z} from "zod";

export const appStateSchema = z.object({
    activePage:z.string(),
    setActivePage:z.custom<Dispatch<SetStateAction<string>>>(),
});

export type AppState = z.infer<typeof appStateSchema>;

const AppStateContext = createContext<AppState | null>(null);

type AppStateProps = {
    children: ReactNode
}

export default function AppStateProvider({children}: AppStateProps) {

    const [activePage, setActivePage] = useState("home");

    return <AppStateContext.Provider value={{
        activePage,setActivePage
    }}>
        {children}
    </AppStateContext.Provider>
}

export function useAppState() {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error("useAppState should be used inside AppStateProvider!");
    }
    return context;
}