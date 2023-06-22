import type { NextPage } from "next";
import Seo from "../../components/general/Seo";
import Header from "../../components/dashboard/Header";
import ViewBlog from "../../components/dashboard/ViewBlog";

const blog: NextPage = () => {
  return (
    <>
      <Seo templateTitle="Blog Posts" />
      <Header />
      <ViewBlog />
    </>
  );
};
export default blog;
