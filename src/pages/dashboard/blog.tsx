import type { NextPage } from "next";
import Seo from "../../components/general/Seo";
import Header from "../../components/dashboard/Header";
import ViewBlog from "../../components/dashboard/ViewBlog";

const blog: NextPage = () => {
  return (
    <div className="bg-dash-white h-full">
      <Seo templateTitle="Blog Posts" />
      <Header />
      <ViewBlog />
    </div>
  );
};
export default blog;
