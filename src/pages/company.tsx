import type { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/company/Hero";
import Mission from "../components/company/Mission";
import CoreTeam from "../components/company/CoreTeam";
import Parnter from "../components/company/Partner";
import Blog from "../components/company/Blog";
import AdvisvoryTeam from "../components/company/AdvisoryTeam";

const Company: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Company" />
      <Hero />
      <Mission />
      <CoreTeam />
      <AdvisvoryTeam />
      {/* <Parnter /> */}
      <Blog />
    </Layout>
  );
};
export default Company;
