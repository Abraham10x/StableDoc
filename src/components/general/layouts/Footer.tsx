import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer: FC = () => {
  return (
    <footer className="bg-secondary-900">
      <div className="container pt-12 pb-8 sm:px-10 2xl:px-0 mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:justify-start lg:justify-center pb-10 text-center sm:text-left gap-y-10 sm:gap-14 lg:gap-10">
          <div className="basis-full sm:basis-[25%] lg:basis-[20%]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <SocialIcons />
              </div>
              <Link href="/">
                <figure>
                  <div className="relative mx-auto sm:mx-0 mb-5 w-full">
                    <Image
                      className="mx-auto sm:mx-0"
                      src="/img/brand-logo-white.svg"
                      alt="company logo"
                      width={150}
                      height={150}
                    />
                  </div>
                </figure>
              </Link>
            </div>
          </div>
          <FooterLinks
            header="Solutions"
            data={[
              { url: "/about", linkText: "Premium health" },
              { url: "/careers", linkText: "Cross border health" },
              { url: "/faqs", linkText: "Your health on a blockchain" },
            ]}
          />
          <FooterLinks
            header="SDT"
            data={[
              { url: "/about/#core-values", linkText: "Whitepaper" },
              { url: "/about/#core-team", linkText: "Token Utility" },
              { url: "/#our-products", linkText: "Smart contracts" },
              {
                url: "/careers/#open-postions",
                linkText: "Staking and farming",
              },
            ]}
          />
          <FooterLinks
            header="Support"
            data={[
              { url: "/product/school", linkText: "Tutorials and FAQs" },
              {
                url: "/product/corebanking",
                linkText: "Contact us",
              },
              { url: "/product/plux", linkText: "Social media links" },
            ]}
          />
          <FooterLinks
            header="Company"
            data={[
              { url: "/product/school", linkText: "About" },
              {
                url: "/product/corebanking",
                linkText: "Team",
              },
              { url: "/product/plux", linkText: "Partners" },
              { url: "/product/plux", linkText: "Blog" },
            ]}
          />
        </div>
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center container mx-auto">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-white text-center">
          Copyright © 2022 StableDoc. All Rights Reserved StableDoc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
