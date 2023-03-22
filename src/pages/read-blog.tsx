import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/post/Hero";
import CTA from "../components/general/CTA";
import Main from "../components/post/Main";

const Blog: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Full Read" />
      <Hero />
      <Main />
      <CTA />
    </Layout>
  );
};
export default Blog;
