import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Head from "next/head";

import { ToastProvider } from "~/components/ui/toast";
import { queryClient } from "~/lib/query-client";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Inxo | Productivity App</title>
      </Head>
      <ClerkProvider {...pageProps}>
        <div className={raleway.className}>
          <QueryClientProvider client={queryClient}>
            <ToastProvider swipeDirection="right">
              <Component {...pageProps} />
            </ToastProvider>
          </QueryClientProvider>
        </div>
      </ClerkProvider>
    </>
  );
}
