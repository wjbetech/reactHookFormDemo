import { z } from "zod"

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters").max(15, "Password must be no more than 15 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type TSignUpSchema = z.infer<typeof signUpSchema>

// .email() implicitly adds required
// .refine is used with data to validate matching password fields
// path connects the refine to a given field or fields
