import clsx from "clsx";
import Link from "next/link";
import User from "../User";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={clsx(
        "z-10 fixed w-screen bg-white py-5 flex items-center justify-between text-sm text-gray-700",
        className
      )}
    >
      <div className="flex items-center gap-10">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex items-center gap-10">
        <p className="link">Gmail</p>
        <Link href="/image">
          <p className="link">Images</p>
        </Link>
        <User />
      </div>
    </header>
  );
}
