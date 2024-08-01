import React from "react";
import {
  User,
  BriefcaseBusiness,
  Star,
  LogIn,
} from "lucide-react";

export const menuItems = [
  {
    key: 1,
    title: "For Talents",
    icon: <User size={20} />,
    path: "/",
  },
  {
    key: 2,
    title: "Opportunities",
    icon: <BriefcaseBusiness size={20} />,
    path: "/opportunities",
  },
];

export const menuActions = [
  {
    key: 3,
    title: "Login",
    icon: <LogIn size={20} />,
    path: "/auth/login",
  },
  {
    key: 4,
    title: "Get Started",
    icon: <Star size={20} />,
    path: "/auth/register",
  },
];
