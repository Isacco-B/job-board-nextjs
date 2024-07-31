import * as z from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Email is required" })
      .min(4, { message: "Minimum 4 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Minimum 8 characters" })
      .max(24, { message: "Maximum 24 characters" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const ResetSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
});

export const NewPasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Minimum 8 characters" })
      .max(24, { message: "Maximum 24 characters" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export const ResumeSchema = z.object({
  userId: z.string().min(1, { message: "User ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  image: z.string().url({ message: "Invalid image URL" }).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.date({ message: "Invalid date format" }).optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  cap: z.number().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  summary: z.string().optional(),
});


export const EducationSchema = z.object({
  resumeId: z.string().min(1, { message: "Resume ID is required" }),
  university: z.string().optional(),
  city: z.string().optional(),
  degree: z.string().optional(),
  educationDetail: z.string().optional(),
  description: z.string().optional(),
});


export const ExperienceSchema = z.object({
  resumeId: z.string().min(1, { message: "Resume ID is required" }),
  job: z.string().optional(),
  company: z.string().optional(),
  city: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
});


export const SkillSchema = z.object({
  resumeId: z.string().min(1, { message: "Resume ID is required" }),
  name: z.string().optional(),
  rating: z.string().optional(),
});
