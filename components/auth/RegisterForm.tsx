"use client";

import { CardWrapper } from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { useState, useTransition } from "react";
import { register } from "@/actions/auth/register";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation'
import { toast } from "sonner";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [showPassowrd, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>("");

  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setError("");
    startTransition(() =>
      register(values).then((res) => {
        if (res.success) {
          toast.success(res.success);
          form.reset();
          setTimeout(() => router.push("/auth/login"), 2000);
        }
        setError(res.error);
      })
    );
  }

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="********"
                        type={showPassowrd ? "text" : "password"}
                        disabled={isPending}
                      />
                      {showPassowrd ? (
                        <EyeOff
                          className="w-5 h-5 absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={() => setShowPassword(!showPassowrd)}
                        />
                      ) : (
                        <Eye
                          className="w-5 h-5 absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={() => setShowPassword(!showPassowrd)}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="********"
                      type={showPassowrd ? "text" : "password"}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <Button type="submit" className="w-full font-bold" disabled={isPending}>
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
