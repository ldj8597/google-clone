import { searchTermAtom } from "@/pages/_app";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { useAtom } from "jotai";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!searchTerm) return;
        router.push({
          pathname: "/search",
          query: { term: searchTerm, searchType: "" },
        });
      }}
      className="w-full flex-1 max-w-2xl"
    >
      <div className="w-full flex justify-center relative">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="pl-5 pr-24 w-full rounded-full border-slate-300 hover:shadow-md focus:ring-0 focus:border-slate-300 focus:shadow-md"
        />
        <div className="absolute w-px h-3/5 right-20 top-1/2 -translate-y-1/2 bg-slate-400" />
        <button type="submit">
          <AiOutlineSearch className="w-5 h-5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2" />
        </button>
        <BsMicFill className="w-5 h-5 text-slate-500 absolute right-12 top-1/2 -translate-y-1/2" />
      </div>
    </form>
  );
}
