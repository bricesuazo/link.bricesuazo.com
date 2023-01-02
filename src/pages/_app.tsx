import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>Links - Brice Suazo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Brice Suazo's Link Page" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={`${inter.className}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
