import { NextPage } from "next";
import { Layout } from "../layouts/default";
import Seo from "../components/general/Seo";
import Hero from "../components/m2e/Hero";
import Beneficts from "../components/m2e/Beneficts";
import Features from "../components/m2e/Feature";
import Token from "../components/m2e/Token";
import Statistics from "../components/m2e/Statistics";
import ProviderSteps from "../components/general/ProviderSteps";
import CTA from "../components/general/CTA";

const M2E: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Move2Earn" />
      <div className="my-[6rem]"></div>
      <Hero />
      <Beneficts />
      <Features />
      <Token />
      <Statistics />
      <ProviderSteps
        subtitle="You don’t need any prior Crypto knowledge to begin to earn Crypto
              on StableFit app. All you need to do is to download, register and
              start earning"
        applestore=""
        playstore=""
      />
      <CTA />
    </Layout>
  );
};

export default M2E;
