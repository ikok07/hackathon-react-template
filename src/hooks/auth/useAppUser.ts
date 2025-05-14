import { makeBackendRequest } from "@/utils/make-backend-request.ts";
import {useAuth, useUser} from "@clerk/clerk-react";
import {useQuery} from "@tanstack/react-query";

export function useAppUser() {
    const userObject = useUser();
    const authObject = useAuth();

    const {data: dbUser, isLoading: isGettingDbUser} = useQuery({
        queryFn: () => makeBackendRequest("http://backendurl.com"),
        queryKey: ["db-user"],
        enabled: false
    });

    return {
        userObject,
        authObject,
        dbUser,
        isLoading: isGettingDbUser
    }
}