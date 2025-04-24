import * as z from "zod";

export const formSchema = z
    .object({
        username: z.string().min(1, "Username is required"),
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        "confirm-password": z.string(),
    })
    .refine((data) => data.password === data["confirmPassword"], {
        path: ["confirm-password"],
        message: "Passwords do not match",
    });
