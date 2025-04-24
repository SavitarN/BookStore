import * as z from "zod";

export const formSchema = z
    .object({
        username: z.string().min(1, "Username is required").regex(/^[A-Za-z][A-Za-z0-9]*$/, "Username must start with a letter and contain no spaces"),
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password must be at least 6 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
        "confirmPassword": z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });
