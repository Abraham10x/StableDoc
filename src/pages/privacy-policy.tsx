import type { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/privacy/Hero";
import CTA from "../components/general/CTA";
import Main from "../components/privacy/Main";

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Privacy Policy" />
      <Hero />
      <Main />
      <CTA />
    </Layout>
  );
};
export default PrivacyPolicy;
