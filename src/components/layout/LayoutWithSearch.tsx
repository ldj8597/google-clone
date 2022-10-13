import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import SearchHeader from "./SearchHeader";

export default function LayoutWithSearch({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <SearchHeader className="px-6 mx-auto" />
      <main className="px-6 mx-auto">{children}</main>
    </>
  );
}
