import Logo from "@/components/Logo";
import { NextPageWithLayout } from "./_app";
import SearchFrom from "@/components/SearchForm";
import LayoutWithFooter from "@/components/layout/LayoutWithFooter";
import LayoutWithImage from "@/components/layout/LayoutWithImage";
import LogoImage from "@/components/LogoImage";

const ImagePage: NextPageWithLayout = () => {
  return (
    <div className="page flex flex-col items-center justify-center gap-10">
      <LogoImage />
      <SearchFrom searchType="image" />
    </div>
  );
};

ImagePage.getLayout = (page) => <LayoutWithImage>{page}</LayoutWithImage>;

export default ImagePage;
