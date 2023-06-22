import type { NextPage } from "next";
import Seo from "../../../components/general/Seo";
import Header from "../../../components/dashboard/Header";
import EditBlogForm from "../../../components/dashboard/EditBlogForm";

const editBlog: NextPage = () => {
  return (
    <div className="bg-dash-white h-full">
      <Seo templateTitle="Edit Blog Post" />
      <Header />
      <EditBlogForm />
    </div>
  );
};
export default editBlog;
