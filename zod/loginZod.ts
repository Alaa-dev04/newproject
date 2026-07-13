import * as z from "zod";
export const LoginSchema = z.object({
    username:z.string().optional(),
    password:z.string().optional(),
});
export type TypeLoginSchema = z.infer< typeof LoginSchema>