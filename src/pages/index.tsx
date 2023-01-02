import { links } from "../constants";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center gap-y-2 text-base">
        <div className="max-w-screen-sm">
          <p className="text-center text-base font-semibold">Links</p>
          <ul className="flex flex-wrap justify-center gap-2">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
