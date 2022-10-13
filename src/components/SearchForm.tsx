import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";

export default function SearchFrom() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full flex flex-col items-center gap-10"
    >
      <div className="w-full max-w-xl flex justify-center relative">
        <input
          type="text"
          className="px-10 w-full rounded-full border-slate-300 hover:shadow-md focus:ring-0 focus:border-slate-300 focus:shadow-md"
        />
        <AiOutlineSearch className="w-5 h-5 text-slate-500 absolute left-2 top-1/2 -translate-y-1/2" />
        <BsMicFill className="w-5 h-5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2" />
      </div>
      <div className="flex items-center gap-10">
        <button className="btn bg-slate-50 text-black hover:bg-slate-100 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-slate-300">
          Google Search
        </button>
        <button className="btn bg-slate-50 text-black hover:bg-slate-100 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-slate-300">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
