import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PageNotFoundLayout = ({ children }: { children: string }) => {
  return (
    <div
      className={`${inter.className} flex h-screen flex-col items-center justify-center bg-gray-900 text-white`}
    >
      <h1 className="text-2xl font-bold">404 Page Not Found :/</h1>
      <p>{children}</p>
    </div>
  );
};

export default PageNotFoundLayout;
