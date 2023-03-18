import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/contact/Hero";
import Contact from "../components/partners/Contact";
import Social from "../components/support/Social";
import Main from "../components/contact/Main";

const Support: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Get In Touch" />
      <Hero />
      <Main />
      <Contact />
      <Social />
    </Layout>
  );
};
export default Support;
