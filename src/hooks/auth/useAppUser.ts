import { makeBackendRequest } from "@/utils/make-backend-request.ts";
import {useAuth, useUser} from "@clerk/clerk-react";
import {useQuery} from "@tanstack/react-query";

export function useAppUser() {
    const userObject = useUser();
    const authObject = useAuth();

    const {data: dbUser, isLoading: isGettingDbUser,error} = useQuery({
        queryFn: () => makeBackendRequest({method: "get", url: `${import.meta.env.VITE_BACKEND_URL!}/api/v1/profiles/${userObject.user!.id}`}),
        queryKey: ["db-user"],
        enabled: !!userObject.user
    });
    console.log(error);
    return {
        userObject,
        authObject,
        dbUser,
        isLoading: isGettingDbUser
    }
}