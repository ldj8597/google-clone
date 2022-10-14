import LayoutWithSearch from "@/components/layout/LayoutWithSearch";
import Pagination from "@/components/Pagination";
import SearchItem from "@/components/SearchItem";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";

type SearchItem = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: object;
};

type SearchPageProps = {
  totalResults: number;
  searchTime: number;
  items: SearchItem[];
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
};

const SearchPage: NextPageWithLayout<SearchPageProps> = ({
  totalResults,
  searchTime,
  items,
  currentPage,
  previousPage,
  nextPage,
}) => {
  const router = useRouter();
  console.log({ currentPage, previousPage, nextPage });

  return (
    <div className="pt-36 px-4 md:px-8 xl:px-16 space-y-8">
      <div className="text-sm text-slate-700">
        About {totalResults} results ({searchTime} seconds)
      </div>
      <div className="max-w-2xl flex flex-col gap-10">
        {items.map((item) => (
          <SearchItem
            key={item.title}
            link={item.link}
            title={item.title}
            snippet={item.snippet}
          />
        ))}
      </div>
      <Pagination
        currentIndex={currentPage}
        nextIndex={nextPage}
        previousIndex={previousPage}
        totalResults={totalResults}
      />
    </div>
  );
};

SearchPage.getLayout = (page) => <LayoutWithSearch>{page}</LayoutWithSearch>;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { term, searchType, start } = query;
  const startIndex = start || "1";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${term}&start=${startIndex}`;
  console.log({ url });
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.queries.request);
  const totalResults = data.queries.request[0].totalResults;
  const searchTime = data.searchInformation.searchTime;
  const previousPage = data.queries.previousPage?.[0].startIndex;
  const nextPage = data.queries.nextPage?.[0].startIndex;
  const currentPage = data.queries.request[0].startIndex;
  return {
    props: {
      totalResults,
      searchTime,
      items: data.items,
      currentPage,
      previousPage: previousPage ?? null,
      nextPage: nextPage ?? null,
    },
  };
};

export default SearchPage;
