import {z} from "zod";
export const RegisterSchema = z.object({
    name:z.string(),
    email:z.string(),
    password:z.string(),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;