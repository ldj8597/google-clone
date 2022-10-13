import clsx from "clsx";
import User from "../User";

type ImageHeaderProps = {
  className?: string;
};

export default function ImageHeader({ className }: ImageHeaderProps) {
  return (
    <header
      className={clsx(
        "z-10 fixed w-screen bg-white py-5 flex items-center justify-end text-sm text-gray-700",
        className
      )}
    >
      <User />
    </header>
  );
}
