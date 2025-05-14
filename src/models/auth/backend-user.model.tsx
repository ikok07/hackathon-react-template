import {z} from "zod";

export const backendUserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string(),
    phone: z.string()
});

export type BackendUser = z.infer<typeof backendUserSchema>;