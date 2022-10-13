import LayoutWithSearch from "@/components/layout/LayoutWithSearch";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { term, searchType } = router.query;

  console.log(router.query);

  return (
    <div className="pt-48">
      <p>Search: {term}</p>
      <p>Type: {searchType ? searchType : "All"}</p>
    </div>
  );
};

SearchPage.getLayout = (page) => <LayoutWithSearch>{page}</LayoutWithSearch>;

export default SearchPage;
