import { NextPage } from "next";
import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import Hero from "../components/telehealth/Hero";
import Features from "../components/telehealth/Features";
import CTA from "../components/general/CTA";
import PatientSteps from "../components/general/PatientSteps";

const Telehealth: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Tele-health" />
      <Hero />
      <Features />
      <PatientSteps
        applestore="https://apps.apple.com/ng/app/stabledoc/id1602960544"
        playstore="https://play.google.com/store/apps/details?id=com.sdtapp.customer"
        subtitle="You do not need to be a tech guru in order to earn passive income with StableDoc partner app. All you need to do is to download, register, sign up and start earning."
      />
      <CTA />
    </Layout>
  );
};
export default Telehealth;
