import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { atom, Provider } from "jotai";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};

export const searchTermAtom = atom("");

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout<{ session: Session | null }>) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <Provider>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
