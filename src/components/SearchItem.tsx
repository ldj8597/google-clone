import Link from "next/link";

type Props = {
  title: string;
  link: string;
  snippet: string;
};

export default function SearchItem({ title, link, snippet }: Props) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="text-sm">
        {link}
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        <p className="text-xl text-blue-500 cursor-pointer hover:underline hover:underline-offset-1">
          {title}
        </p>
      </a>
      <p>{snippet}</p>
    </div>
  );
}
