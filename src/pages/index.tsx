import Logo from "@/components/Logo";
import { NextPageWithLayout } from "./_app";
import SearchFrom from "@/components/SearchForm";
import LayoutWithFooter from "@/components/layout/LayoutWithFooter";

const Home: NextPageWithLayout = () => {
  return (
    <div className="page flex flex-col items-center justify-center gap-10">
      <Logo />
      <SearchFrom />
    </div>
  );
};

Home.getLayout = (page) => <LayoutWithFooter>{page}</LayoutWithFooter>;

export default Home;
