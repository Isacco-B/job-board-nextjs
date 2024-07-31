"use client";

import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { FormError } from "../FormError";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRole;
}

export function RoleGate({ children, allowedRoles }: RoleGateProps) {
  const role = useCurrentRole();

  if (!allowedRoles.includes(role as UserRole)) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
}
