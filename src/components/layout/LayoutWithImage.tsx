import Head from "next/head";
import { ReactNode } from "react";
import DefaultHeader from "./DefaultHeader";
import ImageHeader from "./ImageHeader";

export default function LayoutWithImage({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <ImageHeader className="px-6 mx-auto" />
      <main className="px-6 mx-auto">{children}</main>
    </>
  );
}
