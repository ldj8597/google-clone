import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWithFooter({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <Header className="px-6 mx-auto" />
      <main className="px-6 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
