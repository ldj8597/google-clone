import { useRouter } from "next/router";
import { AiOutlineSearch, AiOutlinePicture } from "react-icons/ai";
import clsx from "clsx";

export default function SearchSwitch() {
  const router = useRouter();
  const { term, searchType } = router.query;

  return (
    <div className="mt-5">
      <div className="w-full pl-24 border-b border-b-slate-300 flex items-center gap-10">
        <button
          disabled={searchType === ""}
          onClick={() =>
            router.push({
              pathname: "/search",
              query: {
                term,
                searchType: "",
              },
            })
          }
        >
          <div
            className={clsx("py-3 cursor-pointer flex items-center gap-1", {
              "border-b-4 border-blue-500 text-blue-500": searchType === "",
            })}
          >
            <AiOutlineSearch />
            <span className="text-sm">All</span>
          </div>
        </button>
        <button
          disabled={searchType === "image"}
          onClick={() =>
            router.push({
              pathname: "/search",
              query: {
                term,
                searchType: "image",
              },
            })
          }
        >
          <div
            className={clsx("py-3 cursor-pointer flex items-center gap-1", {
              "border-b-4 border-blue-500 text-blue-500":
                searchType === "image",
            })}
          >
            <AiOutlinePicture />
            <span className="text-sm">Images</span>
          </div>
        </button>
      </div>
    </div>
  );
}
