import { TriangleAlert } from "lucide-react";
import { CardWrapper } from "./CardWrapper";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="w-5 h-5 text-destructive" />
      </div>
    </CardWrapper>
  );
}
