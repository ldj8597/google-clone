import Head from "next/head";
import { ReactNode } from "react";
import DefaultHeader from "./DefaultHeader";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <DefaultHeader className="px-6 mx-auto" />
      <main className="px-6 mx-auto">{children}</main>
    </>
  );
}
