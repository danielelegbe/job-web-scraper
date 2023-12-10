import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1, "Required"),
});

export const RegisterSchema = z
  .object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    email: z.string().email().min(1),
    confirmPassword: z.string(),
    password: z
      .string()
      .min(1, "Required")
      .min(6, "Must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type LoginModel = z.infer<typeof LoginSchema>;
export type RegisterModel = z.infer<typeof RegisterSchema>;
