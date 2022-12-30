import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import SubHeader from "../components/general/SubHeader";
import Hero from "../components/sdt/Hero";
import Parnters from "../components/sdt/Partners";
import Beneficts from "../components/sdt/Beneficts";
import Utility from "../components/sdt/Utility";
import Statistics from "../components/sdt/Statistics";
import CTA from "../components/general/CTA";
import Crypto from "../components/sdt/Crypto";
import Timeline from "../components/sdt/Timeline";

const SDT: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="SDT Page" />
      <SubHeader />
      <Hero />
      <Parnters />
      <Beneficts />
      <Utility />
      <Statistics />
      <Timeline />
      <Crypto />
      <CTA />
    </Layout>
  );
};

export default SDT;
