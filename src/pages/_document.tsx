import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="transition-colors">
      <Head />
      <title>Links - Brice Suazo</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Brice Suazo's Link Page" />
      <link rel="icon" href="/images/favicon.png" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
