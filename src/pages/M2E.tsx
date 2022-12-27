import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import SubHeader from "../components/general/SubHeader";
import Hero from "../components/m2e/Hero";
import Beneficts from "../components/m2e/Beneficts";

const M2E: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="M2E" />
      <SubHeader />
      <Hero />
      <Beneficts />
    </Layout>
  );
};

export default M2E;
