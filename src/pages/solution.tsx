import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import Hero from "../components/solution/Hero";
import Services from "../components/solution/Services";

const Solutions: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Solution" />
      <Hero />
      <Services />
    </Layout>
  );
};
export default Solutions;
