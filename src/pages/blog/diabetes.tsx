import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import CTA from "../../components/general/CTA";
import Hero from "../../components/post-2/Hero";
import Main from "../../components/post-2/Main";

const Diabetes: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Full Read" />
      <Hero />
      <Main />
      <CTA />
    </Layout>
  );
};
export default Diabetes;
