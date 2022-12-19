import { links } from "../constants";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home() {
  if (!links) notFound();
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <p className="">Brice Suazo&apos;s Link page</p>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.url} target="_blank">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
