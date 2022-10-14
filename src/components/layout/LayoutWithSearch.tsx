import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import DefaultHeader from "./DefaultHeader";
import SearchHeader from "./SearchHeader";

export default function LayoutWithSearch({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const { term } = router.query;

  return (
    <>
      <Head>
        <title>{`${term} - Search page`}</title>
      </Head>
      <SearchHeader className="mx-auto" />
      <main className="px-6 mx-auto">{children}</main>
    </>
  );
}
