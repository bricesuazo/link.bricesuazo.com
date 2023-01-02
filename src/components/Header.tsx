import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 flex w-full flex-col items-center p-2">
      <Link
        href="https://bricesuazo.com/"
        className="mx-auto flex flex-col items-center rounded-full p-2"
      >
        <Image
          src={`/images/logo-light.png`}
          alt="Brice Suazo's Logo"
          width={48}
          height={48}
          className="hidden dark:block"
          priority
        />
        <Image
          src={`/images/logo-dark.png`}
          alt="Brice Suazo's Logo"
          width={48}
          height={48}
          className="block dark:hidden"
          priority
        />
        <h5 className="font-bold">Brice Suazo</h5>
        <p className="text-xs">Link Page</p>
      </Link>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer select-none rounded-full border border-transparent p-2 transition-colors hover:border-gray-500"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>
    </header>
  );
};

export default Header;
