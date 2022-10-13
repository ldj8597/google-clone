import Image from "next/future/image";

export default function LogoSmall() {
  return (
    <Image
      src="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt="google logo"
      width={272}
      height={92}
      priority
      className="w-28 h-10 object-contain"
    />
  );
}
