import clsx from "clsx";
import LogoSmall from "../LogoSmall";
import SearchBar from "../SearchBar";
import SearchOptions from "../SearchOptions";
import User from "../User";

type SearchHeaderProps = {
  className?: string;
};

export default function SearchHeader({ className }: SearchHeaderProps) {
  return (
    <header className={clsx("z-10 bg-white  fixed w-screen pt-5", className)}>
      <div className="px-6 flex items-center justify-between gap-10 text-sm text-gray-700">
        <div className="flex-1 flex items-center gap-10">
          <LogoSmall />
          <SearchBar />
        </div>
        <div className="flex items-center gap-10">
          <User />
        </div>
      </div>
      <SearchOptions />
    </header>
  );
}
