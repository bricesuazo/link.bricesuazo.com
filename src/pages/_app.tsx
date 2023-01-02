import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
