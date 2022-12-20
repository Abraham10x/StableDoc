import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/support/Hero";
import Guides from "../components/support/Guides";
import Contact from "../components/support/Contact";
import Social from "../components/support/Social";

const Support: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Support" />
      <Hero />
      <Guides />
      <Contact />
      <Social />
    </Layout>
  );
};
export default Support;
