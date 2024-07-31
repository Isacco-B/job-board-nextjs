"use client";

import { Loader } from "lucide-react";
import { CardWrapper } from "./CardWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/auth/new-verification";
import { FormSuccess } from "../FormSuccess";
import { FormError } from "../FormError";
import { toast } from "sonner";

export function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }
    newVerification(token)
      .then((res) => {
        if (res.success) {
          toast.success(res.success);
          setTimeout(() => router.push("/auth/login"), 2000);
        }
        setError(res.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification email"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex flex-col items-center justify-center w-full space-y-4">
        {!success && !error && <Loader className="w-5 h-5 animate-spin" />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
}
