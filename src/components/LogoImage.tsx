import Image from "next/future/image";

export default function LogoImage() {
  return (
    <div className="relative">
      <Image
        src="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google logo"
        width={272}
        height={92}
        priority
      />
      <p className="absolute bottom-0 right-1 text-lg font-semibold text-blue-500">
        Image
      </p>
    </div>
  );
}
