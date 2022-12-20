import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-gray-900 text-white ${inter.className}`}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
