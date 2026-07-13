import * as z from "zod";
export const RegisterSchema = z.object({
    name:z.string().optional(),
    email:z.email().optional(),
    password:z.string().optional(),
});
export type RegisterSchema = z.infer< typeof RegisterSchema>