import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Inxo | Productivity App</title>
      </Head>
      <ClerkProvider {...pageProps}>
        <div className={raleway.className}>
          <Component {...pageProps} />
        </div>
      </ClerkProvider>
    </>
  );
}
