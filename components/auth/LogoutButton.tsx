"use client";

import { logout } from "@/actions/auth/logout";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export function LogoutButton({children}: LogoutButtonProps) {
  const onClick = () => {
    logout()
  }
  return (
    <span onClick={onClick} className="corsor-pointer">{children}</span>
  )
}
