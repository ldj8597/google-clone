import { useRouter } from "next/router";
import { ReactNode } from "react";
import clsx from "clsx";
import { IconType } from "react-icons";

type Props = {
  option: "" | "image";
  title: string;
  Icon: IconType;
};

export default function SearchOption({ option, title, Icon }: Props) {
  const router = useRouter();
  const { term, searchType } = router.query;

  return (
    <button
      disabled={searchType === option}
      onClick={() =>
        router.push({
          pathname: "/search",
          query: {
            term,
            searchType: option,
          },
        })
      }
    >
      <div
        className={clsx("py-3 cursor-pointer flex items-center gap-1", {
          "border-b-4 border-blue-500 text-blue-500": searchType === option,
        })}
      >
        {/* <AiOutlineSearch /> */}
        <Icon />
        <span className="text-sm">{title}</span>
      </div>
    </button>
  );
}
