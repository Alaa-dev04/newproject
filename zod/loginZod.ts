import * as z from "zod";
export const LoginSchema = z.object({
    username:z.string().optional(),
    password:z.string().optional(),
});
export type LoginSchema = z.infer< typeof LoginSchema>