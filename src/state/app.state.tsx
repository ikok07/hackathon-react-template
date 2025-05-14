import {createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState} from "react";
import {z} from "zod";

export const appStateSchema = z.object({
    appCounter: z.number(),
    setAppCounter: z.custom<Dispatch<SetStateAction<number>>>()
});

export type AppState = z.infer<typeof appStateSchema>;

const AppStateContext = createContext<AppState | null>(null);

type AppStateProps = {
    children: ReactNode
}

export default function AppStateProvider({children}: AppStateProps) {
    const [appCounter, setAppCounter] = useState(0);

    return <AppStateContext.Provider value={{
        appCounter,
        setAppCounter
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