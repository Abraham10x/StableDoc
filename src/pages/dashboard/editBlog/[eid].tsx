import type { NextPage } from "next";
import Seo from "../../../components/general/Seo";
import Header from "../../../components/dashboard/Header";

const editBlog: NextPage = () => {
  return (
    <div className="bg-dash-white h-full">
      <Seo templateTitle="Edit Blog Post" />
      <Header />
    </div>
  );
};
export default editBlog;
