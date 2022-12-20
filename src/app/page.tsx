import { links } from "../constants";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home() {
  if (!links) notFound();
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-2 ">
      <p className="text-2xl font-bold">Brice Suazo&apos;s Link Page</p>
      <ul className="flex flex-col items-center gap-y-1">
        {links.map((link, index) => {
          const Icon = links[index].icon;
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                target="_blank"
                className="flex w-fit items-center gap-x-2 rounded-md border border-gray-500 border-opacity-0 px-4 py-2 hover:border-opacity-100"
              >
                <Icon />
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
