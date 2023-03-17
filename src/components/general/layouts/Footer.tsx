import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer: FC = () => {
  const mobileLinks = [
    {
      id: 1,
      header: "Solutions",
      link: [
        {
          linkTitle: "Premium health",
          url: "/solution/#Home-Health",
        },
        {
          linkTitle: "Cross border health",
          url: "/solution/#Abroad-Referral-&-Medical-Tourism",
        },
        {
          linkTitle: "Your health on a blockchain",
          url: "/solution/#Virtual-Reality-–-And-The-Metaverse-",
        },
      ],
    },
    {
      id: 2,
      header: "SDT",
      link: [
        {
          linkTitle: "Whitepaper",
          url: "/about",
        },
        {
          linkTitle: "Token Utility",
          url: "/about",
        },
        {
          linkTitle: "Smart contracts",
          url: "/about",
        },
        {
          linkTitle: "Staking and farming",
          url: "/about",
        },
      ],
    },
    {
      id: 3,
      header: "Support",
      link: [
        {
          linkTitle: "Tutorials and FAQs",
          url: "/support",
        },
        {
          linkTitle: "Contact us",
          url: "/support/#contact-us",
        },
        {
          linkTitle: "Social media links",
          url: "/support/#social-media",
        },
      ],
    },
    {
      id: 4,
      header: "Company",
      link: [
        {
          linkTitle: "About",
          url: "/company",
        },
        {
          linkTitle: "Team",
          url: "/company/#core-team",
        },
        {
          linkTitle: "Partners",
          url: "/partners",
        },
        {
          linkTitle: "Blog",
          url: "/blog",
        },
      ],
    },
  ];
  return (
    <footer className="bg-secondary-900">
      <div className="container pt-6 lg:pt-12 pb-8 px-5 sm:px-10 2xl:px-0 mx-auto">
        <div className="hidden sm:flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:justify-start lg:justify-center pb-10 text-center sm:text-left gap-y-10 sm:gap-14 lg:gap-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 sm:px-10 sm:hidden">
        {mobileLinks.map((data) => (
          <div
            key={data.id}
            className="hs-accordion-group py-0 w-full flex flex-col"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li className="hs-accordion" id="account-accordion">
                <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-lg text-slate-700 rounded-md text-white font-bold">
                  {data.header}
                  <svg
                    className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <svg
                    className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </a>

                <div
                  id="account-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                >
                  <ul className="pt-1 pl-1">
                    {data.link.map((item, index) => (
                      <li key={index}>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 text-white font-normal"
                          href={item.url}
                        >
                          {item.linkTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-start gap-10 h-full pl-3 pb-10">
          <div>
            <SocialIcons />
          </div>
          <div className="flex justify-start">
            <Link href="/">
              <figure>
                <div className="relative mx-0 mb-5 w-full">
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
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center container mx-auto">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-white text-center">
          Copyright © 2023 StableDoc. All Rights Reserved StableDoc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
