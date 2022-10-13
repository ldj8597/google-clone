import clsx from "clsx";
import LogoSmall from "../LogoSmall";
import SearchBar from "../SearchBar";
import SearchSwitch from "../SearchSwitch";
import User from "../User";

type SearchHeaderProps = {
  className?: string;
};

export default function SearchHeader({ className }: SearchHeaderProps) {
  return (
    <header className={clsx("z-10 fixed w-screen bg-white py-5", className)}>
      <div className=" flex items-center justify-between gap-10 text-sm text-gray-700">
        <div className="flex-1 flex items-center gap-10">
          <LogoSmall />
          <SearchBar />
        </div>
        <div className="flex items-center gap-10">
          <User />
        </div>
      </div>
      <SearchSwitch />
    </header>
  );
}
