import { useRouter } from "next/router";
import { AiOutlineSearch, AiOutlinePicture } from "react-icons/ai";
import SearchOption from "./SearchOption";

export default function SearchOptions() {
  return (
    <div className="mt-5">
      <div className="w-full px-4 md:px-8 xl:px-16 border-b border-b-slate-300 flex items-center gap-10">
        <SearchOption option="" title="All" Icon={AiOutlineSearch} />
        <SearchOption option="image" title="Images" Icon={AiOutlinePicture} />
      </div>
    </div>
  );
}
