import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import Hero from "../components/telehealth/Hero";

const Telehealth: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Tele-health" />
      <Hero />
    </Layout>
  );
};
export default Telehealth;
