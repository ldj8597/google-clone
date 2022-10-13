export default function Footer() {
  return (
    <div className="fixed w-screen bottom-0 left-0 py-5 ">
      <p className="text-sm text-center text-slate-600">
        Copyright &#169; {new Date().getFullYear()} Lark Ascending
      </p>
    </div>
  );
}
