import Footer from "@/components/layout/Footer";
import Logo from "@/components/Logo";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="page flex flex-col items-center justify-center gap-10">
        <Logo />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full flex flex-col items-center gap-10"
        >
          <input
            type="text"
            className="w-full rounded-full max-w-xl border-slate-300 hover:shadow-md"
          />
          <div className="flex items-center gap-10">
            <button className="btn bg-slate-50 text-black hover:bg-slate-100">
              Google Search
            </button>
            <button className="btn bg-slate-50 text-black hover:bg-slate-100">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Home;
