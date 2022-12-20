import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 flex w-full p-2">
      <Link href="https://bricesuazo.com/" className="mx-auto rounded-full p-2">
        <Image
          src="/images/logo.png"
          alt="Brice Suazo's Logo"
          width={48}
          height={48}
        />
      </Link>
    </header>
  );
};

export default Header;
