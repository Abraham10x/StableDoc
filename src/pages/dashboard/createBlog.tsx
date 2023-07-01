import type { NextPage } from "next";
import Seo from "../../components/general/Seo";
import Header from "../../components/dashboard/Header";
import CreateBlogForm from "../../components/dashboard/CreateBlogForm";

const createBlog: NextPage = () => {
  return (
    <div className="bg-dash-white h-full">
      <Seo templateTitle="Create Blog Post" />
      <Header />
      <CreateBlogForm />
    </div>
  );
};
export default createBlog;
