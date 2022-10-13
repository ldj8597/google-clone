import Footer from "@/components/layout/Footer";
import Logo from "@/components/Logo";
import { NextPageWithLayout } from "./_app";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import SearchFrom from "@/components/SearchForm";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="page flex flex-col items-center justify-center gap-10">
        <Logo />
        <SearchFrom />
      </div>
      <Footer />
    </>
  );
};

export default Home;
