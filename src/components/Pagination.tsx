import clsx from "clsx";
import { useRouter } from "next/router";

type Props = {
  totalResults: number;
  currentIndex: number;
  nextIndex: number | null;
  previousIndex: number | null;
};

export default function Pagination({
  totalResults,
  currentIndex,
  nextIndex,
  previousIndex,
}: Props) {
  const router = useRouter();
  const { term, searchType, start } = router.query;

  const currentPage = Math.round(currentIndex / 10) + 1;
  const totalPages = Math.round(totalResults / 10) + 1;
  const pages: number[] = [];
  for (let i = 1; i < 11; i++) {
    const page = (Math.ceil(currentPage / 10) - 1) * 10 + i;
    if (page <= totalPages) {
      pages.push(page);
    }
  }

  return (
    <div className="py-3 flex items-center justify-center gap-5">
      {previousIndex && (
        <button
          onClick={() =>
            router.push({
              pathname: "/search",
              query: { term, searchType, start: previousIndex },
            })
          }
          className="text-blue-500"
        >
          Previous
        </button>
      )}
      <div className="flex items-center gap-2 text-sm">
        {pages.map((page) => (
          <button
            disabled={currentPage === page}
            onClick={() => {
              router.push({
                pathname: "/search",
                query: { term, searchType, start: (page - 1) * 10 + 1 },
              });
            }}
            className="text-blue-500 disabled:text-slate-700"
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
      {nextIndex && (
        <button
          onClick={() =>
            router.push({
              pathname: "/search",
              query: {
                term,
                searchType,
                start: nextIndex,
              },
            })
          }
          className="text-blue-500"
        >
          Next
        </button>
      )}
    </div>
  );
}
