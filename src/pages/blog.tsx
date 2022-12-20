import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/blog/Hero";
import Main from "../components/blog/Main";

const Blog: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Blog" />
      <Hero />
      <Main />
    </Layout>
  );
};
export default Blog;
