import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Brice Suazo",
  description: "Brice Suazo's Link Page",
  authors: {
    name: "Brice Suazo",
    url: "https://bricesuazo.com",
  },
  viewport: {
    initialScale: 1,
  },
};

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.className}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
