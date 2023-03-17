import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import Hero from "../components/partners/Hero";
import Features from "../components/partners/Features";
import Steps from "../components/general/Steps";
import Contact from "../components/partners/Contact";
import CTA from "../components/general/CTA";

const Partners: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Parnters" />
      <Hero />
      <Features />
      <Steps
        applestore="https://apps.apple.com/ng/app/stabledoc-partner/id1602960789"
        playstore="https://play.google.com/store/apps/details?id=com.sdtapp.partnerapp"
      />
      <Contact />
      <CTA />
    </Layout>
  );
};
export default Partners;
