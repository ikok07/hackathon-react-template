import {z} from "zod";

export const successResponseSchema = z.object({
    status: z.literal("success"),
    data: z.object({}).passthrough()
});

export const failResponseSchema = z.object({
    status: z.literal("fail"),
    error: z.string()
});

export const defaultResponseSchema = successResponseSchema.or(failResponseSchema);

export type DefaultResponse = z.infer<typeof defaultResponseSchema>;