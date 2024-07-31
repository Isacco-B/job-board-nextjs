import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center">
      <Image src="/logo.png" alt="logo" width={200} height={50} />
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/">For Talents</Link>
          </li>
          <li>
            <Link href="/">For Companies</Link>
          </li>
          <li>
            <Link href="/">Opportunities</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-4">
        <Button variant="default">Login</Button>
        <Button variant="outline">Register</Button>
      </div>
    </header>
  );
}
