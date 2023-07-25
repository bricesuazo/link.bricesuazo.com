"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 flex w-full flex-col items-center p-2">
      <Link
        href="https://bricesuazo.com/"
        className="mx-auto flex flex-col items-center rounded-full p-2"
      >
        <Image
          src="/images/logo-light.png"
          alt="Brice Suazo's Logo"
          width={48}
          height={48}
          className="invert dark:invert-0"
          priority
        />
        <h5 className="font-bold">Brice Suazo</h5>
        <p className="text-xs">Link Page</p>
      </Link>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer select-none rounded-full border border-transparent p-2 transition-colors hover:border-gray-500"
      >
        <FaSun className="dark:block hidden" />
        <FaMoon className="dark:hidden block" />
      </div>
    </header>
  );
}
