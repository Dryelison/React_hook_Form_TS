import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(3, "Minimun of characters is 3"),
    lastname: z.string().min(3, "Minimun of characters is 3"),
    gender: z.string().refine((field) => field !== "select", {
        message: "You need to choice a gender"
    }),
    email:z.string().min(1, "field requerid").email("Enter a valid email"),
    password: z.string().min(6, "Minimun of 6 characters"),
    confirmpassword: z.string().min(6, "Confirmation need to have a minimun 6 characters"),
    agree:z.boolean().refine((field) => field === true, {
        message: "You need to agree with a term",
    }),
}).refine((field) => field.password === field.confirmpassword, {
    message: "The password need to be the same.",
    path: ['confirmpassword'],
});

export type FormSchema = z.infer<typeof formSchema>