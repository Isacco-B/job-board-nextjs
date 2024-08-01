import Image from "next/image";
import Link from "next/link";
import { ButtonWithBorder } from "./ui/moving-border";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { menuActions, menuItems } from "@/constants";

function MobileNavbar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full">
          <div>
            <SheetHeader>
              <SheetTitle>
                <SheetClose asChild>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  </Link>
                </SheetClose>
              </SheetTitle>
              <SheetDescription>Find your next job</SheetDescription>
            </SheetHeader>
            <nav className="mt-8">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.key}>
                    <Link
                      href={item.path}
                      className="flex flex-row items-center text-gray-600 hover:bg-primary/10 hover:text-primary p-2 rounded-lg space-x-6"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </nav>
          </div>
          <div>
            <SheetFooter>
              <nav>
                <div className="flex flex-col gap-1">
                  {menuActions.map((item) => (
                    <SheetClose asChild key={item.key}>
                      <Link
                        key={item.key}
                        href={item.path}
                        className="flex flex-row items-center text-gray-600 hover:bg-primary/10 hover:text-primary p-2 rounded-lg space-x-6"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center md:px-12 px-4 pt-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </Link>
      <nav className="hidden lg:flex">
        <div className="flex flex-row items-center gap-12">
          {menuItems.map((item) => (
            <Link key={item.key} href={item.path} className="hover:opacity-75">
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className="hidden lg:flex flex-row items-center gap-8">
        <Link href="/auth/login" className="hover:opacity-75">
          Login
        </Link>
        <Link href="/auth/register" className="hover:opacity-75">
          <ButtonWithBorder
            borderRadius="0.5rem"
            className="bg-white text-black border-neutral-200"
          >
            Get Started
          </ButtonWithBorder>
        </Link>
      </div>
      <div className="lg:hidden">
        <MobileNavbar>
          <Menu className="h-8 w-8 cursor-pointer hover:scale-105 hover:-rotate-12 transition-all duration-300" />
        </MobileNavbar>
      </div>
    </header>
  );
}
