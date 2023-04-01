import Seo from "../components/general/Seo";
import { Layout } from "../layouts/default";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/Hero";
import MobileApp from "../components/home/MobileApp";
import Beneficts from "../components/home/Beneficts";
import Download from "../components/home/Download";
import Blog from "../components/company/Blog";
import Testimonial from "../components/home/Testimonial";
import FAQs from "../components/home/FAQs";
import CTA from "../components/general/CTA";

export default function Home() {
  return (
    <Layout>
      <Seo templateTitle="Home" />
      <div className="my-[4rem]"></div>
      <Hero />
      <MobileApp />
      <Beneficts />
      <Download />
      <div className="bg-mobile-benefit sm:bg-beneficts-bg bg-cover bg-no-repeat pt-20 sm:pt-20 lg:pt-16 xl:pt-36 2xl:pt-56 pb-6">
        <Blog />
      </div>
      <Testimonial />
      <FAQs />
      <CTA />
    </Layout>
  );
}
