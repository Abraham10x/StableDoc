import type { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import CTA from "../components/general/CTA";
import Hero from "../components/terms/Hero";
import Main from "../components/terms/Main";

const TermsCondition: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Terms & Condition" />
      <Hero />
      <Main />
      <CTA />
    </Layout>
  );
};
export default TermsCondition;
