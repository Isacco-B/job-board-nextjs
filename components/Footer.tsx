import { Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="p-2 space-y-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <Link href="/privacy" className="hover:underline">
          Privacy Policies
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <a
          href="https://github.com/withastro/astro"
          target="_blank"
          className="bg-primary rounded-full p-2 hover:opacity-90"
        >
          <Linkedin size={18} className="text-white" />
        </a>
        <a
          href="https://github.com/withastro/astro"
          target="_blank"
          className="bg-primary rounded-full p-2 hover:opacity-90"
        >
          <Github size={18} className="text-white" />
        </a>
        <a
          href="https://github.com/withastro/astro"
          target="_blank"
          className="bg-primary rounded-full p-2 hover:opacity-90"
        >
          <Globe size={18} className="text-white" />
        </a>
      </div>
    </div>
  );
}
