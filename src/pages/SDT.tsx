import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import SubHeader from "../components/general/SubHeader";
import Hero from "../components/sdt/Hero";
import Parnters from "../components/sdt/Partners";
import Beneficts from "../components/sdt/Beneficts";

const SDT: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="SDT Page" />
      <SubHeader />
      <Hero />
      <Parnters />
      <Beneficts />
    </Layout>
  );
};

export default SDT;
