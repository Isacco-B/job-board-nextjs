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
import { NewPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/auth/new-password";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export function NewPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [showPassowrd, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    setError("");
    startTransition(() =>
      newPassword(values, token).then((res) => {
        if (res.success) {
          toast.success(res.success);
          form.reset();
          setTimeout(() => router.push("/auth/login"), 2000);
        }
        setError(res.error);
      }).catch(() => {
        setError("Something went wrong");
      })
    );
  }

  return (
    <CardWrapper
      headerLabel="Enter new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                <FormLabel>Confirm password</FormLabel>
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
          <FormError message={error} />
          <Button type="submit" className="w-full font-bold" disabled={isPending}>
            Change password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
